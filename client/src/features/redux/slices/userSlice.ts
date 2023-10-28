import { createSlice } from '@reduxjs/toolkit';
import type { UserStateType } from '../../../types/userTypes';
import {
  checkUserThunk,
  logoutUserThunk,
  submitSignupThunk,
} from '../thunkActions/userThunkActions';

const userSlice = createSlice({
  name: 'user',
  initialState: { status: 'loading' } as UserStateType,
  reducers: {
    
  },

  extraReducers: (builder) => {
    builder.addCase(checkUserThunk.pending, () => ({ status: 'loading' }));
    builder.addCase(checkUserThunk.fulfilled, (_, action) => ({
      status: 'success',
      user: action.payload,
    }));
    builder.addCase(checkUserThunk.rejected, () => ({ status: 'idle' }));
    builder.addCase(submitSignupThunk.pending, () => ({ status: 'loading' }));
    builder.addCase(submitSignupThunk.fulfilled, (_, action) => ({
      status: 'success',
      user: action.payload,
    }));
    builder.addCase(submitSignupThunk.rejected, () => ({ status: 'idle' }));
    builder.addCase(logoutUserThunk.fulfilled, () => ({ status: 'idle' }));
  },
});

export default userSlice.reducer;
