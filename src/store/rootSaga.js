import { all } from "redux-saga/effects";
import { watchTodoActions } from "./todo/todoSaga";
import watchAuthActions from "./auth/authSaga";

export default function* rootSaga() {
  yield all([watchTodoActions(),watchAuthActions()]);
}
