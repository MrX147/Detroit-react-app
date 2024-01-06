import React from "react";

export default function Button({ handleClick, text }) {
  return (
    <div>
      <button className="btn" onClick={handleClick}>
        {text}
      </button>
      {/* <button className="btn" onClick={handleDec}>
        -
      </button> */}
    </div>
  );
}
