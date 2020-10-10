import {
  FETCH_SEARCH_RESULTS_FAILURE,
  FETCH_SEARCH_RESULTS_START,
  FETCH_SEARCH_RESULTS_SUCCESS,
} from './actionTypes';
import { getAuthTokenFromLocalStorage } from '../helpers/utils';
import { APIUrls } from '../helpers/urls';

export function searchUsers(searchText) {
  dispatch(searchResultsStart());
  return (dispatch) => {
    const url = APIUrls.userSearch(searchText);

    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        Authorization: `Bearer ${getAuthTokenFromLocalStorage()}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('SEARCH DATA', data);

        if (data.success) {
          dispatch(searchResultsSuccess(data.data.users));
        } else {
          dispatch(searchResultsFailure(data.message));
        }
      });
  };
}

export function searchResultsStart() {
  return {
    type: FETCH_SEARCH_RESULTS_START,
  };
}

export function searchResultsSuccess(users) {
  return {
    type: FETCH_SEARCH_RESULTS_SUCCESS,
    users,
  };
}

export function searchResultsFailure(error) {
  return {
    type: FETCH_SEARCH_RESULTS_FAILURE,
    error,
  };
}
