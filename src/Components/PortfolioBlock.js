import React from "react";

function PortfolioBlock(props) {
  return (
    <div className="marginTlg flex">
      <a href={props.href} target="_blank">
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
          <a href={props.href} target="_blank" className="Link">
            <span className="Link--underline">{props.hrefTitle}</span>
          </a>
        </p>
      </div>
    </div>
  );
}

export default PortfolioBlock;
