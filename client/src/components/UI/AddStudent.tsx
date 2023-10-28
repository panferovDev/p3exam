import React from 'react';
import {
  Input,
  Stack,
  Button,
  FormControl,
  InputGroup,
  InputRightElement,
  useColorModeValue,
} from '@chakra-ui/react';
import { useStudentHandlers } from '../../hooks/useStudentHandlers';

export default function AddStudent(): JSX.Element | null {
  const { submitStudentHandler } = useStudentHandlers();
  
  return (
    <div className="mt-3">
      <Stack gap={1}>
        <form onSubmit={submitStudentHandler}>
          <FormControl id="student">
            <InputGroup>
              <Input
                type="tel"
                name="name"
                placeholder="Добавить студента"
                borderColor="gray.400"
              />
              <InputRightElement width="5.5rem">
                <Button
                  disabled
                  color={useColorModeValue('gray.600', 'teal')}
                  rounded="sm"
                  backgroundColor={useColorModeValue('gray.300', 'gray.700')}
                  type="submit"
                  className="w-52"
                  variant="outline"
                >
                  ok
                </Button>
              </InputRightElement>
            </InputGroup>
          </FormControl>
        </form>
      </Stack>
    </div>
  );
}
