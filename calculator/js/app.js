const btn = document.getElementById('controlBTN');
const url = "https://api.darksky.net/forecast/02b86612fcea611e7d83029fad21b241/52.15,21"

function httpGet(theUrl)
{
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", theUrl, false ); // false for synchronous request
    xmlHttp.send( null );
    return xmlHttp.responseText;
}


var getData = function(){

  alert("I got no data" + httpGet(url));
}


btn.addEventListener('click', getData);
