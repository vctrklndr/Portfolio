import React from "react";
import Block from "./PortfolioBlock";
import Musikinstitutet from "../Assets/Images/music-1.png";
import Dashboard from "../Assets/Images/dashboard.jpg";
import PunkBeer from "../Assets/Images/punk_beer.png";
import iChores from "../Assets/Images/ichores.png";
import Washi from "../Assets/Images/washi.png";
import Mobergs from "../Assets/Images/mobergs_bistro.png";

function Portfolio() {
  return (
    <>
      <Block
        image={Musikinstitutet}
        imageAlt="iChords"
        title="Musikinstitutet"
        description="School assignment in Vanilla JS"
        hashtags="#html #css #sass #js #vanilla"
        href="https://axelferb.github.io/Gruppuppgift_TBA/"
        hrefTitle="github.io/Gruppuppgift_TBA/"
      />
      <Block
        image={Dashboard}
        imageAlt="Dashboard"
        title="React JS Dashboard"
        description="School assignment for a dashboard in React JS"
        hashtags="#html #css #js #react"
        href="https://vctrklndr.github.io/React-Dashboard/"
        hrefTitle="github.io/React-Dashboard/"
      />
      <Block 
        image={PunkBeer}
        imageAlt="Punk Beer API"
        title="Ajax API"
        description="School assignment handling API in Ajax JS"
        hashtags="#html #css #sass #js #vanilla"
        href="https://vctrklndr.github.io/JavaScript-AJAX/"
        hrefTitle="github.io/JavaScript-AJAX/"
      />
      <Block 
        image={iChores}
        imageAlt="iChores"
        title="Vanilla JS Todo"
        description="School assignment for a to do list in Vanilla JS"
        hashtags="#html #css #sass #js #vanilla"
        href="https://vctrklndr.github.io/JavaScript-to_do/"
        hrefTitle="github.io/JavaScript-to_do/"
      />
      <Block 
        image={Washi}
        imageAlt="Washi"
        title="Washi"
        description="School assignment making a laundry booking system"
        hashtags="#html #css #less #js #vue"
        href="https://github.com/vctrklndr/washi"
        hrefTitle="github.com/vctrklndr/washi"
      />
      <Block 
        image={Mobergs}
        imageAlt="Mobergs Bistro"
        title="Mobergs Bistro"
        description="Website for restaurant Mobergs Bistro"
        hashtags="#html #php #css #sass #js #jquery"
        href="http://mobergsbistro.se/"
        hrefTitle="mobergsbistro.se/"
      />
    </>
  );
}

export default Portfolio;
