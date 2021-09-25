import React, { useState } from "react";
import "./Timer.css";

function Timer() {

  const [timeLimit, setTimeLimit] = useState(150) 

  function startTimer(timeLimit){
    while (timeLimit>0){
      return setTimeout(() => setTimeLimit(timeLimit-1), 1000);
    }
    return (0)
  };

  function display(timeLimit){
    let count = timeLimit;
    let minutes = 0;
    let tensSeconds=0;
    let seconds = 0;
    while (count>59){
      minutes++;
      count-=60;
    } 
    while (count<60&&count>9){
      tensSeconds+=1
      count-=10;
    }
    seconds+=count;
    return `${minutes}:${tensSeconds}${seconds}`

  } 


return (

    <div className="timer">
      <h2>Timer</h2>
      <h1>{display(timeLimit)}</h1>
      <button onClick={(e) => startTimer(timeLimit)}>Start Timer</button>
      {/* <button onClick={(e) => setTimeLimit(150)}>Reset Timer</button> */}
    </div>
  );
};

export default Timer;
