import React, { useState, useEffect } from "react";
import { getAuth } from "firebase/auth";
import { HashLoader } from "react-spinners";

const override: object = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translateX(-50%) translateY(-50%)",
};

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
    return (
      <HashLoader
        cssOverride={override}
        size={100}
        color={"#36d7b7"}
        loading={pending}
      />
    );
  }
};
export default AuthProvider;
