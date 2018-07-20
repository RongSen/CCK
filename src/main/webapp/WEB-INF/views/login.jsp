<%@ page language="java" pageEncoding="UTF-8" errorPage="error.jsp"%>
<%@ taglib prefix="rs" tagdir="/WEB-INF/tags/" %>
<!DOCTYPE html>
<html>
  <head>
    <base href="<rs:basePath />" />    
    <title>My JSP 'index.jsp' starting page</title>
    <rs:icons />
    <rs:adminMeta />
    <rs:css/>
  </head>
  
  <body>
    <!-- Start: Content -->
	<div class="container-fluid content">
	    <div class="row">
	        <!-- Main Page -->
	        <div class="body-login">
	            <div class="center-login">
	                <a href="#" class="logo pull-left hidden-xs">
	                    <img src="${basePath}resources/images/logo-gq-2.png" height="45" alt="RSNote Admin" />
	                </a>
	                <div class="panel panel-login">
	                    <div class="panel-title-login text-right">
	                        <h2 class="title"><i class="fa fa-user"></i> Login</h2>
	                    </div>
	                    <div class="panel-body">
	                        <form id="loginForm" method="post" action="${basePath}admin/login">
	                            <div class="form-group">
	                                <label>用户名</label>
	                                <div class="input-group input-group-icon">
	                                    <input id="loginName" name="loginName" type="text" class="form-control bk-noradius" />
	                                    <span class="input-group-addon"><span class="icon"><i class="fa fa-user"></i></span></span>
	                                </div>
	                            </div>	
	                            <div class="form-group">
	                                <label>密码</label>
	                                <div class="input-group input-group-icon">
	                                    <input id="password" name="password" type="password" class="form-control bk-noradius" />
	                                    <span class="input-group-addon"><span class="icon"><i class="fa fa-lock"></i></span></span>
	                                </div>
	                            </div>
	                            <div class="form-group">
	                                <label>验证码</label>
	                                <div class="input-group input-group-icon">
	                                    <input id="validate" name="validate" type="text" class="form-control bk-noradius" />
	                                    <span class="input-group-addon"><span class="icon"><i class="fa fa-user"></i></span></span>
	                                </div>
	                            </div>	
	                            <br/>
	                            <div class="row">
	                                <div class="col-sm-8">
	                                    <div class="checkbox-custom checkbox-default bk-margin-bottom-10">
	                                        <input id="RememberMe" name="remember" type="checkbox" />
	                                        <label for="RememberMe">忘记密码</label>
	                                    </div>
	                                </div>
	                                <div class="col-sm-4 text-right">
	                                    <button type="submit" class="btn btn-primary hidden-xs">登陆</button>
	                                    <button type="submit" class="btn btn-primary btn-block btn-lg visible-xs bk-margin-top-10">登陆</button>
	                                </div>
	                            </div>
	                            <br/>
	                            <div class="text-with-hr">
	                                <span>or</span>
	                            </div>
	                            <br/>
	                            <div class="bk-margin-bottom-10 bk-margin-top-10 text-center">
	                                <a href="#" class="fa fa-facebook facebook-bg"></a>
	                                <a href="#" class="fa fa-twitter twitter-bg"></a>
	                                <a href="#" class="fa fa-linkedin linkedin-bg"></a>
	                            </div>
	                            <br/>
	                            <p class="text-center">还没有帐号？<a href="register.html"><small>注册</small></a></p>
	                        </form>
	                    </div>
	                </div>
	            </div>
	        </div>
	    </div>
	</div>
    <rs:script />
    <rs:qxScript />
    <script language="javascript">
    	$(function(){
    		/* $("form#loginForm").submit(function(e){
    			e.preventDefault();
    			
    			   			
    		}); */
    		$("input#loginName").focus();
    	});
    </script>
  </body>
</html>
