import React, { Component } from 'react';
import Root from './components/Root';
import Company from './components/Company'
import Subscriber from './components/Subscriber'
import { Router, Route,browserHistory } from "react-router"
class App extends Component {
  render() {
    return (
      <Router history={browserHistory}>
        <Route path={"company"} component={Company}/>
        <Route path={"subscriber"} component={Subscriber}/>
      </Router>
    );
  }
}

export default App;
