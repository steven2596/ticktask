import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { connect } from 'react-redux';
import { setCurrentTask } from '../../redux/tasks/tasks.actions';
import './task.styles.scss';
import sprite from '../../assets/icons/sprite.svg';
import TaskMenuDropdown from '../taskmenu-dropdown/taskmenu-dropdown.component';
import CustomCheckbox from '../custom-checkbox/custom-checkbox.component';
import TaskEditModal from '../task-edit-modal/task-edit-modal.component';

const taskVariants = {
    start: {
        y: 50,
        opacity: 0
    },

    end: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 0.5,
            ease: 'easeOut'
        }
    }

}

const Task = ({ task, setCurrentTask }) => {
    const [dropdown, setDropdown] = useState(false);
    const [modal, setModal] = useState(false);


    const { id, title, priority, isCompleted } = task;
    return (
        <AnimatePresence>
            <motion.div
                variants={taskVariants}
                initial="start"
                animate="end"


                className={`task ${isCompleted ? 'task--complete' : ''}`}
            >
                <CustomCheckbox priority={priority} task={task} />
                <span
                    className={`task__title ${isCompleted ? 'task__title--complete' : ''}`}
                    onClick={() => setCurrentTask(task)} >
                    {title}
                </span>
                <svg
                    className="task__menu-icon"
                    onClick={() => setDropdown(!dropdown)} >
                    <use href={sprite + '#icon-list2'} />
                </svg>
                {
                    dropdown ?
                        <TaskMenuDropdown
                            key={id}
                            task={task}
                            setDropdown={setDropdown}
                            dropdown={dropdown}
                            modal={modal}
                            setModal={setModal}
                        /> : null
                }
                {
                    modal ?
                        <TaskEditModal
                            key={id}
                            task={task}
                            setModal={setModal}
                        /> : null
                }
            </motion.div>
        </AnimatePresence>

    )
};



const mapDispatchToProps = (dispatch) => ({
    setCurrentTask: (task) => dispatch(setCurrentTask(task))
});

export default connect(null, mapDispatchToProps)(Task);