import { createSlice } from '@reduxjs/toolkit';
import type { UserStateType } from '../../../types/userTypes';

const userSlice = createSlice({
  name: 'user',
  initialState: { status: 'loading' } as UserStateType,
  reducers: {},
});

export default userSlice.reducer;
