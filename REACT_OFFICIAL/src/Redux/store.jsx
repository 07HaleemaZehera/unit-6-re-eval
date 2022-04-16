import {createStore,applyMiddleware} from "redux"
import logger from "redux-logger"
import ReduxThunk from "redux-thunk"

import {rootReducer} from "./root-reducer"

const middlewares=[ReduxThunk]




 export const store=createStore(rootReducer,applyMiddleware(...middlewares))

