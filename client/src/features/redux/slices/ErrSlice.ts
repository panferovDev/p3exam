import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

const initialState = '';

const errSlice = createSlice({
  name: 'err',
  initialState,
  reducers: {
    setErrAction: (state, action: PayloadAction<string>) => action.payload,
    clearErr: (state) => '',
  },
});

export default errSlice.reducer;
export const { setErrAction, clearErr } = errSlice.actions;
