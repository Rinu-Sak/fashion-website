var menuBtn = document.getElementById("menu-btn")
var sideNav = document.querySelectorAll('#sideNav')
var menu = document.getElementById("menu")

sideNav.style.right = "-250px";

menuBtn.onclick = function(){
    if(sideNav.style.right == "-250px"){
        sideNav.style.right = "0";

    }
    else{
        sideNav.style.right = "-250px";

    }
}