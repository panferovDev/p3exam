import { useEffect } from 'react';
import { useToast } from '@chakra-ui/react';
import { useAppDispatch, useAppSelector } from './reduxHooks';
import { setErrAction } from '../features/redux/slices/ErrSlice';

export function ErrGlobalToast(): null {
  const err = useAppSelector((state) => state.err);
  const dispatch = useAppDispatch();
  const toast = useToast();

  useEffect(() => {
    if (err) {
      toast({
        title: 'Error',
        position: 'bottom-left',
        description: err,
        status: 'error',
        duration: 3000,
        isClosable: true,
      });
      dispatch(setErrAction(''));
    }
  }, [err]);

  return null;
}
