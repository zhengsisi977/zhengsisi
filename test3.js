   // tab切换
    window.onload = function(){  
        var login = document.getElementById("login");  
        var Ul = login.getElementsByTagName("ul")[0];  
        var Lis = Ul.getElementsByTagName("li");  
        var Forms= login.getElementsByTagName("form");  
        for(var i= 0;i < Lis.length;i++){  
            Lis[i].index = i;  
            Lis[i].onclick = function() {  
                for(var n= 0;n< Lis.length ;n++){  
                    Lis[n].className = "off";  
                    Forms[n].className = "hide";  
                }  
                this.className = "on";  
                Forms[this.index].className = "show";  
            }  
        };  
    } 
	function login(){
		alert("登录成功");
	}
