package com.cck2.web;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.ModelAndView;

@Controller
@RequestMapping
public class HomeController {

	@RequestMapping(value= {"/admin/console"}, method=RequestMethod.GET)
	public String console() {

		return "console";
	}

	@RequestMapping(value= {"/"}, method=RequestMethod.GET)
	public String index() {

		return "redirect:/admin/login";
	}
}
