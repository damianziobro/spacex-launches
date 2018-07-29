import baseURL from '../../utils';

export const LOAD_LAUNCHES_LIST = 'LOAD_LAUNCHES_LIST';
export const LOAD_LAUNCHES_LIST_START = 'LOAD_LAUNCHES_LIST_START';
export const LOAD_LAUNCHES_LIST_SUCCESS = 'LOAD_LAUNCHES_LIST_SUCCESS';
export const LOAD_LAUNCHES_LIST_FAIL = 'LOAD_LAUNCHES_LIST_FAIL';

export const loadLaunchesListStart = () => ({
  type: LOAD_LAUNCHES_LIST_START,
});

export const loadLaunchesListSuccess = launchesList => ({
  type: LOAD_LAUNCHES_LIST_SUCCESS,
  launchesList,
});

export const loadLaunchesListFail = () => ({
  type: LOAD_LAUNCHES_LIST_FAIL,
});

export const loadLaunchesList = id => (dispatch) => {
  dispatch(loadLaunchesListStart());

  const query = id === 'all' ? 'all' : `?rocket_id=${id}`;
  fetch(`${baseURL}/launches/${query}`)
    .then(response => response.json())
    .then(data => dispatch(loadLaunchesListSuccess(data)))
    .catch(() => dispatch(loadLaunchesListFail()));
};
