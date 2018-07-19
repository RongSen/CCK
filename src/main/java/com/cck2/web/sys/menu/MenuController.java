package com.cck2.web.sys.menu;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

@Controller
@RequestMapping("/admin/menu")
public class MenuController {

	@RequestMapping(method=RequestMethod.GET)
	public String getMenuList() {
		
		return "menuManagement";
	}
}
