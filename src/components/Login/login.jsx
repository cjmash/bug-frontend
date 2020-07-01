import React, { useState, useEffect, useContext } from 'react';
import * as ApiEndPoints from '../../api/index'
// import { BrowserRouter as Router, Link, Route} from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import { Container, Card, CardContent, Typography, CardMedia } from '@material-ui/core';
import ErrorMessage from '../../utils/errorMessage.js';
import UserErrorHandler from '../../utils/errorHandler'
import { validateLoginForm } from '../../utils/helpers';
import { authContext } from '../../context/authContext';
// import theme from '../../theme';
const useStyles = makeStyles({
  root: {
    // display: 'flex',
    // alignItems: 'center',
    // alignContent: 'center',
    // position: 'relative',
  },
});

const Login = (props) => {
const [credentials, setCredentials] = useState({email: "", password: ""});
const { error, showError } = UserErrorHandler(null);
const auth = useContext(authContext);
const [loading , setLoading] = useState(null)
const authHandler = async () => {
  try {
    setLoading(true);
    const userData = await ApiEndPoints.passportLogin(credentials)
    const { data: { token } } = userData
    auth.setAuthStatus({token})
    setLoading(false);
  } catch(err) {
    setLoading(false);
    showError(err.message)
  }
 
}

  return (
  <form 
  onSubmit = {(e) => {
    e.preventDefault()
    if(validateLoginForm(credentials.email, credentials.password, showError)){
      authHandler()
    }
  }} >
      <label>Email</label>
      <input
        type="text"
        name="email"
        value={credentials.email}
        onChange={event => setCredentials({email: event.target.value, password: credentials.password})}
      />
      <label>Password</label>
      <input
        type="password"
        name="password"
        value={credentials.password}
        onChange={event => setCredentials({email: credentials.email, password: event.target.value})}
      />
      <button type="submit" >
      {loading ? "Loading..." : "Sign In"}
      </button>
      <br />
      {error && <ErrorMessage errorMessage={error} />}
      </form>
  )
};

export default Login;
