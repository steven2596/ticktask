import React from 'react';

import './task-list.styles.scss';

import Task from '../task/task.component';

const TaskList = ({ tasks, incomplete }) => {
    return (
        <div className="tasklist">
            {
                incomplete ?
                    <h2 className="tasklist__heading" >Tasks In Progress</h2>
                    :
                    <h2 className="tasklist__heading" >Completed</h2>

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

export default TaskList;