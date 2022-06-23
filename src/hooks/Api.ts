import axios, { AxiosError } from "axios";
import { useQuery, useQueryClient } from "react-query";
import { TimerProps } from "../types/timer";

const BASE_URL: string = "https://localhost:7285/api/WowTimers/ZulAman";
const ZULAMAN: string = "ZulAman";

const fetchZulAmanTimer = async () => {
  const response = await fetch(`${BASE_URL}`);
  const data = await response.json();
  return data as TimerProps;
};

// return useQuery<ZulAmanTimer, AxiosError>("zulaman", () =>
//   axios.get(`${BASE_URL}`).then((response) => response.data)
//  );

//export default useFetchZulAmanTimer;
export { fetchZulAmanTimer };
