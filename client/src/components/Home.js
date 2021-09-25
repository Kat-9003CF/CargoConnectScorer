import React, { useState } from "react";
import "./Home.css";

import TopScore from './TopScore'
import Calculator from './Calculator'
import Timer from './Timer'

function Home() {
  const [highScore, setHighScore] = useState(75);
  
  return (
      <div className = 'Home'>
        <h2>Welcome to the 2021/2022 FLL Season!</h2>
        <img src = 'https://brickjournal.com/wp-content/uploads/2021/05/CARGO_CONNECT_Logo_Horizontal_RGB_FullColor-1024x521.jpg'/>
        <TopScore />
        <Timer />
        {/* <Calculator/> */}
    </div>
  );
};

export default Home;