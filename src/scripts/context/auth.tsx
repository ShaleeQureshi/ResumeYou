import React, { useState, useEffect } from "react";
import { getAuth } from "firebase/auth";
import { Loading } from "../../components";

var defaultValue: any;
export const AuthContext = React.createContext(defaultValue);

const AuthProvider = ({ children }: any) => {
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
    return <Loading heading="Attempting to authenticate the user" />;
  }
};
export default AuthProvider;
