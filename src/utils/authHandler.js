import React, { useState } from 'react';
// import {userAuth } from 
import { DEFAULT_USER_AUTH } from "./consts";

const UserAuthHandler = (initialState) => {
  const [auth, setAuth] = useState(initialState)
  console.log(auth, setAuth, 'iii')
  const setAuthStatus = (userAuth) => {
    window.localStorage.setItem('userAuth', JSON.stringify(userAuth));
    setAuth(userAuth)
  }
 
  const setUnauthStatus = () => {
    window.localStorage.clear();
    setAuth(DEFAULT_USER_AUTH);
  };

  return {
    auth,
    setAuthStatus,
    setUnauthStatus
  };
}

export default UserAuthHandler;