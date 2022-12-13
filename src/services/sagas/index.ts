import { all, fork } from "redux-saga/effects";
import usersSaga from "./usersSaga";
import loginSaga from "./loginSaga";

export function* rootSaga() {
  yield all([fork(usersSaga)]);
  yield all([fork(loginSaga)]);
}
