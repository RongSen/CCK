package com.cck2.web.sys.user;

public class User {

	public String loginName;
	public String password;

	public User() {
		super();
		this.loginName = "";
		this.password = "";
	}

	public String getLoginName() {
		return loginName;
	}

	public void setLoginName(String loginName) {
		this.loginName = loginName;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

}
