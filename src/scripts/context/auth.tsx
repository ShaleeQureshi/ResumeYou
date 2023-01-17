import React, { useState, useEffect } from "react";
import { getAuth } from "firebase/auth";

var defaultValue: any;
export const AuthContext = React.createContext(defaultValue);

const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState<any>(null);
  const [pending, setPending] = useState(true);
  useEffect(() => {
    getAuth().onAuthStateChanged((user: any) => {
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
  } else {
    return <h1>An unexpected error has occured</h1>;
  }
};
export default AuthProvider;
