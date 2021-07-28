import { applyMiddleware } from "redux";
import { combineReducers, createStore } from "redux";
import { productArrayCopyStateReducer, productArrayStateReducer, productStateReducer } from "./reducers";
import logger from 'redux-logger'
import thunk from 'redux-thunk'

const rootReducer = combineReducers({
    productArrayStateRef: productArrayStateReducer,
    productStateRef: productStateReducer,
    productArrayCopyStateRef: productArrayCopyStateReducer
})
console.log('store')
const store = createStore(rootReducer,applyMiddleware(logger,thunk))

export default store