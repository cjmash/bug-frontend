import React, { useState } from 'react'

const UserErrorHandler = () => {
  const [error, serError] = useState('') // state for the error and the function that will update the state 
  const showError = (errorMessage) => {
    serError(errorMessage);
    window.setTimeout(() => {
      serError(null);
    }, 5000)
  };
  return {error, showError}
}

export default UserErrorHandler;