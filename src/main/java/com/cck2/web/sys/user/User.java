package com.cck2.web.sys.user;

import javax.persistence.Entity;
import javax.persistence.Table;
import javax.persistence.UniqueConstraint;

@Entity//@Entity(name = "sys_user")
@Table(name = "sys_user")
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
