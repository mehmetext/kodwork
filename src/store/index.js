import {configureStore} from '@reduxjs/toolkit';
import jobs from './jobs';

export default configureStore({
  reducer: {
    jobs,
  },
});
