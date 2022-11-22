import React, { useContext } from "react";
import { useRouteError } from "react-router-dom";
import { authContext } from "../../../contexts/AuthProvider";

const DisplayError = () => {
  const { logOut } = useContext(authContext);
  const error = useRouteError();

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch(() => {});
  };
  return (
    <div className="text-center">
      <p className="text-rec-600">Something went wrong!!!</p>
      <p className="text-red-600">{error.statusText || error.message}</p>
      <button onClick={handleLogOut} className="font-medium mt-2">
        Sign out
      </button>
    </div>
  );
};

export default DisplayError;
