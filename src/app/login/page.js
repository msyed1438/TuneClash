// src/app/login/page.js
"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "../../context/AuthContext";

const Login = () => {
  const router = useRouter();
  const { login } = useAuth();

  useEffect(() => {
    const performLogin = async () => {
      await login();
      router.push("/lobby");
    };

    performLogin();
  }, [login, router]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-aliceBlue text-spaceCadet">
      <h1 className="text-2xl font-bold mb-4">Logging in...</h1>
    </div>
  );
};

export default Login;
