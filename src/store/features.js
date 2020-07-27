import { combineReducers } from 'redux';
import userReducer from './userReducer';
import filesReducer from './createReducer';
import getAllReducer from './getAllReducer';

export default  combineReducers({
    users: userReducer,
    files: filesReducer,
    getAll: getAllReducer
})