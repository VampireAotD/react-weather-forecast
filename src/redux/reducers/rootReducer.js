import {combineReducers} from 'redux'

import appReducer from './appReducer'
import cityReducer from './cityReducer'

export default combineReducers({
    appReducer,
    cityReducer
})