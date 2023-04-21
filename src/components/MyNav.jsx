import React from 'react';
import ENCABEZADO from "../assets/images/ENCABEZADO.jpg"
import WA from "../assets/images/WA.png"
import FB from "../assets/images/FB.png"


import { Link, useNavigate } from "react-router-dom";

const MyNav = () => {
  const navigate = useNavigate()
  return (
    <div>

      <header>
        <div className='header'>
          <img className='img-header' src={ENCABEZADO} alt="ENCABEZADO" />
          <div className='header-icon'>
            <a href="https://api.whatsapp.com/send?phone=593988202320" target="_blank" > <img className='img-header-icon-wa' src={WA} alt="WA" /></a>
            <a href="https://www.facebook.com/mandaditosxpresspuyo/?mibextid=ZbWKwL" target="_blank" > <img className='img-header-icon-fb' src={FB} alt="FB" /></a>
          </div>
        </div>
        <nav>
          <ul className='ul-header'>
            <li onClick={() => navigate(`/`)} className='li-header'>Inicio</li>
            <li onClick={() => navigate(`/registro`)} className='li-header'>Registrate</li>
            <li className='li-header'></li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default MyNav;