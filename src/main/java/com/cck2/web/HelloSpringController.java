package com.cck2.web;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.ModelAndView;

@Controller
public class HelloSpringController {

	String message = "Welcome to spring mvc";
	
	@RequestMapping("/hello")
	public ModelAndView showMessage(@RequestParam(value="name",required=false,defaultValue="Spring") String name) {
		ModelAndView mv = new ModelAndView("hellospring");
		
		mv.addObject("message",message);
		mv.addObject("name",name);
		
		return mv;
	}
}
