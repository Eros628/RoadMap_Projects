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

errorText.textContent = "Password must be the same";
errorText.style.margin = 0;
errorText.style.fontSize = "11px";
errorText.style.color = "red";


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
        progress +=34;
    }

    if(password.value.trim() !== ""){
        passText.style.textDecorationLine = "line-through";
        passText.style.textDecorationStyle = 'dashed';
        progress +=33;
    }

    percentage.textContent = progress + "%";
    if(progress == 0){
         progressCircle.style.borderLeft= "2px solid black";
    }
    if(progress == 33){
        progressCircle.style.borderBottom = "2px solid black";
        progressCircle.style.borderRight = "2px solid black";
        progressCircle.style.borderLeft = "5px solid green";
    }
    else if (progress == 67){
        progressCircle.style.borderTop = "2px solid black";
        progressCircle.style.borderBottom = "5px solid green";
       progressCircle.style.borderRight = "5px solid green";
    }

    else if (progress == 100){
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
})


form.addEventListener('submit', function(event){
    event.preventDefault();


    if(password.value != confirm_pass.value){
        confirm_pass.insertAdjacentElement("afterend", errorText);

        password.style.borderColor = "red";
        confirm_pass.style.borderColor = "red";
    }
})

