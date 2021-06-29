import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import thunk from "redux-thunk";
import SolarSystemReducer from "./solarSystemReducer";
import apiMiddleware from "./apiMiddleware";

export const composeEnhancers =
    (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const enhancer = composeEnhancers(applyMiddleware(apiMiddleware));
const rootReducer = combineReducers({
    solar: SolarSystemReducer,
});

const store = createStore(rootReducer, enhancer);

export default store;
