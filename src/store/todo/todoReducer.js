import * as types from "./todoActionTypes";

const initValue = {
    loading: false,
    list: [],
    error: null,
};
export default function todoReducer(state = initValue, { type, payload }) {
    switch (type) {
        case types.FETCH_TODO_REQUEST:
        case types.CREATE_TODO_REQUEST:
        case types.REMOVE_TODO_REQUEST:
            return {
                ...state,
                loading: true,
                error: null
            }
        case types.FETCH_TODO_FAILURE:
        case types.CREATE_TODO_FAILURE:
        case types.REMOVE_TODO_FAILURE:
            return {
                ...state,
                loading: false,
                error: payload,
            };
        case types.FETCH_TODO_SUCCESS:
            return{
                ...state,
                loading:false,
                list:payload
            }
        case types.CREATE_TODO_SUCCESS:
            return{
                ...state,
                loading:false,
                list:[...state.list,payload]
            }
        case types.REMOVE_TODO_SUCCESS:
            return{
                ...state,
                loading:false,
                list:state.list.filter((todo)=>todo.id!==payload.id)
            }
        default:
           return state;
    }
}