//selecting saidnavebar , menuIcon

var saidnavebar=document.getElementById("saidnav")
var menuIcon=document.getElementById("menuIcon")
var closnav=document.getElementById("close-nav")
menuIcon.addEventListener("click",function(){
    saidnavebar.style.right=0
})

closnav.addEventListener("click",function(){
saidnavebar.style.right= "-50%"
})