import { useToast } from '@chakra-ui/react';
import type { UserSubmitType } from '../types/userTypes';
import { submitSigninThunk, submitSignupThunk } from '../features/redux/thunkActions/userThunkActions';
import { useAppDispatch } from './reduxHooks';

const useUserHandlers = (): {
  userSignUpHandler: React.FormEventHandler<HTMLFormElement>;
  userSignInHandler: React.FormEventHandler<HTMLFormElement>;
} => {
  const dispatch = useAppDispatch();

  const toast = useToast();

  const userSignUpHandler: React.FormEventHandler<HTMLFormElement> = (e): void => {
    e.preventDefault();

    const formData = Object.fromEntries(new FormData(e.currentTarget)) as UserSubmitType;

    if (!formData.name || !formData.email || !formData.password) {
      toast({
        title: 'Error',
        position: 'bottom-left',
        description: 'Please fill all the fields',
        status: 'error',
        duration: 3000,
        isClosable: true,
      });
      return;
    }

    void dispatch(submitSignupThunk(formData));
  };

  const userSignInHandler: React.FormEventHandler<HTMLFormElement> = (e): void => {
    e.preventDefault();

    const formData = Object.fromEntries(new FormData(e.currentTarget)) as UserSubmitType;

    if (!formData.email || !formData.password) {
      toast({
        title: 'Error',
        position: 'bottom-left',
        description: 'Please fill all the fields',
        status: 'error',
        duration: 3000,
        isClosable: true,
      });
      return;
    }

    void dispatch(submitSigninThunk(formData));
  };

  return { userSignUpHandler, userSignInHandler };
};

export default useUserHandlers;
