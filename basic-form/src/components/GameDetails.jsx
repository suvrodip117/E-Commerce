import React from "react";
import LeftPaneImgComp from "./sub-components/LeftPaneImgComp";
import GameInfo from "./sub-components/GameInfo";
import ProceedtoBuy from "./sub-components/ProceedtoBuy";
import "../styles/GameDetails.css";

const GameDetails = () => {

  return (
    <>
      <div className="details-cont">
        <LeftPaneImgComp id="LeftPaneImgComp" />
        <GameInfo id="GameInfo" />
        <ProceedtoBuy id="ProceedtoBuy" />
      </div>
    </>
  );
};

export default GameDetails;
