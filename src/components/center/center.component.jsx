import React, { useState } from 'react';

import { connect } from 'react-redux';

import { createStructuredSelector } from 'reselect';

import './center.styles.scss';
import sprite from '../../assets/icons/sprite.svg';

import { addTask } from '../../redux/tasks/tasks.actions';
import { selectTasks } from '../../redux/tasks/tasks.selectors';
import Task from '../task/task.component';
import CustomButton from '../custom-button/custom-button.component';

const Center = ({ addTask, tasks }) => {
    const [task, setTask] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        const id = Math.floor(Math.random() * 100000);

        if (task) {
            addTask({
                id: id,
                title: task,
                details: '',
                priority: 3,
                completed: false
            });
        }

        setTask('');
    }

    return (
        <div className="center">
            <section className="center__header">
                <h2 className="center__text">Today</h2>
                <form className="center__form" onSubmit={handleSubmit} >
                    <input type="text" className="center__input" onChange={(e) => setTask(e.target.value)} value={task} />
                    <button className="center__button" >
                        <svg className="center__button-icon">
                            <use href={sprite + '#icon-plus'} />
                        </svg>
                    </button>
                </form>
            </section>

            <section className="center__today">
                <h2 className="today__heading" >Ongoing tasks</h2>
                <ul className="today__list" >
                    {
                        tasks.map(task => (
                            <Task key={task.id} task={task} />

                        ))
                    }
                </ul>
            </section>

            <section className="center__completed">

            </section>
        </div>
    )
};

const mapStateToProps = createStructuredSelector({
    tasks: selectTasks
});

const mapDispatchToProps = (dispatch) => ({
    addTask: (task) => dispatch(addTask(task))
});

export default connect(mapStateToProps, mapDispatchToProps)(Center);
