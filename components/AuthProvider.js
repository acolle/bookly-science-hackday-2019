import React, { useEffect, useReducer } from 'react';
import authReducer from '../reducers/auth';
import { activeSession } from '../actions/auth';
import AuthContext from '../context/AuthContext';

const AuthProvider = (props) => {

  const initialState = {
    uid: undefined,
    username: undefined,
    email: undefined
  };
  const [ state, dispatch ] = useReducer(authReducer, initialState);

  const checkActiveSession = async () => {
    const result = await activeSession();
    if (result) {
      dispatch(result);
    }
  }

  useEffect(() => {
    checkActiveSession();
  }, []);

  return (
    <AuthContext.Provider value={{ state, dispatch }}>
      {props.children}
    </AuthContext.Provider>
  )
}

export { AuthProvider };
