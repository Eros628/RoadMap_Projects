import {BrowserRouter, Route, Routes} from 'react-router';
import Home from './Page/Home';
import {Quiz, QuizStart} from './Page/Quiz';
import SetUp from './Page/SetUp';
import Result from './Page/Result';
import './App.css';
import { useState } from 'react';

function App() {
  const [timer, setTimer] = useState(0);
  


  return (
    <>
     <BrowserRouter>
      <Routes>
        <Route index element={<Home />}></Route>
        
        <Route path='/quiz' element={<Quiz timer={timer}/>}>
          <Route path='set-up' element={<SetUp timer={timer} setTimer={setTimer} />}></Route>         
          <Route path='start' element={<QuizStart />}></Route>
          <Route path='result' element={<Result />}></Route>
        </Route>
      </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
