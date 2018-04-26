import React, { Component } from 'react';
import {Header} from './Header';


export default class Root extends Component {
  render() {
    return (
      <div className= "containter">
        <div className="row">
          <div className="col-xs-10 col-xs-offset-1">
            <Header/>
          </div>
        </div>

        <div className="row">
          <div className="col-xs-10 col-xs-offset-1">
            {this.props.children}
          </div>
        </div>
      </div>
    );
  }
}
