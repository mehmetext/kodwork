import store from '.';
import {addFavorites, setJobs} from './jobs';

export function addFavoritesD() {
  store.dispatch(addFavorites());
}

export function setJobsD(jobs) {
  store.dispatch(setJobs(jobs));
}
