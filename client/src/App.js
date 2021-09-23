import React, { useState } from "react";

import './App.css';
import TopScore from './components/TopScore'
import Calculator from './components/Calculator'
import Timer from './components/Timer'

function App() {
  return (
    <div className="App">
      <h2>Welcome to the 2021/2022 FLL Season!</h2>
      <img src = 'https://brickjournal.com/wp-content/uploads/2021/05/CARGO_CONNECT_Logo_Horizontal_RGB_FullColor-1024x521.jpg'/>
      <TopScore />
      <Timer />
      {/* <Calculator/> */}
    </div>
  );
    
}

export default App;
