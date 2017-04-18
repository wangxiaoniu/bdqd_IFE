
var mobile=document.getElementById('mobile');
var username=document.getElementById('name');
//手机验证
function mobileValidate(){
	var reg=/^1[3|4|5|8]\d{9}$/g;
	if(mobile.value == ""){
		alert("不能为空!");
		return false;
	}
	else if(!(reg.test(mobile.value)))
	{
		alert("手机号格式输入错误，请重新输入！");
		return false;
	}else{	
		alert("正确");
	}

}
//验证用户名
function nameValidate(){
	var reg=/\b([A-Za-z]{3}\s){2}[A-Za-z]+$/;
	if(username.value == ""){
		alert("不能为空!");
		return false;
	}
	else if(!(reg.test(username.value))){
		alert("用户名格式输入错误，请重新输入！");
		return false;
	}
	else{
		alert("正确");
	}
}

mobile.onblur=mobileValidate;
username.onblur=nameValidate;











