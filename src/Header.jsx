import React from 'react';
import './styles/Main-Page-Styles.css';
import logo from './images/main-logo.png';

const Header = () => {
    return (
        <div>
            <img className="header-logo" src={logo} alt="logo"></img>
            <div className="header-buttons">
                <a className="header-button" href="Contact">Пошук житла для купівлі</a>
                <a className="header-button" href="index1.html">Пошук житла для аренди</a>
                <a className="header-button" href="index1.html">Для продавців житла</a>
                <a className="header-button" href="index1.html">Для арендодавців</a>
            </div>
        </div>
    );
}

export default Header;