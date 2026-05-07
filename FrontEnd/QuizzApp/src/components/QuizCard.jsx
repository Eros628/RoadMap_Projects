import '../App.css'
import { useEffect, useState } from 'react';
import { ArrowRight } from "lucide-react";
import { useNavigate } from 'react-router';

function QuizCard({quizItems,item, timer, setCurrentIndex, currentIndex, user, setUser}){
    const [selectedChoice, setSelectedChoice] = useState(null);
    const [prevChoice, setPrevChoice] = useState(null);
    const [isClick, setIsClick] = useState(false);
    const navigate = useNavigate();

    useEffect(()=>{

        if(selectedChoice != null){
            
            setSelectedChoice(null);
            setPrevChoice(null);
        }
    
        if(currentIndex > user.answers.length){
            setUser(prev => {
                return{
                    ...prev,
                    answers: [...prev.answers, "n/a"]
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
                    <button  style={{border: selectedChoice == index ? "2px solid white": "none"}} type='button' onClick={
                        ()=>{
                            if(selectedChoice == null){
                                setSelectedChoice(index);
                            }
                            else{
                                setPrevChoice(selectedChoice);
                                setSelectedChoice(index);
                            }
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
                else{
                    navigate('/quiz/result');
                }
             }} className="btn-next">Next <ArrowRight /></button>}
        </div>
    )
}

export default QuizCard;