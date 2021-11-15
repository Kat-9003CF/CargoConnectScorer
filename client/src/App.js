import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";



import './App.css';
import Home from './components/Home'

import PreviousRuns from './components/PreviousRuns'

function App() {
const [scores, setScores] = useState([]);

useEffect(() => {
  getScores();
}, []);

   // GET all scores
   async function getScores() {
    try {
      let response = await fetch('/Scores');
      if (response.ok) {
        let scores = await response.json();
        setScores(scores);
      } else {
        console.log(`Server error: ${response.status} ${response.statusText}`);
      }
    } catch (err) {
      console.log(`Network error: ${err.message}`);
    }
  }


  return (
    <div className="App">

<Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/PreviousRuns">Previous Runs</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/PreviousRuns">
            <PreviousRuns />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>


    </div>
  );
    
}

export default App;
