import { Button, HStack } from '@chakra-ui/react';
import React from 'react';

type CounterPartProps = {
  incrementHandler: () => void;
  decrementHandler: () => void;
  counter: number;
};

export default function CounterPart({
  decrementHandler,
  incrementHandler,
  counter,
}: CounterPartProps): JSX.Element {
  return (
    <div className="min-h-[400px] flex justify-center items-center border border-yellow-700">
      <HStack gap={4}>
        <Button onClick={incrementHandler}>+</Button>
        <span>{counter}</span>
        <Button onClick={decrementHandler}>-</Button>
      </HStack>
    </div>
  );
}
