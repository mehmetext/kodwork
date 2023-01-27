import {createSlice} from '@reduxjs/toolkit';
import {useSelector} from 'react-redux';

const slice = createSlice({
  name: 'jobs',
  initialState: {
    jobs: [],
    favorites: [],
  },
  reducers: {
    addFavorites: (state, action) => {},
    setJobs: (state, action) => {
      state.jobs = action.payload;
    },
  },
});

export const {addFavorites, setJobs} = slice.actions;

export const useJobs = () => useSelector(state => state.jobs);

export default slice.reducer;
