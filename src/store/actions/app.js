export const STORE_LAUNCH_QUERY_DATA = 'STORE_LAUNCH_QUERY_DATA';

export const storeLaunchQueryData = (flightNumber, rocketName, launchpadName) => ({
  type: STORE_LAUNCH_QUERY_DATA,
  flightNumber,
  rocketName,
  launchpadName,
});
