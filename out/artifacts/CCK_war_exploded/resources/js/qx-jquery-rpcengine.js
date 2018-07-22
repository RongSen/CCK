var BasePath = $("base").attr("href");

var RpcAjax = {
	interactionStartTime: 0,//第一个操作的开始时间
	delayTime: 1000,//所有操作1秒内未完成则要显示“正在交互数据，请稍候...”
	interactionBean: {},
	interactionCount: 0,
	interactionFlag: {},
	init: function(){
		this.interactionCount = 0;
		this.interactionFlag = $("<div class='interactionFlag'>\
			<img src='"+BasePath+"images/interacting.gif' align='absmiddle'/>\
			<label>正在交互数据，请稍候...</label>\
		</div>");
		$("body").append(this.interactionFlag);
	},
	service: function(beanName,methodName,args,sCallback,eCallback){
		var innerRpcAjax = this;
		
		var beanAction = beanName+"/"+methodName;
		if(!this.interactionBean[beanAction]){//检查是否有前一个rpc还没执行完，后一个同名rpc又启动的情况，主要防止重复提交
			if(this.interactionStartTime==0){
				var startTime = new Date();
				this.interactionStartTime = startTime.getTime();
				setTimeout(
					function(){
						if(innerRpcAjax.interactionStartTime>0)
							innerRpcAjax.interactionFlag.show();
					},
					innerRpcAjax.delayTime
				);
			}
			this.interactionBean[beanAction] = true;
			this.interactionCount++;
		}else{
			ui.showDialog("正在执行操作，请稍候...","qx-normal");//(操作名："+beanAction+")
			return;
		}
		
		var params = {};
		for(var i=0;i<args.length;i++){
			if(typeof(args[i])!="function"){
				params["p"+i] = args[i];
			}
		}
		
		var options = {
			url: BasePath+"rpcAction/"+beanName+"/"+methodName,
			type: "post",
			data: params,
			dataType: "text",
			timeout: 120*1000,
			global: true,
			contentType: "application/x-www-form-urlencoded; charset=UTF-8",
			success: function(responseText,xhrCode){
				innerRpcAjax.interactionBean[beanAction] = undefined;
				innerRpcAjax.interactionCount--;
				if(innerRpcAjax.interactionCount<=0){
					innerRpcAjax.interactionStartTime = 0;
					innerRpcAjax.interactionFlag.hide();
				}
				
				var response = JSON.parse(responseText);
				if(response.type=="RequireLoginException"){
					ui.showLoginDialog(
						function(){
							RpcAjax.service(beanName,methodName,args,sCallback,eCallback);
						}
					);
				}else if(response.type=="NotLoginException"){
					$.redirectTo(response.data);
				}else if(response.type=="Exception"){
					ui.showDialog(response.data,"qx-error");
					if(typeof(eCallback)=="function")
						eCallback();
				}else if(response.type=="Message"){
					if(typeof(sCallback)=="function"){
						var dataText = response.data;
						var data = JSON.parse(response.data);
						sCallback(data);
					}
				}
			},
			error: function(xhr,xhrCode,xhrException){
				ui.showDialog("操作没有响应，可能是网络不通，请检查网络是否正常","qx-alert");
				innerRpcAjax.interactionStartTime = 0;
				innerRpcAjax.interactionBean = {};
				innerRpcAjax.interactionCount = 0;
				innerRpcAjax.interactionFlag.hide();
				if(typeof(eCallback)=="function")
					eCallback();
			},
			complete: function(xhr,xhrCode){
			},
			beforeSend: function(xhr){
			},
			async: true,
			processData: true,
			ifModified: false
		};
		$.ajax(options);
	}
};
RpcAjax.init();