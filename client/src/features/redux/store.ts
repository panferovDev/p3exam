import { configureStore } from '@reduxjs/toolkit';
import userSlice from './slices/userSlice';
import GroupReducer from './slices/GroupSlice';
import ErrSlice from './slices/ErrSlice';

const store = configureStore({
  reducer: {
    userData: userSlice,
    groupData: GroupReducer,
    err: ErrSlice,
  },
});

export default store;
