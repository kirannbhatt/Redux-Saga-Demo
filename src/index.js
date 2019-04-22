import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";
import createSagaMiddleware from "redux-saga";
import { Provider } from "react-redux";
import reducer from "./reducers";
import { logger } from "redux-logger";
import rootSaga from "./sagas";
import { createStore, applyMiddleware } from "redux";

const sagaMiddleware = createSagaMiddleware();

const store = createStore(reducer, applyMiddleware(sagaMiddleware, logger));

sagaMiddleware.run(rootSaga);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
