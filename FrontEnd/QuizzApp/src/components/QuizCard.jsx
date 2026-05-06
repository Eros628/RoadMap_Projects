import '../App.css'
import { useEffect, useState } from 'react';
import { ArrowRight } from "lucide-react";

function QuizCard({quizItems,item, timer, setCurrentIndex, currentIndex, user, setUser}){
    useEffect(()=>{
    
        if(currentIndex > user.answers.length){
            setUser(prev => {
                return{
                    ...prev,
                    answers: [...prev.answers, null]
                }
            });
        }

        else{
            return;
        }
    },[currentIndex])
    
    const setChoice = (userChoice)=>{
       setUser(prev => {
         const newAnswers = [...prev.answers];
         console.log(newAnswers.length);
         if(newAnswers.length > currentIndex){
            newAnswers[currentIndex] = userChoice;
         }

         else{
            if(currentIndex < quizItems.length){
                newAnswers.push(userChoice);
            }
            
         }

         return{
            ...prev,
            answers: newAnswers
         }
       });

    }
    return(
        <div className="quiz-card">
            <div className="question">
                {item.question}
            </div>
            <div className="choices">
                {item.choices.map((choice, index)=>{
                    return(
                    <button onClick={
                        ()=>{
                            setChoice(choice);
                        }
                    } className="choice" key={index}>
                        {choice}
                    </button>
                    )
                })}
            </div>
             {(timer == 0 || timer == null) &&  <button onClick={()=>{
                if(currentIndex < quizItems.length - 1){
                    setCurrentIndex(currentIndex + 1);
                }
             }} className="btn-next">Next <ArrowRight /></button>}
        </div>
    )
}

export default QuizCard;