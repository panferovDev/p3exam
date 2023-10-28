import { createAsyncThunk } from '@reduxjs/toolkit';
import type { StudentType } from '../../../types/studentsTypes';
import {
  addStudentService,
  deleteStudentService,
  fetchStudentsService,
} from '../../../services/studentsService';

export const fetchStudentsActionThunk = createAsyncThunk<StudentType[], number>(
  `students/fetchStudents`,
  async (groupId, { rejectWithValue }) =>
    new Promise((resolve, reject) => {
      setTimeout(() => {
        fetchStudentsService(groupId)
          .then((res) => resolve(res))
          .catch((err) => reject(rejectWithValue(err)));
      }, 1000);
    }),
);

export const deleteStudentActionThunk = createAsyncThunk<number, number>(
  'students/delete',
  async (id) => deleteStudentService(id).then(() => id),
);

export const addStudentActionThunk = createAsyncThunk<
  StudentType,
  { name: string; groupId: number }
>('students/add', async (data) => addStudentService(data.name, data.groupId).then((res) => res));
