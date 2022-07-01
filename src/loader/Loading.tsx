import style from "./Loading.module.css";

const Loading = () => {
  return (
    <div className={style.ring}>
      Loading
      <span className={style.circle}></span>
    </div>
  );
};
export default Loading;
