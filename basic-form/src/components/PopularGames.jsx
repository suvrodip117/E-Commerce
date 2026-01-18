import React from "react";
import gameData from "../Assets/game";
import Game from "./sub-components/Game";
import "../styles/PopularGames.css";


const formatArrays = (array) => {
  return array.join(" | ");
};

const PopularGames = () => {
  return (
    <div className="popular-games-cont">
      <h1>POPULAR GAMES</h1>
      <div className="popular-game">
        {gameData.map((game, i) => {
          return (
            <Game
              key={i}
              id={game.id}
              name={game.name}
              slug={game.slug}
              image={game.image[0]}
              price={game.price}
              genre={formatArrays(game.genre)}
              platform={formatArrays(game.platform)}
            ></Game>
          );
        })}
      </div>
    </div>
  );
};

export default PopularGames;
