const textArea = document.querySelector(".message-container textarea");
const counter = document.querySelector(".counter");

textArea.addEventListener('input', ()=>{

    counter.textContent = textArea.value.length + "/" +textArea.maxLength;

    if(textArea.value.length == textArea.maxLength){
        console.log("gana");
        textArea.style.border= "1px solid red";
        textArea.style.color = "red";
    }
    else{
        textArea.style.border = "1px solid black";
        textArea.style.color = "black";
    }
})