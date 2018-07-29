import baseURL from '../../utils';

export const LOAD_LAUNCH_DETAILS = 'LOAD_LAUNCH_DETAILS';
export const LOAD_LAUNCH_DETAILS_START = 'LOAD_LAUNCH_DETAILS_START';
export const LOAD_LAUNCH_DETAILS_SUCCESS = 'LOAD_LAUNCH_DETAILS_SUCCESS';
export const LOAD_LAUNCH_DETAILS_FAIL = 'LOAD_LAUNCH_DETAILS_FAIL';

export const loadLaunchDetailsStart = () => ({
  type: LOAD_LAUNCH_DETAILS_START,
});

export const loadLaunchDetailsSuccess = (launchData, rocketData, launchpadData) => ({
  type: LOAD_LAUNCH_DETAILS_SUCCESS,
  launchData,
  rocketData,
  launchpadData,
});

export const loadLaunchDetailsFail = () => ({
  type: LOAD_LAUNCH_DETAILS_FAIL,
});

export const loadLaunchDetails = (flightnumber, rocket, launchpad) => (dispatch) => {
  dispatch(loadLaunchDetailsStart());

  Promise.all([
    fetch(`${baseURL}/launches/all?flight_number=${flightnumber}`),
    fetch(`${baseURL}/rockets/${rocket}`),
    fetch(`${baseURL}/launchpads/${launchpad}`),
  ])
    .then(responses => Promise.all(responses.map(response => response.json())))
    .then(data => dispatch(loadLaunchDetailsSuccess(...data)))
    .catch(() => dispatch(loadLaunchDetailsFail()));
};
