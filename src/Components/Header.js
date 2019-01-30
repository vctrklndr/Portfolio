import React from "react";
import Blob from "./Blob";

function Header() {
  const hashTags = {
    fontSize: ".8rem",
    color: "grey"
  };
  return (
    <header>
      <h1 className="Heading marginTxlg marginBz">VIC:TOR KILANDER</h1>
      <p className="marginVz">
        'Blip blop'
        <br />
        <span style={hashTags}>#html #css #sass #less #js #git</span>
      </p>
      <Blob wabbalabba="blob-container blob-container--top"/>
    </header>
  );
}

export default Header;
