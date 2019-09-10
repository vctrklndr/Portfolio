import React from "react";
import Blobber from "../Assets/Images/blob-fallback.svg";

function Blob(){
  return(
    <img src={Blobber} className="Blob-fallback" alt="Blob" />
  );
}

export default Blob;