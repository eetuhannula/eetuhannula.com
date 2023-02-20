// Menu overlay on click (NOT IN USE, IMPLEMENTED BETTER TO MY LIKING WITH PURE CSS)
var menustate = false; 
const menu = document.getElementById('menu-overlay');
const menubutton = document.getElementById('navigation-button');

function menuClick() {
 
    if (menustate == false) {
        menu.style.top = "0";
        menu.style.left = "0";
        menu.style.opacity = "1";
        menu.style.transform = "rotate(360deg)";

        menustate = true;
    }
    else if (menustate == true) {
        menu.style.top = "-100%";
        menu.style.left = "-100%";
        menu.style.opacity = "0";
        menu.style.transform = "rotate(0deg)";
        
        menustate = false;
    }
    
    
}