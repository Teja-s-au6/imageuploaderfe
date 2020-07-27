import { combineReducers } from 'redux';
import userReducer from './userReducer';
import filesReducer from './createReducer';

export default  combineReducers({
    users: userReducer,
    files: filesReducer
})