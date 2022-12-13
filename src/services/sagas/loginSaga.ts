import { all, call, takeLatest } from "redux-saga/effects";
import { ENDPOINTS } from "../../constants";
import { USER_LOGIN_REQUEST } from "../constants";
import { apiCall } from "./api";

function* fetchLoginSaga(action: any): any {
  try {
    const requestData = action.payload;
    console.log(requestData);
    debugger;
    const rest = yield call(apiCall, "POST", ENDPOINTS.LOGIN, action.payload);
    console.log(rest);
  } catch (err) {
    console.log(err);
  }
}

function* loginSaga() {
  yield all([takeLatest(USER_LOGIN_REQUEST, fetchLoginSaga)]);
}

export default loginSaga;
