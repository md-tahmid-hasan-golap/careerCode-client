import React, { useContext } from "react";
import { AuthContext } from "../firebase/FirebaseAuthProvider";
import { Navigate, useLocation } from "react-router";

const PrivateRouter = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();
  if (loading) {
    return <span className="loading loading-ring loading-xl"></span>;
  }

  //   console.log(location);
  if (!user) {
    return <Navigate to="/signIn" state={location.pathname}></Navigate>;
  }
  return children;
};

export default PrivateRouter;
