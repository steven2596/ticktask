import React from 'react';



import './nav-header.styles.scss';
import ThemeSwitcher from '../theme-switcher/theme-switcher.component';

const NavHeader = () => {




    return (
        <div className="nav-header__container" >
            <h2 className="nav-header__logo">TickTask</h2>
            <ThemeSwitcher />
        </div>

    )
};

export default NavHeader;