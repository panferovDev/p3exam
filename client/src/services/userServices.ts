import type { UserResponseType, UserSubmitType } from '../types/userTypes';
import apiService from './apiService';

export const checkUserService = (): Promise<UserResponseType> =>
  apiService<UserResponseType>('/users/check').then((res) => res.data);

export const submitSignupService = (data: UserSubmitType): Promise<UserResponseType> =>
  apiService.post<UserResponseType>('/users/signup', data).then((res) => res.data);

export const submitSiginService = (data: UserSubmitType): Promise<UserResponseType> =>
  apiService.post<UserResponseType>('/users/signin', data).then((res) => res.data);

export const logoutUserService = (): Promise<void> =>
apiService('/users/logout')