import React from 'react';

type TimerPartProps = {
  time: {
    hours: number;
    minutes: number;
    seconds: number;
  };
};

export default function TimerPart({ time }: TimerPartProps): JSX.Element {
  return (
    <div className="min-h-[400px] flex items-center justify-center border border-yellow-700">
      <span className="countdown font-mono text-4xl">
        <span style={{ '--value': time.hours } as React.CSSProperties} />
        :
        <span style={{ '--value': time.minutes } as React.CSSProperties} />
        :
        <span style={{ '--value': time.seconds } as React.CSSProperties} />
      </span>
    </div>
  );
}
