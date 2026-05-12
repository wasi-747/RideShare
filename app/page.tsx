"use client";

import Link from "next/link";
import {
  MapPin,
  Plus,
  MessageCircle,
  User,
  Home,
  Search as SearchIcon,
} from "lucide-react";
import { motion } from "framer-motion";

const pageTransition = {
  initial: { opacity: 0, y: 18 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] as const },
};

export default function HomePage() {
  return (
    <motion.div
      initial={pageTransition.initial}
      animate={pageTransition.animate}
      transition={pageTransition.transition}
      className="min-h-screen bg-white pb-20"
    >
      {/* Mobile Header */}
      <header className="sticky top-0 z-50 bg-white border-b border-gray-100">
        <div className="px-4 py-3 flex items-center justify-between">
          <div className="font-bold text-xl text-red-600">RideShare</div>
          <div className="flex gap-2">
            <motion.div whileTap={{ scale: 0.95 }}>
              <Link
                href="/profile"
                className="flex min-h-[44px] min-w-[44px] items-center justify-center rounded-lg p-2 transition hover:bg-gray-100"
              >
                <User size={24} className="text-gray-600" />
              </Link>
            </motion.div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-2xl mx-auto px-4">
        {/* Search Bar */}
        <div className="mt-6 mb-6">
          <motion.div whileTap={{ scale: 0.98 }}>
            <Link
              href="/rides/search"
              className="flex min-h-[52px] w-full items-center gap-3 rounded-2xl bg-gray-100 p-4 transition hover:bg-gray-200"
            >
              <SearchIcon size={20} className="text-gray-500" />
              <span className="text-gray-500">Where to?</span>
            </Link>
          </motion.div>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-2 gap-4 mb-8">
          <motion.div
            whileHover={{
              y: -6,
              boxShadow: "0 18px 36px rgba(200,16,46,0.28)",
            }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 320, damping: 24 }}
          >
            <Link
              href="/rides/search"
              className="flex min-h-[168px] flex-col items-center justify-center gap-3 rounded-2xl bg-red-600 p-6 text-white shadow-lg transition"
            >
              <MapPin size={32} />
              <span className="text-lg font-bold">Find a Ride</span>
              <span className="text-sm text-red-100">Request now</span>
            </Link>
          </motion.div>

          <motion.div
            whileHover={{
              y: -6,
              boxShadow: "0 18px 36px rgba(32,88,180,0.30)",
            }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 320, damping: 24 }}
          >
            <Link
              href="/rides/post"
              className="flex min-h-[168px] flex-col items-center justify-center gap-3 rounded-2xl bg-blue-600 p-6 text-white shadow-lg transition"
            >
              <Plus size={32} />
              <span className="text-lg font-bold">Offer a Ride</span>
              <span className="text-sm text-blue-100">Earn money</span>
            </Link>
          </motion.div>
        </div>

        {/* Active Ride Card */}
        <section className="mb-8">
          <h2 className="text-lg font-bold text-gray-900 mb-4">
            Your Active Ride
          </h2>
          <div className="bg-gradient-to-br from-red-50 to-red-100 rounded-2xl p-6 border border-red-200">
            <div className="text-center">
              <p className="text-gray-600 mb-2">No active ride at the moment</p>
              <motion.div whileTap={{ scale: 0.95 }} className="inline-block">
                <Link
                  href="/rides/search"
                  className="inline-flex min-h-[44px] items-center rounded-lg bg-red-600 px-6 py-2 font-semibold text-white transition hover:bg-red-700"
                >
                  Find a Ride
                </Link>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Recent Rides */}
        <section className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-bold text-gray-900">Recent Rides</h2>
            <motion.div whileTap={{ scale: 0.95 }}>
              <Link
                href="/dashboard"
                className="inline-flex min-h-[36px] items-center text-sm font-semibold text-red-600 hover:text-red-700"
              >
                See all
              </Link>
            </motion.div>
          </div>
          <div className="space-y-3">
            <div className="bg-gray-50 rounded-xl p-4 border border-gray-100 hover:border-gray-200 transition">
              <div className="flex gap-3">
                <div className="bg-blue-100 rounded-lg p-2 h-fit">
                  <MapPin size={20} className="text-blue-600" />
                </div>
                <div className="flex-1">
                  <p className="font-semibold text-gray-900">No recent rides</p>
                  <p className="text-sm text-gray-500">
                    Your rides will appear here
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-sm text-gray-400">--</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Highlights */}
        <section className="mb-8">
          <h2 className="text-lg font-bold text-gray-900 mb-4">
            Why RideShare?
          </h2>
          <div className="space-y-3">
            <div className="flex gap-3 p-4 bg-gray-50 rounded-xl border border-gray-100">
              <div className="text-2xl">🛡️</div>
              <div>
                <p className="font-semibold text-gray-900">Verified Students</p>
                <p className="text-sm text-gray-500">
                  All users verified with university emails
                </p>
              </div>
            </div>

            <div className="flex gap-3 p-4 bg-gray-50 rounded-xl border border-gray-100">
              <div className="text-2xl">💰</div>
              <div>
                <p className="font-semibold text-gray-900">Affordable Fares</p>
                <p className="text-sm text-gray-500">
                  Split costs and save money every trip
                </p>
              </div>
            </div>

            <div className="flex gap-3 p-4 bg-gray-50 rounded-xl border border-gray-100">
              <div className="text-2xl">⭐</div>
              <div>
                <p className="font-semibold text-gray-900">Rated Drivers</p>
                <p className="text-sm text-gray-500">
                  Choose from top-rated community drivers
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-100 px-4 py-3">
        <div className="max-w-2xl mx-auto flex justify-around">
          <motion.div whileTap={{ scale: 0.95 }}>
            <Link
              href="/"
              className="flex min-h-[44px] min-w-[56px] flex-col items-center justify-center gap-1 text-red-600"
            >
              <Home size={24} />
              <span className="text-xs font-semibold">Home</span>
            </Link>
          </motion.div>

          <motion.div whileTap={{ scale: 0.95 }}>
            <Link
              href="/rides/search"
              className="flex min-h-[44px] min-w-[56px] flex-col items-center justify-center gap-1 text-gray-400 transition hover:text-gray-600"
            >
              <SearchIcon size={24} />
              <span className="text-xs font-semibold">Search</span>
            </Link>
          </motion.div>

          <motion.div whileTap={{ scale: 0.95 }}>
            <Link
              href="/dashboard"
              className="flex min-h-[44px] min-w-[56px] flex-col items-center justify-center gap-1 text-gray-400 transition hover:text-gray-600"
            >
              <MessageCircle size={24} />
              <span className="text-xs font-semibold">Rides</span>
            </Link>
          </motion.div>

          <motion.div whileTap={{ scale: 0.95 }}>
            <Link
              href="/profile"
              className="flex min-h-[44px] min-w-[56px] flex-col items-center justify-center gap-1 text-gray-400 transition hover:text-gray-600"
            >
              <User size={24} />
              <span className="text-xs font-semibold">Profile</span>
            </Link>
          </motion.div>
        </div>
      </nav>
    </motion.div>
  );
}
