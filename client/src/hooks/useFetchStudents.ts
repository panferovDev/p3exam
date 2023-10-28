import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from './reduxHooks';
import { fetchStudentsActionThunk } from '../features/redux/thunkActions/studentsThunkActions';
import type { StudentType } from '../types/studentsTypes';

export const useFetchStudents = (): {
  students: null | StudentType[];
  studentsLoading: boolean;
} => {
  const selectedGroup = useAppSelector((state) => state.groupData.selected);
  const students = useAppSelector((state) => state.groupData.students);
  const studentsLoading = useAppSelector((state) => state.groupData.studentsLoading);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (selectedGroup) {
      void dispatch(fetchStudentsActionThunk(selectedGroup.id));
    }
  }, [selectedGroup]);

  return {
    students,
    studentsLoading,
  };
};
