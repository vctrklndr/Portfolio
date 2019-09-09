import React from "react";

function PortfolioBlock(props) {
  return (
    <div className="Portfolio-block marginTlg flex">
      <a href={props.href} target="_blank" rel="noopener noreferrer">
        <img
          src={props.image}
          className="Portfolio-image"
          alt={props.imageAlt}
        />
      </a>
      <div className="Portfolio-text">
        <h2 className="Heading Heading--h2 marginTz marginBsm">{props.title}</h2>
        <p className="textSmall marginVz">
          {props.description}
          <br />
          <span className="textSmall textYellow">{props.hashtags}</span>
          <br />
          <a className="Link" href={props.href} target="_blank" rel="noopener noreferrer">
            <span className="Link--underline">{props.hrefTitle}</span>
          </a>
        </p>
      </div>
    </div>
  );
}

export default PortfolioBlock;
