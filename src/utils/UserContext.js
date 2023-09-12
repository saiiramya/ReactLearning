import React, { createContext } from "react";

const UserContext = createContext({
  loggedInUser: "Ramya",
});

export default UserContext;
