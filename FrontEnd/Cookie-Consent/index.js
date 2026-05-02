const popUp = document.querySelector(".pop-up");
const toggleTheme = document.getElementById("toggle-btn");
const switchBtn = document.querySelector(".switch");

const acceptBtn = document.querySelector(".accept.btn");
const declineBtn = document.querySelector(".decline.btn");

const toggle = false;
let isAllowed = null;

const setCookies = (cname,value) =>{
    document.cookie = cname + "="+value+";"+"max-age=600;path=/";
}

const getCookies = (cname) =>{
    let name = cname + "=";

    let decodeCookie = decodeURIComponent(document.cookie);

    let cookies = decodeCookie.split(";");

    for(let i = 0; i<cookies.length; i++){
        let cookie = cookies[i];

        while(cookie.charAt(0) == ' '){
            cookie = cookie.substring(1);
        }


        if(cookie.indexOf(name) == 0){
            return cookie.substring(name.length, cookie.length);
        }
    }

    return null;
}

document.addEventListener('DOMContentLoaded', ()=>{

    console.log(getCookies("theme"));
    if(document.cookie == ""){
        popUp.style.display = "flex";
    }

    else{
        isAllowed = getCookies("consent");

        if(isAllowed == "true"){
            let theme = getCookies("theme");
            if(theme === "dark"){
                toggleTheme.checked = true;
            }

            else if(theme === "light"){
                toggleTheme.checked = false;
            }
        }

        else{
            toggleTheme.checked = false;
        }

    }
});

switchBtn.addEventListener('click', ()=>{
    if(document.cookie == ""){
        popUp.style.display = "flex";
    }

    else{
        if(isAllowed == "true"){
            console.log("true");
            if(toggleTheme.checked){
                 setCookies("theme","dark");
            }
            else{
                 setCookies("theme","light");
            }
           
        }
    }
})

acceptBtn.addEventListener('click', ()=>{
    setCookies("consent", "true");
    popUp.style.display = "none";
})

declineBtn.addEventListener('click', ()=>{
    setCookies("consent", "false");
    popUp.style.display = "none";
})