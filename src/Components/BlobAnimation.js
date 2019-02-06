import React from "react";

function BlobAnimation() {
  return (
    <svg
      id="blob"
      width="290"
      height="235"
      xmlns="http://www.w3.org/2000/svg"
      filter="url(#goo)"
    >
      <defs>
        <filter id="goo">
          <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
          <feColorMatrix
            in="blur"
            mode="matrix"
            values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9"
            result="goo"
          />
          <feComposite in="SourceGraphic" in2="goo" operator="atop" />
        </filter>
      </defs>
      <circle id="blob-one" />
      <circle id="blob-two" />
      <circle id="blob-three" />
      <circle id="blob-four" />
      <circle id="blob-five" />
      <circle id="blob-six" />
    </svg>
  );
}

export default BlobAnimation;
