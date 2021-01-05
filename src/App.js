import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LoginSignUp from './pages/LoginSignUp';

import home from './pages/home';
<Route exact path="/" component={home} />
// <Route exact path="/" component={LoginSignUp} />


function App() {
  return (
    <div className="wrapper">
      <Router>
        <Switch>
            <Route exact path="/" component={home} />
            <Route exact path="/signup" component={LoginSignUp} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
