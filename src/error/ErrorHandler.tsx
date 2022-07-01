import style from "./Error.module.css";
const ErrorHandler = () => {
  return (
    <div className={style.container}>
      <h1 className={style.header}>Server error</h1>
    </div>
  );
};
export default ErrorHandler;
