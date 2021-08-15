import React, { useState, useEffect } from 'react';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectTheme } from '../../redux/tasks/tasks.selectors';
import { setTheme } from '../../redux/tasks/tasks.actions';

import './theme-switcher.styles.scss';

import sprite from '../../assets/icons/sprite.svg';

const ThemeSwitcher = ({ theme, setTheme }) => {

    useEffect(() => {
        if (theme === 'light') {
            document.documentElement.setAttribute('data-theme', 'light');
        } else {
            document.documentElement.setAttribute('data-theme', 'dark');
        }

    }, [theme]);


    return (
        <div className="theme-switch__container">

            <svg className={`theme-switch__icon--light ${theme === 'light' ? 'glow' : ''} `} >
                <use href={sprite + '#icon-sun'} />
            </svg>

            <label className="theme-switch__label" >
                <input
                    className="theme-switch__input"
                    type="checkbox"
                    id="themeToggle"
                    name="themeToggle"
                    defaultChecked={theme === 'light' ? false : true}

                    onClick={() => {
                        if (theme === 'light') {
                            setTheme('dark')
                        } else {
                            setTheme('light')
                        }
                    }
                    }
                />
                <div className="theme-switch__slider"></div>
            </label>
            <svg className={`theme-switch__icon--dark ${theme === 'dark' ? 'glow' : ''} `} >
                <use href={sprite + '#icon-moon'} />
            </svg>

        </div >

    )
};

const mapStateToProps = createStructuredSelector({
    theme: selectTheme
});

const mapDispatchToProps = (dispatch) => ({
    setTheme: (theme) => dispatch(setTheme(theme))
});

export default connect(mapStateToProps, mapDispatchToProps)(ThemeSwitcher);