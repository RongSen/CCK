package com.cck2.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.builders.WebSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.annotation.web.servlet.configuration.EnableWebMvcSecurity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

import javax.inject.Inject;
import javax.sql.DataSource;

@Configuration
@EnableWebMvcSecurity
public class SecurityConfig extends WebSecurityConfigurerAdapter {

    @Inject
    DataSource dataSource;

    @Override
    protected void configure(AuthenticationManagerBuilder auth) throws Exception {
        //使用内存进行管理数据并验证
        /*auth.inMemoryAuthentication()
                .passwordEncoder(new BCryptPasswordEncoder())
                .withUser("john")
                .password(new BCryptPasswordEncoder().encode("aa"))
                .authorities("USER")
                .and()
                .withUser("Margaret")
                .password(new BCryptPasswordEncoder().encode("green"))
                .authorities("USER","ADMIN");*/

        //使用数据库数据进行管理和验证
        auth.jdbcAuthentication()
                .dataSource(this.dataSource)
                .usersByUsernameQuery("select userName,password,isEnabled from sys_user where userName = ?")
                .authoritiesByUsernameQuery("select userName,permission from sys_user_permission where userName=?")
                .passwordEncoder(new BCryptPasswordEncoder());
    }

    @Override
    public void configure(WebSecurity web) throws Exception {

        web.ignoring().antMatchers("/resources/**");
    }

    @Override
    protected void configure(HttpSecurity http) throws Exception {

        http
                .authorizeRequests()
                    .antMatchers("/signup","/about","policies").permitAll()
                    .antMatchers("/secure/**").hasAuthority("USER")
                    .antMatchers("/admin/**").hasAuthority("ADMIN")
                    .anyRequest().authenticated()
                .and().formLogin()
                    .loginPage("/admin/login").failureUrl("/admin/error")
                    .defaultSuccessUrl("/admin/console")
                    .usernameParameter("username")
                    .passwordParameter("password")
                    .permitAll()
                .and().logout()
                    .logoutUrl("/admin/logout").logoutSuccessUrl("/admin/login?logout")
                    .invalidateHttpSession(true).deleteCookies("JSESSIONID")
                    .permitAll()
                .and().sessionManagement()
                    .sessionFixation().changeSessionId()  // 防止会话固定攻击，changeSessionId()、newSession():创建新的会话，但不会复制现有的会话特性、migrateSession()：将创建新的会话并复制所有现有的特性、none()：禁用会话固定攻击保护
                    .maximumSessions(1) //限制用户同时使用的会话数量
                        .expiredUrl("/login?maxSessions")   //当达到最大限制数量时的行为，默认行为是使现有的会话过期，expireUrl("")：重定向至指定页面，maxSessionsPreventsLogin(true)：超过限制数量后阻止再次登录，并返回一个未授权的响应而保持原有会话不变
                .and().and().csrf().disable();    //禁用跨站请求伪造（CSRF）保护，默认Java配置中是启用的

    }
}