import React from 'react';

import { connect } from 'react-redux';

import { clearCompletedTasks } from '../../redux/tasks/tasks.actions';

import './task-list.styles.scss';

import Task from '../task/task.component';

const TaskList = ({ tasks, incomplete, clearCompletedTasks }) => {
    return (
        <div className="tasklist">
            {
                incomplete ?
                    <h2 className="tasklist__incomplete" >Tasks In Progress</h2>
                    :
                    <div className="tasklist__complete" >
                        <h4 className="complete__heading">Completed</h4>
                        <span className="complete__clear-button" onClick={() => clearCompletedTasks()} >Clear all</span>
                    </div>

            }


            <div className="tasklist__list" >
                {
                    tasks.map(task => (
                        <Task key={task.id} task={task} />

                    ))
                }
            </div>



        </div>
    )
};

const mapDispatchToProps = (dispatch) => ({
    clearCompletedTasks: () => dispatch(clearCompletedTasks())
})

export default connect(null, mapDispatchToProps)(TaskList);