import { useNavigate } from "react-router-dom";
import { Backbtn, GreyBanana, GreyScore, MonkeySmile, Nextbtn, One, OneCard, Playbtn, StepPath, ThreeCard, Two, TwoCard } from "../assets/svgs/svgs";

function PlayStart() {
  const navigate = useNavigate();
  return (

    <div className='container d-flex-center h-100p'>
    <div className='button back' onClick={()=>navigate('/confirm')}>{<Backbtn height='146'width='146'/>}</div>
    <div className='score-level'> <GreyScore height='37'width='755'/>
    <div className='score-level-abs'><GreyBanana  height='139'width='134'/></div>
    </div>
    <div className="dotted-path"><StepPath /></div>
        <div className="method-card-box">
            <div className="method-card">
              <div className="method-card-count"><One /></div>
              <div className="method-card-img"><OneCard /></div>
              
              <p className="method-card-head">Select a pink card.</p>
              <p className="method-card-subtxt">It has images.</p>
            </div>
            <div className="method-card">
              <div className="method-card-count"><One /></div>
              <div className="method-card-img"><TwoCard /></div>
              
              <p className="method-card-head">Select a Blue card.</p>
              <p className="method-card-subtxt">It has images.</p>
            </div>
            <div className="method-card">
              <div className="method-card-count"><One /></div>
              <div className="method-card-img-3"><ThreeCard /></div>
              <p className="method-card-head">Its a match or not!</p>
              <p className="method-card-subtxt-3">If they’re same otherwise retry!</p>
              
            </div>
        </div>
    <div className='button down' onClick={()=>navigate('/game')}>{<Playbtn height='90'width='339'/>}</div>
</div>
  );
}

export default PlayStart;
