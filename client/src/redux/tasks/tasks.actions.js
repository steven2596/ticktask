import { TasksActionTypes } from './tasks.types';

export const fetchTasksStart = () => ({
    type: TasksActionTypes.FETCH_TASKS_START
});

export const fetchTasksSuccess = (tasks) => ({
    type: TasksActionTypes.FETCH_TASKS_SUCCESS,
    payload: tasks
});

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

export const databaseFailure = (error) => ({
    type: TasksActionTypes.DATABASE_FAILURE,
    payload: error
})

export const setCurrentTask = (task) => ({
    type: TasksActionTypes.SET_CURRENT_TASK,
    payload: task
});

export const clearCompletedTasks = () => ({
    type: TasksActionTypes.CLEAR_COMPLETED_TASKS
});

export const setTheme = (data) => ({
    type: TasksActionTypes.SET_THEME,
    payload: data
});

