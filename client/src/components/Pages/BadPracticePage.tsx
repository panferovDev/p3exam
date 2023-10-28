import React, { useState, useEffect } from 'react';
import TimerPart from '../UI/BadPageUi/TimerPart';
import CounterPart from '../UI/BadPageUi/CounterPart';
import RandomNumberPart from '../UI/BadPageUi/RandomNumberPart';
import RenderCountPart from '../UI/BadPageUi/RenderCountPart';

export default function BadPracticePage(): JSX.Element {
  const [time, setTime] = useState({ hours: 0, minutes: 0, seconds: 0 });
  const [counter, setCounter] = useState(0);

  const incrementHandler = (): void => {
    setCounter((prev) => prev + 1);
  };

  const decrementHandler = (): void => {
    setCounter((prev) => prev - 1);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setTime((prev) => {
        if (prev.seconds === 59) {
          if (prev.minutes === 59) {
            return { hours: prev.hours + 1, minutes: 0, seconds: 0 };
          }
          return { ...prev, minutes: prev.minutes + 1, seconds: 0 };
        }
        return { ...prev, seconds: prev.seconds + 1 };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="grid grid-cols-2 gap-2">
      <TimerPart time={time} />
      <CounterPart
        incrementHandler={incrementHandler}
        counter={counter}
        decrementHandler={decrementHandler}
      />
      <RandomNumberPart num={Math.random()} />
       <RenderCountPart />
    </div>
  );
}
