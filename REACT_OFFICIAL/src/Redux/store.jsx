import {createStore,applyMiddleware} from "redux"
import logger from "redux-logger"
import ReduxThunk from "redux-thunk"

import {rootReducer} from "./root-reducer"

const middlewares=[ReduxThunk]


// if(process.env.NODE.ENV=="development"){
//     middlewares.push(logger)
// }

 export const store=createStore(rootReducer,applyMiddleware(...middlewares))

