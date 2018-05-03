import React from 'react';
import { Link } from 'react-router-dom';

export const Header = (props)=>{
  return (

  <nav className="navbar navbar-default">
    <div className="container-fluid">
      <div className="navbar-header">
        <h1>The newspaper</h1>
      </div>
      <ul className="nav navbar-nav">
        {/* <li><Link to="/">Subscribers</Link></li> */}
        <li><Link to="/createAd">Create Ad</Link></li>
        <li><Link to="/ads">Ads</Link></li>
      </ul>
    </div>
  </nav>
  );
}
