package com.cck2.config;

import org.springframework.web.servlet.support.AbstractAnnotationConfigDispatcherServletInitializer;

public class CckWebAppInitializer extends AbstractAnnotationConfigDispatcherServletInitializer {

	//用于定义ContextLocationListener应用上下文中的bean,返还带有@Configuration注解的类
	@Override
	protected Class<?>[] getRootConfigClasses() {
		
		return new Class<?>[] {RootConfig.class, SecurityConfig.class};
	}

	//用于定义DispatherServlet应用上下文中的bean,返还带有@Configuration注解的类
	@Override
	protected Class<?>[] getServletConfigClasses() {
		
		return new Class<?>[] {WebConfig.class};
	}

	//将指定路径（一个或多个）映射到DispatcherServlet中
	@Override
	protected String[] getServletMappings() {
		
		return new String[] {"/"};
	}
}
