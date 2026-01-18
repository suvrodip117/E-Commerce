import React, { useState } from "react";
import "../../styles/subcomponent-style/LeftPaneImgComp.css";
import { useParams } from "react-router-dom";
import findGameBySlug from "../../helpers/getGamePropsBySlug";

const LeftPaneImgComp = (props) => {
  const { slug } = useParams();
  const gameInfo = findGameBySlug(slug, props.id);

  const [hoveredImage, setHoveredImage] = useState(gameInfo[0]);

  const handleMouseEnter = (image) => {
    setHoveredImage(image);
  };

  const handleMouseLeave = () => {
    setHoveredImage(hoveredImage);
  };

  return (
    <div className="left-img-cont" id={props.id}>
      <img src={hoveredImage} id="main_img_left_pane" />
      <ul id="img_list">
        <li className="leftpanel-img-lists">
          <img
            src={gameInfo[0]}
            className="gamedtl_list_img"
            onMouseEnter={() => handleMouseEnter(gameInfo[0])}
            onMouseLeave={handleMouseLeave}
          />
        </li>
        <li className="leftpanel-img-lists">
          <img
            src={gameInfo[1]}
            className="gamedtl_list_img"
            onMouseEnter={() => handleMouseEnter(gameInfo[1])}
            onMouseLeave={handleMouseLeave}
          />
        </li>
        <li className="leftpanel-img-lists">
          <img
            src={gameInfo[2]}
            className="gamedtl_list_img"
            onMouseEnter={() => handleMouseEnter(gameInfo[2])}
            onMouseLeave={handleMouseLeave}
          />
        </li>
      </ul>
    </div>
  );
};

export default LeftPaneImgComp;
