import { takeLatest, takeEvery } from "redux-saga/effects";
import * as types from "./authActionTypes";
import { login, register, logout } from "./authActions";

export default function* watchAuthActions() {
  yield takeLatest(types.REGISTER_REQUEST, register);
  yield takeLatest(types.LOGIN_REQUEST, login);
  yield takeEvery(types.LOGOUT_REQUEST, logout);
}
