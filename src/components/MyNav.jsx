import React from 'react';
import ENCABEZADO from "../assets/images/ENCABEZADO.jpg"
import WA from "../assets/images/WA.png"
import FB from "../assets/images/FB.png"
import LL from "../assets/images/LL.png"
import IG from "../assets/images/IG.png"


import { Link, useNavigate } from "react-router-dom";

const MyNav = () => {
  const navigate = useNavigate()
  return (
    <div>

      <header>
        <div className='header'>
          <img className='img-header' src={ENCABEZADO} alt="ENCABEZADO" />
          <div className='header-icon'>
            <a className='a-icon' href="https://api.whatsapp.com/send?phone=593988202320" target="_blank" > <img className='img-header-icon-wa' src={WA} alt="WA" /></a>
            <a  className='a-icon'href="https://www.facebook.com/mandaditosxpresspuyo/?mibextid=ZbWKwL" target="_blank" > <img className='img-header-icon-fb' src={FB} alt="FB" /></a>
            <a className='a-icon' href="https://instagram.com/mandaditosxp?igshid=YmMyMTA2M2Y=" target="_blank" > <img className='img-header-icon-fb' src={IG} alt="FB" /></a>
            <a className='a-icon' href="tel:+593989202320" target="_blank" > <img className='img-header-icon-wa' src={LL} alt="FB" /></a>
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