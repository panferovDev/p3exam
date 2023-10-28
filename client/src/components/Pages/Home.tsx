import React from 'react';
import GroupPart from '../UI/GroupPart';
import SelectedGroup from '../UI/SelectedGroup';

export default function Home(): JSX.Element {
  return (
    <div className="mt-5 w-full grid gap-4 grid-cols-1 md:grid-cols-2">
      <GroupPart />
      <SelectedGroup />
    </div>
  );
}
