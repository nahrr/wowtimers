import style from "./ProgressBar.module.css";
type Args = {
  timeLeft: number;
  max: number;
};
const ProgressBar = ({ timeLeft, max }: Args) => {
  const percent = Math.round((timeLeft / max) * 100);
  return (
    <div className={style.wrapper}>
      <div className={style.progressBar} style={{ width: percent }}></div>
    </div>
  );
};

export default ProgressBar;
