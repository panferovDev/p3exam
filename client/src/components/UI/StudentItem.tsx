import React from 'react';
import { Box, HStack, Button, useColorModeValue } from '@chakra-ui/react';
import { RiDeleteBin5Line } from 'react-icons/ri';
import type { StudentType } from '../../types/studentsTypes';

type StydentItemProps = {
  student: StudentType;
  index: number;
  deleteStudentHandler: (id: number) => void;
};

function StudentItem({ student, index, deleteStudentHandler }: StydentItemProps): JSX.Element {
  return (
    <Box
      className="w-full flex justify-between"
      p={2}
      rounded="md"
      alignItems="center"
      transition="all .3s ease"
      _hover={{
        backgroundColor: useColorModeValue('gray.100', 'gray.600'),
      }}
    >
      <span className="text-md">
        {index + 1}. {student.name}
      </span>
      <Box>
        <HStack>
          <Button
            onClick={() => deleteStudentHandler(student.id)}
            variant="outline"
            color="red.500"
          >
            <RiDeleteBin5Line />
          </Button>
        </HStack>
      </Box>
    </Box>
  );
}

export default React.memo(StudentItem);
