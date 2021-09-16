/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Link } from 'react-router-dom';
import sticksdoll from '../images/icons/sticksdoll.svg';

const HomePage = () => (
  <div className="homepage_container">
    <Link to="/store">
      <h1 className="homepage_title">Toca aquí y empieza tu pedido ya mismo!</h1>
      <img className="homepage_img" alt="doll" src={sticksdoll} />
    </Link>
  </div>
);
export default HomePage;
