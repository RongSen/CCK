package com.cck2.web.sys.role;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

@Controller
@RequestMapping("/admin/role")
public class RoleController {

	@RequestMapping(method=RequestMethod.GET)
	public String getRoleList() {
		
		return "roleManagement";
	}
}
