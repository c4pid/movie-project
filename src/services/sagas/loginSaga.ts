import { AxiosError, AxiosResponse } from "axios";
import { useNavigate } from "react-router";
import { all, call, put, takeLatest } from "redux-saga/effects";
import { ACCESS_TOKEN, ENDPOINTS, ROUTES } from "../../constants";
import { userLoginSuccess } from "../actions/loginAction";
import { USER_LOGIN_REQUEST } from "../constants";
import { apiCall } from "./api";
import { createBrowserHistory } from "history";
import { toast } from "react-toastify";

function* fetchLoginSaga(action: any): any {
  const history = createBrowserHistory();
  try {
    const res: any = yield call(
      apiCall,
      "POST",
      ENDPOINTS.LOGIN,
      action.payload
    );
    yield put(userLoginSuccess(res));
    localStorage.setItem(ACCESS_TOKEN, res.content.accessToken);
    setTimeout(() => {
      history.push(ROUTES.HOME);
    }, 1500);
  } catch (err: any) {
    toast.error(err.response.data.content, {
      position: "top-right",
      autoClose: 1500,
    });
  }
}

function* loginSaga() {
  yield all([takeLatest(USER_LOGIN_REQUEST, fetchLoginSaga)]);
}

export default loginSaga;
