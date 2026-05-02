const nameInput = document.getElementById('name');
const email = document.getElementById('email');
const password = document.getElementById('password');
const confirm_pass = document.getElementById('confirm_password');
const nameText = document.querySelector('.name-text');
const emailText = document.querySelector('.email-text');
const passText = document.querySelector('.password-text');
const percentage = document.querySelector('.percentage');
const errorText = document.createElement('p');
const form = document.querySelector('form');
const progressCircle = document.querySelector('.progress-circle');
const showPass = document.querySelector(".show-pass");
const notVisible = document.querySelector(".not-show");
const visible = document.querySelector(".show");
const passContainer = document.querySelector(".confirm.password-container");
const confirmShowPass = document.querySelector(".confirm.show-pass");
const confirmNotVisible = document.querySelector(".confirm.not-show");
const confirmVisible = document.querySelector(".confirm.show");

errorText.textContent = "Password must be the same";
errorText.style.margin = 0;
errorText.style.fontSize = "11px";
errorText.style.color = "red";
let isVisible = false;
let confirmIsVisible = false;
const updateProgess = ()=>{

    let progress  = 0;
    if(nameInput.value.trim() !== ""){
        nameText.style.textDecorationStyle = "dashed";
        nameText.style.textDecorationLine = 'line-through'
        progress += 33;
    }

    if(email.value.trim() !== ""){
        emailText.style.textDecorationLine = "line-through";
        emailText.style.textDecorationStyle = "dashed";
        progress +=33;
    }

    if(password.value.trim() !== ""){
        passText.style.textDecorationLine = "line-through";
        passText.style.textDecorationStyle = 'dashed';
        progress +=33;
    }

    percentage.textContent =  progress != 0 ? progress + 1 + "%" : progress + "%";
    if(progress == 0){
        progressCircle.style.borderLeft= "5px solid black";
    }
    if(progress == 33){
        progressCircle.style.borderBottom = "5px solid black";
        progressCircle.style.borderRight = "5px solid black";
        progressCircle.style.borderLeft = "5px solid green";
    }
    else if (progress == 66){
        progressCircle.style.borderTop = "5px solid black";
        progressCircle.style.borderBottom = "5px solid green";
        progressCircle.style.borderRight = "5px solid green";
    }

    else if (progress == 99){
        progressCircle.style.borderTop = "5px solid green";
    }
}

nameInput.addEventListener('input',updateProgess);

nameInput.addEventListener('focusout', function(){
    if(nameInput.value == ""){
        nameText.style.textDecorationStyle = "none";
        nameText.style.textDecorationLine = 'none'
        progress -= 20;
        percentage.textContent = progress;
    }
});

email.addEventListener('input',updateProgess);

email.addEventListener('focusout', function(){
    if(email.value == ""){
        emailText.style.textDecorationStyle = 'none';
        emailText.style.textDecorationLine = 'none';
        progress -= 20;
        percentage.textContent = progress;
    }
});

password.addEventListener('input', updateProgess);


password.addEventListener('focusout', function(){
    if(password.value == ""){
        passText.style.textDecorationLine = 'none';
        passText.style.textDecorationStyle = 'none';
        progress -= 20;
        percentage.textContent = progress;
    }
});


form.addEventListener('submit', function(event){
    event.preventDefault();


    if(password.value != confirm_pass.value){
        passContainer.insertAdjacentElement("afterend", errorText);

        password.style.borderColor = "red";
        confirm_pass.style.borderColor = "red";
    }
});

confirmShowPass.addEventListener('click', function(){
    if(isVisible){
        confirmVisible.style.display = "none";
        confirmNotVisible.style.display = "block";
        confirm_pass.type = "password";
        isVisible = false;
     }
    else{
        confirmVisible.style.display = "block";
        confirmNotVisible.style.display = "none";
        confirm_pass.type = "text";
        isVisible = true;
     }

});

showPass.addEventListener('click', function(){
    if(isVisible){
        visible.style.display = "none";
        notVisible.style.display = "block";
        password.type = "password";
       confirmIsVisible = false;
     }
    else{
        visible.style.display = "block";
        notVisible.style.display = "none";
        password.type = "text";
        confirmIsVisible = true;
     }

});


