import { call, put } from "redux-saga/effects";
import * as types from "./authActionTypes";
import { login as loginApi, register as registerApi } from "../../services";

export function* login(action) {
  try {
    const response = yield call(loginApi, action.payload);
    if (response.status === 200) {
      const {
        data: { accessToken, user },
      } = response;

      localStorage.setItem("token", accessToken);

      yield put({
        type: types.LOGIN_SUCCESS,
        payload: user,
      });
    }
  } catch (error) {
    yield put({
      type: types.LOGIN_FAILURE,
      payload: error,
    });
  }
}
export function* register(action) {
  try {
    const response = yield call(registerApi, action.payload);
    if (response.status === 201) {
      yield put({
        type: types.REGISTER_SUCCESS,
      });
    }
  } catch (error) {
    yield put({
      type: types.REGISTER_FAILURE,
      payload: error,
    });
  }
}

export function logout() {
  localStorage.removeItem("token");
}
