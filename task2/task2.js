
//加载函数
function addLoadEvent(func){
	var oldonload=window.onload;
	if(typeof window.onload!="function"){
		window.onload=func;
	}else{
		window.onload=function(){
			oldonload();
			func();
		}
	}
}

//手机验证
function mobileValidate(){
	var mobile=document.getElementById('mobile');
	var reg=/^1[3|4|5|8]\d{9}$/g;
	if(!(reg.test(mobile.value)))
	{
		return false;
	}else{	
		return true;
	}

}
//验证用户名
function nameValidate(){
	var reg=/\b([A-Za-z]{3}\s){2}[A-Za-z]+$/;
	var name=document.getElementById('name');
	if(!(reg.test(name.value))){
		return false;
	}
	else{
		return true;
	}
}


//表单提交
function formValidate(){
	mobileValidate();
	nameValidate();
	if( mobileValidate()!=1){
 		alert("手机号格式输入错误，请重新输入！");
 		return false;
 	}
 	if( nameValidate()!=1){
 		alert("用户名格式输入错误，请重新输入！");
 		return false;
 	}
 	if(mobileValidate()=1 && ameValidate()=1){
 		alert('提交成功');
	}
	
}








