import React, { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import app from "./firebase.init";

export const AuthContext = createContext();
const auth = getAuth(app);
const FirebaseAuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  // loading
  const [loading, setLoading] = useState(true);
  // creat user
  const creatUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // signIn User
  const signInUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // signOut
  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };
  useEffect(() => {
    const unSuscribe = onAuthStateChanged(auth, (crueentUser) => {
      setUser(crueentUser);
      setLoading(false);
      console.log(crueentUser);
    });
    return () => {
      unSuscribe();
    };
  }, []);
  const userData = {
    user,
    setUser,
    loading,
    creatUser,
    signInUser,
    logOut,
  };
  return (
    <AuthContext.Provider value={userData}>{children}</AuthContext.Provider>
  );
};

export default FirebaseAuthProvider;
