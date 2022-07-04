import style from "./ProgressBar.module.css";
type Args = {
  seconds: number;
  minutes: number;
  hours: number;
  days: number;
  maxTimeInDays: number;
};
const ProgressBar = ({
  seconds,
  minutes,
  hours,
  days,
  maxTimeInDays,
}: Args) => {
  const secondsToHour = seconds / 3600;
  const minutesToHour = minutes / 60;
  const daysToHour = days * 24;
  const timeLeft = secondsToHour + minutesToHour + daysToHour + hours;
  const maxTime = maxTimeInDays * 24;
  const percent = 100 - Math.round((timeLeft / maxTime) * 100);
  const width = percent.toString() + "%";
  const css = {

  }
  return (
    <div className={style.wrapper}>
      <span className={style.percentLeft}>{percent}%</span>
      <div className={style.progressBar} style={{ width: width }}></div>
    </div>
  );
};

export default ProgressBar;
