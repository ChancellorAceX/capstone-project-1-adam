import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Footer.css';
import magnifyingglass from '../resources/magnifying-glass-2.png';
import mapicon from '../resources/map-2.png';


export default function Footer(props) {
  return (
    <footer>
      <Link to='/bestiary'><img className='footer' src={magnifyingglass} alt='alt' /></Link>
      <Link to='/login'><img className='footer' src={mapicon} alt='alt' /></Link>
    </footer>
  );
}