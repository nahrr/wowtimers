import ApiStatus from "../ApiStatus";
import { useFetchWotlkTimer } from "../hooks/ApiHook";
import Timers from "./Timers";

const Wotlk = () => {
  const { data, status, isSuccess } = useFetchWotlkTimer();

  if (!isSuccess) return <ApiStatus status={status} />;
  return (
    <>
      <Timers date={data.resetDate} background={"wotlkBg"} />
    </>
  );
};

export default Wotlk;
