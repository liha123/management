function $(str){   //id  class tagname
    if(str.charAt(0) == "#"){
        return document.getElementById(str.substring(1));
    }else if(str.charAt(0) == "."){
        return document.getElementsByClassName(str.substring(1));
    }else{
        return document.getElementsByTagName(str);
    }
}
window.onload = function(){
    //显示登录页面
    $("#login").onclick = function(){
        $(".login")[0].style.display = "block";
    }
    //跳转到注册页面
    $("#register").onclick = function(){
        $(".lgform")[0].style.display = "none";
        $(".regform")[0].style.display = "block";
    }
    //跳转到登录
    $("#tologin").onclick = function(){
        $(".lgform")[0].style.display = "block";
        $(".regform")[0].style.display = "nonde";
    }
    //关闭登录页面
    $("#close").onclick = function(){
        $(".login")[0].style.display = "none";
    }
}
