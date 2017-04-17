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
//取消浏览器默认右键行为
document.oncontextmenu=function(){
	return false;
}

//捕获鼠标按键事件
function getButton(evt){
	var e=evt||window.event;
	if(evt){
		return e.button;
	}else if(window.event){
		switch(e.button){
			case 1:
			return 0;
			case 4:
			return 1;
			case 2:
			return 2;
		}
	}
}
//鼠标右键
function mouseDown(){
	var menu=document.getElementById('menu');
	menu.style.display="none";
	document.onmouseup=function(evt){
		if(getButton(evt) == 2){
			menu.style.display="block";
		}
	}
}

//菜单点击弹出名称
function getMenuName(){
	var menu=document.getElementById('menu');
	var a=menu.querySelectorAll('a');
	for(var i=0;i<a.length;i++){
		a[i].onclick=function(){
			alert(this.innerHTML);
		}
	}
}

function getCoordinate(){
	var div=document.getElementById('box');
	EventUtil.addHandlder(div,'click',function(event){
		event=
	})
}
// 加载函数
addLoadEvent(mouseDown);
addLoadEvent(getMenuName);

