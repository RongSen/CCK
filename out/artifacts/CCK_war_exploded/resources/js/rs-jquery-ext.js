/*!
 * jQuery Extention By John 
 * Release under the MIT,BSD, and GPL License
 */

//包的预定义函数
function MACRO_PACKAGE_DEFINE(packageName){
	var names = packageName.split(".");
	var currentPackage = null;
	for(var i = 0; i < names.length; i++){
		var name = names[i];
		if(i===0){
			if(!this[name])
				this[name] = {};
			currentPackage = this[name];
		}else{
			if(!currentPackage[name])
				currentPackage[name] = {};
			currentPackage = currentPackage[name];
		}
	}
}

/**
 * 用来验证数据有效性的正则表达式
 */
var regexEnum = {
	integer : {
		reg : /^-?\d+$/,
		msg : "正确的格式示例：-102、0、23、88"
	}, // 整数
	integerPositive : {
		reg : /^[0-9]*[1-9][0-9]*$/,
		msg : "正确的格式示例：23、88"
	}, // 正整数
	integerNonnegative : {
		reg : /^\d+$/,
		msg : "正确的格式示例：0、23、88"
	}, // 非负整数
	double : {
		reg : /^(-?\d+)(\.\d+)?$/,
		msg : "正确的格式示例：-182.23、-97、0、25、33.15"
	}, // 浮点数
	doublePositive : {
		reg : /^(([0-9]+\.[0-9]*[1-9][0-9]*)|([0-9]*[1-9][0-9]*\.[0-9]+)|([0-9]*[1-9][0-9]*))$/,
		msg : "正确的格式示例：25、33.15"
	}, // 正浮点数
	doubleNonnegative : {
		reg : /^\d+(\.\d+)?$/,
		msg : "正确的格式示例：0、25、33.15"
	}, // 非负浮点数
	date : {
		reg : /^((?:19|20)\d\d)-(0[1-9]|1[012])-(0[1-9]|[12][0-9]|3[01])$/,
		msg : "正确的格式示例：2015-06-01"
	}// 日期
		
};

(function($){
	//格式化函数
	$.formatStr = function(str,obj){
		function replaceWithPattern(str,obj,isText){
			str = str.toString();
			var pattern = /(\{text:(.*?)\})/;
			if(!isText)
				pattern = /(\{html:(.*?)\})/;
			var tmpStr = str;
			var match = pattern.exec(tmpStr);
			while(match){
				if(obj[match[2]]){
					var s = String(obj[match[2]]);
					if(isText){
						s = s.replace(/</g, '&lt;');
						$ = s.replace(/>/g, '&gt;');
					}
					str = str.replace(match[1],s);
				}else if(String(obj[match[2]])=='0'){
					str = str.replace(match[1],'0');
				}else{
					str = str.replace(match[1],'');
				}
				tmpStr = tmpStr.replace(pattern,'');
				match = pattern.exec(tmpStr);
			}
			return str;
		}
		str = replaceWithPattern(str,obj,true);
		str = replaceWithPattern(str,obj,false);
		return str;
	};
	$.getUUID = function(){
		var s = [];
		var hexDigits = '0123456789ABCDEF';
		for(var i = 0; i < 32; i++){
			s[i] = hexDigits.substr(Math.floor(Math.random() * 0x10),1);
		}
		s[12] = "4";
		s[16] = hexDigits.substr((s[16] & 0x3) | 0x8, 1);
		var uuid = s.join("");
		return uuid;
	};
	$.copy = function(desObj,srcObj){
		for(var element in srcObj){
			desObj[element] = srcObj[element];
		}
	};
	$.cloneData = function(data){
		var dataStr = JSON.stringify(data);
		return JSON.parse(dataStr);
	};
})(jQuery);