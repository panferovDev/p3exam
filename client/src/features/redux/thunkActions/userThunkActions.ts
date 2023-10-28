import { createAsyncThunk } from '@reduxjs/toolkit';
import type { UserResponseType, UserSubmitType } from '../../../types/userTypes';
import {
  checkUserService,
  submitSignupService,
  submitSiginService,
  logoutUserService,
} from '../../../services/userServices';
import { setErrAction } from '../slices/ErrSlice';

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
  async (data, { dispatch, rejectWithValue }) =>
    submitSignupService(data)
      .then((res) => res)
      .catch(() => {
        dispatch(setErrAction('Ошибка регистрации'));
        return rejectWithValue('Ошибка регистрации');
      }),
);

export const submitSigninThunk = createAsyncThunk<UserResponseType, UserSubmitType>(
  'user/signin',
  async (data, { dispatch, rejectWithValue }) =>
    submitSiginService(data)
      .then((res) => res)
      .catch(() => {
        dispatch(setErrAction('Ошибка авторизации'));
        return rejectWithValue('Ошибка авторизации');
      }),
);

export const logoutUserThunk = createAsyncThunk<boolean>('user/logout', async () =>
  logoutUserService().then(() => true),
);
