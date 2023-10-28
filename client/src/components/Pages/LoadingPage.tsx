import { Spinner } from '@chakra-ui/react';
import React from 'react';

export default function LoadingPage(): JSX.Element {
  return (
    <div className="min-h-[100vh] flex flex-col justify-center align-middle ">
      <div className='flex justify-center'>
        <Spinner thickness="4px" speed="0.65s" emptyColor="gray.200" color="blue.500" size="xl" />
      </div>
    </div>
  );
}
