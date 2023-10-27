import React from 'react';
import {
  Input,
  Stack,
  Button,
  FormControl,
  InputGroup,
  InputRightElement,
} from '@chakra-ui/react';

export default function AddStudent(): JSX.Element {
  return (
    <div className="mt-8">
      <Stack gap={1}>
        <form>
          <FormControl id="student">
            <InputGroup>
              <Input type="tel"  placeholder="Добавить студента" />
              <InputRightElement width="5.5rem">
                <Button  color='blue.500' rounded="sm" mr='0.1rem' type="submit" className="w-52" variant="outline">
                  добавить
                </Button>
              </InputRightElement>
            </InputGroup>
          </FormControl>
        </form>
      </Stack>
    </div>
  );
}
