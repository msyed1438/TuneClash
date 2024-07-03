// src/components/NavBar.js
"use client";

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useAuth } from '../context/AuthContext';

const NavBar = () => {
  const router = useRouter();
  const { user, userInfo, logout, login } = useAuth();

  const handleLogout = async () => {
    await logout();
    router.push('/');
  };

  const handleLogin = async () => {
    await login();
    router.push('/lobby');
  };

  return (
    <nav className="bg-spaceCadet p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/">
          TuneClash
        </Link>
        <div className="flex items-center">
          {userInfo ? (
            <>
              <img src={userInfo.avatar} alt="avatar" className="w-8 h-8 rounded-full mr-2" />
              <span className="text-peach mr-4">{userInfo.displayName}</span>
              <button onClick={handleLogout} className="text-peach">
                Log Out
              </button>
            </>
          ) : (
            <button onClick={handleLogin} className="text-peach">
              Login
            </button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
