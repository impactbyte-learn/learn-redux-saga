import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import logger from "redux-logger";

import reducers from "./reducers";
import sagas from "./sagas";

const sagaMiddlaware = createSagaMiddleware();
const store = createStore(reducers, applyMiddleware(sagaMiddlaware, logger));

sagaMiddlaware.run(sagas);

export default store;
