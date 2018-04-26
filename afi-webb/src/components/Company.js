import React, { Component } from 'react';
import { Link } from 'react-router-dom';


export default class CompanyPage extends Component {
  render() {
    return (
      <div>

        <p>
          Company
          <Link to="/"><button>Back Home</button></Link>
          
        </p>
      </div>
    );
  }
}
