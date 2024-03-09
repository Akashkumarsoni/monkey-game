import React from 'react'
import { Backbtn, GreyBanana, GreyScore, MonkeySmile, Nextbtn, } from '../assets/svgs/svgs'
import { useNavigate } from 'react-router-dom';


const NextPage = () => {
    const navigate = useNavigate();
  return (
    <div className='container d-flex-center h-100p'>
        <div className='button back' onClick={()=>navigate('/')}>{<Backbtn height='146'width='146'/>}</div>
        <div className='score-level'> <GreyScore height='37'width='755'/>
        <div className='score-level-abs'><GreyBanana  height='139'width='134'/></div>
        </div>
        <div className='character'>
            <MonkeySmile fontSize="31px" height='485'width='500' msg='Hi , I am Mizo ! and I love bananas' cheight='200' cwidth='930'/>
        </div>
        <div className='button down' onClick={()=>navigate('/confirm')}>{<Nextbtn height='90'width='339'/>}</div>
    </div>
  )
}

export default NextPage


