import React, { useState } from 'react';

import { connect } from 'react-redux';

import { editTask } from '../../redux/tasks/tasks.actions';

import './task-edit-form.styles.scss';

const TaskEditForm = ({ task, editTask, setModal }) => {
    const { title, details } = task;
    const [name, setName] = useState(title);
    const [description, setDescription] = useState(details);

    const handleSubmit = (e) => {
        e.preventDefault();

        editTask({
            ...task,
            title: name,
            details: description.trim()
        });

        setModal(false);
    }

    return (
        <form className="edit-form" onSubmit={handleSubmit}>

            <label className="edit-form__input-label">Title</label>
            <input
                type="text"
                className="edit-form__input"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />


            <label className="edit-form__input-label">Description</label>
            <textarea
                cols="30"
                rows="7"
                className="edit-form__text"
                placeholder="Add a comment..."
                value={description}
                onChange={(e) => setDescription(e.target.value)}
            >
                {details}
            </textarea>

            <button className="edit-form__button" >Save</button>

        </form>
    )
};

const mapDispatchToProps = (dispatch) => ({
    editTask: (task) => dispatch(editTask(task))
});

export default connect(null, mapDispatchToProps)(TaskEditForm);