import React, { useState } from 'react';

import { connect } from 'react-redux';

import { createStructuredSelector } from 'reselect';

import './center.styles.scss';
import sprite from '../../assets/icons/sprite.svg';

import { addTask } from '../../redux/tasks/tasks.actions';
import { selectCompletedTasks, selectIncompletedTasks } from '../../redux/tasks/tasks.selectors';

import TaskList from '../task-list/task-list.component';


const Center = ({ addTask, completedTasks, incompletedTasks, showComplete, showIncomplete }) => {
    const [task, setTask] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        if (task.trim().length !== 0) {
            addTask({
                title: task
            });
        }

        setTask('');
    }

    return (
        <div className="center">
            <section className="center__header">
                <h2 className="center__text">Today</h2>
                <form className="center__form" onSubmit={handleSubmit} >
                    <input
                        type="text"
                        className="center__input"
                        onChange={(e) => setTask(e.target.value)} value={task}
                        placeholder="Add Task for Today..."
                    />
                    <button className="center__button" >
                        <svg className="center__button-icon">
                            <use href={sprite + '#icon-plus'} />
                        </svg>
                    </button>
                </form>
            </section>

            <section className="center__tasklist">
                {
                    showIncomplete ? <TaskList tasks={incompletedTasks} incomplete /> : null
                }
                {
                    showComplete ? <TaskList tasks={completedTasks} /> : null
                }
            </section>
        </div>
    )
};

const mapStateToProps = createStructuredSelector({
    completedTasks: selectCompletedTasks,
    incompletedTasks: selectIncompletedTasks
});

const mapDispatchToProps = (dispatch) => ({
    addTask: (task) => dispatch(addTask(task))
});

export default connect(mapStateToProps, mapDispatchToProps)(Center);
