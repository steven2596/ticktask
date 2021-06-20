import React from 'react';

import { connect } from 'react-redux';

import { createStructuredSelector } from 'reselect';
import { selectCurrentTask, selectTasks } from '../../redux/tasks/tasks.selectors';

import ThemeSwitcher from '../theme-switcher/theme-switcher.component';

import './sidebar.styles.scss';

const Sidebar = ({ tasks, currentTask }) => {
    const existingTask = tasks && tasks.find(task => task._id === currentTask._id);

    //If task exists in tasks, it will show in the sidebar.
    //When task is deleted, it will be removed from sidebar task detail section
    return (
        <div className="sidebar">
            {/* <div className="sidebar__header">
                <ThemeSwitcher />
            </div> */}
            {
                existingTask ?
                    (
                        <div className="sidebar__detail">
                            <h2 className="detail__heading">{existingTask.title}</h2>
                            <p className="detail__description">Description:</p>
                            <p className="detail__content">{existingTask.details}</p>
                        </div>
                    ) :
                    <div className="sidebar__empty-text">Click a task to view detail</div>
            }
        </div>
    )
};

const mapStateToProps = createStructuredSelector({
    tasks: selectTasks,
    currentTask: selectCurrentTask
});

export default connect(mapStateToProps)(Sidebar);