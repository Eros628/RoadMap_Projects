import { Outlet } from "react-router";
import '../App.css';
import Header from "../components/Header";

export function Quiz({timer}){
    return (
        <>
            <div className="quiz-container">
                <Header timer={timer}/>
                <div className="quiz-content">
                    <Outlet></Outlet>
                </div>
            </div>
        </>
    )
}

export function QuizStart(){
    return(
        <>
            <div className="quiz-items"></div>
        </>
    )
}

