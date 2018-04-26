import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export const Header = (props)=>{
  return (

  <nav class="navbar navbar-default">
    <div class="container-fluid">
      <div class="navbar-header">
        <h1>The newspaper</h1>
      </div>
      <ul class="nav navbar-nav">
        <li><Link to="/">Subscribers</Link></li>
        <li><Link to="/company">Company</Link></li>
        <li><Link to="/ads">Ads</Link></li>
      </ul>
    </div>
  </nav>
  );
}
