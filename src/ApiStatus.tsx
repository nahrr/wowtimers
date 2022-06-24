type Args = {
  status: "idle" | "loading" | "error";
};
const ApiStatus = ({ status }: Args) => {
  switch (status) {
    case "error":
      return <div>Error</div>;
    case "idle":
      return <div>Idle</div>;
    case "loading":
      return <div>Loading</div>;
    default:
      throw Error("Unknown status");
  }
};

export default ApiStatus;
