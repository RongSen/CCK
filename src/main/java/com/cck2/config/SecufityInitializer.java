package com.cck2.config;

import org.springframework.security.web.context.AbstractSecurityWebApplicationInitializer;

public class SecufityInitializer extends AbstractSecurityWebApplicationInitializer {

    /**
     * 启用会话并发控制
     * @return
     */
    @Override
    protected boolean enableHttpSessionEventPublisher() {
        return true;
    }
}
