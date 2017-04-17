//加载函数
function addLoadEvent(func){
	var oldonload=window.onload;
	if(typeof window.onload != 'function'){
			window.onload=func;
		}
	else{
			window.onload=function(){
			oldonload();
			func();
		}
	}
}

//取消浏览器默认右键行为,加自定义菜单
function Oevent(){
	document.oncontextmenu=function(evt){
		var menu=document.getElementById('menu');
		var e = evt || event;
		menu.style.display = "block";
		//让自定义菜单随鼠标的箭头位置移动,
		//clientX 事件属性返回当事件被触发时鼠标指针向对于浏览器页面（或客户区）的水平坐标。
		//clientY 事件属性返回当事件被触发时鼠标指针向对于浏览器页面（或客户区）的垂直坐标。
		menu.style.left=e.clientX+"px";
		 menu.style.top = e.clientY + "px";
		 //默认右键菜单屏蔽掉，必须放在后面，放在前面自定义菜单也不会显示出来
		return false;	
	}
}

//自定义菜单消失
var handler =function(){
	var menu=document.getElementById('menu');
	menu.style.display = "none";
}
//兼容ie浏览器的点击document事件
function documentAdd(){
	if(document.addEventListener){
		document.addEventListener('click',handler)	
	}else if(document.attachEvent){
		//IE没有addEventlistener,有attachEvent,兼容ie写法
		document.attachEvent('onclick',handler)
	}
}

//菜单点击弹出名称
function getMenuName(){
	var menu=document.getElementById('menu');
	if(menu.querySelectorAll != null){
		var a=menu.querySelectorAll('a');
	}else{
		//其实只有这个就可以都兼容ie和其他现代浏览器了
		var a=document.getElementsByTagName('a');
	}
	for(var i=0;i<a.length;i++){
		a[i].onclick=function(){
			alert(this.innerHTML);
		}
	}
}

// 加载函数
addLoadEvent(Oevent);
addLoadEvent(getMenuName);
addLoadEvent(documentAdd);



