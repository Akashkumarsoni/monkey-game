import React from 'react'
import { Backbtn, MonkeySmile, Startbtn, } from '../assets/svgs/svgs'
import { useNavigate } from 'react-router-dom'


const LandingPage = () => {
  const navigate = useNavigate();
  return (
    <div className='container d-flex-center h-100p'>
        <div className='character'>
            <MonkeySmile height='485'width='500' msg='Welcome Kiddo !' cheight='220' cwidth='550'/>
        </div>
        <div className='button down' onClick={()=>navigate('/next')}>{<Startbtn height='90'width='339'/>}</div>
    </div>
  )
}

export default LandingPage
