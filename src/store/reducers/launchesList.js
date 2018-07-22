import updateObject from '../../shared/utility';

import {
    LOAD_LAUNCHES_LIST_START,
    LOAD_LAUNCHES_LIST_SUCCESS,
    LOAD_LAUNCHES_LIST_FAIL,
} from '../actions/launchesList';

const initialState = {
    launchesList: [],
    isError: false,
    isLoading: false,
    isNotFound: false
};

const loadLaunchesListStart = state =>
    updateObject(state, {
        isError: false,
        isLoading: true,
        isNotFound: false,
        launchesList: []
    });

const loadLaunchesListSuccess = (state, { launchesList }) =>
    updateObject(state, {
        launchesList,
        isError: false,
        isLoading: false,
        isNotFound: launchesList.length === 0
    });

const loadLaunchesListFail = state =>
    updateObject(state, {
        isError: true,
        isLoading: false,
        isNotFound: false,
        launchesList: []
    });

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD_LAUNCHES_LIST_START:
            return loadLaunchesListStart(state, action);
        case LOAD_LAUNCHES_LIST_SUCCESS:
            return loadLaunchesListSuccess(state, action);
        case LOAD_LAUNCHES_LIST_FAIL:
            return loadLaunchesListFail(state, action);
        default:
            return state;
    }
};

export default reducer;
