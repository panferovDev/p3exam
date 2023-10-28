import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import type { GroupType } from '../../../types/groupTypes';
import { fetchGroupActionThunk } from '../thunkActions/groupThunkActions';
import type { StudentType } from '../../../types/studentsTypes';
import {
  addStudentActionThunk,
  deleteStudentActionThunk,
  fetchStudentsActionThunk,
} from '../thunkActions/studentsThunkActions';

const initialState: {
  groups: GroupType[];
  selected: GroupType | null;
  students: null | StudentType[];
  studentsLoading: boolean;
} = {
  groups: [],
  selected: null,
  students: null,
  studentsLoading: false,
};

const groupSlice = createSlice({
  name: 'group',
  initialState,
  reducers: {
    setSelectedGroup: (state, action: PayloadAction<number>) => {
      const group = state.groups.find((el) => el.id === action.payload);
      if (group) {
        state.selected = group;
      }
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchGroupActionThunk.fulfilled, (state, action) => {
      state.groups = action.payload;
    });

    builder.addCase(fetchStudentsActionThunk.pending, (state) => {
      state.studentsLoading = true;
    });

    builder.addCase(fetchStudentsActionThunk.fulfilled, (state, action) => {
      state.studentsLoading = false;
      state.students = action.payload;
    });

    builder.addCase(fetchStudentsActionThunk.rejected, (state) => {
      state.studentsLoading = false;
    });

    builder.addCase(deleteStudentActionThunk.fulfilled, (state, action) => {
      if (state.students) {
        state.students = state.students.filter((el) => el.id !== action.payload);
      }
    });

    builder.addCase(addStudentActionThunk.fulfilled, (state, action) => {
      if (state.students) {
        state.students.push(action.payload);
      }
    });
  },
});

const GroupReducer = groupSlice.reducer;
export const { setSelectedGroup } = groupSlice.actions;
export default GroupReducer;
