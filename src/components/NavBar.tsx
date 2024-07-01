'use client';

import Link from 'next/link';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '@/lib/firebase';
import { signOut } from 'firebase/auth';

export default function NavBar() {
  const [user, loading] = useAuthState(auth);

  const handleSignOut = () => {
    signOut(auth);
  };

  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-xl font-bold">
          Game Hub
        </Link>
        <div>
          {!loading && (
            <>
              {user ? (
                <button onClick={handleSignOut} className="hover:text-gray-300">
                  Sign Out
                </button>
              ) : (
                <Link href="/login" className="hover:text-gray-300">
                  Sign In / Login
                </Link>
              )}
            </>
          )}
        </div>
      </div>
    </nav>
  );
}