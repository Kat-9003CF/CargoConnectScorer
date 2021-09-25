import React, { useState } from "react";
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
