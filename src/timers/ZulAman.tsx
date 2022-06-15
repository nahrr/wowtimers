import { useEffect, useState } from "react";
import { useTimer } from "../hooks/timer";
import style from "./Timers.module.css";
const ZulAman = () => {
  const [dateTime, setDateTime] = useState<Date>(
    new Date("2022-06-17T08:00:00")
  );
  const { days, hours, minutes, seconds, isTimerFinished } = useTimer(dateTime);

  useEffect(() => {
    if (isTimerFinished) {
      setDateTime((d) => new Date(d.setDate(d.getDate() + 3)));
    }
  }, [isTimerFinished]);

  const zeroPad = (num: number) => String(num).padStart(2, "0");

  return (
    <div className={style.za}>
      <div className={style.timers}>
        <div className={style.firstRow}>
          <span className={style.header}>Days</span>
          <span></span>
          <span className={style.header}>Hours</span>
          <span></span>
          <span className={style.header}>Minutes</span>
          <span></span>
          <span className={style.header}>Seconds</span>
        </div>

        <div className={style.secondRow}>
          <span>{days}</span>
          <span className={style.divider}>:</span>
          <span>{hours}</span>
          <span className={style.divider}>:</span>
          <span>{minutes}</span>
          <span className={style.divider}>:</span>
          <span>{zeroPad(seconds)}</span>
        </div>
      </div>
    </div>
  );
};

export default ZulAman;
