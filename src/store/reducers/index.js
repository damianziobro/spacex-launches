import { combineReducers } from 'redux';
import launchDetails from './launchDetails';
import launchesList from './launchesList';
import app from './app';

export default combineReducers({
  launchDetails,
  launchesList,
  app,
});
