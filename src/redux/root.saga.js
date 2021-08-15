import { call, all } from "redux-saga/effects";

import { taskSagas } from "./tasks/tasks.saga";

export default function* rootSaga() {
    yield all([
        call(taskSagas)
    ]);
};