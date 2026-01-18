import React from "react";
import "../../styles/subcomponent-style/GameInfo.css";
import "../sub-components/Rating";
import Rating from "../sub-components/Rating";
import { useParams } from "react-router-dom";
import findGameBySlug from "../../helpers/getGamePropsBySlug";


const GameInfo = (props) => {
  const { slug } = useParams();
  const gameInfo = findGameBySlug(slug, props.id);
  return (
    <div className="gameinfo-root-cont" id={props.id}>
      <h1 className="GameInfoHeading">{gameInfo.name}</h1>
      <div className="game-info">
        <h2 className="GameInfoHeading">
          Game Information
          <Rating />
        </h2>
        <p>{gameInfo.description}</p>
      </div>
    </div>
  );
};

export default GameInfo;
