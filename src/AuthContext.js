import React, { createContext, useContext, useState, useEffect } from 'react';
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from 'firebase/auth';
import { auth } from './firebase';

const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState();

  function signup(email, password) {
    return createUserWithEmailAndPassword(auth, email, password);
  }

  function login(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
  }

  const signout = () => {
    signOut(auth).then(() => {
      localStorage.clear();
    });
  };

  const updating = (name, photo) => {
    if (photo === '') {
      updateProfile(auth.currentUser, {
        displayName: name,
      }).then(() => {
        console.log('success');
      });
    } else {
      updateProfile(auth.currentUser, {
        displayName: name,
        photoURL: photo,
      }).then(() => {
        console.log('success');
      });
    }
  };

  useEffect(() => {
    //instance function that give us an info about registered user
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
    });

    return unsubscribe;
  }, []);

  const value = {
    currentUser,
    signup,
    login,
    signout,
    updating,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
