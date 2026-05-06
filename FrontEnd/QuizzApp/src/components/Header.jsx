import { useLocation, useNavigate } from 'react-router';
import '../App.css'
import { useEffect, useState } from 'react';

function Header({timer, currentIndex, setCurrentIndex, quizItems}){
    const navigate = useNavigate();
    const formatTime = (totalSeconds)=>{
    
        const minutes = Math.floor(totalSeconds/60);
        const seconds = totalSeconds % 60;

        const paddedMinutes = String(minutes).padStart(2, '0');
        const paddedSeconds = String(seconds).padStart(2, '0');


        return  paddedMinutes + ":" + paddedSeconds;
    }

    const [countTime, setCount] = useState(timer);

    const [widthBar, setWidthBar] = useState(0);

    let location = useLocation();
    let isStart = location.pathname == "/quiz/start";
    let isResult = location.pathname == "/quiz/result";

    useEffect(()=>{
        setCount(timer);
    },[timer]);

    useEffect(()=>{
        if(isStart){
            
            if(timer == 0 || timer == null){
                return;
            }

            if(countTime <= 0) {
                if(currentIndex < quizItems.length - 1){
                    console.log(currentIndex);
                    setCurrentIndex(currentIndex + 1 );
                    setCount(timer);
                }
                else{
                    if(currentIndex == quizItems.length - 1){
                        setCurrentIndex(currentIndex + 1);
                        navigate('/quiz/result');
                    }
                }
            }

            const timeOut = setTimeout(() => {
                setCount(prevTime => prevTime - 1);
            }, 1000);

            return () => clearTimeout(timeOut);
        }
    
        return;

    }, [countTime, location.pathname]);
    
    const timePassed = timer - countTime;
    const timePercentage = timer > 0 || timer == null ? (timePassed / timer) * 100: 0;
  
    return (
        <div>
            <div className="header" style={{width: isStart || isResult ? "100%" : "160px"}}>
                <h1>QUIZLY</h1>
                {isStart && <p className='timer-text'>{formatTime(countTime)}</p> }
            </div>
            {isStart && <div className='timer-bar'><div className="bar" style={{width: timePercentage == 0 ? timePercentage + "%" : timePercentage + 10 + "%"}} key={currentIndex}></div> </div>}
        </div>
        
       
    )
}

export default Header;