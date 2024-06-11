import React from "react";
import Molehill from "./images/molehill.png";
import Mole from "./Mole";

function MoleContainer(props) {
    const { setScore, score, isActive } = props;
    const handleClick = () => { 
        if (isActive) {
            setScore(score + 1)
        }
    }


    return (
            <div>
                {isActive ? (
                < Mole handleClick={handleClick} isActive={isActive} />
            ) : (
                <img src={Molehill}></img>
            )}
            </div>
    
    )
}

export default MoleContainer;