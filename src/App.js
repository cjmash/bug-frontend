import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Login from './components/Login/login.jsx';
import  AuthProvider from './context/authContext'

function App() {
  return (
    <AuthProvider>
    <Router>
      <Login />
  </Router>
   </AuthProvider>
  );
}

export default App;
