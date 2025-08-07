import React, { use } from "react";
import { AuthContext } from "../firebase/FirebaseAuthProvider";

const UseContext = () => {
  const AuthInfo = use(AuthContext);
  return AuthInfo;
};

export default UseContext;
