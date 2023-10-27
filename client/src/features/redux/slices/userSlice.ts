import { createSlice } from '@reduxjs/toolkit';
import type { UserStateType } from '../../../types/userTypes';
import { checkUserThunk } from '../thunkActions.ts/userThunkActions';

const userSlice = createSlice({
  name: 'user',
  initialState: { status: 'loading' } as UserStateType,
  reducers: {},

  extraReducers: (builder) => {
    builder.addCase(checkUserThunk.pending, () => ({status: 'loading'}));
    builder.addCase(checkUserThunk.fulfilled, (state, action) => ({ status:'success', user: action.payload}) )
    builder.addCase(checkUserThunk.rejected, () => ({status:'idle'}))
  }
});

export default userSlice.reducer;
