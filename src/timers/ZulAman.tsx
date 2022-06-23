import { useEffect, useState } from "react";
import { fetchZulAmanTimer } from "../hooks/Api";
import { useTimer } from "../hooks/timer";
import { TimerProps } from "../types/timer";
import Timers from "./Timers";

const ZulAman = () => {
  const [zulamanTimer, setZulamanTimer] = useState<Date>(new Date());

  const { days, hours, minutes, seconds } = useTimer(zulamanTimer);

  useEffect(() => {
    const fetchZulAmanTimerTest = async () => {
      const data = await fetchZulAmanTimer();
      console.log(data);
      setZulamanTimer(data.date);
    };
    fetchZulAmanTimerTest();
  }, []);

  return (
    <Timers
      days={days}
      hours={hours}
      minutes={minutes}
      seconds={seconds}
      background={"zaBg"}
    />
  );
};

export default ZulAman;
