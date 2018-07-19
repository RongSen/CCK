package com.cck2.web.login;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

@Controller
@RequestMapping(value= {"/admin/login"})
public class LoginController {
	
	@RequestMapping(method=RequestMethod.GET)
	public String getLoginForm() {
		
		return "login";
	}

	@RequestMapping(method=RequestMethod.POST)
	public String login() {
		
		return "console";
	}
}
