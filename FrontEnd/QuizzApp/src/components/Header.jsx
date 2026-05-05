import { useLocation } from 'react-router';
import '../App.css'

function Header({timer}){
    let location = useLocation();
    let isStart = location.pathname == "/quiz/start";
    let isResult = location.pathname == "/quiz/result";
    console.log(location)
    return (
        <>
            <div className="header" style={{width: isStart || isResult ? "100%" : "160px"}}>
                <h1>QUIZLY</h1>
                {isStart && <p className='timer-text'>{timer + " secs"}</p> }
            </div>
            {isStart && <div className='timer-bar'><div className="bar"></div> </div>}
        </>
        
       
    )
}

export default Header;