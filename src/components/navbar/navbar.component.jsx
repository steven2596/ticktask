import React from 'react';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectTasks, selectCompletedTasks, selectIncompletedTasks } from '../../redux/tasks/tasks.selectors';

import './navbar.styles.scss';
import sprite from '../../assets/icons/sprite.svg';
import ThemeSwitcher from '../theme-switcher/theme-switcher.component';

const Navbar = ({ tasks, completedTasks, incompletedTasks, setShowComplete, setShowIncomplete }) => {
    return (
        <nav className="navbar">
            <h2 className="navbar__logo">TickTask</h2>

            <ul className="navbar__menu">
                <li className="navbar__item" onClick={() => {
                    setShowComplete(true);
                    setShowIncomplete(true);
                }}>
                    <svg className="navbar__icon" >
                        <use href={sprite + '#icon-stack'} />
                    </svg>
                    <span className="navbar__title">All Tasks</span>
                    <span className="navbar__count">{tasks.length}</span>
                </li>
                <li className="navbar__item" onClick={() => {
                    setShowComplete(false);
                    setShowIncomplete(true);
                }} >
                    <svg className="navbar__icon" >
                        <use href={sprite + '#icon-spinner'} />
                    </svg>
                    <span className="navbar__title" >In Progress</span>
                    <span className="navbar__count">{incompletedTasks.length}</span>
                </li>
                <li className="navbar__item" onClick={() => {
                    setShowComplete(true);
                    setShowIncomplete(false);
                }} >
                    <svg className="navbar__icon" >
                        <use href={sprite + '#icon-checkbox'} />
                    </svg>
                    <span className="navbar__title">Completed</span>
                    <span className="navbar__count">{completedTasks.length}</span>
                </li>

            </ul>
            <div className="navbar__toggle" >
                <ThemeSwitcher />
            </div>


        </nav>
    )
};

const mapStateToProps = createStructuredSelector({
    tasks: selectTasks,
    completedTasks: selectCompletedTasks,
    incompletedTasks: selectIncompletedTasks
})

export default connect(mapStateToProps)(Navbar);