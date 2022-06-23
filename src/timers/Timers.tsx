import style from "./Timers.module.css";

type TimerProps = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  background: string;
};
const Timers = ({ days, hours, minutes, seconds, background }: TimerProps) => {
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
