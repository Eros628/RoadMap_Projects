const questionBox = document.querySelectorAll(".question-box");
const answerBox = document.querySelectorAll(".answer-box");

console.log(questionBox);
console.log(answerBox);
questionBox.forEach((question, index)=>{
    question.addEventListener('click', ()=>{
        let isActive =  answerBox.item(index).getAttribute('data-isActive');
        console.log(isActive);
        if(isActive == "true"){
            answerBox.item(index).setAttribute("data-isActive", "false");
             answerBox.item(index).style.padding = "0";
            answerBox.item(index).style.maxHeight = "0";
             answerBox.item(index).style.opacity = "0";

        }
        else{
            answerBox.item(index).setAttribute("data-isActive", "true");
            answerBox.item(index).style.maxHeight = "fit-content";
            answerBox.item(index).style.opacity = "1";
            answerBox.item(index).style.padding = "10px";
        }
    })
} )



