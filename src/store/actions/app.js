export const STORE_LAUNCH_QUERY_DATA = 'STORE_LAUNCH_QUERY_DATA';
export const USER_TABBING = 'USER_TABBING';

export const storeLaunchQueryData = (flightNumber, rocketName, launchpadName) => ({
  type: STORE_LAUNCH_QUERY_DATA,
  flightNumber,
  rocketName,
  launchpadName,
});

export const userTabbing = () => ({
  type: USER_TABBING,
});
