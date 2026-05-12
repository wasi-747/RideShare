"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { motion } from "framer-motion";
import {
  Search,
  PlusCircle,
  Car,
  Info,
  CalendarDays,
  Star,
  LogOut,
} from "lucide-react";

const tabs = [
  { label: "SEARCH", icon: Search, href: "/rides/search" },
  { label: "POST", icon: PlusCircle, href: "/rides/post" },
  { label: "MY RIDES", icon: Car, href: "/dashboard" },
  { label: "STATUS", icon: Info, href: "/rides/status" },
  { label: "RATING", icon: Star, href: "/rides/review" },
  { label: "LOGOUT", icon: LogOut, href: "#logout" },
];

export default function BottomNav({ active }: { active?: string }) {
  const pathname = usePathname();
  const router = useRouter();

  function handleLogout() {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    router.push("/");
  }

  return (
    <nav className="sticky bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-100 px-1 py-2">
      <div className="flex items-center justify-around">
        {tabs.map((tab) => {
          const isLogout = tab.href === "#logout";
          const isActive =
            !isLogout &&
            (active === tab.label || (!active && pathname === tab.href));
          const Icon = tab.icon;

          if (isLogout) {
            return (
              <motion.div
                key={tab.label}
                whileTap={{ scale: 0.95 }}
                className="min-w-0 flex-1"
              >
                <button
                  onClick={handleLogout}
                  className="flex min-h-[48px] w-full flex-col items-center justify-center gap-0.5"
                >
                  <div className="flex h-8 w-8 items-center justify-center rounded-full text-red-400 transition-all hover:bg-red-50 hover:text-red-600">
                    <Icon size={16} strokeWidth={1.8} />
                  </div>
                  <span className="truncate text-[9px] font-bold tracking-wide text-red-400">
                    {tab.label}
                  </span>
                </button>
              </motion.div>
            );
          }

          return (
            <motion.div
              key={tab.label}
              whileTap={{ scale: 0.95 }}
              className="min-w-0 flex-1"
            >
              <Link
                href={tab.href}
                className="flex min-h-[48px] flex-col items-center justify-center gap-0.5"
              >
                <div
                  className={`flex h-8 w-8 items-center justify-center rounded-full transition-all ${
                    isActive ? "bg-brand text-white" : "text-gray-400"
                  }`}
                >
                  <Icon
                    size={isActive ? 18 : 16}
                    strokeWidth={isActive ? 2.5 : 1.8}
                    className={isActive ? "fill-white" : ""}
                  />
                </div>
                <span
                  className={`truncate text-[9px] font-bold tracking-wide ${
                    isActive ? "text-brand" : "text-gray-400"
                  }`}
                >
                  {tab.label}
                </span>
              </Link>
            </motion.div>
          );
        })}
      </div>
    </nav>
  );
}
