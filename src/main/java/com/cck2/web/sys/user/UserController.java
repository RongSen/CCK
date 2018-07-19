package com.cck2.web.sys.user;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

@Controller
@RequestMapping("/admin/user")
public class UserController {

	@RequestMapping(method=RequestMethod.GET)
	public String getUserList() {
		
		return "userManagement";
	}
}
