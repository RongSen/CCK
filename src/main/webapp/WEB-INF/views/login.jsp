<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>登陆</title>
</head>
<body>
	<h1>CCK2系统</h1>
	<form action="POST">
		<div>
			<label>用户名：</label>
			<input type="text" value="" placeholder="用户名"/>
		</div>
		<div>
			<label>密码：</label>
			<input type="password" value="" placeholder="密码"/>
		</div>
		<div>
			<button type="submit">提交</button>
			<button type="reset">重置</button>
			<button type="button">取消</button>
		</div>
	</form>
</body>
</html>