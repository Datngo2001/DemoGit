import { takeLatest, takeEvery } from "redux-saga/effects";
import * as types from "./todoActionTypes";
import { fetchTodosAction,createTodoAction,deleteTodoAction } from "./todoAction";
export function* watchTodoActions() {
    yield takeLatest(types.FETCH_TODO_REQUEST,fetchTodosAction)
    yield takeEvery(types.CREATE_TODO_REQUEST,createTodoAction)
    yield takeEvery(types.REMOVE_TODO_REQUEST,deleteTodoAction)
}