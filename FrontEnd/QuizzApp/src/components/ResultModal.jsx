import React from 'react';
import '../App.css'
import ReactDOM from 'react-dom';

function ResultModal({user, quizItems, result, isOpen, setIsOpen, setCurrentIndex}){
    console.log(result.correctAnswer);
    console.log(result.userAnswer );
    return ReactDOM.createPortal(
        <div className="modal-overlay" onClick={()=>{
            setIsOpen(!isOpen);
        }}>
            <div className="modal-content" onClick={e=> e.stopPropagation()}>
                <div>
                  <h1>Your Score:</h1>
                  <h1>{user.score + "/" + quizItems.length}</h1>
                </div>

                <div className="result-grid">
                    <div className="label-grid"><p>Question</p></div>
                    <div className="label-grid"><p>Your Answer</p></div>
                    <div className="label-grid"><p>Correct Answer</p></div>
                    <div className="label-grid"><p>Status</p></div>

                    {quizItems.map((question, index)=>{
                        return (
                            <React.Fragment key={index}>
                                <div className="questionResult results-data" >{question.question}</div>
                                <div className="user-answer results-data">
                                    <p className='show-full'>{user.answers[index]}</p>
                                    {user.answers.length != 0 && <p className='show-letter'>{user.answers[index]?.[0]}</p>}
                                    
                                </div>
                                <div className="correct-answer results-data" >
                                    <p className='show-full'>{result.correctAnswer[index]}</p>
                                    {result.correctAnswer.length != 0 && <p className='show-letter'>{result.correctAnswer[index]?.[0]}</p>}
                                    
                                </div>
                                <div className="status results-data" style={{alignItems: "center", backgroundColor: "transparent"}}><div style={{height: "20px",width: "20px", borderRadius: "25px", backgroundColor: result.status[index] == "check" ? "green" : "red"}}></div></div>
                                
                            </React.Fragment>
                        );
                    })}

                </div>
            </div>
        </div>,
        document.body
    )
}


export default ResultModal;