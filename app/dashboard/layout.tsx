// src/app/dashboard/layout.tsx
import Sidebar from "@/components/navclient/page";
import "../globals.css"; // if you need global Tailwind
export const metadata = {
  title: "Dashboard",
};

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex bg-neutral-900 text-white">
      {/* Left sidebar */}

      {/* Main content area */}
      <main className="flex-1 p-4">
        {children}
      </main>
    </div>
  );
}
