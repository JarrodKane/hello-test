'use client';
import Text from '@/components/atoms/text';
import React, { useEffect, useState } from 'react';

interface CountdownProps {
  expires: {
    show: boolean;
    date: string;
    time: string;
  };
  className?: string;
}

interface TimeBoxProps {
  children: React.ReactNode;
}

// TODO: Move time into its own folder, or move this into the atoms folder, right now it's not that reusable and won't be used anywhere else
const TimeBox: React.FC<TimeBoxProps> = ({ children }) => {
  return <div className='flex flex-col items-center bg-white justify-center w-[100px] h-[100px]'>{children}</div>;
};

//  MOST of this component was quickly made with copilot
const Countdown: React.FC<CountdownProps> = ({ expires, className }) => {
  const [daysLeft, setDaysLeft] = useState<number>(0);
  const [hoursLeft, setHoursLeft] = useState<number>(0);
  const [minsLeft, setMinsLeft] = useState<number>(0);
  const [expired, setExpired] = useState<boolean>(false);

  useEffect(() => {
    const calculateTimeLeft = () => {
      const targetDate = new Date(`${expires.date}T${expires.time}`);
      const currentDate = new Date();

      const totalSeconds = Math.floor((targetDate.getTime() - currentDate.getTime()) / 1000);

      if (totalSeconds < 0) {
        setExpired(true);
        return;
      }

      const days = Math.floor(totalSeconds / (3600 * 24));
      const hours = Math.floor((totalSeconds % (3600 * 24)) / 3600);
      const minutes = Math.floor((totalSeconds % 3600) / 60);

      setDaysLeft(days);
      setHoursLeft(hours);
      setMinsLeft(minutes);
    };

    if (expires.show && !expired) {
      calculateTimeLeft();
      const timer = setInterval(calculateTimeLeft, 1000);

      return () => clearInterval(timer);
    }
  }, [expires, expired]);

  return (
    <>
      {expires.show && (
        <div className={`flex gap-5 ${className}`}>
          <TimeBox>
            <Text className='text-2xl font-bold'>{daysLeft}</Text>
            <Text>Days Left</Text>
          </TimeBox>
          <TimeBox>
            <Text className='text-2xl font-bold '>{hoursLeft}</Text>
            <Text>Hours Left</Text>
          </TimeBox>
          <TimeBox>
            <Text className='text-2xl font-bold'>{minsLeft}</Text>
            <Text>Mins Left</Text>
          </TimeBox>
        </div>
      )}
    </>
  );
};

export default Countdown;
