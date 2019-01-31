import React from "react";
import Portfolio from "./Portfolio";
import Blobber from "../Assets/Images/blob-1.svg";

function Main() {
  const blobStyle = {
    marginTop: "-200px",
    marginLeft: "150px",
    position: "relative",
    zIndex: "-3",
    maxWidth: "450px",
    width: "100%"
  }
  return (
    <main className="marginBxlg">
      <Portfolio />
      <img src={Blobber} style={blobStyle} alt="Blob" />
    </main>
  );
}

export default Main;
