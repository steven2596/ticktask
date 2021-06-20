import { createSelector } from 'reselect';

export const selectTaskList = state => state.taskList;

export const selectTasks = createSelector(
    [selectTaskList],
    taskList => taskList.tasks
);

export const selectCurrentTask = createSelector(
    [selectTaskList],
    taskList => taskList.currentTask
);

export const selectTheme = createSelector(
    [selectTaskList],
    taskList => taskList.theme
);

export const selectCompletedTasks = createSelector(
    [selectTasks],
    tasks => tasks && tasks.filter(task => task.isCompleted === true)
);

export const selectIncompletedTasks = createSelector(
    [selectTasks],
    tasks => tasks && tasks.filter(task => task.isCompleted === false)
);