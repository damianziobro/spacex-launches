import updateObject from '../../shared/utility';

import {
    LOAD_LAUNCH_DETAILS_START,
    LOAD_LAUNCH_DETAILS_SUCCESS,
    LOAD_LAUNCH_DETAILS_FAIL,
} from '../actions/launchDetails';

const initialState = {
    launchData: null,
    rocketData: null,
    launchpadData: null,
    isError: false,
    isLoading: false,
};

const loadLaunchDetailsStart = state =>
    updateObject(state, {
        launchData: null,
        rocketData: null,
        launchpadData: null,
        isError: false,
        isLoading: true,
    });

const loadLaunchDetailsSuccess = (state, { launchData, rocketData, launchpadData }) =>
    updateObject(state, {
        launchData,
        rocketData,
        launchpadData,
        isError: false,
        isLoading: false,
    });

const loadLaunchDetailsFail = state =>
    updateObject(state, {
        isError: true,
        isLoading: false,
    });

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD_LAUNCH_DETAILS_START:
            return loadLaunchDetailsStart(state, action);
        case LOAD_LAUNCH_DETAILS_SUCCESS:
            return loadLaunchDetailsSuccess(state, action);
        case LOAD_LAUNCH_DETAILS_FAIL:
            return loadLaunchDetailsFail(state, action);
        default:
            return state;
    }
};

export default reducer;
