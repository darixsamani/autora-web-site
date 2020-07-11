
var menuBtn=document.getElementById("menu-btn");

var menuBar=document.getElementById("menu-bar");

var menu=document.getElementById("top-bar");
/*
if(menuBar.className==="none"){
    menuBar.setAttribute( "class", "ul-nav");
    menuBar.style.zIndex="2";
    menuBar.style.position="absolute";
    menuBar.style.top="130px";
    menuBar.style.width="100%";
    console.log( "change 1" );
}else{
    menuBar.setAttribute( "class", "none");
    console.log( "change 2" );
}
*/
menuBtn.onclick = function(){
    
}

function myFunction(x) {
    if (x.matches) { // If media query matches
        //document.body.style.backgroundColor = "yellow";
        menuBar.style.visibility = "hidden" ;
    } else {
        menuBar.style.visibility = "visible" ;
        menuBar.style.height = "0px";
        //munuBar.style.zIndex = "2";
        //document.body.style.backgroundColor = "pink";

        menuBtn.onclick = function()
            {
                if(menuBar.style.visibility === "visible"){
                    menuBar.style.visibility = "hidden" ;
                    menuBar.style.height = "0px";

                }
                else{
                    menuBar.style.visibility = "visible";
                    menuBar.style.height = "100%" ;
                    menuBar.style.zIndex = "3";
                }
            }
    }
}

var x = window.matchMedia("(max-width: 870px)")
myFunction(x) // Call listener function at run time
x.addListener(myFunction) // Attach listener function on state changes 