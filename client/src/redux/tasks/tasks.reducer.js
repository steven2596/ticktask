import { TasksActionTypes } from './tasks.types';

const INITIAL_STATE = {
    tasks: [],
    currentTask: {},
    theme: 'light',
    error: null
};

const tasksReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case TasksActionTypes.FETCH_TASKS_SUCCESS:
            return {
                ...state,
                tasks: action.payload,
                error: null
            };

        case TasksActionTypes.DATABASE_FAILURE:
            return {
                ...state,
                error: action.payload
            };

        case TasksActionTypes.SET_CURRENT_TASK:
            return {
                ...state,
                currentTask: action.payload
            };

        // case TasksActionTypes.CLEAR_COMPLETED_TASKS:
        //     return {
        //         ...state,
        //         tasks: removeCompletedFromList(state.tasks)
        //     };

        case TasksActionTypes.SET_THEME:
            return {
                ...state,
                theme: action.payload
            }

        default: return state;

    }
};

export default tasksReducer;