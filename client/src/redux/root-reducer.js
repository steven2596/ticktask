import { combineReducers } from 'redux';

import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import tasksReducer from './tasks/tasks.reducer';

const persistConfig = {
    key: 'primary',
    storage
};

const rootReducer = combineReducers({
    taskList: tasksReducer
});

export default persistReducer(persistConfig, rootReducer);