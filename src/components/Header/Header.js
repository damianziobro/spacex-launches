import React from 'react';

import logo from '../../assets/img/space_x_logo_bw_centered.png';

import './Header.sass';

function Header() {
    return (
        <header className="header">
            <img className="header__logo" src={logo} />
        </header>
    );
};

export default Header;