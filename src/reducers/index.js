import counterReducer from './counter';
import loggedRecuer from './isLogged';
import {combineReducers} from 'redux'


const rootRecuer = combineReducers({
    counter:counterReducer,
    //isLogged:loggedRecuer
})

export default rootRecuer;