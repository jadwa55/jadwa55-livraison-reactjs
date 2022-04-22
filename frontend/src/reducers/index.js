import authReducer from "./authReducer";
import roleReducer from "./roleReducer";
import userIdReducer from "./userIdReducer";
import {combineReducers} from 'redux';

const allReducers = combineReducers({
    authReducer: authReducer,
    role: roleReducer,
    id: userIdReducer
})

export default allReducers;