import React, { useState } from 'react';

import { connect } from 'react-redux';

import { selectTheme } from '../../redux/tasks/tasks.selectors';
import { setTheme } from '../../redux/tasks/tasks.actions';

import './theme-switcher.styles.scss';

const ThemeSwitcher = () => {
    const [theme, toggleTheme] = useState();

    const handleChange = (e) => {
        if (e.target.checked) {
            document.documentElement.setAttribute('data-theme', 'dark');
        } else {
            document.documentElement.setAttribute('data-theme', 'light');
        }
    }

    return (
        <input
            type="checkbox"
            className="nav-header__theme-switcher"
            onChange={handleChange}
        />
    )
};

export default ThemeSwitcher;