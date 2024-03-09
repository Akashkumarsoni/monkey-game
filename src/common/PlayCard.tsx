import React from "react";
import SuggesstionCard from "./SuggesstionCard";

interface Props {
  value: any;
  handleClick: (val: any) => void;
  color:string
}

const PlayCard = (props: Props) => {
  return (
    <div
    style={{visibility:props.value.match =='match' ? 'hidden':'visible',cursor:"pointer"}}
      key={props.value.id}
      className={props.value.rotate ? "flip-box2" : "flip-box"}
      onClick={() => {
        props.handleClick(props.value);
      }}
    >
      <div
        className="flip-box-inner"
        style={props.value.rotate === false ? {} : { transform: "rotateY(180deg)" }}
      >
        <div className="flip-box-front">
          <SuggesstionCard color={props.color} />
        </div>
        <div className="flip-box-back">
          <img src={props.value.img} alt="" className="mainpic" />
        </div>
      </div>
    </div>
  );
};

export default PlayCard;
