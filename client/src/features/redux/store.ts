import { configureStore } from '@reduxjs/toolkit';
import userSlice from './slices/userSlice';
import GroupReducer from './slices/GroupSlice';

const store = configureStore({
  reducer: {
    userData: userSlice,
    groupData: GroupReducer
  },
});

export default store;
