import React, { createContext, useState, FunctionComponent } from 'react';

interface IAuthContext {
  isLoggedIn: boolean;
  changeAuthStatus: () => void;
}

export const AuthContext = createContext({} as IAuthContext);

const AuthContextProvider: FunctionComponent = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const changeAuthStatus = () => {
    setIsLoggedIn(!isLoggedIn);
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, changeAuthStatus }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
