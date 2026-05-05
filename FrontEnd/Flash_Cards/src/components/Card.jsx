import {ArrowLeft, ArrowRight} from 'lucide-react'
import '../App.css'
function CardFlash({value, isShowAnswer}){
    return(
        <div className="card" style={{transform: isShowAnswer ? 'rotateY(180deg)': 'rotateY(0deg)'}}>
                <div className='answer-container'>
                    <p>{value.answer}</p>
                </div>
                <div className="question-container">
                    <p>{value.question}</p>
                </div> 
        </div>
    )
}


export default CardFlash