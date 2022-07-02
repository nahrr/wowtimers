import style from "./Timers.module.css";
import { useTimer } from "../hooks/TimerHook";

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
        <span className={style.time}>{days}</span>
        <span className={style.time}>{hours}</span>
        <span className={style.time}>{minutes}</span>
        <span className={style.time}>{zeroPad(seconds)}</span>
        <span className={`${style.header} ${style.daysHeader}`}>Days</span>
        <span className={`${style.header} ${style.hoursHeader}`}>Hours</span>
        <span className={`${style.header} ${style.minutesHeader}`}>
          Minutes
        </span>
        <span className={`${style.header} ${style.secondsHeader}`}>
          Seconds
        </span>
      </div>
    </div>
  );
};

export default Timers;
