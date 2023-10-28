import React from 'react';
import { Stack, Box, useColorModeValue } from '@chakra-ui/react';
import GroupSelection from './GroupSelection';
import AddStudent from './AddStudent';

export default function GroupPart(): JSX.Element {
  return (
    <Box bg={useColorModeValue('gray.100', 'gray.900')} w="full" p={8} borderRadius="md">
      <Stack gap={2}>
        <GroupSelection />
        <AddStudent />
      </Stack>
    </Box>
  );
}
