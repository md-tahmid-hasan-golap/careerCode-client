import { createContext } from "react";
import { getAuth } from "firebase/auth";
import { app } from "./firebase.init";

export const AuthContext = createContext();
const auth = getAuth(app);
const FirebaseAuthProvider = ({ children }) => {
  const userData = {};
  return <AuthContext value={userData}>{children}</AuthContext>;
};

export default FirebaseAuthProvider;
