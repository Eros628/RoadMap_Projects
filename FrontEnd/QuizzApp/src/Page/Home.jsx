import '../App.css'
import {Quiz} from './Quiz';
import { useNavigate } from 'react-router';


function Home(){
    let navigate = useNavigate()
    return(
        <>
            <div className='main-container'>
                <h1>QUIZLY</h1>
                <button onClick={()=>{
                    navigate('/quiz/set-up');
                }} className='btn start'>Start Quiz</button>
            </div>
        </>
    )
}

export default Home;