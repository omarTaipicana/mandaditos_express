import React from 'react';
import ENCABEZADO from "../assets/images/ENCABEZADO.jpg"

import { useNavigate } from "react-router-dom";

const MyNav = () => {
    const navigate = useNavigate()
    return (
        <div>
           
      <header>
        <div className='header'>
          <img className='img-header' src={ENCABEZADO} alt="Escudo Policía Nacional del Ecuador" />
         
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