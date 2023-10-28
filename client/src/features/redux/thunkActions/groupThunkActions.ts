import { createAsyncThunk } from "@reduxjs/toolkit";
import type { GroupType } from "../../../types/groupTypes";
import { fetchGroupsService } from "../../../services/groupServices";


export const fetchGroupActionThunk = createAsyncThunk<GroupType[]>(
    'group/fetchGroups',
    async () => fetchGroupsService().then((res) => res),
);