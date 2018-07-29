import updateObject from '../../shared/utility';

import {
  STORE_LAUNCH_QUERY_DATA,
} from '../actions/app';

const initialState = {
  flightNumber: null,
  rocketName: null,
  launchpadName: null,
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

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case STORE_LAUNCH_QUERY_DATA:
      return storeLaunchQueryData(state, action);
    default:
      return state;
  }
};

export default reducer;
