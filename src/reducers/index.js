import counterReducer from "./counter"
import loggedReducer from "./isLogged"
import { combineReducers } from "redux"

// All reducers
const rootReducers = combineReducers({
    counter: counterReducer,
    isLogged: loggedReducer
})

export default rootReducers