import {
  FETCH_SEARCH_RESULTS_START,
  FETCH_SEARCH_RESULTS_SUCCESS,
} from '../actions/actionTypes';

const initialSearchState = {
  error: null,
  inProgress: false,
  users: [],
  success: null,
};

export default function search(state = initalSearchState, action) {
  switch (action.type) {
    case FETCH_SEARCH_RESULTS_START:
      return {
        ...state,
        inProgress: true,
      };
    case FETCH_SEARCH_RESULTS_SUCCESS:
      return {
        ...state,
        error: null,
        inProgress: false,
        users: action.users,
        success: true,
      };
    case FETCH_SEARCH_RESULTS_FAILURE:
      return {
        ...state,
        inProgress: false,
        success: false,
        error: action.error,
      };
    default:
      return state;
  }
}
