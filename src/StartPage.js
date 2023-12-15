import React from 'react';
import logo from './logo.png';
import { Link } from 'react-router-dom';

const StartPage = () => {
  return (
    <div className="start-page">
        <img src={logo} alt="Logo" className="page-image" width = '200' />
      <div className="button-container">
      <Link to="/custom-drink">
        <button className="button">Make Custom Drink</button>
      </Link>
      <Link to="/presaved-drink">
        <button className="button">Make Pre-Saved Recipe</button>
      </Link>
      </div>
    </div>
  );
};

export default StartPage;

//<h1 className="page-heading">Welcome!</h1>