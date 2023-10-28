import React from 'react';

type RandomNumberPartProps = {
  num: number;
};

export default function RandomNumberPart({ num }: RandomNumberPartProps): JSX.Element {
  return (
    <div className="min-h-[400px] flex justify-center items-center border border-yellow-700">
      <span className="text-3xl">{num}</span>
    </div>
  );
}
