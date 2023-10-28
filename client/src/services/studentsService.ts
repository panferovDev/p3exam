import type { StudentType } from '../types/studentsTypes';
import apiService from './apiService';

export const fetchStudentsService = (groupId: number): Promise<StudentType[]> =>
  apiService<StudentType[]>(`/students/group/${groupId}`).then((res) => res.data);

export const deleteStudentService = (id: number): Promise<number> =>
  apiService.delete(`/students/${id}`).then(() => id);

export const addStudentService = (name: string, groupId: number): Promise<StudentType> =>
  apiService.post<StudentType>(`/students`, { name, groupId }).then((res) => res.data);
