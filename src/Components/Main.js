import React from "react";
import Portfolio from "./Portfolio";
import Blobber from "../Assets/Images/blob-1.svg";

function Main() {
  return (
    <main className="Portfolio marginBxlg">
      <Portfolio />
      <img src={Blobber} className="Blob" alt="Blob" />
    </main>
  );
}

export default Main;
