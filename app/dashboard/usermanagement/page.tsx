"use client";

import React, { useState } from "react";
import { FiSearch, FiEdit, FiTrash2 } from "react-icons/fi";

type User = {
  name: string;
  email: string;
  role: string;
  group: string;
  whitelisted: string;
  metamask: string;
  adminPercent: string;
  userPercent: string;
  uplinePercent: string;
};

export default function UserManagementPage() {
  const [searchTerm, setSearchTerm] = useState("");

  // Sample user data (replace with real data from your API/DB)
  const [users] = useState<User[]>([
    {
      name: "web spender",
      email: "s@gmail.com",
      role: "admin",
      group: "VIP",
      whitelisted: "Yes",
      metamask: "j10839a3d49u3w34ref2f840",
      adminPercent: "50%",
      userPercent: "50%",
      uplinePercent: "0%",
    },
    {
      name: "kjell sandbox",
      email: "mviop@m",
      role: "admin",
      group: "TRADER 50",
      whitelisted: "Yes",
      metamask: "0x10839a3...f342f840",
      adminPercent: "50%",
      userPercent: "50%",
      uplinePercent: "0%",
    },
    {
      name: "cassandra sandberg",
      email: "cassg@gmail.com",
      role: "user",
      group: "ANTS",
      whitelisted: "Yes",
      metamask: "0x10839a3...f342f840",
      adminPercent: "50%",
      userPercent: "50%",
      uplinePercent: "0%",
    },
    {
      name: "kjell sandbox",
      email: "test1@newmail.com",
      role: "user",
      group: "TRADER 50",
      whitelisted: "Yes",
      metamask: "0x10839a3...f342f840",
      adminPercent: "50%",
      userPercent: "50%",
      uplinePercent: "0%",
    },
    {
      name: "g h",
      email: "g@sbs.com",
      role: "user",
      group: "TRADER 50",
      whitelisted: "Yes",
      metamask: "bnbx",
      adminPercent: "50%",
      userPercent: "50%",
      uplinePercent: "0%",
    },
  ]);

  // Simple client-side search filter (by name or email)
  const filteredUsers = users.filter(
    (user) =>
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-4">
      <section className="bg-[#1A1A1A] border border-neutral-700 rounded p-4 space-y-4">
        <div className="flex items-center justify-between">
          <h1 className="text-xl font-semibold text-white">User Management</h1>
          {/* Search Bar */}
          <div className="relative">
            <input
              type="text"
              placeholder="Search..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="bg-neutral-900 border border-neutral-700 rounded pl-8 pr-3 py-1 text-sm text-white focus:outline-none"
            />
            <FiSearch className="absolute top-2 left-2 text-white/50" />
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="min-w-full text-sm text-left text-gray-200">
            <thead className="bg-neutral-900 border-b border-neutral-700">
              <tr>
                <th scope="col" className="px-4 py-2 font-medium">
                  Name
                </th>
                <th scope="col" className="px-4 py-2 font-medium">
                  Email
                </th>
                <th scope="col" className="px-4 py-2 font-medium">
                  User Role
                </th>
                <th scope="col" className="px-4 py-2 font-medium">
                  User Group
                </th>
                <th scope="col" className="px-4 py-2 font-medium">
                  Whitelisted
                </th>
                <th scope="col" className="px-4 py-2 font-medium">
                  Metamask Acc
                </th>
                <th scope="col" className="px-4 py-2 font-medium">
                  Admin%
                </th>
                <th scope="col" className="px-4 py-2 font-medium">
                  User%
                </th>
                <th scope="col" className="px-4 py-2 font-medium">
                  Upline%
                </th>
                <th scope="col" className="px-4 py-2 font-medium">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {filteredUsers.map((user, idx) => (
                <tr
                  key={idx}
                  className="border-b border-neutral-700 hover:bg-neutral-800"
                >
                  <td className="px-4 py-2">{user.name}</td>
                  <td className="px-4 py-2">{user.email}</td>
                  <td className="px-4 py-2">{user.role}</td>
                  <td className="px-4 py-2">{user.group}</td>
                  <td className="px-4 py-2">{user.whitelisted}</td>
                  <td className="px-4 py-2">{user.metamask}</td>
                  <td className="px-4 py-2">{user.adminPercent}</td>
                  <td className="px-4 py-2">{user.userPercent}</td>
                  <td className="px-4 py-2">{user.uplinePercent}</td>
                  <td className="px-4 py-2">
                    <div className="flex items-center gap-2">
                      <button className="text-yellow-400 hover:text-yellow-300">
                        <FiEdit size={16} />
                      </button>
                      <button className="text-red-500 hover:text-red-400">
                        <FiTrash2 size={16} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}

              {/* If no users found */}
              {filteredUsers.length === 0 && (
                <tr>
                  <td
                    colSpan={10}
                    className="px-4 py-4 text-center text-gray-400"
                  >
                    No matching users found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
