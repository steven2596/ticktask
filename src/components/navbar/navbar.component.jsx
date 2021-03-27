import React from 'react';

import './navbar.styles.scss';
import sprite from '../../assets/icons/sprite.svg';

const Navbar = () => {
    return (
        <nav className="navbar">
            <h2 className="navbar__logo">TickTask</h2>

            <ul className="navbar__menu">
                <li className="navbar__item">
                    <svg className="navbar__icon" >
                        <use href={sprite + '#icon-calendar'} />
                    </svg>
                    <span className="navbar__title">Today</span>
                </li>
                <li className="navbar__item">
                    <svg className="navbar__icon" >
                        <use href={sprite + '#icon-stack'} />
                    </svg>
                    <span className="navbar__title">All Tasks</span>
                </li>
                <li className="navbar__item">
                    <svg className="navbar__icon" >
                        <use href={sprite + '#icon-spinner'} />
                    </svg>
                    <span className="navbar__title">In Progress</span>
                </li>
                <li className="navbar__item">
                    <svg className="navbar__icon" >
                        <use href={sprite + '#icon-checkbox'} />
                    </svg>
                    <span className="navbar__title">Completed</span>
                </li>

            </ul>

            <div className="navbar__footer">
                <svg className="navbar__icon" >
                    <use href={sprite + '#icon-exit'} />
                </svg>
                <span className="navbar__title">Sign In</span>
            </div>
        </nav>
    )
};

export default Navbar;