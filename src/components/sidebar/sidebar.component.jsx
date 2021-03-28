import React from 'react';

import { connect } from 'react-redux';

import { createStructuredSelector } from 'reselect';
import { selectCurrentTask, selectTasks } from '../../redux/tasks/tasks.selectors';

import './sidebar.styles.scss';

const Sidebar = ({ tasks, currentTask }) => {
    const existingTask = tasks.find(task => task.id === currentTask.id);

    //If task exists in tasks, it will show in the sidebar.
    //When task is deleted, it will be removed from sidebar task detail section
    return (
        <div className="sidebar">
            {
                existingTask ?
                    (
                        <div className="sidebar__task">
                            <h2 className="task__heading">{existingTask.title}</h2>
                            <p className="task__detail">{existingTask.detail}</p>
                        </div>
                    ) :
                    <div className="sidebar__text">Click a task to view detail</div>
            }
        </div>
    )
};

const mapStateToProps = createStructuredSelector({
    tasks: selectTasks,
    currentTask: selectCurrentTask
});

export default connect(mapStateToProps)(Sidebar);