import React from "react";
import AppText from "./util/en";

export const AppTextContext = React.createContext(AppText);

const AppTextProvider = ({ children }) => {
  return (
    <AppTextContext.Provider value={{ AppText }}>
      {children}
    </AppTextContext.Provider>
  );
};
export default AppTextProvider;
