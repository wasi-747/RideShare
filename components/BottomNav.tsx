"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Search,
  PlusCircle,
  Car,
  Info,
  CalendarDays,
  Star,
} from "lucide-react";

const tabs = [
  { label: "SEARCH", icon: Search, href: "/rides/search" },
  { label: "POST", icon: PlusCircle, href: "/rides/post" },
  { label: "MY RIDES", icon: Car, href: "/dashboard" },
  { label: "STATUS", icon: Info, href: "/rides/status" },
  { label: "BOOKINGS", icon: CalendarDays, href: "/rides/booking" },
  { label: "RATING", icon: Star, href: "/rides/review" },
];

export default function BottomNav({ active }: { active?: string }) {
  const pathname = usePathname();

  return (
    <nav className="sticky bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-100 px-1 py-2">
      <div className="flex items-center justify-around">
        {tabs.map((tab) => {
          const isActive =
            active === tab.label ||
            (!active && pathname === tab.href);
          const Icon = tab.icon;
          return (
            <Link
              key={tab.label}
              href={tab.href}
              className="flex flex-col items-center gap-0.5 min-w-0 flex-1"
            >
              <div
                className={`flex items-center justify-center w-8 h-8 rounded-full transition-all ${
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
                className={`text-[9px] font-bold tracking-wide truncate ${
                  isActive ? "text-brand" : "text-gray-400"
                }`}
              >
                {tab.label}
              </span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
