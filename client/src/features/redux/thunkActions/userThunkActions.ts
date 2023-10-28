import { createAsyncThunk } from '@reduxjs/toolkit';
import type { UserResponseType, UserSubmitType } from '../../../types/userTypes';
import {
  checkUserService,
  submitSignupService,
  submitSiginService,
  logoutUserService,
} from '../../../services/userServices';

export const checkUserThunk = createAsyncThunk<UserResponseType>(
  'user/check',
  async (_, { rejectWithValue }) =>
    new Promise((resolve, reject) => {
      setTimeout(() => {
        checkUserService()
          .then((res) => resolve(res))
          .catch(() => reject(rejectWithValue('Error')));
      }, 1000);
    }),
);

export const submitSignupThunk = createAsyncThunk<UserResponseType, UserSubmitType>(
  'user/signup',
  async (data) => submitSignupService(data).then((res) => res),
);

export const submitSigninThunk = createAsyncThunk<UserResponseType, UserSubmitType>(
  'user/signup',
  async (data) => submitSiginService(data).then((res) => res),
);

export const logoutUserThunk = createAsyncThunk<boolean>('user/logout', async () =>
  logoutUserService().then(() => true),
);
