// src/app/lobby/page.js
"use client";

import { useRouter } from 'next/navigation';
import { useAuth } from '../../context/AuthContext';

const Lobby = () => {
  const router = useRouter();
  const { userInfo, logout } = useAuth();

  const handleLogout = async () => {
    await logout();
    router.push('/');
  };

  if (!userInfo) return null;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-aliceBlue text-spaceCadet">
      <h1 className="text-4xl mb-4">Welcome, {userInfo.displayName}!</h1>
      <img src={userInfo.avatar} alt="avatar" className="w-32 h-32 rounded-full mb-4" />
      <button onClick={handleLogout} className="px-4 py-2 bg-slateGray text-peach rounded">
        Log Out
      </button>
    </div>
  );
};

export default Lobby;
