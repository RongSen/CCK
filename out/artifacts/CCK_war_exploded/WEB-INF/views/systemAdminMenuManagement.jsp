<%@ page language="java" pageEncoding="UTF-8" errorPage="error.jsp"%>
<%@ taglib prefix="rs" tagdir="/WEB-INF/tags/" %>
<!DOCTYPE html>
<html>
  <head>
    <base href="<rs:basePath />" />    
    <title>系统菜单管理</title>
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
	                        <li><a href="${basePath}admin/userLevelManagement.jsp#"><i class="icon fa fa-bars"></i>菜单管理</a></li>
	                    </ol>
	                </div>
	                <div class="pull-right">
	                    <h2>菜单管理</h2>
	                </div>
	            </div>
	            <!-- End Page Header -->
	            <!-- Web Content -->
	            <div class="row">
	                <div class="col-lg-12">
	                    <div class="panel">
	                        <div class="panel-heading bk-bg-primary">
	                            <h6><i class="fa fa-indent red"></i>查询</h6>
	                        </div>
	                        <div class="panel-body">
	                            <form id="searchForm" class="form-horizontal">
	                                <div class="form-group">
	                                    <label class="col-lg-2 control-label">父菜单名称</label>
	                                    <div class="col-lg-4">
	                                        <input type="text" id="caption" name="caption" class="form-control" placeholder="父菜单名称" />
	                                    </div>
	                                    <label class="col-lg-2 control-label">菜单名称</label>
	                                    <div class="col-lg-4">
	                                        <input type="text" id="parentCaption" name="parentCaption" class="form-control" placeholder="菜单名称" />
	                                    </div>
	                                </div>
	                                <div class="form-group col-lg-12 text-center">
	                                    <button type="button" class="bk-margin-5 btn btn-default"><i class="fa fa-search"></i> 查询</button>
	                                    <button type="button" class="bk-margin-5 btn btn-default"><i class="fa fa-re"></i> 清空</button>
	                                    <button type="button" class="bk-margin-5 btn btn-default"><i class="fa fa-plus"></i> 新增</button>
	                                </div>
	                            </form>
	                        </div>
	                    </div>
	                </div>
	            </div>
	            <div class="row">
	                <div class="col-lg-12">
	                    <div class="panel">
	                        <div class="panel-heading bk-bg-primary">
	                            <h6><i class="fa fa-table"></i>等级列表</h6>
	                        </div>
	                        <div class="panel-body">
	                            <div id="rs-prog-list-systemAdminMenu" class="table-responsive">
	                                <table class="table table-bordered table-striped table-condensed table-hover">
	                                    <thead>
	                                        <tr class="text-center">
	                                            <td class="col-lg-1 col-md-1 col-sm-1 bk-bg-white-darker">序号</td>
	                                            <td class="col-lg-4 col-md-4 col-sm-4 bk-bg-white-darker">名称</td>
	                                            <td class="col-lg-3 col-md-3 col-sm-3 bk-bg-white-darker">图标</td>
	                                            <td class="col-lg-4 col-md-4 col-sm-4 bk-bg-white-darker">操作</td>
	                                        </tr>
	                                    </thead>
	                                    <tbody>
	                                        <tr>
	                                            <td class="text-center">1</td>
	                                            <td class="text-center">一级</td>
	                                            <td class="text-center">&nbsp&nbsp</td>
	                                            <td class="text-center">
	                                                <button type="button" class="btn btn-primary rs-btn-update"><i class="fa fa-pencil"></i> 修改</button>
	                                                <button type="button" class="btn btn-primary rs-btn-remove"><i class="fa fa-trash-o"></i> 删除</button>
	                                            </td>
	                                        </tr>
	                                        <tr>
	                                            <td class="text-center">2</td>
	                                            <td class="text-center">二级</td>
	                                            <td class="text-center">&nbsp&nbsp</td>
	                                            <td class="text-center">
	                                                <button type="button" class="btn btn-primary rs-btn-update"><i class="fa fa-pencil"></i> 修改</button>
	                                                <button type="button" class="btn btn-primary rs-btn-remove"><i class="fa fa-trash-o"></i> 删除</button>
	                                            </td>
	                                        </tr>
	                                        <tr>
	                                            <td class="text-center">3</td>
	                                            <td class="text-center">三级</td>
	                                            <td class="text-center">&nbsp&nbsp</td>
	                                            <td class="text-center">
	                                                <button type="button" class="btn btn-primary rs-btn-update"><i class="fa fa-pencil"></i> 修改</button>
	                                                <button type="button" class="btn btn-primary rs-btn-remove"><i class="fa fa-trash-o"></i> 删除</button>
	                                            </td>
	                                        </tr>
	                                        <tr>
	                                            <td class="text-center">4</td>
	                                            <td class="text-center">四级</td>
	                                            <td class="text-center">&nbsp&nbsp</td>
	                                            <td class="text-center">
	                                                <button type="button" class="btn btn-primary rs-btn-update"><i class="fa fa-pencil"></i> 修改</button>
	                                                <button type="button" class="btn btn-primary rs-btn-remove"><i class="fa fa-trash-o"></i> 删除</button>
	                                            </td>
	                                        </tr>
	                                        <tr>
	                                            <td class="text-center">5</td>
	                                            <td class="text-center">五级</td>
	                                            <td class="text-center">&nbsp&nbsp</td>
	                                            <td class="text-center">
	                                                <button type="button" class="btn btn-primary rs-btn-update"><i class="fa fa-pencil"></i> 修改</button>
	                                                <button type="button" class="btn btn-primary rs-btn-remove"><i class="fa fa-trash-o"></i> 删除</button>
	                                            </td>
	                                        </tr>
	                                    </tbody>
	                                    <!-- <tfoot>
	                                    	<tr><td colspan="4">
	                                    		<div class="btn-toolbar" role="toolbar">
					                                <div class="bk-margin-5 btn-group">
					                                    <button type="button" class="btn btn-default"><i class="fa fa-angle-left"></i></button>
					                                    <button type="button" class="btn btn-primary">1</button>
					                                    <button type="button" class="btn btn-default">2</button>
					                                    <button type="button" class="btn btn-default">3</button>
					                                    <button type="button" class="btn btn-default">4</button>
					                                    <button type="button" class="btn btn-default">5</button>
					                                    <button type="button" class="btn btn-default">6</button>
					                                    <button type="button" class="btn btn-default">7</button>
					                                    <button type="button" class="btn btn-default">8</button>
					                                    <button type="button" class="btn btn-default">9</button>
					                                    <button type="button" class="btn btn-default">10</button>
					                                    <button type="button" class="btn btn-default"><i class="fa fa-angle-right"></i></button>
					                                </div>
					                            </div>
	                                    	</td></tr>
	                                    </tfoot> -->
	                                </table>
		                            <div class="btn-toolbar" role="toolbar">
		                                <div class="bk-margin-5 btn-group">
		                                    <button type="button" class="btn btn-default"><i class="fa fa-angle-left"></i></button>
		                                    <button type="button" class="btn btn-primary">1</button>
		                                    <button type="button" class="btn btn-default">2</button>
		                                    <button type="button" class="btn btn-default">3</button>
		                                    <button type="button" class="btn btn-default">4</button>
		                                    <button type="button" class="btn btn-default">5</button>
		                                    <button type="button" class="btn btn-default">6</button>
		                                    <button type="button" class="btn btn-default">7</button>
		                                    <button type="button" class="btn btn-default">8</button>
		                                    <button type="button" class="btn btn-default">9</button>
		                                    <button type="button" class="btn btn-default">10</button>
		                                    <button type="button" class="btn btn-default"><i class="fa fa-angle-right"></i></button>
		                                </div>
		                            </div>
	                            </div>
	                        </div>
	                    </div>
	                </div>
	            </div>
	            <div class="row">
	            	<div class="col-lg-12">
	            		<div class="panel">
	            			<div class="panel-heading bk-bg-primary">
	            				<h6><i class="fa fa-table"></i>菜单列表</h6>
	            			</div>
	            			<div class="panel-body">
	            				<div id="rs-prog-list-systemAdminMenu" class="table-responsive"></div>
	            			</div>
	            		</div>
	            	</div>
	            </div>
	            <div class="row">
	            	<div class="col-lg-12">
	            		<div class="panel">
	            			<div class="panel-heading bk-bg-primary">
	            				<h6><i class="fa fa-table"></i>菜单列表</h6>
	            			</div>
	            			<div class="panel-body">
	            				<div id="systemAdminMenuList" class="table-responsive"></div>
	            			</div>
	            		</div>
	            	</div>
	            </div>
	            	           
	            <!-- 弹出框 -->
	            <div class="modal fade" id="editDialog" role="dialog" aria-labelledby="editDialog" aria-hidden="true">
	                <div class="modal-dialog">
	                    <div class="modal-content">
	                        <div class="modal-header bk-bg-primary">
	                            <h6><i class="fa fa-pencil-square-o"></i> 等级详细</h6>
	                        </div>
	                        <div class="modal-body">
	                            <form id="editDialogForm" class="form-horizontal">
	                                <div class="form-group">
	                                    <label class="col-lg-3 control-label">ID</label>
	                                    <div class="col-lg-9">
	                                        <input type="type" id="id" name="id" class="form-control" placeholder="ID" />
	                                    </div>
	                                </div>
	                                <div class="form-group">
	                                    <label class="col-lg-3 control-label">版本号</label>
	                                    <div class="col-lg-9">
	                                        <input type="type" id="version" name="version" class="form-control" placeholder="版本号" />
	                                    </div>
	                                </div>
	                                <div class="form-group">
	                                    <label class="col-lg-3 control-label">等级名称</label>
	                                    <div class="col-lg-9">
	                                        <input type="type" id="levelName" name="levelName" class="form-control" placeholder="等级名称" />
	                                    </div>
	                                </div>
	                                <div class="form-group">
	                                    <label class="col-lg-3 control-label">序号</label>
	                                    <div class="col-lg-9">
	                                        <input type="type" id="seqNo" name="seqNo" class="form-control" placeholder="序号" />
	                                    </div>
	                                </div>
	                            </form>
	                        </div>
	                        <div class="modal-footer">
	                            <button type="submit" class="btn btn-primary">确定</button>
	                            <button type="reset" class="btn btn-primary">取消</button>
	                        </div>
	                    </div>
	                </div>
	            </div>
	            <!-- End Web Content -->
	        </div>
		</div>
	</div>
	<!-- End Content -->
    <rs:script />
    <rs:qxScript />
    <script src="${basePath}js/rs-jquery-ui.js"></script>
    <script src="${basePath}js/rs-jquery-ext.js"></script>
    <script language="javascript">
   	 $(function(){
        $("button.rs-btn-update").click(function(){
            $("div#editDialog").modal("toggle");
        });
        
       /*  var systemAdminMenuList = new TableList("div#rs-prog-list-systemAdminMenu");
        systemAdminMenuList.setColumns(["节点","父节点","菜单名称","菜单URL","序号","操作"]);
        var itemTemplate = "";
        systemAdminMenuList.setItemTemplate(itemTemplate);
        systemAdminMenuList.loadPage(function(page,queryFormDataStr,activeId){
        	
        });
        systemAdminMenuList.appendItem(function($item,data){
        	return true;
        });
        systemAdminMenuList.load(1); */
        
        var systemAdminMenuList = new TableList("div#systemAdminMenuList");
        systemAdminMenuList.setColumns(["序号","父节点","菜单名称","菜单URL","操作"]);
        var itemTemplate = '<tr id="rs-id">\
        	<td class="text-center">{text:seqNo}</td>\
        	<td class="text-center">{text:parentNodeName}</td>\
        	<td class="text-center">{text:menu}</td>\
        	<td class="text-center">{text:url}</td>\
        	<td class="text-center">\
        		<button type="button" class="btn btn-primary rs-btn-update"><i class="fa fa-pencil"></i> 修改</button>\
	            <button type="button" class="btn btn-primary rs-btn-remove"><i class="fa fa-trash-o"></i> 删除</button>\
        	</td>\
        </tr>';
        systemAdminMenuList.setItemTemplate(itemTemplate);
        systemAdminMenuList.loadPage(function(page,queryFormDataStr,activeId){
        	var menuList = [
        		{"parentNodeName":"用户管理","menu":"普通用户","url":"http://www.baidu.com","seqNo":"1"},
        		{"parentNodeName":"用户管理","menu":"用户组","url":"http://www.baidu.com","seqNo":"2"},
        		{"parentNodeName":"用户管理","menu":"用户等级","url":"http://www.baidu.com","seqNo":"3"},
        		{"parentNodeName":"用户管理","menu":"用户等级","url":"http://www.baidu.com","seqNo":"4"},
        		{"parentNodeName":"用户管理","menu":"用户等级","url":"http://www.baidu.com","seqNo":"5"},
        		{"parentNodeName":"用户管理","menu":"用户等级","url":"http://www.baidu.com","seqNo":"6"},
        		{"parentNodeName":"用户管理","menu":"用户等级","url":"http://www.baidu.com","seqNo":"7"},
        		{"parentNodeName":"用户管理","menu":"用户等级","url":"http://www.baidu.com","seqNo":"8"},
        		{"parentNodeName":"用户管理","menu":"用户等级","url":"http://www.baidu.com","seqNo":"9"},
        		{"parentNodeName":"用户管理","menu":"用户等级","url":"http://www.baidu.com","seqNo":"16"},
        		{"parentNodeName":"用户管理","menu":"管理员","url":"http://www.baidu.com","seqNo":"17"}
        		
        	];
        	var sizeInfo = {"page":page,"pageSize":10,"maxPage":13,"maxSize":123};
        	systemAdminMenuList.buildList(menuList,sizeInfo);
        });
        systemAdminMenuList.appendItem(function($table,data){
        	return true;
        });
        systemAdminMenuList.load(1);
    });
    </script>
  </body>
</html>
