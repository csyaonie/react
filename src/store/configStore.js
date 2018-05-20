/**
 * Created by zyf on 2018/1/22.
 */
import {createStore,applyMiddleware} from 'redux';
import logger from "redux-logger";
import thunk from "redux-thunk";
import rootReducer from "../reducers/rootReducer";

const middlewares = [];
middlewares.push(logger);
middlewares.push(thunk);

const createStoreWithMiddleware = applyMiddleware(...middlewares)(createStore);

export default function getStore(initialState) {
    const store = createStoreWithMiddleware(rootReducer, initialState);
    return store;
}

