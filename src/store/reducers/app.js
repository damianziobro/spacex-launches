import updateObject from '../../shared/utility';

import {
  STORE_LAUNCH_QUERY_DATA,
  USER_TABBING,
} from '../actions/app';

const initialState = {
  flightNumber: null,
  rocketName: null,
  launchpadName: null,
  isUserTabbing: false,
};

const storeLaunchQueryData = (state, {
  flightNumber,
  rocketName,
  launchpadName,
}) => updateObject(state, {
  flightNumber,
  rocketName,
  launchpadName,
});

const userTabbing = state => updateObject(state, {
  isUserTabbing: true,
});

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case STORE_LAUNCH_QUERY_DATA:
      return storeLaunchQueryData(state, action);
    case USER_TABBING:
      return userTabbing(state, action);
    default:
      return state;
  }
};

export default reducer;
