import { createSelector } from 'reselect';

export const selectTaskList = state => state.taskList;

export const selectTasks = createSelector(
    [selectTaskList],
    taskList => taskList.tasks
);
