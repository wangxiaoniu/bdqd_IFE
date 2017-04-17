
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
	var reg=/^1[3|4|5|8][0-9]\d{8}$/g;
	if(!(reg.test(mobile.value))){
		
		return false;
	}else{
		
		return true;
	}

}

//表单提交
function formValidate(){
	mobileValidate();

	if( mobileValidate()!=1 ){
 		alert("输入有误，请重新检查");
 		return false;
 	}else{
 		alert('提交成功');

	}
	
}








