import { useCallback } from 'react';
import {
  addStudentActionThunk,
  deleteStudentActionThunk,
} from '../features/redux/thunkActions/studentsThunkActions';
import { useAppDispatch, useAppSelector } from './reduxHooks';

export const useStudentHandlers = (): {
  deleteStudentHandler: (id: number) => void;
  submitStudentHandler: React.FormEventHandler<HTMLFormElement>;
} => {
  const selecdedGroup = useAppSelector((state) => state.groupData.selected);
  const dispatch = useAppDispatch();

  const deleteStudentHandler = useCallback((id: number): void => {
    if (selecdedGroup) {
      void dispatch(deleteStudentActionThunk(id));
    }
  }, [selecdedGroup]);

  const submitStudentHandler: React.FormEventHandler<HTMLFormElement> = useCallback(
    (event): void => {
      event.preventDefault();
      const data = Object.fromEntries(new FormData(event.currentTarget)) as { name: string };
      if (!selecdedGroup || !data.name) return;
      void dispatch(addStudentActionThunk({ name: data.name, groupId: selecdedGroup.id }));
      event.currentTarget.reset();
    },
    [selecdedGroup],
  );
  return {
    deleteStudentHandler,
    submitStudentHandler,
  };
};
