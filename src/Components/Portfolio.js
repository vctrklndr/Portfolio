import React from "react";
import Musikinstitutet from "../Assets/Images/music-1.png";
import Dashboard from "../Assets/Images/dashboard.jpg";
import iChores from "../Assets/Images/ichores.png";
import Mobergs from "../Assets/Images/mobergs_bistro.png";
import PunkBeer from "../Assets/Images/punk_beer.png";

function Portfolio() {
  const hashtags = {
    color: "#ffce58"
  };
  const grey = {
    color: "grey",
    wordBreak: "break-word"
  };
  return (
    <>
      <div className="marginTxlg flex">
        <img
          src={Musikinstitutet}
          className="Portfolio-image"
          alt="Musikinstitutet"
        />
        <div className="Portfolio-text">
          <h2 className="Heading marginTz marginBsm">Musikinstitutet</h2>
          <p className="textSmall marginVz">
            School assignment in Vanilla JS
            <br />
            <span style={hashtags}>#html #css #sass #js #vanilla</span>
            <br />
            <span style={grey}>
              https://axelferb.github.io/Gruppuppgift_TBA/
            </span>
          </p>
        </div>
      </div>
      <div className="marginTlg flex">
        <img src={Dashboard} className="Portfolio-image" alt="Dashboard" />
        <div className="Portfolio-text">
          <h2 className="Heading marginTz marginBsm">React JS Dashboard</h2>
          <p className="textSmall marginVz">
            School assignment for a dashboard in React JS
            <br />
            <span style={hashtags}>#html #css #js #react</span>
            <br />
            <span style={grey}>
              https://vctrklndr.github.io/React-Dashboard/
            </span>
          </p>
        </div>
      </div>
      <div className="marginTlg flex">
        <img src={PunkBeer} className="Portfolio-image" alt="Dashboard" />
        <div className="Portfolio-text">
          <h2 className="Heading marginTz marginBsm">Ajax API</h2>
          <p className="textSmall marginVz">
            School assignment handling API in Ajax JS
            <br />
            <span style={hashtags}>#html #css #sass #js #vanilla</span>
            <br />
            <span style={grey}>
              https://vctrklndr.github.io/JavaScript-AJAX/
            </span>
          </p>
        </div>
      </div>
      <div className="marginTlg flex">
        <img src={iChores} className="Portfolio-image" alt="iChores" />
        <div className="Portfolio-text">
          <h2 className="Heading marginTz marginBsm">Vanilla JS Todo</h2>
          <p className="textSmall marginVz">
            School assignment for a to do list in Vanilla JS
            <br />
            <span style={hashtags}>#html #css #sass #js #vanilla</span>
            <br />
            <span style={grey}>
              https://vctrklndr.github.io/JavaScript-to_do/
            </span>
          </p>
        </div>
      </div>
      <div className="marginTlg flex">
        <img src={Mobergs} className="Portfolio-image" alt="Mobergs" />
        <div className="Portfolio-text">
          <h2 className="Heading marginTz marginBsm">Mobergs Bistro</h2>
          <p className="textSmall marginVz">
            Website for restaurant Mobergs Bistro
            <br />
            <span style={hashtags}>#html #php #css #sass #js #jquery</span>
            <br />
            <span style={grey}>http://mobergsbistro.se/</span>
          </p>
        </div>
      </div>
    </>
  );
}

export default Portfolio;
