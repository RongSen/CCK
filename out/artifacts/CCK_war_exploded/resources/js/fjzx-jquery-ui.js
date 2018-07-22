var BasePath = $("base").attr("href");
var ui = {
	zIndexForAllDialogs: 100,
	//检查HTML元素的有效性
	validateElement: function($form){
		var $input = $form.find('input[type=button],input[type=submit],input[type=reset],select');
		if($input.size > 0){
			alert('本框架不支持如下元素：\ninput[type=button]\ninput[type=submit]\ninput[type=reset]\nselect\n\n请使用如下元素：\nbutton\nbutton[type=submit]\nbutton[type=reset]\nrs-select');
		}
	},
	//检查选择器的唯一性
	checkSelectorUnique: function(selector,containerSelector){
		if(containerSelector){
			var $containerSelector = $(containerSelector);
			if($containerSelector.size <= 0){
				alert('容器"' + containerSelector + '"不存在');
			}
			if($containerSelector.size > 0){
				alert('容器"' + containerSelector + '"存在个数大于1');
			}
			
			var $selector = $containerSelector.find(selector);
			if($selector.size() <= 0){
				alert('容器"' + containerSelector + '"的元素"' + selector + '"不存在');
			}
			if($selector.size() > 1){
				alert('容器"' + containerSelector + '"的元素"' + selector + '"存在个数大于1')
			}
		}else{
			var $selector = $(selector);
			if($selector.size <= 0){
				alert('元素"' + selector + '"不存在');
			}
			if($selector.size > 1){
				alert('元素"' + selector + '"存在个数大于1');
			}
		}
	},
	//检查给定变量是不是合法的函数变量
	checkValidFunction: function(callback){
		if(typeof(callback)!='function')
			alert('不是合法的函数');
	},
	//通用消息弹出框
	showMessageCommon: function(message,messageType,title,onCloseCallback){
		if(onCloseCallback){
			this.checkValidFunction(onCloseCallback);
		}
		if(!message){
			alert('ui.alert方法调用不正确，正确格式如下：\nui.alert(message,["text"|"html"],[title]);');
			return;
		}
		
		var $dialog = $('<div class="modal fade" role="dialog" aria-labelledby="editDialog" aria-hidden="true">\
		    <div class="modal-dialog">\
				<div class="modal-content">\
					<div class="modal-header">\
						<button type="button" class="close" aria-hidden="true">&times</button>\
						<h3 class="modal-title"></h3>\
					</div>\
					<div class="modal-body"></div>\
				    <div class="modal-footer buttonPanel">\
				        <button class="rs-prog-close btn btn-default" aria-hidden="true">知道了</button>\
				    </div>\
				</div>\
			</div>\
		</div>');
		$('body').append($dialog);
		
		if(!messageType || messageType==='text'){
			$dialog.find('.modal-body').text(message);
		}else if(messageType==='html'){
			$dialog.find('.modal-body').html(message);
		}else if(messageType){
			alert('无法识别的type参数，应为"text"或者"html"');
			return;
		}
		$dialog.find('.modal-title').text(title);
		$dialog.find('.rs-prog-close').click(function(){
			$dialog.modal('hide').remove;
			if(onCloseCallback)
				onCloseCallback();
		});
		
		$dialog.modal({show:false,backdrop:'static', keyboard:false});
		$dialog.on('shown',function(){
			$dialog.find('button.close').focus();
		});
		$dialog.modal('show');
	},
	//提示框
	showMessage: function(message,onCloseCallback){
		ui.showMessageCommon(message,"text","提示",onCloseCallback);
	},
	//警告提示框
	showMessageWarning: function(message,onCloseCallback){
		var html = $.formatStr('<font color="red">{html:message}</font>',{message:message});
		ui.showMessageCommon(html,"html","警告",onCloseCallback);
	},
	//出错提示框
	showMessageError: function(message,onCloseCallback){
		var html = $.formatStr('<font color="red">{html:message}</font>',{message:message});
		ui.showMessageCommon(html,"html","出错了",onCloseCallback);
	},
	//确认框
	showConfirm: function(message,onConfirmCallback,onCancelCallback){
		if(!message || !onConfirmCallback){
			alert('ui.alert方法调用不正确，正确格式如下：\nui.alert(message,["text"|"html"],[title]);');
			return;
		}
		this.checkValidFunction(onConfirmCallback);
		if(onCancelCallback)
			this.checkValidFunction(onCancelCallback);

		var $dialog = $('<div class="modal fade" role="dialog" id="'+$.getUUID()+'" aria-labelledby="editDialog" aria-hidden="true">\
		    <div class="modal-dialog">\
				<div class="modal-content">\
					<div class="modal-header">\
						<button type="button" class="rs-prog-close close" aria-hidden="true">&times</button>\
						<h3 class="modal-title"></h3>\
					</div>\
					<div class="modal-body"></div>\
				    <div class="modal-footer buttonPanel">\
				        <button class="rs-prog-cancel btn btn-default" aria-hidden="true">取消</button>\
						<button class="rs-prog-ok btn btn-default" aria-hidden="true">确定</button>\
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
			onCancelCallback($dialog);
		});
		$dialog.find('.rs-prog-cancel').click(function(){
			$dialog.modal('hide').remove();
			onCancelCallback($dialog);
		});
		
		$dialog.modal({show:false, backdrop: 'tatic', keyboard: false});
		$dialog.on("shown",function(){
			$dialog.find("button.rs-prog-cancel").focus();
		});
		$dialog.modal('show');
	},
	//登陆框
	showLoginDialog: function(onLoginSuccessCallback){
		var $dialog = $('<div class="modal fade body-login" role="dialog" id="'+$.getUUID()+'" aria-labelledby="editDialog" aria-hidden="true">\
		    <div class="modal-dialog center-login">\
				<div class="modal-content panel-login">\
					<div class="modal-header">\
						<button type="button" class="rs-prog-close close" aria-hidden="true">&times</button>\
						<h3 class="modal-title"></h3>\
					</div>\
					<div class="modal-body panel-body">\
						<form id="loginForm" method="post" action="${basePath}admin/console.jsp">\
							<div class="fjzx-prog-message" style="color: red;font-size: 16px;margin: 15px 0px 20px 0px;text-align: center;">您没有登录或者登录已过期，请重新登录</div>\
							<div class="form-group">\
			                    <label>用户名</label>\
			                    <div class="input-group input-group-icon">\
			                        <input rs_field_name="loginId" name="loginName" type="text" class="form-control bk-noradius" />\
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
			                            <label for="RememberMe">记住密码</label>\
			                        </div>\
			                    </div>\
			                    <div class="col-sm-4 text-right">\
			                        <button href="index.html" type="submit" class="btn btn-primary hidden-xs">登陆</button>\
			                    </div>\
			                </div>\
			                <div class="login-others" style="display:none;">\
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
				            </div>\
			                <p class="text-center">还没有帐号？<a href="register.html"><small>注册</small></a></p>\
			            </form>\
					</div>\
				</div>\
			</div>\
		</div>');
		$('body').append($dialog);
		
		var $form = $dialog.find('form');
		$form.submit(function(e){
			e.preventDefault();
		});
		
		$dialog.modal({show:false,backdrop: 'static', keyboard: false});
		$dialog.on('shown',function(){
			$dialog.find('input[rs_field_name=loginId').focus();
		});
		$dialog.modal('show');
	},
	/**
	 * QueryForm、FormDialog在查询、新增提交、修改提交时会自动对数据进行验证
	 * 
	 * 自动验证数据类型（css类，用在input中）
	 * 
	 * rs-prog-string
	 * rs-prog-boolean
	 * rs-prog-integer 整数
	 * rs-prog-date 日期
	 * rs-prog-double 浮点数
	 * 
	 * rs-prog-integer-nonnegative 非负整数
	 * rs-prog-integer-positive 正整数
	 * rs-prog-double-nonnegative 非负浮点数
	 * rs-prog-double-positive 正浮点数
	 * 
	 * 自动验证数据约束（css类，用在input中）
	 * rs-prog-not-null 不可为空
	 * 
	 * 自动验证提示框使用到的属性
	 * rs_field_tip_name='代码序号'，用在input中
	 * 提示框提示验证结果的示例：
	 * 1、’代码序号'不可以为空
	 * 2、'代码序号'格式不正确，正确的格式示例：23，88
	 */
	//验证所有数据有效性
	validateDataType: function($container){
		//内部函数，验证一种数据有效性
		function validateDataTypeOne($container,cssClass,regexp){
			var $elms = $container.find('.' + cssClass);
			for(var i=0;i<$elms.size();i++){
				var $item = $($elms.get(i));
				var itemValue = $item.val();
				if(!itemValue)
					continue;
				if(!regexp.req.test(itemValue)){
					var msg = regexp.msg;
					var rsFieldTip = $item.attr('rs_field_tip_name');
					if(rsFieldTip)
						msg = '"'+rsFieldTip+'"格式不正确,' + msg;
					ui.showMessageError(msg,function(){
						$item.focus();
					});
					return false;
				}
			}
			return true;
		}
		
		var resultOk;
		
		resultOk = this.validateNotNull($container);
		if(!resultOk)
			return false;
		
		resultOk = validateDataTypeOne($container, 'rs-prog-integer', regexEnum.integer);
		if(!resultOk)
			return false;
		
		resultOk = validateDataTypeOne($container, 'rs-prog-integer-positive', regexEnum.integer);
		if(!resultOk)
			return false;
		
		resultOk = validateDataTypeOne($container, 'rs-prog-integer-nonnegative', regexEnum.integer);
		if(!resultOk)
			return false;
		
		resultOk = validateDataTypeOne($container, 'rs-prog-double', regexEnum.integer);
		if(!resultOk)
			return false;
		
		resultOk = validateDataTypeOne($container, 'rs-prog-double-positive', regexEnum.integer);
		if(!resultOk)
			return false;
		
		resultOk = validateDataTypeOne($container, 'rs-prog-double-nonegative', regexEnum.integer);
		if(!resultOk)
			return false;
		
		resultOk = validateDataTypeOne($container, 'rs-prog-date', regexEnum.integer);
		if(!resultOk)
			return false;
		
		return true;
	},
	//验证不可以为空
	validateNotNull: function($container){
		var $elms = $container.find('.rs-prog-not-null');
		for(var i=0;i<$elms.size();i++){
			var $item = $($elms.get(i));
			if($item.is(':text')||$item.is(':password')||$item.prop('tagName')=='TEXTAREA'){
				var itemValue = $item.val();
				if(!itemValue || itemValue==''){
					var msg = '不可以为空';
					var rsFieldTip = $item.attr('rs_field_tip_name');
					if(!rsFieldTip)
						continue;
					this.showMessageError(msg,function(){
						$item.focus();
					});
					return false;
				}
			}else if($item.is(':radio')||$item.is(':checkbox')){
				var rsFieldName = $item.find('rs_field_name');
				var $radioSet = $container.find('input[rs_field_name="'+rsFieldName+'"]:checked')
				if($radioSet.size()<=0){
					var msg = '不可以为空';
					var rsFieldTip = $item.attr('rs_field_tip_name');
					if(rsFieldTip)
						msg = '"'+rsFieldTip+'"' + msg;
					this.showMessageError(msg, function(){
						$item.focus();
					});
					return false;
				}
			}
		}
		return true;
	},
	//初始化带查询和分页的下拉select组件
	//rs-prog-component-select rs_select_type='CUSTOMER_TYPE' rs_select_field_name='createBy' (rs_field_name='createByName')
	initAllComponentSelect: function(){
		
	}
};

