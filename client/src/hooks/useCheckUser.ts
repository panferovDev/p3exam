import { useEffect } from 'react';
import { useToast } from '@chakra-ui/react';
import { useAppDispatch } from './reduxHooks';
import { checkUserThunk } from '../features/redux/thunkActions/userThunkActions';

const useUserCheck = (): void => {
  const dispatch = useAppDispatch();
  const toast = useToast();

  useEffect(() => {
    void dispatch(checkUserThunk());
  }, []);
};

export default useUserCheck;
