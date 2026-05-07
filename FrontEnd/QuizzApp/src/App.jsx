import {BrowserRouter, Route, Routes} from 'react-router';
import Home from './Page/Home';
import {Quiz, QuizStart} from './Page/Quiz';
import SetUp from './Page/SetUp';
import Result from './Page/Result';
import './App.css';
import { useState } from 'react';

function App() {
  const [timer, setTimer] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [user, setUser] = useState({
    answers: [],
    score: 0
  });

  const quizItems = [
        {
            question: "Which planet in our solar system is known as the 'Red Planet' ?", 
            choices: ["A: Venus", "B: Mars", "C. Saturn", "D. Jupiter"],
            answer: "B: Mars"
        },
        {
            question: "Who painted the famous 'Mona Lisa'?",
            choices:["A. Vincent van Gogh", "B. Pablo Picasso", "C. Michelangelo", "D. Leonardi da Vinci"],
            answer: "D. Leonardi da Vinci"
        },
        {
            question: "What is the capital city of France?",
            choices: ["A. Paris", "B. Marseille", "C. Lyon", "D. Bordeaux"],
            answer: "A. Paris"
        },
        {
            question: "Which element has the chemical symbol 'O'?",
            choices: ["A. Oxygen", "B. Gold", "C. Silver", "D. Osmium"],
            answer: "A. Oxygen"
        },
        {
            question: "In which year did the Titanic sink?",
            choices: ["A. 1918", "B. 1905", "C. 1923", "D. 1912"],
            answer: "D. 1912"
        }
    ]


  return (
    <>
     <BrowserRouter>
      <Routes>
        <Route index element={<Home />}></Route>
        
        <Route path='/quiz' element={<Quiz timer={timer} quizItems={quizItems} currentIndex={currentIndex} setCurrentIndex={setCurrentIndex}/>}>
          <Route path='set-up' element={<SetUp timer={timer} setTimer={setTimer} />}></Route>         
          <Route path='start' element={<QuizStart  quizItems={quizItems} currentIndex={currentIndex} setCurrentIndex={setCurrentIndex} timer={timer} user={user} setUser={setUser}/>}></Route>
          <Route path='result' element={<Result quizItems={quizItems} user={user} setUser={setUser} setCurrentIndex={setCurrentIndex} setTimer={setTimer}/>}></Route>
        </Route>
      </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
