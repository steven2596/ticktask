import React from 'react';

import './task.styles.scss';
import sprite from '../../assets/icons/sprite.svg';

const Task = ({ task }) => {
    const { title, priority, status } = task;
    return (
        <li className="task">
            <input type="checkbox" className="task__checkbox" />
            <span className="task__title">{title}</span>
            <svg className="task__menu-icon">
                <use href={sprite + '#icon-list2'} />
            </svg>
        </li>
    )
};

export default Task;