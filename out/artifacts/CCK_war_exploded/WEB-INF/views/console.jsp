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
	                        <li><a href="${basePath}admin/console.jsp"><i class="icon fa fa-home"></i>Home</a></li>
	                        <li><a href="${basePath}admin/console.jsp#"><i class="icon fa fa-laptop"></i>控制台</a></li>
	                    </ol>
	                </div>
	                <div class="pull-right">
	                    <h2>会员等级</h2>
	                </div>
	            </div>
	            <!-- End Page Header -->
	            <!-- Web Content -->
	            <div class="row col-lg-12">
	            	<div class="panel">
	            		<div class="panel-heading bk-bg-primary">
	            			<h6><i class="fa fa-indent red"></i>查询</h6>
	            		</div>
	            		<div class="panel-body">
	            			<form id="rs-prog-queryForm-user" class="form-horizontal">
	            				<div class="search-form-input-container">
	            					<ul class="rs-prog-query-form-input-list">
	            						<li><label class="control-label" for="userId">ID</label><div class="controls"><input type="text" id="userId" name="userId" class="form-control input-sm" placeholder="用户ID" /></div></li>
	            						<li><label class="control-label" for="loginName">登录名</label><div class="controls"><input type="text" id="loginName" name="loginName" class="form-control input-sm" placeholder="登录名" /></div></li>
	            						<li><label class="control-label" for="userName">用户名</label><div class="controls"><input type="text" id="userName" name="userName" class="form-control input-sm" placeholder="用户名" /></div></li>
	            						<li class="rs-prog-query-form-list-item-collapsed"><label class="control-label" for="userName">用户名</label><div class="controls"><input type="text" id="userName" name="userName" class="form-control input-sm" placeholder="用户名" /></div></li>
	            					</ul>
	            					<%--
	            					<div class="search-form-button-container form-group col-lg-12 text-center">
	            						<button type="button" class="rs-prog-button-query-form-expand"><span class="icon-double-angle-down"></span>更多</button>
	            						<button type="button" class="rs-prog-button-query-form-collapse"><span class="fa fa-double-angle-down"></span>更多</button>
	            					</div>
	            					 --%>
	            				</div>
								<div class="search-form-button-container form-group col-lg-12 text-center">
	            					<button type="submit" class="btn btn-primary"><span class="fa fa-search"></span>查询</button>
	            					<button type="reset" class="btn btn-default">重置查询条件</button>
	            					<button type="button" class="btn btn-default rs-prog-dialog-common">普通弹出框</button>
	            					<button type="button" class="btn btn-default rs-prog-dialog-login">登录框</button>
	            					<button type="button" class="btn btn-default rs-prog-dialog-error">错误框</button>
	            					<button type="button" class="btn btn-default rs-prog-dialog-warning">警告框</button>
	            					<button type="button" class="btn btn-default rs-prog-dialog-tip">提示框</button>
	            				</div>
	            			</form>
	            		</div>
	            	</div>
	            </div>
	            <div id="baseTableList" class="row col-lg-12"></div>
	            <!-- End Web Content -->
	        </div>
		</div>
	</div>
	<!-- End Content -->
    <rs:script />
    <rs:qxScript />
    <script src="${basePath}js/rs-jquery-ext.js"></script>
    <script src="${basePath}js/rs-jquery-ui.js"></script>
    <script>
    	$(function(){
    		var tableInfo = {
    			title:"Demo",
    			style:"table-hover table-striped table-condensed",
    			options:{
    				refresh:true,
    				minimize:true,
    				close:true
    			}
    		};
    		var recordTableList = rs.ui.createList('div#baseTableList',tableInfo);
    		recordTableList.setColumns([
    			{caption:"用户名称",width:100},
    			{caption:"部门名称",width:100},
    			{caption:"职位",width:100},
    			{caption:"工资",width:100},
    			{caption:"性别",width:100},
    			{caption:"操作",width:100}
    		]);
    		var itemView = '<tr>\
    			<td>{text:userName}</td>\
    			<td>{text:departmentName}</td>\
    			<td>{text:positionName}</td>\
    			<td>{text:wages}</td>\
    			<td>{text:sex}</td>\
    			<td>\
					<button class="rs-prog-update btn btn-primary"><span class="fa fa-pencil mr6"></span> 修改</button>\
					<button class="rs-prog-remove btn"><span class="fa fa-remove mr6"></span> 删除</button>\
				</td>\
    		</tr>';
    		recordTableList.setItemView(itemView);
    		recordTableList.setOnLoadPageListListener(function(page,queryFormDataStr,activeId){
    			var data = [
    				{"userName":"张三丰","departmentName":"人事部","positionName":"主管","wages":"30000","sex":"男"},
    				{"userName":"张三丰","departmentName":"人事部","positionName":"主管","wages":"30000","sex":"男"},
    				{"userName":"张三丰","departmentName":"人事部","positionName":"主管","wages":"30000","sex":"男"},
    				{"userName":"张三丰","departmentName":"人事部","positionName":"主管","wages":"30000","sex":"男"},
    				{"userName":"张三丰","departmentName":"人事部","positionName":"主管","wages":"30000","sex":"男"},
    				{"userName":"张三丰","departmentName":"人事部","positionName":"主管","wages":"30000","sex":"男"},
    				{"userName":"张三丰","departmentName":"人事部","positionName":"主管","wages":"30000","sex":"男"},
    				{"userName":"张三丰","departmentName":"人事部","positionName":"主管","wages":"30000","sex":"男"},
    				{"userName":"张三丰","departmentName":"人事部","positionName":"主管","wages":"30000","sex":"男"},
    				{"userName":"张三丰","departmentName":"人事部","positionName":"主管","wages":"30000","sex":"男"},
    				{"userName":"张三丰","departmentName":"人事部","positionName":"主管","wages":"30000","sex":"男"}
    			];
    			recordTableList.buildList(data,{page:page,maxPage:2,maxSize:data.length,pageSize:10,hide:false},"");
    		});
    		recordTableList.setOnItemListener(function($item,record){
    			var id=record.id;
    			$item.click(function(e){
    				e.stopPropagation();
    				recordTableList.setActive($item);
    			});
    			$item.find("button.rs-prog-update").click(function(e){
    				e.stopPropagation();
    				recordTableList.setActive($item);
    			});
    			$item.find("button.rs-prog-remove").click(function(e){
    				e.stopPropagation();
    				recordTableList.remove($item,function(eCallback){
    					
    				});
    			});
    			return true;
    		});
    		recordTableList.load(1);
    		
    		$('button.rs-prog-dialog-common').click(function(){
    			rs.ui.showMessageCommon('这是普通消息弹出框测试','text','普通消息',function(){
    				
    			});
    		});
    		$('button.rs-prog-dialog-login').click(function(){
    			rs.ui.showLoginDialog(function(){
    				alert("login");
    			});
    		});
    		$('button.rs-prog-dialog-error').click(function(){
    			rs.ui.showMessageError('error');
    		});
    		$('button.rs-prog-dialog-warning').click(function(){
    			rs.ui.showMessageWarning('warning');
    		});
    		$('button.rs-prog-dialog-tip').click(function(){
    			rs.ui.showMessage('tipDialog');
    		});
    	});
    </script>
  </body>
</html>
