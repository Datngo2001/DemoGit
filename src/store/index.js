import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import createSagaMiddleware from "@redux-saga/core";

import allReducer from "./allReducer";
import rootSaga from "./rootSaga";

const composeEnhancer = composeWithDevTools({ trace: true });
const sagaMiddleWare = createSagaMiddleware();

export default createStore(
  allReducer,
  composeEnhancer(applyMiddleware(sagaMiddleWare))
);

sagaMiddleWare.run(rootSaga);
