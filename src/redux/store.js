import { createStore } from "redux";
import logger from "redux-logger";
import { combineReducers } from "redux";
import { applyMiddleware } from "redux";

import BudegtReducer from "./reducer";

const middleware = [logger];

const reducers = combineReducers({
  budget: BudegtReducer,
});

export const store = createStore(reducers, applyMiddleware(...middleware));
