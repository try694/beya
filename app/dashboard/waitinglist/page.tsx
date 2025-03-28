"use client";

import React, { useState } from "react";

interface PendingUser {
  firstName: string;
  lastName: string;
  phone: string;
  country: string;
  metamask: string;
  email: string;
  group: string;
}

export default function PendingUsersPage() {
  const [users, setUsers] = useState<PendingUser[]>([
    {
      firstName: "rasmus",
      lastName: "roth",
      phone: "060127456",
      country: "finland",
      metamask: "jifj84d8f2dp2n2dp2n2030df4420unt",
      email: "[email protected]",
      group: "",
    },
    {
      firstName: "U",
      lastName: "J",
      phone: "7338038",
      country: "Poland",
      metamask: "Jsuwrjxipe",
      email: "[email protected]",
      group: "",
    },
    {
      firstName: "Dick",
      lastName: "Sandberg",
      phone: "0502125765",
      country: "Sweden",
      metamask: "0x702d0d2caa9aa5dc149c1ae63cfa9996cc5a3221",
      email: "[email protected]",
      group: "",
    },
    {
      firstName: "s",
      lastName: "s",
      phone: "2222222",
      country: "??",
      metamask: "bnfX",
      email: "[email protected]",
      group: "",
    },
  ]);

  // Handler for changing group selection
  const handleGroupChange = (index: number, newGroup: string) => {
    const updated = [...users];
    updated[index].group = newGroup;
    setUsers(updated);
  };

  // Approve/Reject handlers (replace with your actual logic)
  const handleApprove = (index: number) => {
    alert(`Approved user: ${users[index].email} in group: ${users[index].group}`);
    // You might call an API or update your DB here.
  };

  const handleReject = (index: number) => {
    alert(`Rejected user: ${users[index].email}`);
    // You might call an API or update your DB here.
  };

  return (
    <div className="p-4">
      <section className="bg-[#1A1A1A] border border-neutral-700 rounded p-4 space-y-4">
        <h1 className="text-xl font-semibold text-white">User Management</h1>

        {/* Table container */}
        <div className="overflow-x-auto">
          <table className="min-w-full text-sm text-left text-gray-200">
            <thead className="bg-neutral-900 border-b border-neutral-700">
              <tr>
                <th className="px-4 py-2 font-medium">First Name</th>
                <th className="px-4 py-2 font-medium">Last Name</th>
                <th className="px-4 py-2 font-medium">Phone</th>
                <th className="px-4 py-2 font-medium">Country</th>
                <th className="px-4 py-2 font-medium">Metamask Acc</th>
                <th className="px-4 py-2 font-medium">Email</th>
                <th className="px-4 py-2 font-medium">Group</th>
                <th className="px-4 py-2 font-medium">Action</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, idx) => (
                <tr
                  key={idx}
                  className="border-b border-neutral-700 hover:bg-neutral-800"
                >
                  <td className="px-4 py-2">{user.firstName}</td>
                  <td className="px-4 py-2">{user.lastName}</td>
                  <td className="px-4 py-2">{user.phone}</td>
                  <td className="px-4 py-2">{user.country}</td>
                  <td className="px-4 py-2">{user.metamask}</td>
                  <td className="px-4 py-2">{user.email}</td>
                  <td className="px-4 py-2">
                    {/* Group dropdown */}
                    <select
                      value={user.group}
                      onChange={(e) => handleGroupChange(idx, e.target.value)}
                      className="bg-neutral-900 border border-neutral-700 rounded px-2 py-1 text-sm focus:outline-none text-white"
                    >
                      <option value="">Select a group</option>
                      <option value="VIP">VIP</option>
                      <option value="TRADER 50">TRADER 50</option>
                      <option value="ANTS">ANTS</option>
                    </select>
                  </td>
                  <td className="px-4 py-2">
                    <div className="flex gap-2">
                      <button
                        onClick={() => handleApprove(idx)}
                        className="bg-green-600 hover:bg-green-500 text-white font-semibold py-1 px-3 rounded text-sm"
                      >
                        Approve
                      </button>
                      <button
                        onClick={() => handleReject(idx)}
                        className="bg-red-600 hover:bg-red-500 text-white font-semibold py-1 px-3 rounded text-sm"
                      >
                        Reject
                      </button>
                    </div>
                  </td>
                </tr>
              ))}

              {users.length === 0 && (
                <tr>
                  <td colSpan={8} className="px-4 py-4 text-center text-gray-400">
                    No pending users.
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
