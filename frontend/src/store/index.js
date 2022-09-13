import { combineReducers, compose, applyMiddleware } from "redux";
import { legacy_createStore as createStore } from "redux";
import thunkMiddlewar from "redux-thunk";

const rootReducer = combineReducers({});
const middleware = [thunkMiddlewar];

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(...middleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default store;
