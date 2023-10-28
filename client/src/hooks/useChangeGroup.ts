import { setSelectedGroup } from '../features/redux/slices/GroupSlice';
import { useAppDispatch } from './reduxHooks';

const useChangeGroup = (): {
  changeGroupHandler: React.ChangeEventHandler<HTMLSelectElement>;
} => {
  const dispatch = useAppDispatch();

  const changeGroupHandler: React.ChangeEventHandler<HTMLSelectElement> = (event): void => {
    if (!event.target.value) return;
    dispatch(setSelectedGroup(+event.target.value));
  };

  return { changeGroupHandler };
};

export default useChangeGroup;
