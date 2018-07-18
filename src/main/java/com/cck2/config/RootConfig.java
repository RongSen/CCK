package com.cck2.config;

import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.ComponentScan.Filter;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.FilterType;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;

@Configuration
//@ComponentScan("包路径"|basePackages={包路径数组}):会自动扫描包路径下的所有带@Controller、@Service、@Repository、@Component的类
/*
 * @ComponentScan中的属性
 * basePackages = {}:
 * useDefaultFilters = true:设置过滤规则是否开启，默认是开启的
 * includeFilters = @Filter(type=FilterType.ANNOTATION, classes={}):指定包含扫描的内容
 * excludeFilters = @Filter(type=FilterType.ANNOTATION, classes={}):指定不包含的内容
 * @Filter(type=扫描的规则, classes={指定的扫描的规则类})：指定过滤规则
 * FilterType.ANNOTATION、FilterType.ASSIGNABLE_TYPE、FilterType.ASPECTJ、FilterType.CUSTOM
 */
@ComponentScan(basePackages= {"com"},
	excludeFilters= {@Filter(type=FilterType.ANNOTATION, value=EnableWebMvc.class)})
public class RootConfig {

}
