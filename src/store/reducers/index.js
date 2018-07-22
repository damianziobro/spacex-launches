import { combineReducers } from 'redux'
import launchDetails from './launchDetails'
import launchesList from './launchesList'

export default combineReducers({
    launchDetails,
    launchesList
})