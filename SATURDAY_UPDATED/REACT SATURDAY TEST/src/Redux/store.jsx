import { reducerCountry } from "./Reducer/reducerCountry";

import { applyMiddleware, compose, combineReducers } from 'redux'; 
import { createStore } from "redux";
import thunk from "redux-thunk";
import { reducerCity } from "./Reducer/reducerCity";


const rootReducer = combineReducers({
    country : reducerCountry,
    city : reducerCity
})


const composeEnhancers =
    typeof window === 'object' &&
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
            // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
        }) : compose;
const middleware = [thunk]



const enhancer = composeEnhancers(
    applyMiddleware(...middleware),
    // other store enhancers if any
);
export const store = createStore(rootReducer, enhancer);
