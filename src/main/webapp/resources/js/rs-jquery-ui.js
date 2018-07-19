/*!
 * jQuery UI Frame By John 2016-08-04
 */
 
MACRO_PACKAGE_DEFINE('rs.ui');
 
 //rs.ui具有的方法一览表
 rs.ui.functionList = {
	 //创建List的工厂函数
	 createList:function(selector,onCreateCallback){},
	 //创建CachedList的工厂函数
	 createCachedList:function(selector,onCreateCallback){},
	 //创建FormPage的工厂函数
	 createFormPage:function(selector,onCreateCallback){},
	 //创建FormDialog的工厂函数
	 createFormDialog:function(selector,onCreateCallback,option){},
	 //检查给定的变量是否是合法的函数变量
	 checkValidFunction:function(callback){},
	 //通用消息弹出框
	 showMessageCommon:function(message,type,title,onCloseCallback){},
	 //提示框
	 showMessage:function(message,onCloseCallback){},
	 //警告提示框
	 showMessageWarning:function(message,onCloseCallback){},
	 //出错提示框
	 showMessageError:function(message,onCloseCallback){},
	 //确认框
	 showConfirm:function(message){},
	 //登录框
	 showLoginDialog:function(onLoginSuccessCallback){}
 };
 //rs.ui方法实现
 rs.ui = {
	 zIndexForAllDialogs: 1000,
	 //创建List的工厂函数
	 createList:function(selector,onCreateCallback){
		 return new rs.ui.TableList(selector,onCreateCallback);
	 },
	 //检查给定的变量是否是合法的函数变量
	 checkValidFunction:function(callback){
		 if(!typeof(callback)=='function')
			 alert('不是合法函数');
	 },
	//通用消息弹出框
	 showMessageCommon(message,messageType,title,onCloseCallback){
		 if(onCloseCallback)
			 this.checkValidFunction(onCloseCallback);
		 if(!message){
			 alert('rs.ui.showMessageCommon方法调用不正确，正确格式如下：\nrs.ui.showMessageCommon(message,["text"|"html"],[title]);');
			 return;
		 }
		 
		 var $dialog = $('<div class="modal fade" role="dialog" id="'+$.getUUID()+'" aria-labelledby="editDialog" aria-hidden="true">\
			 <div class="modal-dialog">\
				 <div class="modal-content">\
				 	<div class="modal-header">\
				 		<button type="button" class="rs-prog-close close" aria-hidden="true">&times</button>\
				 		<h3 class="modal-title"></h3>\
				 	</div>\
				 	<div class="modal-body"></div>\
				 	<div class="modal-footer buttonPanel">\
				 		<button type="button" class="rs-prog-close btn" aria-hidden="true"><i class="fa-eye-open mr3"></i>我知道了</button>\
				 	</div>\
				 </div>\
			 </div>\
		</div>');
		 $('body').append($dialog);
		 
		 this.zIndexForAllDialogs = this.zIndexForAllDialogs + 100;
		 $dialog.css('z-index',this.zIndexForAllDialogs);
		 
		 if(!messageType || messageType==='text'){
			 $dialog.find('.modal-body').text(message);
		 }else if(messageType==='html'){
			 $dialog.find('.modal-body').html(message);
		 }else if(messageType){
			 alert('无法识别的type参数，应为"text"或者"html"之一');
			 return;
		 }
		 $dialog.find('.modal-title').text(title);
		 $dialog.find('.rs-prog-close').click(function(){
			 $dialog.modal('hide').remove();
			 if(onCloseCallback)
				 onCloseCallback();
		 });
		 
		 var width = $(document).width;
		 $dialog.css({
			 width: width + 'px',
			 'margin-left': (-width/2) + 'px',
			 'top':'50%',
			 'z-index':this.zIndexForAllDialogs
		 });
		 var height = -($dialog.height()/2);
		 $dialog.css('margin-top',height + 'px');
		 
		 $dialog.modal({show:false,backdrop:'static',keyboard:false});
		 $dialog.on('shown',function(){
			 $dialog.find('button.rs-prog-close').focus();
		 });
		 $dialog.modal('show');
	 },
	//提示框
	 showMessage:function(message,onCloseCallback){
		 this.showMessageCommon(message,'text','提示',onCloseCallback);
	 },
	 //警告提示框
	 showMessageWarning:function(message,onCloseCallback){
		 var html = $.formatStr('<font color="red">{html:message}</font>',{message:message});
		 this.showMessageCommon(html,'html','警告',onCloseCallback);
	 },
	 //出错提示框
	 showMessageError:function(message,onCloseCallback){
		 var html = $.formatStr('<font color="red">{html:message}</font>',{message:message})
		 this.showMessageCommon(html,'html','出错了',onCloseCallback);
	 },
	 //确认框
	 showConfirm:function(message,onConfirmCallback,onCancelCallback){
		 if(!message || !onConfirmCallback){
			 alert('rs.ui.showConfirm方法调用不正确，正确格式如下：\nrs.ui.showConfirm(message,["text"|"html"],[title];');
			 return;
		 }
		 if(onCancelCallback){
			 this.checkValidFunction(onCancelCallback);
		 }
		 var $dialog = $('<div class="modal fade" role="dialog" id="'+$.getUUID()+'" aria-labelledby="editDialog" aria-hidden="true">\
		    <div class="modal-dialog">\
				<div class="modal-content">\
					<div class="modal-header">\
						<button type="button" class="rs-prog-close close" aria-hidden="true">&times</button>\
						<h3 class="modal-title"></h3>\
					</div>\
					<div class="modal-body"></div>\
				    <div class="modal-footer buttonPanel">\
				        <button class="rs-prog-cancel btn btn-default rs-prog-cancel" aria-hidden="true">取消</button>\
						<button class="rs-prog-ok btn btn-default rs-prog-ok" aria-hidden="true">确定</button>\
				    </div>\
				</div>\
			</div>\
		</div>');
		 $('body').append($dialog);
		 
		 $dialog.find('.modal-body').text(message);
		 $dialog.find('.modal-title').text('需要您的确认');
		 $dialog.find('.rs-prog-ok').click(function(){
			 $dialog.modal('hide').remove();
			 onConfirmCallback($dialog);
		 });
		 
		 $dialog.find('.rs-prog-close').click(function(){
			 $dialog.modal('hide').remove();
			 if(onCancelCallback){
				 onCancelCallback();
			 }
		 });
		 $dialog.find('.rs-prog-cancel').click(function(){
			 $dialog.modal('hide').remove();
			 if(onCancelCallback)
				 onCancelCallback();
		 });
		 
		 this.zIndexForAllDialogs = this.zIndexForAllDialogs + 100;
		 $dialog.css('z-index',this.zIndexForAllDialogs);
		 
		 var width = $(document).width;
		 var height = $(document).height;
		 $dialog.css({
			 width: width + 'px',
			 'margin-left': (-width/2) + 'px',
			 'top':'50%',
			 'z-index':this.zIndexForAllDialogs
		 });
		 var height = -($dialog.height()/2);
		 $dialog.css('margin-top',height+'px');
		 
		 $dialog.modal({show:false,backdrop:'static',keyboard:false});
		 $dialog.on('shown',function(){
			 $dialog.find('button.rs-prog-cancel').focus();
		 });
		 $dialog.modal('show');
	 },
	 //登陆提示框
	 showLoginDialog:function(onLoginSuccessCallback){
		 var $dialog = $('<div class="body-login">\
            <div class="center-login">\
                <a href="#" class="logo pull-left hidden-xs">\
                    <img src="images/logo-gq-2.png" height="45" alt="RSNote Admin" />\
                </a>\
                <div class="panel panel-login">\
                    <div class="panel-title-login text-right">\
                        <h2 class="title"><i class="fa fa-user"></i> Login</h2>\
                    </div>\
                    <div class="panel-body">\
						<div class="rs-prog-message" style="color: red;font-size: 16px;margin: 15px 0px 20px 0px;text-align: center;">您没有登录或者登录已过期，请重新登录</div>\
                        <form id="loginForm" method="post" action="${basePath}admin/console.jsp">\
                            <div class="form-group">\
                                <label>用户名</label>\
                                <div class="input-group input-group-icon">\
                                    <input id="loginName" name="loginName" type="text" class="form-control bk-noradius" />\
                                    <span class="input-group-addon">\
                                        <span class="icon">\
                                            <i class="fa fa-user"></i>\
                                        </span>\
                                    </span>\
                                </div>\
                            </div>\
                            <div class="form-group">\
                                <label>密码</label>\
                                <div class="input-group input-group-icon">\
                                    <input id="password" name="password" type="password" class="form-control bk-noradius" />\
                                    <span class="input-group-addon">\
                                        <span class="icon">\
                                            <i class="fa fa-lock"></i>\
                                        </span>\
                                    </span>\
                                </div>\
                            </div>\
                            <div class="form-group">\
                                <label>验证码</label>\
                                <div class="input-group input-group-icon">\
                                    <input id="validate" name="validate" type="text" class="form-control bk-noradius" />\
                                    <span class="input-group-addon">\
                                        <span class="icon">\
                                            <i class="fa fa-user"></i>\
                                        </span>\
                                    </span>\
                                </div>\
                            </div>\
                            <br/>\
                            <div class="row">\
                                <div class="col-sm-8">\
                                    <div class="checkbox-custom checkbox-default bk-margin-bottom-10">\
                                        <input id="RememberMe" name="remember" type="checkbox" />\
                                        <label for="RememberMe">忘记密码</label>\
                                    </div>\
                                </div>\
                                <div class="col-sm-4 text-right">\
                                    <button href="index.html" type="submit" class="btn btn-primary hidden-xs">登陆</button>\
                                    <button href="index.html" type="submit" class="btn btn-primary btn-block btn-lg visible-xs bk-margin-top-10">登陆</button>\
                                </div>\
                            </div>\
                            <br/>\
                            <div class="text-with-hr">\
                                <span>or</span>\
                            </div>\
                            <br/>\
                            <div class="bk-margin-bottom-10 bk-margin-top-10 text-center">\
                                <a href="#" class="fa fa-facebook facebook-bg"></a>\
                                <a href="#" class="fa fa-twitter twitter-bg"></a>\
                                <a href="#" class="fa fa-linkedin linkedin-bg"></a>\
                            </div>\
                            <br/>\
                            <p class="text-center">还没有帐号？<a href="register.html"><small>注册</small></a></p>\
                        </form>\
                    </div>\
                </div>\
            </div>\
        </div>');
		$('body').append($dialog);
		
		var loginModae = 'normal';
		
		var $message = $dialog.find('div.rs-prog-message');
		var $inputPassword = $dialog.find('input[rs_field_name=password]');
		var $login = $dialog.find('div.login');
		
		var $form = $dialog.find('form');
		//登陆操作
		$form.submit(function(e){
			e.preventDefault();
			alert('form.submit');
		});
		
		this.zIndexForAllDialogs = this.zIndexForAllDialogs + 100;
		$dialog.css('z-index',this.zIndexForAllDialogs);
		
		var width = $(document).width;
		$dialog.css({
			width: width + 'px',
			'margin-left': (-width/2) + 'px',
			'top': '50%',
			'z-index': this.zIndexForAllDialogs
		});
		var height = -($dialog.height()/2);
		$dialog.css('height',height);
		
		$dialog.modal({show:false,backdrop:'static',keyboard:false});
		$dialog.on('shown',function(){
			$dialog.find('input[rs_field_name=loginId]').focus();
		});
		$dialog.modal('show');
	 }
 };
 
 /**
  * 通用列表
  * tableStyle:table-striped,table-condensed,table-bordered,table-hover
  */
 rs.ui.TableList = function(selector,tableInfo,onCreateCallback){
	 this._containerSelector = selector;
	 this._$container = $(selector);
	 this._$tableContainer = $('<div class="panel">\
		 <div class="panel-heading bk-bg-primary">\
			<h6><i class="fa fa-table red"></i><span class="rs-title"></span></h6>\
		 	<div class="panel-actions"></div>\
		</div>\
		<div class="panel-body">\
			<div class="table-responsive">\
				<table class="table">\
		 			<thead><tr></tr></thead>\
		 			<tbody></tbody>\
				</table>\
			</div>\
		</div>\
	</div>');
	this._$table = this._$tableContainer.find('table');
	this._$container.append(this._$tableContainer);
	this._page = 1;
	this._queryForm = null;
	
	this._itemList = [];
	
	this._$pagePanel = $('<div class="btn-toolbar" role="toolbar"><div class="bk-margin-5 btn-group rs-page-list"></div><div class="bk-margin-5 btn-group rs-pagination-info"></div></div>');
	this._$pageContainer = this._$pagePanel.find('div.rs-page-list');
	this._$paginationInfo = this._$pagePanel.find('div.rs-pagination-info');

	this._$container.find('div.table-responsive').append(this._$pagePanel);
	
	this._$container.find('span.rs-title').text(tableInfo.title);
	this._$container.find('table.table').addClass(tableInfo.style);
	if(tableInfo.options.refresh){
		this._$container.find('div.panel-actions').append('<a href="javascript:void(0);" class="btn-setting"><i class="fa fa-rotate-right"></i></a>');
		this._$container.find('.btn-setting').click(function(e){
			e.preventDefault();
		    $('#myModal').modal('show')
		});
	}
	if(tableInfo.options.minimize){
		this._$container.find('div.panel-actions').append('<a href="javascript:void(0);" class="btn-minimize"><i class="fa fa-chevron-up"></i></a>');
		this._$container.find('.btn-minimize').click(function(e){
			e.preventDefault();
		    var $panelBody = $(this).parent().parent().next('.panel-body');
			$panelBody.is(':visible') ? $('i',$(this)).removeClass('fa-chevron-up').addClass('fa-chevron-down'):$('i',$(this)).removeClass('fa-chevron-doen').addClass('fa-chevron-up');
			$panelBody.slideToggle('slow',function(){
				widthFunctions();
			});
		});
	}
	if(tableInfo.options.close){
		this._$container.find('div.panel-actions').append('<a href="javascript:void(0);" class="btn-close"><i class="fa fa-times"></i></a>');
		this._$container.find('.btn-close').click(function(e){
			e.preventDefault();
		    $(this).parent().parent().parent().fadeOut();
		});
	}
	
	if(typeof(onCreateCallback)=='function')
		onCreateCallback(this._$container);
 }
 rs.ui.TableList.prototype = {
	 setColumns:function(array){
		 var totalWidth = 0;
		 for(var i = 0;i < array.length;i++){
			 totalWidth = totalWidth + Number(array[i].width);
		 }
		 var $headTr = this._$table.find('>thead>tr');
		 for(var i = 0;i < array.length;i++){
			 var $th = $('<th></th>');
			 $th.html(array[i].caption);
			 $th.width(Number(array[i].width));
			 $headTr.append($th);
		 }
		 this._maxColspan = array.length;
		 var colspan = {colspan:this._maxColspan};
		 this._emptyTemplate = $.formatStr('<tr><td colspan={text:colspan}>\
				 <div style="height:30px;text-align:center;">没有符合条件的记录</div>\
		 </td></tr>',colspan);
	 },
	 setItemView:function(itemView){
		 this._itemView = itemView;
	 },
	 setOnLoadPageListListener:function(loadDataCallback){
		 this._loadDataCallback = loadDataCallback;
	 },
	 reload:function(activeId){
		 this.load(this._page,activeId);
	 },
	 load:function(page,activeId){
		 this._page = page;
		 this._loadDataCallback(page,this._getQueryFormData(),activeId);
	 },
	 setOnItemListener:function(append,beforeAppend){
		 this._append = append;
		 this._beforeAppend = beforeAppend;
	 },
	 _clearActive:function(){
		 this._$table.find('tr.active').removeClass('active');
	 },
	 setActive:function($item){
		 this._clearActive();
		 $item.addClass('active');
	 },
	 getActiveId:function(){
		 var activeRecord = this.getActiveRecord();
		 if(activeRecord.id)
			 return activeRecord.id;
		 else
			 return '';
	 },
	 getActiveRecord: function(){
		 var $trActive = this._$table.find('tr.active');
		 if($trActive.size() > 0){
			 return $trActive.data('record');
		 }
		 $trActive = this._$table.find('tbody tr:first');
		 if($trActive.size <= 0 || !$trActive.data('record'))
			 return {id:'ID not exists!'};
		 $trActive.addClass('active');
		 return $trActive.data('record');
	 },
	 _buildBody: function(list,activeId,pageSize){
		 this._itemList = [];
		 var tbodySelector = 'tbody';
		 var $tbody = this._$table.find(tbodySelector);
		 $tbody.empty();
		 if(list.length <= 0){
			 var $itemEmpty = $(this._emptyTemplate);
			 $tbody.append($itemEmpty);
			 $itemEmpty.find('span').hide().fadeIn(1000);
			 pageSize--;
		 }
		 for(var i = 0;i < pageSize;i++){
			 if(i < list.length){
				 if(typeof(this._beforeAppend)=='function'){
					 this._beforeAppend(list[i]);
				 }
				 var $item = $($.formatStr(this._itemView,list[i]));
				 $item.data('record',list[i]);
				 if(i%2 != 0)
					 $item.addClass('tr-odd');
				 if(activeId && list[i].id == activeId){
					 this.setActive($item);
				 }
				 $item.hover(
					 function(){
						 $(this).addClass('rs-hover');
					 },
					 function(){
						 $(this).removeClass('rs-hover');
					 }
				 );
				 if(typeof(this._append)=='function'){
					 if(this._append($item,list[i])){
						 $tbody.append($item);
					 }
				 }else{
					 $tbody.append($item);
				 }
				 this._itemList.push({item:$item,record:$.cloneData(list[i])});
			 }else{
				 var $emptyLine = $($.formatStr('<tr><td colspan={text:colspan}><div style="width: 30px;height: 30px;"></div></td></tr>',{colspan:this._maxColspan}));
				 if(i % 2 != 0){
					 $emptyLine.addClass('tr-odd');
				 }
				 $tbody.append($emptyLine);
			 }
		 }
	 },
	 _buildFoot: function(sizeInfo){
		 if(sizeInfo.hide){
			 this._$pagePanel.hide();
			 return;
		 }else{
			 this._$pagePanel.show();
		 }
		 page = Number(sizeInfo.page);
		 pageSize = Number(sizeInfo.pageSize);
		 maxPage = Number(sizeInfo.maxPage);
		 maxSize = Number(sizeInfo.maxSize);
		 if(maxPage==0)
			 maxPage = 1;
		 
		 var startPage = page - 5;
		 var endPage = page + 5;
		 if(startPage<1){
			 endPage = endPage - startPage;
			 startPage = 1;
		 }
		 if(endPage > maxPage){
			 endPage = maxPage;
		 }
		 
		 this._$pageContainer.empty();
		 var item;
		 var thisTableList = this;
		 if(page>1){
			 item = $('<button class="btn btn-default page-default" targetPage="'+1+'"><a href="javascript:void(0);">首页</a></button>');
			 item.click(function(){
				 var targetPage = $(this).attr('targetPage');
				 thisTableList.load(Number(targetPage),thisTableList._getQueryFormData());
			 });
			 this._$pageContainer.append(item);
			 var prePage = page - 1;
			 item = $('<button class="btn btn-default page-default" targetPage="'+prePage+'"><a href="javascript:void(0);">前页</a></button>');
			 item.click(function(){
				 var targetPage = $(this).attr('targetPage');
				 thisTableList.load(Number(targetPage),thisTableList._getQueryFormData());
			 });
			 this._$pageContainer.append(item);
		 }else{
			 item = $('<button class="btn btn-default page-disabled" disabled="disabled"><a href="javascript:void(0);">首页</a></button>');
			 this._$pageContainer.append(item);
			 item = $('<button class="btn btn-default page-disabled" disabled="disabled"><a href="javascript:void(0);">前页</a></button>');
			 this._$pageContainer.append(item);
		 }
		 for(var i=startPage;i<endPage+1;i++){
			 var index = i;
			 if(page==index){
				 item = $('<button class="btn btn-default page-active" targetPage="'+index+'" title="刷新本页"><a href="javascript:void(0);">'+index+'</a></button>');
			 }else{
				 item = $('<button class="btn btn-default page-default" targetPage="'+index+'"><a href="javascript:void(0);">'+index+'</a></button>');
			 }
			 item.click(function(){
				 var targetPage = $(this).attr('targetPage');
				 thisTableList.load(targetPage, thisTableList._getQueryFormData());
			 });
			 this._$pageContainer.append(item);
		 }
		 if(page<maxPage){
			 var nextPage = page + 1;
			 item = $('<button class="btn btn-default page-default" targetPage="'+nextPage+'"><a href="javascript:void(0);">后页</a></button>');
			 item.click(function(){
				 var targetPage = $(this).attr('targetPage');
				 thisTableList.load(targetPage, thisTableList._getQueryFormData());
			 });
			 this._$pageContainer.append(item);
			 item = $('<button class="btn btn-default page-default" targetPage="'+maxPage+'"><a href="javascript:void(0);">末页</a></button>');
			 item.click(function(){
				 var targetPage = $(this).attr('targetPage');
				 thisTableList.load(targetPage, thisTableList._getQueryFormData());
			 });
			 this._$pageContainer.append(item);
		 }else{
			 item = $('<button class="btn btn-default page-disabled" disabled="disabled"><a href="javascript:void(0);">后页</a></button>');
			 this._$pageContainer.append(item);
			 item = $('<button class="btn btn-default page-disabled" disabled="disabled"><a href="javascript:void(0);">末页</a></button>');
			 this._$pageContainer.append(item);
		 }
		 //跳页
		 var $fromGotoPage = $('<form>第<input class="gotoPageValue" type="text" value="'+page+'"/>页/'+maxPage+'页 共'+maxSize+'条 '+pageSize+'条/页<button type="submit" style="display:none;"></button></form>');
		 $fromGotoPage.find("input:text").keyup(function(e){
			 this.value=this.value.replace(/\D/g,'');
		 });
		 $fromGotoPage.find('input:text').attr('onafterpaste',function(e){
			 this.value=this.value.replace(/\D/g,'');
		 });
		 $fromGotoPage.submit(function(e){
			 e.preventDefault();
			 var targetPageStr = $fromGotoPage.find('input.gotoPageValue').val();
			 thisTableList.load(Number(targetPageStr),thisTableList._getQueryFormData());
		 });
		 
		 this._$paginationInfo.empty().append($fromGotoPage);
	 },
	 buildList: function(list,sizeInfo,activeId){
		 this._buildBody(list,activeId,sizeInfo.pageSize);
		 this._buildFoot(sizeInfo);
	 },
	 remove: function($item,doRemove){
		 $item.addClass('danger');
		 rs.ui.showConfirm(
			'确实要删除吗？删除后将无法恢复',
			function(){
				if(typeof(doRemove)=='function'){
					doRemove(function(){
						$item.removeClass('danger');
					});
				}
			},
			function(){
				$item.removeClass('danger');
			}
		 );
	 },
	 clearData: function(){
		 var $tbody = this._$table.find('tbody');
		 $tbody.empty();
		 var $itemEmpty = $(this._emptyTemplate);
		 $tbody.append($itemEmpty);
		 $itemEmpty.find('span').hide().fadeIn(1000);
	 },
	 _getQueryFormData: function(){
		 if(this._$queryForm){
			 return JSON.stringify($.getFormData(this._$queryForm));
		 }else{
			 return '{}';
		 }
	 },
	 setQueryForm: function(formSelector){
		 var thisTableList = this;
		 this._$queryForm = $(formSelector);
		 this._$queryForm.submit(function(e){
			 e.preventDefault();
			 thisTableList.load(1);
		 });
		 
	 },
	 eachItem: function(eachItemCallback){
		 for(var i=0;i<this._itemList.length;i++){
			 var $item = this._itemList[i].item;
			 var record = this._itemList[i].record;
			 eachItemCallback($item,record);
		 }
	 }
 };