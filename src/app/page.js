// src/app/page.js
"use client";

import { useRouter } from 'next/navigation';
import { useAuth } from '../context/AuthContext';

export default function Home() {
  const router = useRouter();
  const { user, login } = useAuth();

  const handleLetsGo = async () => {
    if (user) {
      router.push('/lobby');
    } else {
      await login();
      router.push('/signup');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-peach text-spaceCadet">
      <h1 className="text-5xl font-bold mb-4">Welcome to TuneClash</h1>
      <button
        onClick={handleLetsGo}
        className="px-6 py-3 bg-spaceCadet text-peach rounded-lg text-xl"
      >
        Let's go!
      </button>
    </div>
  );
}
