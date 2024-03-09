import { ArrowSvg, GreyBanana, GreyScore, Pagemsg, Pagemsg2, Yesbtn } from "../assets/svgs/svgs";
import { useDispatch, useSelector } from "react-redux";
import { changeRotate, matching, notmatching } from "../redux-tool/Slice";
import PlayCard from "../common/PlayCard";
import React, { useEffect, useState } from "react";
import WinnerPage from "./WinnerPage";
function GamePage() {
  const dispatch = useDispatch();
  const allcards = useSelector((state: any) => state.memorygame);
  const [clicking, setClicking] = useState(0);
  const [win, setWin] = useState("Loose");
  const [show, setShow] = useState("");
  const flipfunc = (e: any) => {
    setShow(e);
    if (show.match === e.match) {
      let data = { s1: show, s2: e };
      setTimeout(() => {
        dispatch(matching(data));
      }, 1000);
      setShow("");
    }
    dispatch(changeRotate(e));
  };
  const flipfuncback = (e: any) => {
    setClicking(clicking + 1);
    let data = { s1: show, s2: e };
    if (show.match === e.match) {
      dispatch(changeRotate(e));
      setTimeout(() => {
        dispatch(matching(data));
      }, 1000);
      setShow("");
    } else {
      dispatch(changeRotate(e));
      setTimeout(() => {
        dispatch(notmatching(data));
      }, 1000);
      setShow("");
    }
  };
console.log(allcards)
  useEffect(() => {
    const func = () => {
      let counts = 2;
      allcards.game.map((i: any) => {
        if (i.match === "match") {
          counts = counts + 1;
        }
      });
      if (counts === allcards.game.length) {
        setWin("Win");
      }
    };
    func();
  }, [clicking]);
console.log(win)
  const handleClick = (cardValue: any) => {
    if (show === "") {
      flipfunc(cardValue);
    } else {
      flipfuncback(cardValue);
    }
  };
  return (
    <>
    { win == 'Loose'?<div className="container d-flex-center h-100p">
      <div className="score-level">
        <GreyScore height="37" width="755" />
        <div className="score-level-abs">
          <GreyBanana height="139" width="134" />
        </div>
      </div>
      {show !=="" && <div className="sugg-txt-top ">
        <ArrowSvg height="75" width="135"/>
        <div className='sugg-msg-top'> <Pagemsg2  height='100' width='240'/>
        <div className='sugg-msg-content-top' style={{fontSize : 20}}><p>{'Select from here'}</p></div>
        </div>
      </div>}
      <div className="cards-container">
          <div className="cards-container--item">
            {
                allcards.game.map((value: any, index: number) => {
                  if (index <= 5)
                    return <PlayCard key={value.id} value={value} handleClick={(data:any)=>{if(show === "") handleClick(data)}} color='pink'/>;
                })
            }

          </div>
          <div className="cards-container--item">
          {
                allcards.game.map((value: any, index: number) => {
                  if (index > 5)
                    return <PlayCard key={value.id} value={value} handleClick={(data:any)=>{if(show !== "") handleClick(data)}} color='blue'/>;
                })
            }
          </div>
        </div>
        {show =="" &&<div className="sugg-txt-bottom ">
        <ArrowSvg height="75" width="135"/>
        <div className='sugg-msg-bottom'> <Pagemsg2  height='100' width='240'/>
        <div className='sugg-msg-content-bottom' style={{fontSize : 20}}><p>{'Select from here'}</p></div>
        </div>
      </div>}
    </div>:
    <WinnerPage count={100} chance={clicking}/>}
    </>
  );
}

export default GamePage;


