import React from 'react';
import { Stack } from '@chakra-ui/react';
import GroupSelection from './GroupSelection';
import AddStudent from './AddStudent';

export default function GroupPart(): JSX.Element {
  return (
      <Stack gap={2}>
        <GroupSelection />
        <AddStudent />
      </Stack>
  );
}
