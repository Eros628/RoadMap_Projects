import { DateTime } from "luxon";

const date = document.getElementById("date");
const btn = document.querySelector(".calculate-btn");
const result = document.createElement('p');


result.style.textAlign = "center";
result.style.fontWeight = "bold";

console.log(date.textContent);

btn.addEventListener('click', ()=>{
    let nowDate = DateTime.now();
    if(date.value == ""){
        return null;
    }

    else{
        let birthDate = DateTime.fromISO(date.value);
        let age = nowDate.diff(birthDate, ['year','month']);
     

        result.textContent = age.years + " years " + age.months.toFixed(0) +" months";

        btn.after(result);
    }

})