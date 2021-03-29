import React, { useState } from 'react';

import { connect } from 'react-redux';

import { deleteTask, editTask } from '../../redux/tasks/tasks.actions';

import './taskmenu-dropdown.styles.scss';
import sprite from '../../assets/icons/sprite.svg';


const TaskMenuDropdown = ({ task, deleteTask, editTask, setDropdown, dropdown, modal, setModal }) => {


    const clickToHideDropdown = (num) => {
        editTask({
            ...task,
            priority: num
        });

        setDropdown(!dropdown);
    }


    return (
        <div className="dropdown">
            <div className="dropdown__priority" >
                <h4 className="priority__heading">Priority</h4>
                <div className="priority__menu">
                    <svg className="priority__level priority__level--1"
                        onClick={() => clickToHideDropdown(1)}>
                        <use href={sprite + '#icon-flag'} />
                    </svg>
                    <svg className="priority__level priority__level--2"
                        onClick={() => clickToHideDropdown(2)}>
                        <use href={sprite + '#icon-flag'} />
                    </svg>
                    <svg className="priority__level priority__level--3"
                        onClick={() => clickToHideDropdown(3)}>
                        <use href={sprite + '#icon-flag'} />
                    </svg>
                    <svg className="priority__level priority__level--4"
                        onClick={() => clickToHideDropdown(4)}>
                        <use href={sprite + '#icon-flag'} />
                    </svg>
                </div>
            </div>

            <div className="dropdown__buttons">
                <div className="button__container" onClick={() => deleteTask(task)} >
                    <svg className="button__icon button__icon--delete">
                        <use href={sprite + '#icon-bin'} />
                    </svg>
                    <span className="button__label">Delete</span>
                </div>
                <div
                    className="button__container"
                    onClick={() => {
                        setModal(true);
                        setDropdown(false);
                    }}
                >
                    <svg className="button__icon button__icon--edit"  >
                        <use href={sprite + '#icon-pencil'} />
                    </svg>
                    <span className="button__label">Edit</span>
                </div>
            </div>

        </div>
    )
};

const mapDispatchToProps = (dispatch) => ({
    deleteTask: (task) => dispatch(deleteTask(task)),
    editTask: (task) => dispatch(editTask(task))
});

export default connect(null, mapDispatchToProps)(TaskMenuDropdown);