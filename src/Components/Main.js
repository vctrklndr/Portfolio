import React from "react";
import Image from "../Assets/Images/music-1.png";
import Image2 from "../Assets/Images/music-2.png";
import Image3 from "../Assets/Images/music-3.png";
import Dashboard from "../Assets/Images/dashboard.jpg";
import BlobImage from "../Assets/Images/blob-1.svg";


function Main() {
  const styling = {
    padding: "20px",
    backgroundColor: "#fff",
    color: "#272727",
    position: "relative",
    zIndex: "-2"
  };
  return (
    <main>
      <h2 className="Heading marginTxlg marginBsm">Musikinstitutet</h2>
      <div style={styling}>
        <div className="Portfolio-container">
          <div className="Portfolio-imageContainer">
            <img src={Image} className="Portfolio-image" alt="Womba womba" />
          </div>
          <div className="Portfolio-imageContainer">
            <img src={Image2} className="Portfolio-image" alt="Womba womba" />
          </div>
          <div className="Portfolio-imageContainer">
            <img src={Image3} className="Portfolio-image" alt="Womba womba" />
          </div>
        </div>
        <p className="textSmall marginVz">
          School assignment in Vanilla JS
          <br />
          #html #sass #js
        </p>
      </div>
      <h2 className="Heading marginTxlg marginBsm">React JS Dashboard</h2>
      <div className="marginBxlg" style={styling}>
        <div className="Portfolio-container">
          <div className="Portfolio-imageContainer">
            <img src={Dashboard} className="Portfolio-image" alt="Womba womba" />
          </div>
        </div>
        <p className="textSmall marginVz">
          School assignment in React JS
          <br />
          #css #js #react
        </p>
      </div>
    </main>
  );
}

export default Main;
