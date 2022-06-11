import { useEffect, useState } from "react";
import { useTimer } from "../hooks/timer";
import style from "./Timers.module.css";

const ZulAman = () => {
  const [date, setDate] = useState<Date>(new Date("2022-06-14T08:00:00"));
  const { days, hours, minutes, seconds, isTimerFinished } = useTimer(date);

  useEffect(() => {
    if (isTimerFinished) {
      const newDate = date?.setDate(date.getDate() + 3);
      setDate(new Date(newDate));
    }
  }, [, isTimerFinished]);

  const zeroPad = (num: number) => String(num).padStart(2, "0");

  return (
    <div className={style.za}>
      <div className={style.timers}>
        <h1 className={style.heading}>
          {days === 0 ? "" : days + " :"} {hours} : {minutes} :{" "}
          {zeroPad(seconds)}
        </h1>
      </div>
    </div>
  );
};

export default ZulAman;
