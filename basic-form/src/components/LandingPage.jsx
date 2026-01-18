import React from "react";
import PopularGames from "./PopularGames";
import "../styles/LandingPage.css";
import ZeldaLiveWallpaper from "../Assets/GamingMontage.mp4";

const LandingPage = () => {
  return (
    <div className="landing-page-cont">
      <header className="herobanner-header">
        <video id="video_landingpage" loop autoPlay muted>
          <source src={ZeldaLiveWallpaper} type="video/mp4" />
        </video>
        <h1 className="title">GAME FREAK</h1>
      </header>
      <div className="content">
        <PopularGames />
      </div>
    </div>
  );
};

export default LandingPage;
