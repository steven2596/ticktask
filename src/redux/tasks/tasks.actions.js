import { TasksActionTypes } from './tasks.types';

export const addTask = (task) => ({
    type: TasksActionTypes.ADD_TASK,
    payload: task
});

export const deleteTask = (task) => ({
    type: TasksActionTypes.DELETE_TASK,
    payload: task
});

export const editTask = (task) => ({
    type: TasksActionTypes.EDIT_TASK,
    payload: task
});

export const setCurrentTask = (task) => ({
    type: TasksActionTypes.SET_CURRENT_TASK,
    payload: task
})