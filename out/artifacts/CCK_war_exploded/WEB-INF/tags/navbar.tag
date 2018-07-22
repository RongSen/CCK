<%@ tag pageEncoding="UTF-8" %>
<div class="navbar" role="navigation">
    <div class="container-fluid container-nav">
        <!-- Navbar Action -->
        <ul class="nav navbar-nav navbar-actions navbar-left">
            <li class="visible-md visible-lg"><a href="javascirpt:void(0);" id="main-menu-toggle"><i class="fa fa-th-large"></i></a>
            </li>
            <li class="visible-xs visible-sm"><a href="javascirpt:void(0);" id="sidebar-menu"><i class="fa fa-navicon"></i></a>
            </li>
        </ul>
        <!-- Navbar Left -->
        <div class="navbar-left">
            <!-- Search Form -->
            <form class="search navbar-form">
                <div class="input-group input-search">
                    <input type="text" class="form-control" name="q" id="q" placeholder="Search..."/>
                    <span class="input-group-btn">
                        <button class="btn btn-default" type="submit"><i class="fa fa-search"></i></button>
                    </span>
                </div>
            </form>
        </div>

        <!-- Navbar Right -->
        <div class="navbar-right">
            <!-- Notifications -->
            <ul class="notifications hidden-sm hidden-xs">
                <li>
                    <a href="#" class="dropdown-toggle notification-icon" data-toggle="dropdown">
                        <i class="fa fa-tasks"></i>
                        <span class="badge">10</span>
                    </a>
                    <ul class="dropdown-menu update-menu" role="menu">
                        <li><a href="#"><i class="fa fa-database bk-fg-primary"></i> 数据库</a></li>
                        <li><a href="#"><i class="fa fa-bar-chart-o bk-fg-primary"></i> 连接</a></li>
                    </ul>
                </li>
                <li>
                    <a href="#" class="dropdown-toggle notification-icon" data-toggle="dropdown">
                        <i class="fa fa-envelope"></i>
                        <span class="badge">5</span>
                    </a>
                    <ul class="dropdown-menu">
                        <li class="dropdown-menu-header">
                            <strong>消息</strong>

                            <div class="progress progress-xs progress-striped active">
                                <div class="progress-bar progress-bar-success" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style="width:60%;">
                                    60%
                                </div>
                            </div>
                        </li>
                        <li class="avatar">
                            <a href="page-inbox.html">
                                <img class="avatar" src="${basePath}resources/assets/img/avatar1.jpg" alt=""/>
                                <div>
                                    <div class="point point-primary point-lg"></div>新消息
                                </div>
                                <span><small>1分钟前</small></span>
                            </a>
                        </li>
                        <li class="dropdown-menu-footer text-center">
                            <a href="page-inbox.html">全部消息</a>
                        </li>
                    </ul>
                </li>
                <li>
                    <a href="#" class="dropdown-toggle notification-icon" data-toggle="dropdown">
                        <i class="fa fa-bell"></i>
                        <span class="badge">3</span>
                    </a>
                    <ul class="dropdown-menu list-group">
                        <li class="dropdown-menu-header">
                            <strong>通知</strong>
                            <div class="progress progress-xs progress-striped active">
                                <div class="progress-bar progress-bar-danger" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style="width:60%;">
                                    60%
                                </div>
                            </div>
                        </li>
                        <li class="list-item">
                            <a href="page-inbox.html">
                                <div class="pull-left">
                                    <i class="fa fa-envelope-o bk-fg-primary"></i>
                                </div>
                                <div class="media-body clearfix">
                                    <div>未读消息</div>
                                    <h6>你有10条未读消息</h6>
                                </div>
                            </a>
                        </li>
                        <li class="list-item-last">
                            <a href="#">
                                <h6>未读通知</h6>
                                <span class="badge"></span>
                            </a>
                        </li>
                    </ul>
                </li>
            </ul>
            <!-- End Notifications -->
            <!-- Userbox -->
            <div class="userbox">
                <a href="javascirpt:void(0);" class="dropdown-toggle" data-toggle="dropdown">
                    <div class="profile-info">
                        <span class="name">张三丰</span>
                        <span class="role">武当掌门</span>
                    </div>
                    <i class="fa custom-caret"></i>
                </a>

                <div class="dropdown-menu">
                    <ul class="list-unstyled">
                        <li class="dropdown-menu-header bk-bg-white bk-margin-top-15">
                            <div class="progress progress-xs progress-striped active">
                                <div class="progress-bar progress-bar-primary" role="progressbar" aria-valuenow="60"
                                     aria-valuemin="0" aria-valuemax="100" style="width:60%;">
                                    60%
                                </div>
                            </div>
                        </li>
                        <li>
                            <a href="page-profile.html"><i class="fa fa-user"></i> Profile</a>
                        </li>
                        <li>
                            <a href="#"><i class="fa fa-wrench"></i> Setting</a>
                        </li>
                        <li>
                            <a href="#"><i class="fa fa-usd"></i> Payments</a>
                        </li>
                        <li>
                            <a href="#"><i class="fa fa-file"></i> File</a>
                        </li>
                        <li>
                            <a href="page-login.html"><i class="fa fa-power-off"></i> Logout</a>
                        </li>
                    </ul>
                </div>
            </div>
            <!-- End Userbox -->
        </div>
        <!-- End Navbar Right -->
    </div>
</div>