/**
 * 全局变量，判断ui是否处于FormDialog编辑模式，如果处于编辑模式，则尝试网页时会弹出提示
 */
ui.inEditing = false;

(function(){
	$(window).bind('beforeunload',function(){
		if(ui.inEditing){
			return '当前状态处于编辑状态';
		}
	});
})();

//列表生成
var TableList = function(selector,onCreateCallback){
	checkSelectorUnique(selector);
	this._containerSelector = selector;
	this._$container = $(selector);
	this._$table = $('<table class="table table-bordered table-striped table-condensed table-hover">\
			<thead><tr class="text-center"></tr></thead>\
			<tbody></tbody>\
			<tfoot><tr></tr></tfoot>\
		</table>\
		<div class="btn-toolbar" role="toolbar">\
			<div class="bk-margin-5 btn-group"></div>\
		</div>');
	this._$container.append(this._$table);
	this._page = 1;
	this._$queryForm = null;
	
	var tfootSelector = "div.btn-toolbar";
	checkSelectorUnique(tfootSelector,this._containerSelector);
	this._$tfoot = this._$table.find(tfootSelector);
	if(onCreateCallback == typeof('function')){
		onCreateCallback(this._$container);
	}
};
TableList.prototype = {
	//设置表格Header
	setColumns:function(array){
		var $headTr = this._$table.find('>thead>tr');
		for(var i=0;i<array.length;i++){
			$headTr.append('<th class="bk-bg-white-darker">'+array[i]+'</th>');
		}
		this._maxColumns = array.length;
		var colspan = {colspan:this._maxColumns};
		this._emptyTemplate = $.formatStr('<tr>\
				<td colspan="{text:column}" class="text-center"><span>没有符合条件的记录<span></td>\
			</tr>',colspan);
		this._$footContainer = this._$table.find('div.btn-group');
	},	
	//设置行
	setItemTemplate:function(itemTemplate){
		this._itemTemplate = itemTemplate;
	},
	//加载表格数据
	loadPage:function(loadDataCallback){
		this._loadDataCallback = loadDataCallback;
	},
	//重新加载表格数据
	reload:function(activeId){
		this.load(this._page,activeId);
	},
	//加载当前页
	load:function(page,activeId){
		this._page = page;
		this._loadDataCallback(page,this._setQueryFormData(),activeId);
	},
	appendItem:function(append,beforeAppend){
		this._append = append;
		this._beforeAppend = beforeAppend;
	},
	//清楚当前行样式
	_clearActive:function(){
		this._$table.find('tr.rs-active').removeClass('rs-active');
	},
	//设置点击行为当前，为该行记录添加样式
	setActive:function($item){
		this._clearActive();
		$item.addClass('rs-active');
	},
	//获取当前激活行的记录的ID
	getActiveId:function(){
		var $trActive = this._$table.find('tr.rs-active');
		if($trActive.size()>0){
			return $($trActive.get(0)).attr('rs-id');
		}
		$trActive = this._$table.find('tbody tr:first');
		$trActive.addClass('rs-active');
		
		return $trActive.attr('rs-id');
	},
	_buildBody:function(list,activeId){
		var tbodySelector = 'tbody';
		checkSelectorUnique(tbodySelector,this._containerSeletor);
		var $tbody = this._$table.find(tbodySelector);
		$tbody.empty();
		if(list.size<=0){
			var $itemEmpty = $(this._emptyTemplate);
			validateElement($itemEmpty);
			$tbody.append($itemEmpty);
			$itemEmpty.find('span').hide().fadeIn(1000);
		}
		for(var i=0;i<list.length;i++){
			if(typeof(this._beforeAppend)=='function'){
				this._beforeAppend(list[i]);
			}
			var $item = $($.formatStr(this._itemTemplate,list[i]));
			if(activeId && list[i].id==activeId){
				this.setActive($item);
			}
			validateElement($item);
			$item.hover(
				function(){},
				function(){}
			);
			$item.find('button').not('button btn').button();
			if(typeof(this._append)=='function'){
				if(this._append($item,list[i]))
					$tbody.append($item);
			}else{
				$tbody.append($item);
			}
		}
	},
	_buildFoot:function(list,sizeInfo){
		if(!sizeInfo){
			this._$tfoot.hide();
			return;
		}else{
			this._$tfoot.show();
		}
		
		page = Number(sizeInfo.page);
		pageSize = Number(sizeInfo.pageSize);
		maxPage = Number(sizeInfo.maxPage);
		maxSize = Number(sizeInfo.maxSize);
		if(maxPage==0)
			maxPage = 1;
		this._$footContainer.empty();
		
		var thisTableList = this;
		var itemTemplate = '<button class="btn btn-default" targetPage="{text:toPage}">{text:name}</button>';
		
		for(var i=0;i<list.length;i++){
			var $item = $($.formatStr(itemTemplate,list[i]));
			if(list[i].toPage){
				$item.click(function(){
					var targetPage = Number($(this).attr("targetPage"));
					thisTableList.load(targetPage,thisTableList._getQueryFormData());
				});
				if(list[i].toPage==page){
					$item.addClass("btn-primary");
					$item.addClass("rs-page-current");
				}else{
					$item.addClass("btn-default");
				}
			}else
				$item.addClass("disable");
			this._$footContainer.append($item);
		}
		var pageSizeInfo = $("<button class='rs-page-common rs-page-info'><a href='javascript:void(0);'>每页"+pageSize+"条/共有"+maxSize+"条</a></button>");
		this._$footContainer.append(pageSizeInfo);
	},
	buildList:function(list,sizeInfo,activeId){
		this._buildBody(list, activeId);
		if(sizeInfo.maxSize==0)
			sizeInfo.maxPage = 1;
		
		var list = [];
		if(sizeInfo.page==1){
			list.push({name:"首页",toPage:0});
			list.push({name:"上一页",toPage:0});
		}else{
			list.push({name:"首页",toPage:1});
			list.push({name:"上一页",toPage:sizeInfo.page-1});
		}
		
		var start = sizeInfo.page-10;
		if(start<10)
			start = 1;
		var end = sizeInfo.page+10;
		if(end>sizeInfo.maxPage)
			end = sizeInfo.maxPage;
		for(var i=start;i<=end;i++){
			list.push({name:String(i),toPage:String(i)});
		}
		
		if(sizeInfo.page==sizeInfo.maxPage){
			list.push({name:"下一页",toPage:0});
			list.push({name:"末页",toPage:0});
		}else{
			list.push({name:"下一页",toPage:sizeInfo.page+1});
			list.push({name:"末页",toPage:sizeInfo.maxPage});
		}
		this._buildFoot(list,sizeInfo);
	},
	remove:function($item,doRemove,msg){
		
	},
	clearData:function(){
		
	},
	_getQueryFormData: function(){
		if(this._$queryForm){
			return JSON.stringify($.getFormData(this._$queryForm));
		}else{
			return "{}";
		}
	},
	_setQueryFormData:function(formSelector){
		
	},
	setQueryForm:function(formSelector){
		
	}
	
};
