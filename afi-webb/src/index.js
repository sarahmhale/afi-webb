import React from 'react';
import ReactDOM from 'react-dom';
import Subscriber from './components/Subscriber'
import Company from './components/Company'

import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';





ReactDOM.render(
  <BrowserRouter>
    <div>
      <Route exact path={"/"} component={Subscriber}/>
      <Route path={"/company"} component={Company}/>
    </div>
  </BrowserRouter>, document.getElementById('root'));
registerServiceWorker();
