import React, { Component } from 'react';

export const Header = (props)=>{
  return (
  <nav className="navbar navbar-default">
    <div className="container">
      <div className="navbar-header">
        <ul className="nav navbar-nav">
          <li><a href="">Subscribers</a></li>
          <li><a href="">Company</a></li>
        </ul>
      </div>

    </div>
  </nav>
  );
}
