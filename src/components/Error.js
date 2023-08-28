import React from "react";
import { useRouteError } from "react-router-dom";

function Error() {
  const err = useRouteError();
  return (
    <div>
      <h1 style={{ color: "red" }}>OOPS!!!! </h1>
      <h3>something went wrong</h3>
      <h3>{err.data}</h3>
    </div>
  );
}

export default Error;
