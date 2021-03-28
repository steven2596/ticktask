import React, { useState } from 'react';

import { connect } from 'react-redux';
import { setCurrentTask } from '../../redux/tasks/tasks.actions';
import './task.styles.scss';
import sprite from '../../assets/icons/sprite.svg';
import TaskMenuDropdown from '../taskmenu-dropdown/taskmenu-dropdown.component';
import CustomCheckbox from '../custom-checkbox/custom-checkbox.component';

const Task = ({ task, setCurrentTask }) => {
    const [dropdown, setDropdown] = useState(false);

    const { id, title, priority, isCompleted } = task;
    return (
        <div className="task">
            <CustomCheckbox priority={priority} task={task} />
            <span className="task__title" onClick={() => setCurrentTask(task)} >{title}</span>
            <svg className="task__menu-icon" onClick={() => setDropdown(!dropdown)} >
                <use href={sprite + '#icon-list2'} />
            </svg>
            {
                dropdown ?
                    <TaskMenuDropdown
                        key={id}
                        task={task}
                        setDropdown={setDropdown}
                        dropdown={dropdown}
                    /> : null
            }
        </div>
    )
};



const mapDispatchToProps = (dispatch) => ({
    setCurrentTask: (task) => dispatch(setCurrentTask(task))
});

export default connect(null, mapDispatchToProps)(Task);