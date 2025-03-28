'use client'

import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-black min-h-screen flex flex-col">
          <div > {/* Max width for larger screens and padding adjustments */}
            {children}
          </div>
      </body>
    </html>
  );
}
