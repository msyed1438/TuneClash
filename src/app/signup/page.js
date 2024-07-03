// src/app/signup/page.js
"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '../../context/AuthContext';

const avatars = [
  '/avatars/avatar1.png',
  '/avatars/avatar2.png',
  '/avatars/avatar3.png',
  '/avatars/avatar4.png',
  '/avatars/avatar5.png',
  '/avatars/avatar6.png',
  '/avatars/avatar7.png',
  '/avatars/avatar8.png',
  '/avatars/avatar9.png',
];

const Signup = () => {
  const [selectedAvatar, setSelectedAvatar] = useState(avatars[0]);
  const [displayName, setDisplayName] = useState('');
  const { user, saveUserInfo } = useAuth();
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const info = { displayName, avatar: selectedAvatar };
    await saveUserInfo(user.uid, info);
    router.push('/lobby');
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-aliceBlue text-spaceCadet">
      <h1 className="text-2xl font-bold mb-4">Configure your Profile</h1>
      <form onSubmit={handleSubmit} className="flex flex-col items-center">
        <div className="flex mb-4">
          {avatars.map((avatar, index) => (
            <img
              key={index}
              src={avatar}
              alt="avatar"
              className={`w-16 h-16 rounded-full cursor-pointer ${selectedAvatar === avatar ? 'ring-2 ring-slateGray' : ''}`}
              onClick={() => setSelectedAvatar(avatar)}
            />
          ))}
        </div>
        <input
          type="text"
          placeholder="Display Name"
          value={displayName}
          onChange={(e) => setDisplayName(e.target.value)}
          className="mb-2 p-2 border rounded text-spaceCadet"
          required
        />
        <button type="submit" className="px-4 py-2 bg-peach text-spaceCadet rounded">
          Save and Join Lobby
        </button>
      </form>
    </div>
  );
};

export default Signup;
