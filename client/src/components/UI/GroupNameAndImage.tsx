import React from 'react';
import { Image } from '@chakra-ui/react';
import { useAppSelector } from '../../hooks/reduxHooks';

export default function GroupNameAndImage(): JSX.Element {
  const groupData = useAppSelector((state) => state.groupData.selected);
  return (
    <div className="flex justify-between gap-4 min-h-[155px]">
      <h2 className="text-2xl uppercase text-center">{groupData ? `${groupData.name}` : 'Группа не выбрана'}</h2>
      {groupData && (
        <Image
          border="2px"
          rounded="2xl"
          width={150}
          src={`${import.meta.env.VITE_STATIC_URL as string}/img/${groupData.img}`}
        />
      )}
    </div>
  );
}
