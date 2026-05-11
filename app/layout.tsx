import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "RideShare - Campus Carpool",
  description: "Safe, verified university carpooling for students and staff.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-[#E8E8E8] flex items-start justify-center py-0 sm:py-8">
        {children}
      </body>
    </html>
  );
}
