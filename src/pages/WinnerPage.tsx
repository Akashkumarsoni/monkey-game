import React from 'react'
import { MonkeyWithBanana, WinnerCount } from '../assets/svgs/svgs'
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { gameover } from '../redux-tool/Slice';

interface Props {
    count:number;
    chance:number;
}

function WinnerPage(props: Props) {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const handleReplay = () => {
        navigate('/method');
        dispatch(gameover(""))
    }
  return (
    <div className='winner-page'>
        <div className='winner-page--card'>
        <div className='winner-page--score'>{Math.ceil(6/props.chance)*10 == Infinity ? 0:Math.floor((6/props.chance)*10) }</div>
            <img src='winbanana.png' alt='winner'/>
           <div className='winner-page--monkey'> <MonkeyWithBanana/></div>
            <div className='winner-page--yah-btn' onClick={handleReplay}></div>
        </div>
    </div>
  )
}

export default WinnerPage