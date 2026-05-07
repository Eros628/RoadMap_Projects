import { use, useEffect, useState } from "react";
import ResultModal from "../components/ResultModal";
import { useNavigate } from "react-router";


function Result({user, setUser,quizItems, setCurrentIndex, setTimer}){
    const navigate = useNavigate();
    const [isGreet, setIsGreet] = useState(true);
    const [result, setResult] = useState({
        userAnswer : user.answers,
        correctAnswer: quizItems.map((item)=> item.answer),
        status: []
    });

    const [isOpen, setIsOpen] = useState(false);


    
    useEffect(()=>{
   

        const statusArr = user.answers.map((answer, index) =>{
            return(answer === quizItems[index].answer ? "check" : "wrong" );
        })
       
        const totalScore = statusArr.filter(status => status === "check").length;

        setResult(prevResult => ({...prevResult, status: statusArr}));
        setUser(prevUser => ({...prevUser, score: totalScore}));
        
        const timeout = setTimeout(() => {
            setIsGreet(false);
        }, 3000);

        

        return () => clearTimeout(timeout);
    },[]);
    

    return(
        <>
            {isGreet ? <h1>Quiz Complete!</h1>:
                <div className="result-container">
                    <div className="result">
                        <h1>YOUR SCORE:</h1>
                        <h1>{user.score +"/"+quizItems.length}</h1>
                    </div>

                    <div className="result-btn-container" >
                        <button onClick={
                            ()=>{
                                setUser({
                                    answers: [],
                                    score: 0
                                });
                                setCurrentIndex(0);
                                setTimer(0);
                                navigate("/quiz/set-up")
                            }
                        } className="btn-retake">Retake</button>
                        <button onClick={
                            ()=>{
                                setUser({
                                    answers: [],
                                    score: 0
                                });
                                setCurrentIndex(0);
                                setTimer(0);
                                navigate('/')
                            }
                        } className="btn-home">Home</button>
                        <button onClick={
                            ()=>{ 
                                setIsOpen(!isOpen);
                            }
                        }
                        className="btn-review">Review</button>
                    </div>
                   
                </div>
            }

            {
                isOpen && <ResultModal user={user} isOpen={isOpen} setIsOpen={setIsOpen} quizItems={quizItems} result={result}/>
            }
            
        </>
    )
}

export default Result;