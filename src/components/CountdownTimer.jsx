import React, { useState, useEffect } from 'react';
import moment from 'moment';

const CountdownTimer = ({ endDate, timerSize }) => {
  const calculateTimeLeft = () => {
    const difference = moment(endDate).diff(moment());
    const duration = moment.duration(difference);
    return {
      days: Math.floor(duration.asDays()),
      hours: duration.hours(),
      minutes: duration.minutes(),
      seconds: duration.seconds()
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  const { days, hours, minutes, seconds } = timeLeft;

  return (
    <div className="flex justify-center items-center space-x-4">
      <div className="text-center">
        <div className={`text-${timerSize} font-bold`}>{days < 10 ? `0${days}` : days}</div>
        <div className="text-sm font-semibold">Days</div>
      </div>
      <div className="text-center">
        <div className={`text-${timerSize} font-bold`}>{hours < 10 ? `0${hours}` : hours}</div>
        <div className="text-sm font-semibold">Hours</div>
      </div>
      <div className="text-center">
        <div className={`text-${timerSize} font-bold`}>{minutes < 10 ? `0${minutes}` : minutes}</div>
        <div className="text-sm font-semibold">Minutes</div>
      </div>
      <div className="text-center">
        <div className={`text-${timerSize} font-bold`}>{seconds < 10 ? `0${seconds}` : seconds}</div>
        <div className="text-sm font-semibold">Seconds</div>
      </div>
    </div>
  );
};

export default CountdownTimer;
