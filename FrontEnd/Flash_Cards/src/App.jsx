import { useState } from 'react'
import './App.css'
import CardFlash from './components/Card'
import { ArrowLeft, ArrowRight } from 'lucide-react';

function App() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isShowAnswer, setShowAnswer] = useState(false);
  const [progressBar, setProgress] = useState(0);

  const handleIndex = (isNext, quiz)=>{
   
    if(isNext  && currentIndex  < quiz.length - 1){
      setCurrentIndex(currentIndex + 1);
      setProgress(progressBar + 20);
   
    }
    else if(!isNext && currentIndex > 0){
      setCurrentIndex(currentIndex - 1);
      setProgress(progressBar - 20);
    }
  }

  const showAnswer = ()=>{
       setShowAnswer(!isShowAnswer);
  }

  const quiz = [
    {question: 'What is the capital of France?', answer: 'Paris'},
    {question: 'What is the largest planet in our solar system?', answer: 'Jupiter'},
    {question: 'What is the chemical symbol for gold?', answer: 'Au'},
    {question: 'Who wrote the play "Romeo and Juliet"?', answer: 'William Shakespeare'},
    {question: 'What is the smallest prime number?', answer: '2'},
    {question: 'What is the speed of light in a vacuum?', answer: 'Approximately 299,792 kilometers per second (186,282 miles per second)'},
  ]

  return (
    <>
     <div className='container'>
        <h1>Flash Cards</h1>
        <div className='progress-container'>
          <div className = 'progress-bar'>
            <div className='bar' style={{width: progressBar + "%"}}><p>{progressBar + "%"}</p></div>
            
          </div>
          <p>{currentIndex + 1}/{quiz.length}</p>
        </div>
        
        <div className='card-container'>
           <CardFlash value={quiz[currentIndex]} isShowAnswer= {isShowAnswer} />
        </div>
        <div className='btn-container'>
           <button onClick={ ()=>handleIndex(false, quiz)} className='btn previous'>
            <ArrowLeft/>
            Previous</button>
           <button  onClick={showAnswer} className='btn showAnswer'>{isShowAnswer? "Hide Answer" : "Show Answer"}</button>
           <button onClick={()=>handleIndex(true, quiz)} className='btn next'>Next
            <ArrowRight />
           </button>
        </div>
     </div>
    </>
  )
}

export default App
