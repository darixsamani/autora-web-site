
var menuBtn=document.getElementsByClassName("fi-xnsux3-three-bars-solid");

var menuBar=document.getElementsByClassName("ul-nav");

menuBtn.onClick = function(){

    if(menuBar.style.display!="none"){
        menuBar.style.display="none";
    }
    menuBar.style.display="inline";
}


