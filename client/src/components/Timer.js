import React, { useState } from "react";
import "./Timer.css";

function timer() {
return (

    <div className="timer">
      <h2>Timer</h2>
      <h1>2:30</h1>
      <button>Start Timer</button>
      <button>Reset Timer</button>
    </div>
  );
};

export default timer;
