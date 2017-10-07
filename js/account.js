window.onload=function (){
	var btnLogin=document.getElementById("login-btn");
	btnLogin.onclick=function(){
		var xhr=new XMLHttpRequest();
		xhr.open();
		return false;
	}
	var btnRegister=document.getElementById("register-btn");
	btnRegister.onclick=function(){
		alert("注册成功")
		return false;
	}
}