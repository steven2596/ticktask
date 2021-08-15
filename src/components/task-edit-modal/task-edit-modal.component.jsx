import React from 'react';
import ReactDom from 'react-dom';

import './task-edit-modal.styles.scss';
import sprite from '../../assets/icons/sprite.svg';
import TaskEditForm from '../task-edit-form/task-edit-form.component';

const TaskEditModal = ({ task, setModal }) => {
    return ReactDom.createPortal(
        <>
            <div className="modal__overlay"></div>

            <div className="modal__content">
                <div className="modal__header">
                    <svg className="modal__inbox-icon" >
                        <use href={sprite + '#icon-drawer'} />
                    </svg>
                    <span className="modal__heading">Task</span>
                    <svg className="modal__exit-icon" onClick={() => setModal(false)}>
                        <use href={sprite + '#icon-cross'} />
                    </svg>
                </div>

                <TaskEditForm task={task} setModal={setModal} />
            </div>
        </>,
        document.getElementById('edit')
    )
};

export default TaskEditModal;