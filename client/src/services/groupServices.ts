import type { GroupType } from '../types/groupTypes';
import apiService from './apiService';

export const fetchGroupsService = (): Promise<GroupType[]> =>
  apiService.get<GroupType[]>('/groups').then((res) => res.data);
