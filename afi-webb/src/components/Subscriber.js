import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class SubscriberPage extends Component {
  render() {
    return (
      <div>

        <p>
          Subscriber
          <Link to="/company"><button>Show the company</button></Link>
        </p>
      </div>
    );
  }
}
