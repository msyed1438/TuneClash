// src/context/AuthContext.js
"use client";

import { createContext, useContext, useState, useEffect } from 'react';
import { db, auth, loginWithGoogle, logoutUser } from '../firebase/firebase';
import { onAuthStateChanged } from 'firebase/auth';
import { doc, getDoc, setDoc } from 'firebase/firestore';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [userInfo, setUserInfo] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        fetchUserInfo(user.uid);
      } else {
        setUser(null);
        setUserInfo(null);
      }
    });
    return () => unsubscribe();
  }, []);

  const fetchUserInfo = async (uid) => {
    const userDoc = await getDoc(doc(db, 'users', uid));
    if (userDoc.exists()) {
      setUserInfo(userDoc.data());
    }
  };

  const saveUserInfo = async (uid, info) => {
    await setDoc(doc(db, 'users', uid), info);
    setUserInfo(info);
  };

  const login = async () => {
    const user = await loginWithGoogle();
    if (user) {
      fetchUserInfo(user.uid);
    }
  };

  const logout = async () => {
    await logoutUser();
  };

  return (
    <AuthContext.Provider value={{ user, userInfo, saveUserInfo, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
