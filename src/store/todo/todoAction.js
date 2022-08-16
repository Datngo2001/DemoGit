import {call,put} from 'redux-saga/effects'
import * as types from './todoActionTypes'
import {
    fetchTodoApi,
    createTodoApi,
    deleteTodoApi
} from '../../services'

export function* fetchTodosAction(){
    try {
        const response = yield call(fetchTodoApi)
        if(response.status ===200){
            yield put({
                type:types.FETCH_TODO_SUCCESS,
                payload:response.data
            })
        }
    } catch (error) {
        yield put({
            type:types.FETCH_TODO_FAILURE,
            payload:error,
        })
    }
    
}
export function* createTodoAction(action) {
    try {
      const response = yield call(createTodoApi, action.payload);
      if (response.status === 201) {
        yield put({
          type: types.CREATE_TODO_SUCCESS,
          payload: response.data,
        });
      }
    } catch (error) {
      yield put({
        type: types.CREATE_TODO_FAILURE,
        payload: error,
      });
    }
}
export function* deleteTodoAction(action){
    try {
        const response = yield call(deleteTodoApi,action.payload.id)
        console.log('delete',response)
        if(response.status === 200){
            yield put({
                type:types.REMOVE_TODO_SUCCESS,
                payload :response.data,
            })
        }
    } catch (error) {
        yield put({
            type:types.REMOVE_TODO_FAILURE,
            payload:error
        })
    }
}
  