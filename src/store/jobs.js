import {createSlice} from '@reduxjs/toolkit';
import {useSelector} from 'react-redux';

const slice = createSlice({
  name: 'jobs',
  initialState: {
    jobs: [],
    favorites: [],
  },
  reducers: {
    addFavorites: (state, action) => {
      state.favorites = [...state.favorites, action.payload.job];
    },
    removeFavorites: (state, action) => {
      state.favorites = state.favorites.filter(
        job => job.id !== action.payload.id,
      );
    },
    setJobs: (state, action) => {
      state.jobs = action.payload;
    },
  },
});

export const {addFavorites, setJobs, removeFavorites} = slice.actions;

export const useJobs = () => useSelector(state => state.jobs);

export default slice.reducer;
