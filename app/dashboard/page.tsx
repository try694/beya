import React from 'react';
import Sidebar from '@/components/navclient/page'; // Adjust the import to match your actual file path

export default function Page() {
  return (
    <div className="h-screen w-full bg-neutral-900 text-white">
      <Sidebar />
    </div>
  );
}
