

function obtainHeight() {
    navBarHeight = String(document.getElementById("navbar").offsetHeight + "px") 
    return document.getElementById("menu-items").style.top = navBarHeight;
}


function showMenu() {
    document.getElementById("menu-items").style.display = "block";
    document.getElementById("bars-menu").style.display = "none";
    document.getElementById("close-menu").style.display = "block"
    obtainHeight();
    document.getElementById("donate").style.top = "50vh"
    if (window.matchMedia("(min-width: 990px)").matches ) {
        document.getElementById("bars-menu").style.display = "none";
        document.getElementById("close-menu").style.display = "none";
    } 
}

function hideMenu() {
    document.getElementById("menu-items").style.display = "none";
    document.getElementById("close-menu").style.display = "none";
    document.getElementById("bars-menu").style.display = "block";
    document.getElementById("donate").style.top = "40vh";

}


function overlayTop() {
    let top = obtainHeight();
    return document.getElementById("phrase").style.top = top;

}

window.onload = overlayTop();




