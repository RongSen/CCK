package com.cck2.web.error;

import com.cck2.web.sys.user.User;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import javax.servlet.http.HttpSession;

@Controller
@RequestMapping("/admin/error")
public class ErrorController {



    @RequestMapping(method = RequestMethod.GET)
    public String loginError(){

        return "error_500";
    }
}
