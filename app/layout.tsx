import type { Metadata, Viewport } from "next";
import "./globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  themeColor: "#C8102E",
  colorScheme: "light",
};

export const metadata: Metadata = {
  title: "RideShare - Campus Carpool",
  description: "Safe, verified university carpooling for students and staff.",
  manifest: "/manifest.json",
  other: {
    "mobile-web-app-capable": "yes",
  },
  icons: {
    icon: "/icons/icon-192x192.png",
    apple: "/apple-touch-icon.png",
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "RideShare",
  },
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-[#F5F4F0] flex items-start justify-center py-0 sm:py-8">
        {children}
      </body>
    </html>
  );
}
