import { Outlet } from "react-router";
import '../App.css';
import Header from "../components/Header";
import { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";

export function Quiz({timer, quizItems, currentIndex, setCurrentIndex}){
    

    return (
        <>
            <div className="quiz-container">
                <Header timer={timer} currentIndex={currentIndex} setCurrentIndex={setCurrentIndex} quizItems={quizItems}/>
                <div className="quiz-content">
                    <Outlet></Outlet>
                </div>
            </div>
        </>
    )
}

export function QuizStart({quizItems, currentIndex, timer, setCurrentIndex, user, setUser}){

    return(
        <>
            <div className="quiz-items">
                <div>
                    <p>{(currentIndex + 1) + "/" + quizItems.length }</p>
                    <div className="progress-bar-container">
                        <div className="progress-bar" style={{width: ((currentIndex + 1) * 20) + "%"}}></div>
                    </div>
                </div>
                
                <QuizCard item={quizItems[currentIndex > quizItems.length - 1 ? currentIndex - 1 : currentIndex]} timer={timer} setCurrentIndex={setCurrentIndex} currentIndex={currentIndex} quizItems={quizItems} setUser={setUser} user={user}/>
            </div>
        </>
    )
}


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

