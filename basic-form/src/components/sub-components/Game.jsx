import React from "react";
import "../../styles/Game.css";
import { Link } from "react-router-dom";

const Game = (props) => {
  return (
    <div className="game">
      <Link to={`/${props.slug}`}>
      <img src={props.image} />
      <p>{props.name}</p>
      <p>{props.genre}</p>
      <p>{props.platform}</p>
      <div className="game-price">₹ {props.price}</div>
      </Link>
    </div>
  );
};

export default Game;
