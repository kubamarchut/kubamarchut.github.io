const empty =[".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".","."]
function menuSlide() {
    var menulink = document.getElementsByClassName('hamburger')[0];
    var menu = document.getElementsByClassName("menu")[0];
        menu.classList.toggle('open');
        document.getElementById("container").classList.toggle("open");
        menulink.classList.toggle('pressed');
}
// Opening Colorbox
function openBox(a){
    var c = a.nextSibling;
    c.classList.toggle("open");
}
// Stopwatch
var min = 0;
var sek = 0;
function count(){
    var clock = document.getElementsByClassName("clock")[0];
    sek++;
    if (sek<10) sek="0"+sek;
    if(sek == 60)   {
        min++;
        sek="00";
    }
    time = min+":"+sek;
	clock.innerHTML=time;
	setTimeout("count()",1000);
}
count();

// Color theme changing
function changeColor(color){
    let root = document.documentElement;
    switch(color){
        case "green":
            root.style.setProperty('--main-bg-color', "#041400");
            root.style.setProperty('--main-txt-color', "#5CA049");
            root.style.setProperty('--fab-color', "#3C8429");
            root.style.setProperty('--highlight-color', "#1F590F");
            root.style.setProperty('--hover-color', "#A0DB8E");
            break;
        case "raspberry":
            root.style.setProperty('--main-bg-color', "#f2cbd0");
            root.style.setProperty('--main-txt-color', "#880d1e");
            root.style.setProperty('--fab-color', "#dd2c44");
            root.style.setProperty('--highlight-color', "#f26a7c");
            root.style.setProperty('--hover-color', "#f49ca8");
            break;
        case "blue":
            root.style.setProperty('--main-bg-color', "#d4dcf7");
            root.style.setProperty('--main-txt-color', "#273a77");
            root.style.setProperty('--fab-color', "#2d4dc4");
            root.style.setProperty('--highlight-color', "#93abff");
            root.style.setProperty('--hover-color', "#5e80f9");
            break;
        case "beige":
            root.style.setProperty('--main-bg-color', "#f7d7d7");
            root.style.setProperty('--main-txt-color', "#724141");
            root.style.setProperty('--fab-color', "#724141");
            root.style.setProperty('--highlight-color', "#e0a6a6");
            root.style.setProperty('--hover-color', "#ffffff");
            break;
        case "violet":
            root.style.setProperty('--main-bg-color', "#eab9e6");
            root.style.setProperty('--main-txt-color', "#42033d");
            root.style.setProperty('--fab-color', "#680d60");
            root.style.setProperty('--highlight-color', "#b778b2");
            root.style.setProperty('--hover-color', "#8c2383");
            break;
        case "darkblue":
            root.style.setProperty('--main-bg-color', "#1a1e26");
            root.style.setProperty('--main-txt-color', "#487CE2");
            root.style.setProperty('--fab-color', "#03256C");
            root.style.setProperty('--highlight-color', "#2552B2");
            root.style.setProperty('--hover-color', "#14409e");
            break;
		case "black":
            root.style.setProperty('--main-bg-color', "#090a0c");
            root.style.setProperty('--main-txt-color', "#e5e9ec");
            root.style.setProperty('--fab-color', "#c7c9c5");
            root.style.setProperty('--highlight-color', "#3C3D3F");
            root.style.setProperty('--hover-color', "#ACAEB0");
            break;
    }
    setCookie("color", color, 2);
}
function readColor(){
    console.log(getCookie("color"));
    if (getCookie("color") != ""){
        changeColor(getCookie("color"));
    }
}
function openModal(i){
    menuSlide();
    var modalTemp = document.getElementsByClassName("modal")[i];
    modalTemp.classList.toggle("open");
}
readColor();