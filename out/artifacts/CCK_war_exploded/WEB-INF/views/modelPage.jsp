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
    <rs:navbar />
    <!-- Start: Content -->
	<div class="container-fluid content">
	    <div class="row">
		    <!-- Sidebar -->
			<rs:menuSidebar />	
			<!-- End Sidebar -->
			
			<!-- Main Page -->
	        <div class="main">
	            <!-- Page Header -->
	            <div class="page-header">
	                <div class="pull-left">
	                    <ol class="breadcrumb visible-sm visible-md visible-lg">
	                        <li><a href="index.html"><i class="icon fa fa-home"></i>Home</a></li>
	                        <li><a href="index.html"><i class="icon fa fa-laptop"></i>会员等级</a></li>
	                    </ol>
	                </div>
	                <div class="pull-right">
	                    <h2>会员等级</h2>
	                </div>
	            </div>
	            <!-- End Page Header -->
	            <!-- Web Content -->
	            
	            <!-- End Web Content -->
	        </div>
		</div>
	</div>
    <rs:script />
  </body>
</html>
