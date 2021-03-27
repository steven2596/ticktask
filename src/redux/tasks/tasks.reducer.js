import { TasksActionTypes } from './tasks.types';
import { addTaskToList, deleteTaskFromList, editTaskFromList } from './tasks.util';

const INITIAL_STATE = {
    tasks: []
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

        default: return state;

    }
};

export default tasksReducer;