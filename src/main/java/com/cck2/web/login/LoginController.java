package com.cck2.web.login;

import javax.servlet.http.HttpSession;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.cck2.web.sys.user.User;

@Controller
@RequestMapping(value= {"/admin/login"})
public class LoginController {
	
	@RequestMapping(method=RequestMethod.GET)
	public String getLoginForm() {
		
		return "login";
	}

	@RequestMapping(method=RequestMethod.POST)
	public String login(@ModelAttribute User user, HttpSession httpSession) {
		System.out.println(user.getLoginName());
		return "console";
	}
}
