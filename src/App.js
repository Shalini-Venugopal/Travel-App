import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LoginSignUp from './pages/LoginSignUp';
import DestinationComponent from './Component/DestinationComponent';
import AboutUsComponent from './Component/AboutUsComponent';

import home from './pages/home';
import ContactUsComponent from './Component/ContactUsComponent';
<Route exact path="/" component={home} />

function App() {
  return (
    <div className="wrapper">
      <Router>
        <Switch>
            <Route exact path="/" component={home} />
            <Route exact path="/signup" component={LoginSignUp} />
            <Route exact path="/destination" component={DestinationComponent} />
            <Route exact path="/aboutus" component={AboutUsComponent} />
            <Route exact path="/contactus" component={ContactUsComponent} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
