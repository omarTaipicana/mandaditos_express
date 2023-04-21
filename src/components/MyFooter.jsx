import React from 'react';

const MyFooter = () => {
    return (
        <div className='footer'>
            <footer className='footer-content'>
                <div className='footer-item'>
                    <a className='footer-link' href="https://goo.gl/maps/da1EaDAJHdqijeWV6" target="_blank">  <i className="fa fa-location-dot"></i>
                        <b>  Dirección :</b> Barrio Flor María, Calle Flor María y 10</a>
                </div>
                <div className='footer-item'>
                    <a className='footer-link' href="mailto:devif.secretraria@gmail.com"> <b>Correo electrónico:</b>  mandaditosxpress18@gmail.com</a>
                </div>

            </footer>
        </div>
    );
};

export default MyFooter;