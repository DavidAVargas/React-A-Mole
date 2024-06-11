import React from "react";
import MoleImage from "./images/molee.png";

function Mole(props) {
    const { handleClick, isActive } = props;
  
    return (
      <div>
        <img
          style={{ cursor: isActive ? "pointer" : "default" }}
          src={MoleImage}
          alt="Mole"
          onClick={isActive ? handleClick : undefined}
        />
      </div>
    );
  }

  export default Mole;