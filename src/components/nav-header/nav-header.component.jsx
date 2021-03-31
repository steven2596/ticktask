import React from 'react';



import './nav-header.styles.scss';
import ThemeSwitcher from '../theme-switcher/theme-switcher.component';

const NavHeader = () => {




    return (
        <div className="nav-header__container" >

            <ThemeSwitcher />
        </div>

    )
};

export default NavHeader;