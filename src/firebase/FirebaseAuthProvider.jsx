import React, { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import app from "./firebase.init";

export const AuthContext = createContext();
const googleAuthProvider = new GoogleAuthProvider();
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

  //   signInWithGoogle
  const signInWithGoogle = () => {
    setLoading(true);
    return signInWithPopup(auth, googleAuthProvider);
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
      // console.log(crueentUser);
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
    signInWithGoogle,
    logOut,
  };
  return (
    <AuthContext.Provider value={userData}>{children}</AuthContext.Provider>
  );
};

export default FirebaseAuthProvider;
