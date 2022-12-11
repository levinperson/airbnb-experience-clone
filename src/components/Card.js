import React from "react";
// import swimmer from "../swimmer.png";
import Star from "../images/Star.png";

export default function Card(props) {
  console.log(props);
  let badgeText;
  if (props.abc.openSpots === 0) {
    badgeText = "SOLD OUT";
  } else if (props.abc.location === "Online") {
    badgeText = "ONLINE";
  }

  return (
    <div className="card">
      {badgeText && <div className="card-badge">{badgeText}</div>}
      <img
        src={props.abc.coverImg}
        alt="This is a user"
        className="card-image"
      />
      <div className="card-stats">
        <img src={Star} alt="This is a Star" className="card-star" />
        <span>{props.abc.stats.rating}</span>
        <span className="grey">({props.abc.stats.reviewCount}) &#8226; </span>
        <span className="grey">{props.abc.location}</span>
      </div>
      <p>{props.abc.title}</p>
      <p>
        <span className="bold">From ${props.abc.price}</span> / person
      </p>
    </div>
  );
}
