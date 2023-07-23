import React from 'react'
import { createContext,useState } from 'react'


export const AuthContext = createContext();

const AuthContentProvider = ({children}) => {

  const [isLoggedIn, setIsLoggedIn] = useState(false);


  const login = () => {

    setIsLoggedIn(true);
  };

  const logout = () => {

    setIsLoggedIn(false);
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export {AuthContentProvider}