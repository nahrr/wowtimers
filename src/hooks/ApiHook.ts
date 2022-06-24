import axios, { AxiosError } from "axios";
import { useQuery } from "react-query";
import { TimerProps } from "../types/timer";
import config from "../config";

const useFetchZulAmanTimer = () => {
  return useQuery<TimerProps, AxiosError>("zulaman", () =>
    axios.get(`${config.baseApiUrl}/ZulAman`).then((response) => response.data)
  );
};

const useFetchWotlkTimer = () => {
  return useQuery<TimerProps, AxiosError>("wotlk", () =>
    axios
      .get(`${config.baseApiUrl}/WotlkRelease`)
      .then((response) => response.data)
  );
};

export { useFetchZulAmanTimer, useFetchWotlkTimer };
