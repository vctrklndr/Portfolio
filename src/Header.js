import React from 'react';

function Header(){
  const hashTags = {
    fontSize: ".8rem",
    color: "grey"
  };
  return(
    <>
      <h1 className="Heading marginVz">VIC:TOR KILANDER</h1>
      <p className="marginVz">Blipblopper</p>
      <p className="marginVz">
        <span style={hashTags}>#html #css #sass #less #js #git</span>
      </p>
    </>
  )
}

export default Header;
