"use client";

import { FiLock, FiMail, FiUser } from "react-icons/fi";
import Link from "next/link";


export default function RegisterClient() {

  return (
    <div className="h-screen grid grid-cols-2 text-white bg-neutral-900">
      {/* LEFT COLUMN (Fixed Logo & Branding) */}
      <div className="bg-neutral-900 flex flex-col items-center justify-center p-8">
        <img src="/logo.png" alt="Amazing Logo" className="w-80 h-auto mb-6" />
        <h1 className="text-2xl font-bold bg-gradient-to-r from-sky-400 to-fuchsia-500 bg-clip-text text-transparent">
          REVOLUTINARY OF THE CRYPTO INDUSTRY
        </h1>
      </div>

      {/* RIGHT COLUMN (Scrollable Form) */}
      <div className="overflow-y-auto flex items-center justify-center p-8">
        <div className="w-full max-w-md space-y-6 p-6 rounded-xl shadow-2xl bg-neutral-900 border border-neutral-700">
          <div className="flex items-center justify-between text-gray-200 gap-3">
            <img src="/logo.png" alt="Logo" width="100" height="60" />
            <h2 className="text-2xl font-semibold">Sign Up</h2>
          </div>
          <div className="border-t border-neutral-700 pt-4" />
          <form  className="space-y-4">
            {/* First & Last Name */}
            <div className="flex gap-4">
              <div className="flex-1">
                <label className="block mb-1 text-sm">First Name</label>
                <input name="firstName" type="text" placeholder="Alexis" className="w-full bg-neutral-800 border border-neutral-700 rounded-lg px-3 py-2 text-sm focus:outline-none" />
              </div>
              <div className="flex-1">
                <label className="block mb-1 text-sm">Last Name</label>
                <input name="lastName" type="text" placeholder="Young" className="w-full bg-neutral-800 border border-neutral-700 rounded-lg px-3 py-2 text-sm focus:outline-none" />
              </div>
            </div>
            {/* Username (optional) */}
            <div>
              <label className="block mb-1 text-sm">Username</label>
              <div className="flex items-center bg-neutral-800 border border-neutral-700 rounded-lg px-3">
                <FiUser className="mr-2 text-white/60" />
                <input name="username" type="text" placeholder="username" className="flex-1 bg-transparent py-2 text-sm focus:outline-none" />
              </div>
            </div>
            {/* Phone */}
            <div>
              <label className="block mb-1 text-sm">Phone Number</label>
              <input name="phone" type="text" placeholder="454..." className="w-full bg-neutral-800 border border-neutral-700 rounded-lg px-3 py-2 text-sm focus:outline-none" />
            </div>
            {/* Country */}
            <div>
              <label className="block mb-1 text-sm">Country</label>
              <input name="country" type="text" placeholder="Country" className="w-full bg-neutral-800 border border-neutral-700 rounded-lg px-3 py-2 text-sm focus:outline-none" />
            </div>
            {/* Metamask */}
            <div>
              <label className="block mb-1 text-sm">Metamask Address</label>
              <input name="metamask" type="text" placeholder="0xYourWallet..." className="w-full bg-neutral-800 border border-neutral-700 rounded-lg px-3 py-2 text-sm focus:outline-none" />
            </div>
            {/* Email */}
            <div>
              <label className="block mb-1 text-sm">Email</label>
              <div className="flex items-center bg-neutral-800 border border-neutral-700 rounded-lg px-3">
                <FiMail className="mr-2 text-white/60" />
                <input name="email" type="email" placeholder="email@example.com" className="flex-1 bg-transparent py-2 text-sm focus:outline-none" />
              </div>
            </div>
            {/* Password */}
            <div>
              <label className="block mb-1 text-sm">Password</label>
              <div className="flex items-center bg-neutral-800 border border-neutral-700 rounded-lg px-3">
                <FiLock className="mr-2 text-white/60" />
                <input name="password" type="password" placeholder="Minimum 5 characters" className="flex-1 bg-transparent py-2 text-sm focus:outline-none" />
              </div>
            </div>
            {/* Password Confirm */}
            <div>
              <label className="block mb-1 text-sm">Confirm Password</label>
              <input name="passwordConfirm" type="password" placeholder="Re-enter password" className="w-full bg-neutral-800 border border-neutral-700 rounded-lg px-3 py-2 text-sm focus:outline-none" />
            </div>
            {/* General Error */}
            {/* Submit Button */}
            <button type="submit" className="w-full mt-4 py-2 bg-yellow-400 text-black font-semibold rounded-lg hover:bg-yellow-300 transition">
              Sign Up
            </button>
          </form>
          <p className="text-sm text-neutral-400 mt-2">
            Already have an account?{" "}
            <Link href="/login" className="text-yellow-400 hover:underline">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
