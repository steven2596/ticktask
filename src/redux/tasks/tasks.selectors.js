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


export const selectCompletedTasks = createSelector(
    [selectTasks],
    tasks => tasks.filter(task => task.isCompleted === false)
);