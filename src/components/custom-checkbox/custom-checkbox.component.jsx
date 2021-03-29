import React, { useState } from 'react';

import { connect } from 'react-redux';
import { editTask } from '../../redux/tasks/tasks.actions';


import './custom-checkbox.styles.scss';

const CustomCheckbox = ({ priority, editTask, task }) => {
    const [complete, setComplete] = useState(false);

    const completeTask = () => {
        setComplete(!complete);
        editTask({
            ...task,
            isCompleted: true
        })
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
            className="checkbox__container" onClick={() => completeTask()}>
            <div
                className={`checkbox__input 
                ${task.isCompleted ? 'checkbox__input--complete' : ''} 
                ${task.isCompleted ? priorityColor + '--complete' : ''} 
                ${priorityColor} 
                ${complete ? 'taskCompleted' : ''}`} />
        </div>
    )
};

const mapDispatchToProps = (dispatch) => ({
    editTask: (task) => dispatch(editTask(task))
})

export default connect(null, mapDispatchToProps)(CustomCheckbox);