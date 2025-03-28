"use client";

import React, { useState } from "react";
import Link from "next/link";
import { FiMail, FiLock, FiEye, FiEyeOff } from "react-icons/fi";


export default function LoginClient() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen bg-neutral-900 text-white flex items-center justify-center px-4">
      <div className="max-w-sm w-full bg-neutral-800 rounded-lg shadow-lg p-6 space-y-6">
        <div className="flex items-center">
          <img src="/logo.png" alt="Logo" width="80" height="60" />
          <h1 className="relative text-xl font-semibold ml-4">Login</h1>
        </div>
        <form className="space-y-5">
          <div>
            <label className="block mb-1 text-sm" htmlFor="email">
              Email
            </label>
            <div className="flex items-center bg-neutral-700 rounded px-3">
              <FiMail className="text-white/60 mr-2" />
              <input
                type="email"
                name="email"
                id="email"
                placeholder="email@example.com"
                className="w-full bg-transparent py-2 text-sm focus:outline-none"
                required
              />
            </div>
          </div>
          <div>
            <label className="block mb-1 text-sm" htmlFor="password">
              Password
            </label>
            <div className="flex items-center bg-neutral-700 rounded px-3">
              <FiLock className="text-white/60 mr-2" />
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                id="password"
                placeholder="**********"
                className="w-full bg-transparent py-2 text-sm focus:outline-none"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="ml-2 text-white/60 hover:text-white"
              >
                {showPassword ? <FiEyeOff /> : <FiEye />}
              </button>
            </div>
          </div>
         
          <button
            type="submit"
            className="w-full bg-yellow-400 text-black font-semibold rounded py-2 hover:bg-yellow-300 transition"
          >
            Login
          </button>
        </form>
        <div className="text-center text-sm">
          <p>
            Do not have an account?{" "}
            <Link href="/signup" className="text-yellow-400 hover:underline">
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
