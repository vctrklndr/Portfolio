import React from "react";
import BlobAnimation from "./BlobAnimation";
import Blob from "./Blob";

class Header extends React.Component {
  renderBlobs = () => {
    const CHROME =
      navigator.userAgent
        .toString()
        .toLowerCase()
        .indexOf("chrome") !== -1;
    if (!CHROME) {
      return <Blob />;
    } else {
      return <BlobAnimation />;
    }
  };
  render() {
    return (
      <header>
        <h1 className="Heading marginTxlg marginBz">VIC:TOR KILANDER</h1>
        <p className="marginVz">
          'Blip blop'
          <br />
          <span className="textSmall textGrey">
            #html #css #sass #less #js #git
          </span>
        </p>
        <div className="Blob-container">{this.renderBlobs()}</div>
      </header>
    );
  }
}

export default Header;
