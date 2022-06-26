import React, { useState, useEffect } from "react";
import { getAuth } from "firebase/auth";

export const AuthContext = React.createContext();

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [pending, setPending] = useState(true);
  useEffect(() => {
    getAuth().onAuthStateChanged((user) => {
      if (user) {
        setCurrentUser(user);
      }
      setPending(false);
    });
  }, []);
  if (!pending) {
    return (
      <AuthContext.Provider
        value={{
          currentUser,
        }}>
        {children}
      </AuthContext.Provider>
    );
  }
};
