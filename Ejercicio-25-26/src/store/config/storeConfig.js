import createSagaMiddleware from "redux-saga";
import { applyMiddleware, compose } from "redux";
import { createStore } from "@reduxjs/toolkit";
import { composeWithDevTools } from "redux-devtools-extension";
import { rootReducer } from "../reducers/rootReducer";
import { watcherSaga } from "../sagas/sagas";

export const createAppStore = () => {
  let store = createStore(rootReducer, composeWithDevTools());
  // let store = createStore({ rootReducer });

  return store;
};

export const createAppAsyncStore = () => {
  const sagaMiddleware = createSagaMiddleware();

  let store = createStore(
    rootReducer,
    compose(applyMiddleware(sagaMiddleware), composeWithDevTools())
  );

  // We init the Watcher Saga
  // nunca olvidar iniciar el watcherSaga
  sagaMiddleware.run(watcherSaga);

  return store;
};
