import { put, call, takeLatest, all, take } from 'redux-saga/effects';
import { fetchTasksSuccess, fetchTasksFailure, databaseFailure } from './tasks.actions';
import { TasksActionTypes } from './tasks.types';
import axios from 'axios';

export function* fetchTasksFromDatabase() {
    const res = yield fetch('http://localhost:5000/tasks');
    const data = yield res.json();
    console.log(data)
    yield put(fetchTasksSuccess(data))
}

export function* fetchTasksAsync() {
    try {
        yield call(fetchTasksFromDatabase)
    } catch (error) {
        yield put(databaseFailure(error))
    }
}

export function* addTaskAsync({ payload: { title } }) {
    try {
        yield axios.post('http://localhost:5000/tasks/', { title: title })
        yield call(fetchTasksFromDatabase);
    } catch (error) {
        yield put(databaseFailure(error))
    }
}

export function* deleteTaskAsync({ payload: { _id } }) {
    try {
        yield axios.delete('http://localhost:5000/tasks/' + _id);
        yield call(fetchTasksFromDatabase);
    } catch (error) {
        yield put(databaseFailure(error));
    }
}

export function* editTaskAsync({ payload: { _id, title, details, priority, isCompleted } }) {
    try {
        yield axios.put(`http://localhost:5000/tasks/${_id}`, { title, details, priority, isCompleted });
        yield call(fetchTasksFromDatabase);
    } catch (error) {
        yield put(databaseFailure(error));
    }
}

export function* onFetchTasksStart() {
    yield takeLatest(
        TasksActionTypes.FETCH_TASKS_START,
        fetchTasksAsync
    )
}

export function* onAddTask() {
    yield takeLatest(
        TasksActionTypes.ADD_TASK,
        addTaskAsync
    )
}

export function* onDeleteTask() {
    yield takeLatest(
        TasksActionTypes.DELETE_TASK,
        deleteTaskAsync
    )
}

export function* onEditTask() {
    yield takeLatest(
        TasksActionTypes.EDIT_TASK,
        editTaskAsync
    )
}


export function* taskSagas() {
    yield all([
        call(onFetchTasksStart),
        call(onAddTask),
        call(onDeleteTask),
        call(onEditTask)
    ])
};