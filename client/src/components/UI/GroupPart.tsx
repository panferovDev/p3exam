import React from 'react';
import { Stack } from '@chakra-ui/react';
import GroupSelection from './GroupSelection';
import AddStudent from './AddStudent';

export default function GroupPart(): JSX.Element {
  return (
    <div className="w-full grid grid-cols-2">
      <Stack gap={2}>
        <GroupSelection />
        <AddStudent />
      </Stack>
      <div>jjj</div>
    </div>
  );
}
