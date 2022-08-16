import * as types from "./authActionTypes";

const initValue = {
  user: null,
  loading: false,
  error: null,
  registerSuccess: false,
};

export default function authReducer(state = initValue, { type, payload }) {
  switch (type) {
    case types.LOGIN_REQUEST:
    case types.REGISTER_REQUEST:
    case types.LOGOUT_REQUEST:
      return initValue;
    case types.LOGIN_FAILURE:
    case types.REGISTER_FAILURE:
      return {
        ...state,
        loading: false,
        error: payload,
      };
    case types.LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        user: payload,
      };
    case types.REGISTER_SUCCESS:
      return {
        ...state,
        registerSuccess: true,
        loading: false,
      };
    default:
      return state;
  }
}
