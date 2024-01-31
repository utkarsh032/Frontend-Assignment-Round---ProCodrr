import React, { useEffect, useState } from 'react';

const CountdownClock = () => {
  const calculateTimeLeft = () => {
    const difference = +new Date('2024-02-04') - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        Days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        Hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        Minutes: Math.floor((difference / 1000 / 60) % 60),
        Seconds: Math.floor((difference / 1000) % 60)
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  return (
    <div className="grid grid-flow-col gap-5 text-center auto-cols-max">
      {Object.keys(timeLeft).map((interval) => (
        <div className="flex flex-col" key={interval}>
          <span className="text-xs text-[#9C9AB6] leading-10 flex">{interval}</span>
          <span className="countdown font-mono text-5xl ">
            <span className='text-[#4D4C59]  font-bold' style={{ "--value": timeLeft[interval] }}></span>:
          </span>
        </div>
      ))}
    </div>
  );
};

export default CountdownClock;
