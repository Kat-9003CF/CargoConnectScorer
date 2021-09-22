import React, { useState } from "react";
import "./TopScore.css";

function TopScore() {
  const [highScore, setHighScore] = useState(75);
  
  return (
    <div className="topScore">
      <h2>Your Current High Score: {highScore}</h2> 
      {/* <button>View Run</button> */}
    </div>
  );
};

export default TopScore;
