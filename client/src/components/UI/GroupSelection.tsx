import React, { useEffect } from 'react';
import { Select, FormControl, FormLabel } from '@chakra-ui/react';
import { useAppDispatch, useAppSelector } from '../../hooks/reduxHooks';
import { fetchGroupActionThunk } from '../../features/redux/thunkActions/groupThunkActions';
import useChangeGroup from '../../hooks/useChangeGroup';

export default function GroupSelection(): JSX.Element {
  const dispatch = useAppDispatch();
  const groups = useAppSelector((state) => state.groupData.groups);
  const { changeGroupHandler } = useChangeGroup();

  useEffect(() => {
    void dispatch(fetchGroupActionThunk());
  }, []);

  return (
    <FormControl id="group">
      <FormLabel>Выбор группы:</FormLabel>
      <Select onChange={changeGroupHandler} borderColor="gray.400" className="w-full" placeholder="Выбор группы">
        {groups.map((group) => (
          <option key={group.id} value={group.id}>
            {group.name}
          </option>
        ))}
      </Select>
    </FormControl>
  );
}
