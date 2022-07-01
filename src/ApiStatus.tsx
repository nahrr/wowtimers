import ErrorHandler from "./error/ErrorHandler";
import Loading from "./loader/Loading";

type Args = {
  status: "idle" | "loading" | "error";
};
const ApiStatus = ({ status }: Args) => {
  switch (status) {
    case "error":
      return <ErrorHandler />;
    case "idle":
      return <div>Idle</div>;
    case "loading":
      return <Loading />;
    default:
      throw Error("Unknown status");
  }
};

export default ApiStatus;
