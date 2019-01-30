import React from "react";
import Musikinstitutet1 from "./Assets/Images/music-1.png";
import Musikinstitutet2 from "./Assets/Images/music-2.png";
import Musikinstitutet3 from "./Assets/Images/music-3.png";

function Portfolio() {
  return (
    <div className="Portfolio-container marginTmd">
      <div className="Portfolio-imageContainer">
        <img className="Portfolio-image" src={Musikinstitutet1} />
      </div>
      <div className="Portfolio-imageContainer">
        <img className="Portfolio-image" src={Musikinstitutet2} />
      </div>
      <div className="Portfolio-imageContainer">
        <img className="Portfolio-image" src={Musikinstitutet3} />
      </div>
    </div>

  );
}

export default Portfolio;
