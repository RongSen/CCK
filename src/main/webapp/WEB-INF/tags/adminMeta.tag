<%@ tag pageEncoding="UTF-8" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="rs" tagdir="/WEB-INF/tags/" %>
<%
	request.setAttribute("robots","index,nofollow");
	request.setAttribute("author","");
	request.setAttribute("keyWords","");
	request.setAttribute("description","");
%>

<!-- Mobile Metas -->
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"/>
<meta charset="UTF-8"/>

<meta http-equiv="pragma" content="no-cache">
<meta http-equiv="cache-control" content="no-cache">
<meta http-equiv="expires" content="0">    
<meta http-equiv="robots" content="${robots}">
<meta http-equiv="Author" content="${author}">
<meta http-equiv="keywords" content="${keyWords}">
<meta http-equiv="description" content="${description}">