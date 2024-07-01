'use client';

import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { auth, db } from '@/lib/firebase';
import { useRouter } from 'next/navigation';
import { doc, getDoc } from 'firebase/firestore';

export default function Login() {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  const router = useRouter();

  const handleGoogleSignIn = async () => {
    const result = await signInWithGoogle();
    if (result) {
      const userRef = doc(db, 'users', result.user.uid);
      const userSnap = await getDoc(userRef);
      if (userSnap.exists()) {
        router.push('/game-lobby');
      } else {
        router.push('/setup-profile');
      }
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold mb-8">Login / Sign Up</h1>
      <button
        onClick={handleGoogleSignIn}
        className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
      >
        Sign in with Google
      </button>
      {error && <p className="text-red-500 mt-4">{error.message}</p>}
    </div>
  );
}