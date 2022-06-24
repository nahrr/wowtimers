import style from "./Timers.module.css";
import { useTimer } from "../hooks/TimerHook";

type TimerProps = {
  date: Date;
  background: string;
};
const Timers = ({ date, background }: TimerProps) => {
  const { days, hours, minutes, seconds } = useTimer(date);
  const zeroPad = (num: number) => String(num).padStart(2, "0");

  return (
    <div className={`${style.container} ${style[background]}`}>
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

export default Timers;
