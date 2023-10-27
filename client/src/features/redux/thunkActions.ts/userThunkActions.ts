import {createAsyncThunk} from "@reduxjs/toolkit";
import type { UserResponseType } from "../../../types/userTypes";
import { checkUserService } from "../../../services/userServices";



export const checkUserThunk = createAsyncThunk<UserResponseType>(
    'user/check',
    async () => checkUserService().then(user => user)
);
