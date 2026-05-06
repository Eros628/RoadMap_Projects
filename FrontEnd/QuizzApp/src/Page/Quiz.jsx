import { Outlet } from "react-router";
import '../App.css';
import Header from "../components/Header";
import QuizCard from "../components/QuizCard";
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
