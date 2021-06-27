import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import thunk from "redux-thunk";
import SolarSystemReducer from "./solarSystemReducer";

export const composeEnhancers =
    (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const enhancer = composeEnhancers(applyMiddleware(thunk));
const rootReducer = combineReducers({
    solar: SolarSystemReducer,
});

const store = createStore(rootReducer, enhancer);

export default store;
