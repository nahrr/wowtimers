import { useEffect, useState } from "react";
type TimerProps = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  isTimerFinished: boolean;
};
const useTimer = (targetDate: string | number | Date) => {
  const countDownDate = new Date(targetDate).getTime();

  const [timer, setTimer] = useState(countDownDate - new Date().getTime());

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer(countDownDate - new Date().getTime());
    }, 1000);

    return () => clearInterval(interval);
  }, [countDownDate]);

  return getReturnValues(timer);
};

const getReturnValues = (countDown: number): TimerProps => {
  const days: number = Math.floor(countDown / (1000 * 60 * 60 * 24));
  const hours: number = Math.floor(
    (countDown % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes: number = Math.floor(
    (countDown % (1000 * 60 * 60)) / (1000 * 60)
  );
  const seconds: number = Math.floor((countDown % (1000 * 60)) / 1000);

  const foo = (): boolean => {
    if (days <= 0 && hours <= 0 && minutes <= 0 && seconds <= 0) return true;
    return false;
  };

  const isTimerFinished = foo();

  const timer: TimerProps = {
    days,
    hours,
    minutes,
    seconds,
    isTimerFinished,
  };
  return timer;
};

export { useTimer };
