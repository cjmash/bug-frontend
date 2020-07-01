import React, { createContext } from 'react';
import { getStoredUserAuth } from '../utils/helpers';
import { DEFAULT_USER_AUTH } from '../utils/consts';
import UserAuthHandler from '../utils/authHandler'
export const authContext = createContext({
  auth: DEFAULT_USER_AUTH,
  setAuthStatus: () => {},
  setUnauthStatus: () => {},
});

const { Provider } = authContext;
const AuthProvider = ({children}) => {
   const { auth, setAuthStatus, setUnauthStatus } = 
   UserAuthHandler(
    getStoredUserAuth()
  );
  return <Provider value= {{auth, setAuthStatus, setUnauthStatus}}>
      {children}
  </Provider>
}

export default AuthProvider;