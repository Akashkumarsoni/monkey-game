import React from "react";
import { Backbtn, GreyBanana, GreyScore, MonkeySmile, Yesbtn } from "../assets/svgs/svgs";
import { useNavigate } from "react-router-dom";

const YesPage = () => {
  const navigate = useNavigate();
  return (
    <div className="container d-flex-center h-100p">
      <div className="button back" onClick={() => navigate("/next")}>
        {<Backbtn height="146" width="146" />}
      </div>
      <div className="score-level">
        {" "}
        <GreyScore height="37" width="755" />
        <div className="score-level-abs">
          <GreyBanana height="139" width="134" />
        </div>
      </div>
      <div className="character">
        <MonkeySmile
          height="485"
          width="510"
          cheight="200"
          cwidth="930"
          fontSize="37px"
          msg="Can you help me get some bananas? "
        />
      </div>
      <div className="button down" onClick={() => navigate("/method")}>
        {<Yesbtn height="90" width="339" />}
      </div>
    </div>
  );
};

export default YesPage;
