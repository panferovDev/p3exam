import React from 'react';
import { Box, useColorModeValue } from '@chakra-ui/react';
import StudentListWrapper from './StudentListWrapper';
import GroupNameAndImage from './GroupNameAndImage';

export default function SelectedGroup(): JSX.Element {
  return (
    <Box
      className="relative"
      bg={useColorModeValue('gray.100', 'gray.900')}
      w="full"
      p={8}
      borderRadius="md"
    >
      <GroupNameAndImage />
      <StudentListWrapper />
    </Box>
  );
}
