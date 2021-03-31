import { TasksActionTypes } from './tasks.types';
import { addTaskToList, deleteTaskFromList, editTaskFromList, removeCompletedFromList } from './tasks.util';

const INITIAL_STATE = {
    tasks: [],
    currentTask: {},
    theme: 'light'
};

const tasksReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case TasksActionTypes.ADD_TASK:
            return {
                ...state,
                tasks: addTaskToList(state.tasks, action.payload)
            };

        case TasksActionTypes.DELETE_TASK:
            return {
                ...state,
                tasks: deleteTaskFromList(state.tasks, action.payload)
            };

        case TasksActionTypes.EDIT_TASK:
            return {
                ...state,
                tasks: editTaskFromList(state.tasks, action.payload)
            };

        case TasksActionTypes.SET_CURRENT_TASK:
            return {
                ...state,
                currentTask: action.payload
            };

        case TasksActionTypes.CLEAR_COMPLETED_TASKS:
            return {
                ...state,
                tasks: removeCompletedFromList(state.tasks)
            };

        case TasksActionTypes.SET_THEME:
            return {
                ...state,
                theme: action.payload
            }

        default: return state;

    }
};

export default tasksReducer;