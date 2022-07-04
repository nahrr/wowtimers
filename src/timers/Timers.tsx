import style from "./Timers.module.css";
import { useTimer } from "../hooks/TimerHook";
import ProgressBar from "../progressBar/ProgressBar";

type TimerProps = {
  date: Date;
  css: string;
};
const Timers = ({ date, css }: TimerProps) => {
  const { days, hours, minutes, seconds } = useTimer(date);
  const zeroPad = (num: number) => String(num).padStart(2, "0");
  const background = `${css}Bg`;
  return (
    <div className={`${style.container} ${style[background]}`}>
      <div className={style.timers}>
        <div>
          <span className={style.time}>{days}</span>
        </div>
        <div>
          <span className={style.time}>{hours}</span>
        </div>
        <div>
          <span className={style.time}>{minutes}</span>
        </div>
        <div className={style.test}>
          <span className={style.time}>{zeroPad(seconds)}</span>
        </div>
        <span className={`${style.header} ${style.daysHeader}`}>Days</span>
        <span className={`${style.header} ${style.hoursHeader}`}>Hours</span>
        <span className={`${style.header} ${style.minutesHeader}`}>
          Minutes
        </span>
        <span className={`${style.header} ${style.secondsHeader}`}>
          Seconds
        </span>
      </div>
      <ProgressBar
        seconds={seconds}
        minutes={minutes}
        hours={hours}
        days={days}
        maxTimeInDays={3}
      />
    </div>
  );
};

export default Timers;
