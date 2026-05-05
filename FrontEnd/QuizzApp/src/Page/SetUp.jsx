import {Infinity} from 'lucide-react'
import { useLocation, useNavigate } from 'react-router';
function SetUp({timer, setTimer}){
    let navigate = useNavigate();
    return(
        <>
            <div className="setup-container">
                <p>Ready to test your knowledge? <br />Set your pace.</p>
                <div className="time-container">
                    <div className="display-time">
                        {timer == null? <Infinity/> :  <p>{timer + " secs"}</p>}
                    </div>
                    <div className="btn-row">
                        <button onClick={
                            ()=>{
                                setTimer(timer - 10);
                            }
                        } className="btn-minus">-10</button>
                        <button onClick={
                            ()=>{
                                setTimer(timer + 10);
                            }
                        } className="btn-plus">+10</button>
                        <button onClick={
                            ()=>{
                                setTimer(null);
                            }
                        } className="btn-minus"><Infinity /></button>
                    </div>
                </div>
                <div>
                    <button onClick={
                        ()=>{
                            navigate('/');
                        }
                    } className='btn-goback'>Back</button>
                    <button onClick={
                        ()=>{
                            navigate('/quiz/start');
                        }
                    } className='btn-start'>Start</button>
                </div>
                
            </div>
        </>
    )
}


export default SetUp;