<%@ page language="java" pageEncoding="UTF-8" errorPage="error.jsp"%>
<%@ taglib prefix="rs" tagdir="/WEB-INF/tags/" %>
<!DOCTYPE html>
<html>
	<head>
		<base href="<rs:basePath />" />
		<title>500 Error | Nadhif - Responsive Admin Template</title>
		<rs:icons />
		<rs:adminMeta />
		<rs:css/>
	</head>

	<body>
		<!-- Start: Content -->
		<div class="container-fluid content">
			<div class="row">
				<!-- Main Page -->
				<div id="content" class="col-sm-12 full">				
					<div class="row box-error">					
						<div class="col-lg-12 col-md-12 col-xs-12">
							<div class="text-center">
								<h1>500</h1>
								<h2>Unauthorized ...</h2>
								<p>You need to login first to see this page.</p>
								<a href="javascript: history.go(-1)">
									<button type="button" class="btn btn-danger"><i class="fa fa-chevron-left"></i> Go Back</button>
								</a>
								<a href="page-login.html">
									<button type="button" class="btn btn-danger"><i class="fa fa-lock"></i> Login</button>
								</a>
								<a href="page-profile.html">
									<button type="button" class="btn btn-danger"><i class="fa fa-envelope"></i> Contact Admin</button>
								</a>
							</div>						
						</div>					
					</div>			
				</div>
				<!-- End Main Page -->
		
				<!-- Usage -->
				<div id="usage-blank">
					<ul>
						<li>
							<div class="title">Memory</div>
							<div class="bar">
								<div class="progress progress-md  progress-striped active">
									<div class="progress-bar progress-bar-success" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100" style="width: 50%"></div>
								</div>
							</div>			
							<div class="desc">4GB of 8GB</div>
						</li>
						<li>
							<div class="title">HDD</div>
							<div class="bar">
								<div class="progress progress-md  progress-striped active">
									<div class="progress-bar progress-bar-primary" role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" style="width: 40%"></div>
								</div>
							</div>			
							<div class="desc">250GB of 1TB</div>
						</li>
						<li>
							<div class="title">SSD</div>
							<div class="bar">
								<div class="progress progress-md  progress-striped active">
									<div class="progress-bar progress-bar-warning" role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100" style="width: 70%"></div>
								</div>
							</div>			
							<div class="desc">700GB of 1TB</div>
						</li>
						<li>
							<div class="title">Bandwidth</div>
							<div class="bar">
								<div class="progress progress-md  progress-striped active">
									<div class="progress-bar progress-bar-danger" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100" style="width: 90%"></div>
								</div>
							</div>			
							<div class="desc">90TB of 100TB</div>
						</li>				
					</ul>	
				</div>
				<!-- End Usage -->					
		
			</div>
		</div><!--/container-->
		
		
		<!-- start: JavaScript-->
		
		<!-- Vendor JS-->				
		<script src="${basePath}resources/assets/vendor/js/jquery.min.js"></script>
		<script src="${basePath}resources/assets/vendor/js/jquery-2.1.1.min.js"></script>
		<script src="${basePath}resources/assets/vendor/js/jquery-migrate-1.2.1.min.js"></script>
		<script src="${basePath}resources/assets/vendor/bootstrap/js/bootstrap.min.js"></script>
		<script src="${basePath}resources/assets/vendor/skycons/js/skycons.js"></script>	
		
		<!-- Plugins JS-->
		
		<!-- Theme JS -->		
		<script src="${basePath}resources/assets/js/jquery.mmenu.min.js"></script>
		<script src="${basePath}resources/assets/js/core.min.js"></script>
		
		<!-- Pages JS -->
		<script src="${basePath}resources/assets/js/pages/page-404.js"></script>
		
		<!-- end: JavaScript-->
		
	</body>
	
</html>