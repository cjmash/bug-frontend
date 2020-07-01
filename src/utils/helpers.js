
import { DEFAULT_USER_AUTH } from '../utils/consts';

export const validateLoginForm = (email, password, setError) => {
if(!email || !password) {
  setError('Please enter a valid email or password')
}
const re =  /\S+@\S+\.\S+/
if(!re.test(email)) {
  setError("Please enter a valid email address.");
    return false;
}
return true
}

export const getStoredUserAuth = () => {
  const auth = window.localStorage.getItem("UserAuth");
  if (auth) {
    return JSON.parse(auth);
  }
  return DEFAULT_USER_AUTH;
};