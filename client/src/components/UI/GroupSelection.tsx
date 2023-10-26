import React from 'react';
import { Select, FormControl, FormLabel } from '@chakra-ui/react';

export default function GroupSelection(): JSX.Element {
  return (
    <FormControl id="group">
      <FormLabel>Выбор группы:</FormLabel>
      <Select className="w-full" placeholder="Выбор группы">
        <option value="option1">Орлы</option>
        <option value="option2">Ежи</option>
        <option value="option3">Сойки</option>
      </Select>
    </FormControl>
  );
}
