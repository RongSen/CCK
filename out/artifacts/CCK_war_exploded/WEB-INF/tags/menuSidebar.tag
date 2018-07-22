<%@ tag pageEncoding="UTF-8" %>
<!-- Sidebar -->
<div class="sidebar">
	<div class="sidebar-collapse">
	    <!-- Sidebar Header Logo -->
    	<div class="sidebar-header">
	        <img src="${basePath}resources/assets/img/logo.png" class="img-responsive" alt=""/>
	    </div>
	    <!-- Sidebar Menu -->
		<div class="sidebar-menu">
		    <nav id="menu" class="nav-main" role="navigation">
		        <ul class="nav nav-sidebar">
		            <div class="panel-body text-center">
		                <div class="bk-avatar">
		                    <img src="${basePath}resources/assets/img/avatar.jpg" class="img-circle bk-img-60"/>
		                </div>
		                <div class="bk-padding-top-10">
		                    <i class="fa fa-circle text-success"></i>
		                    <small>Adminstrator</small>
		                </div>
		            </div>
		            <div class="divider2"></div>
		            <li class="active">
		                <a href="${basePath}admin/console.jsp">
		                    <span class="pull-right label label-primary">165</span>
		                    <i class="fa fa-laptop" aria-hidden="true"></i>
		                    <pan>工作台</pan>
		                </a>
		            </li>
		            <li class="nav-parent">
		                <a>
		                    <i class="fa fa-gears" aria-hidden="true"></i>
		                    <pan>系统管理</pan>
		                </a>
		                <ul class="nav nav-children">
		                    <li><a href="${basePath}admin/user"><span class="text">用户管理</span></a></li>
		                    <li><a href="${basePath}admin/menu"><span class="text">菜单管理</span></a></li>
		                    <li><a href="${basePath}admin/dict"><span class="text">字典管理</span></a></li>
		                    <li><a href="${basePath}admin/role"><span class="text">角色管理</span></a></li>
		                </ul>
		            </li>
		            <li class="nav-parent">
		                <a>
		                    <i class="fa fa-gears" aria-hidden="true"></i>
		                    <pan>DEMO</pan>
		                </a>
		                <ul class="nav nav-children">
		                    <li><a href="${basePath}demo/components.jsp"><span class="text">组件管理</span></a></li>
		                    <li><a href="${basePath}demo/index.html" target="_blank"><span class="text">UI框架首页</span></a></li>
		                    
		                </ul>
		            </li>
		        </ul>
		    </nav>
		</div>
		<!-- End Sidebar Menu -->
	</div>	
	<!-- Sidebar Footer -->
	<div class="sidebar-footer">
	    <ul class="sidebar-terms">
	        <li><a href="${basePath}admin/index.jsp#">联系</a></li>
	        <li><a href="${basePath}admin/index.jsp#">帮助</a></li>
	        <li><a href="${basePath}admin/index.jsp#">关于</a></li>
	    </ul>
	</div>
	<!-- End Sidebar Footer -->
</div>

