import type { UserResponseType } from "../types/userTypes";
import apiService from "./apiService";


export const checkUserService = (): Promise<UserResponseType> => apiService<UserResponseType>('/')
.then(res => res.data)