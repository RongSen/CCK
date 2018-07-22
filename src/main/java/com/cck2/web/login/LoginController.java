package com.cck2.web.login;

import javax.servlet.http.HttpSession;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.cck2.web.sys.user.User;

@Controller
@RequestMapping
public class LoginController {
	
	@RequestMapping(value= {"/admin/login"}, method=RequestMethod.GET)
	public String getLoginForm() {
		
		return "login";
	}

	@RequestMapping(value= {"/admin/login"}, method=RequestMethod.POST)
	public String login(@ModelAttribute User user, HttpSession httpSession) {

		return "console";
	}
}
