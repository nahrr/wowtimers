import ApiStatus from "../ApiStatus";
import { useFetchZulAmanTimer } from "../hooks/ApiHook";
import Timers from "./Timers";

const ZulAman = () => {
  const { data, status, isSuccess } = useFetchZulAmanTimer();

  if (!isSuccess) return <ApiStatus status={status} />;

  return <>{data && <Timers date={data.resetDate} css={"za"} />}</>;
};

export default ZulAman;
