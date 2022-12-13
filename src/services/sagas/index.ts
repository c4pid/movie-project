import { all, fork } from "redux-saga/effects";
import usersSaga from "./usersSaga";
import loginSaga from "./loginSaga";
import getListBannerSaga from "./getListMovies";

export function* rootSaga() {
  yield all([fork(usersSaga)]);
  yield all([fork(loginSaga)]);
  yield all([fork(getListBannerSaga)]);
}
