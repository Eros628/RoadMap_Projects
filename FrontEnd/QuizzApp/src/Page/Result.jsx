import { useEffect, useState } from "react";


function Result({user, setUser,quizItems}){
    const [isGreet, setIsGreet] = useState(true);
    const [result, setResult] = useState({
        userAnswer : user.answers,
        correctAnswer: [quizItems.map((item)=> item.answer)],
        status: []
    });



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
                    <div>
                        <h1>Your Score:</h1>
                        <p>{user.score}</p>
                    </div>
                </div>
            }
            
        </>
    )
}

export default Result;