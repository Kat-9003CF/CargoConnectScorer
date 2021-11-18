import React, { useEffect, useState } from "react";
import "./TopScore.css";


function TopScore(props) {
  const [scores, setScores] = useState(props.scores);
  const [highScore, setHighScore] = useState([])

  useEffect(() => {
    getHighScore();
  }, []);

  function getHighScore(){
    let allScores = props.scores.map(n => n.score);
    let highScore = allScores[0];
    for (let score in allScores){
      if (score>highScore){
        highScore = score;
      }
    }
    setHighScore(highScore)
    console.log(highScore)
  }
 
  
  return (
    <div className="topScore">
      <h2>Your Current High Score: {highScore}</h2> 
      {/* <button>View Run</button> */}
    </div>
  );
};

export default TopScore;
