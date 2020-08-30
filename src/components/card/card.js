import React from "react";
import Button from "../buttons/button";
import "./card.css";

function Card(props) {
  const { id, title, author, description, thumbnail, type } = props.card;

  return (
    <div className="card">
      <div className="header flex">
        {/* {conditionally render header} */}
        <h5>Would you {type === "FILM" ? "watch" : "read"} this?</h5>
      </div>
      <div className="content flex">
        <div className="imgContainer">
          <img src={thumbnail} alt=""></img>
        </div>
        <div className="info flex">
          <div className="topInfo flex">
            <div className="title">{title}</div>
            <div className="type">{type}</div>
            <div className="author">{author}</div>
          </div>
          <div className="description flex">
            <div>{description}</div>
          </div>
        </div>
      </div>
      <div className="buttons flex">
        {/* {render button components} */}
        <div className="submitButton">
          <Button type={"No"} submit={props.submit} id={id} />
        </div>
        <div className="submitButton">
          <Button type={"Yes"} submit={props.submit} id={id} />
        </div>
      </div>
    </div>
  );
}

export default Card;
