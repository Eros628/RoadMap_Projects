const firstTab = document.querySelector(".first.tab");
const secondTab = document.querySelector(".second.tab");
const thirdTab = document.querySelector(".third.tab");
const fourthTab = document.querySelector(".fourth.tab");

const firstNav = document.querySelector(".first-nav");
const secondNav = document.querySelector(".second-nav");
const thirdNav = document.querySelector(".third-nav");
const fourthNav = document.querySelector(".fourth-nav");

const tabs = document.querySelectorAll(".nav-section p");


let previousTab = null;

const switchTab = (value)=>{

    console.log("click");
    if(value == "first-nav"){
      
        firstTab.style.display = "flex";
        secondTab.style.display = "none";
        thirdTab.style.display = "none";
        fourthTab.style.display = "none";
    }
    else if (value == "second-nav"){
        
        firstTab.style.display = "none";
        secondTab.style.display = "flex";
        thirdTab.style.display = "none";
        fourthTab.style.display = "none";
    }
    else if (value == "third-nav"){
        
        firstTab.style.display = "none";
        secondTab.style.display = "none";
        thirdTab.style.display = "flex";
        fourthTab.style.display = "none";
    }
    else if(value == "fourth-nav"){
 
        firstTab.style.display = "none";
        secondTab.style.display = "none";
        thirdTab.style.display = "none";
        fourthTab.style.display = "flex";
    }
}

tabs.forEach(tab => {
    tab.addEventListener('click', ()=>{
        if(previousTab){
            previousTab.style.borderBottom = "none";
        }

        tab.style.borderBottom = "1px solid black";

        previousTab = tab;

        switchTab(tab.className)
    });
})