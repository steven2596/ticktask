import React, { useState, useEffect } from 'react';

import { connect } from 'react-redux';
import { editTask } from '../../redux/tasks/tasks.actions';


import './custom-checkbox.styles.scss';

const CustomCheckbox = ({ priority, editTask, task }) => {
    const { isCompleted } = task;

    const completeTask = () => {
        editTask({
            ...task,
            isCompleted: true
        });
    }

    const incompleteTask = () => {
        editTask({
            ...task,
            isCompleted: false
        });
    }

    let priorityColor = '';
    switch (priority) {
        case 1: priorityColor = 'red'; break;
        case 2: priorityColor = 'yellow'; break;
        case 3: priorityColor = 'blue'; break;
        default: priorityColor = 'green';
    }

    return (
        <div
            className="checkbox__container" onClick={() => {
                if (isCompleted) {
                    incompleteTask();
                } else {
                    completeTask();
                }
            }}>
            <div
                className={`checkbox__input 
                ${task.isCompleted ? 'checkbox__input--complete' : ''} 
                ${task.isCompleted ? priorityColor + '--complete' : ''} 
                ${priorityColor} `}
            />
        </div>
    )
};

const mapDispatchToProps = (dispatch) => ({
    editTask: (task) => dispatch(editTask(task))
})

export default connect(null, mapDispatchToProps)(CustomCheckbox);