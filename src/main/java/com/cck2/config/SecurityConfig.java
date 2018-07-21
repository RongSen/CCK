package com.cck2.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.builders.WebSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;

/**
 * Created by Administrator on 2018/7/20 0020.
 * 本类的作用：
 * 要求验证所有请求应予的URL
 * 产生一个登陆表单界面
 * 只允许使用类中指定的user和password进行登陆才验证通过
 * 运行用户登出（使用post方便访问“/logout”URL
 */
@Configuration
@EnableWebSecurity
public class SecurityConfig extends WebSecurityConfigurerAdapter{

    //https://www.cnblogs.com/woncode/p/7191543.html
    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http
            .authorizeRequests()
                .antMatchers("/resources/**")
                .permitAll()
                .anyRequest().authenticated()
                .and()
            .formLogin()
                .loginPage("/admin/login")
                .permitAll()
                .and()
            .logout().permitAll();
    }
}
