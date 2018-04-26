import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export const Subscriber = () => {
  return (
      <div className="title">
        <h1>React Router demo</h1>
        <Link to="/company"><button>Show the company</button></Link>
      </div>
  )
}

export const Company = () => {
  return (
    <div className="nav">
      <ul>
        <li>list item</li>
        <li>list item</li>
      </ul>
      <Link to="/"><button>Back Home</button></Link>
    </div>
  )
}
