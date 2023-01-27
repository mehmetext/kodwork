import store from '.';
import {addFavorites, removeFavorites, setJobs} from './jobs';

export function addFavoritesD(payload) {
  store.dispatch(addFavorites(payload));
}

export function setJobsD(jobs) {
  store.dispatch(setJobs(jobs));
}

export function removeFavoritesD(dispatch) {
  store.dispatch(removeFavorites(dispatch));
}
