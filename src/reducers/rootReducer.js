/**
 * Created by zyf on 2018/1/24.
 */
import {combineReducers} from 'redux';
import {counter} from "./counter";

const rootReducer = combineReducers({
    counter,
});
export default rootReducer;
