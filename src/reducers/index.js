import counterReducer from './counter.js'
import changeUserReducer from "./changeUser.js"
import userTwoReducer from  "./changeUserTwo.js"
import {combineReducers} from 'redux'


const allReducers = combineReducers({
    counterReducer: counterReducer,
    changeUserReducer: changeUserReducer,
    userTwoReducer: userTwoReducer 
})


export default allReducers;