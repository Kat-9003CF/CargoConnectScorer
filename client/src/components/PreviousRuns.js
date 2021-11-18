import React, { useState } from "react";
import "./PreviousRuns.css";

import TopScore from './TopScore'
import Calculator from './Calculator'
import Timer from './Timer'

function PreviousRuns(props) {
  
  return (

      <div className = 'PrevRuns'>
        <TopScore scores ={props.scores}/>
        <h2>Previous Run Scores and Details</h2>
        <table className="prevRuns">
      <thead>
        <tr>
          <th>Date</th>
          <th>Score</th>
          <th>Challenges</th>
          <th>Remove</th>
        </tr>
      </thead>
      <tbody>
        {props.scores.map(s => (
          <tr key={s.id}>
            <td>{s.date}</td>
            <td>{s.score}</td>
            <td>{s.challenges}</td>
            <td>
              <button onClick={e => props.deleteCb(s.id)}>X</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
        
        {/* <Calculator/> */}
    </div>
  );
};

export default PreviousRuns;
