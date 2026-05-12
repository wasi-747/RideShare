"use client";

import { useState } from "react";
import Link from "next/link";
import { Car, MapPin, Navigation, Search, Shield } from "lucide-react";
import BottomNav from "@/components/BottomNav";
import { motion } from "framer-motion";

const pageTransition = {
  initial: { opacity: 0, y: 18 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] as const },
};

const listContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.12,
    },
  },
};

const listItem = {
  hidden: { opacity: 0, y: 14 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export default function RideSearchPage() {
  const [femaleOnly, setFemaleOnly] = useState(false);

  return (
    <motion.div
      initial={pageTransition.initial}
      animate={pageTransition.animate}
      transition={pageTransition.transition}
      className="mobile-shell flex flex-col bg-[#F5F5F5]"
    >
      {/* Top bar */}
      <header className="flex items-center justify-between px-5 pt-5 pb-3 bg-white">
        <div className="flex items-center gap-2">
          <div className="bg-brand rounded-lg p-1.5">
            <Car size={18} className="text-white" strokeWidth={2.5} />
          </div>
          <span className="text-lg font-black text-brand tracking-tight">
            RideShare
          </span>
        </div>
        <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-gray-100">
          <img
            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&auto=format&fit=crop"
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </div>
      </header>

      <div className="flex-1 overflow-y-auto pb-20">
        {/* Hero */}
        <section className="px-5 pt-5 pb-4 bg-white mb-2">
          <h1 className="text-[2rem] font-black text-gray-900 leading-tight mb-1">
            Find Your
            <br />
            Velocity
          </h1>
          <p className="text-sm text-gray-400">
            Safe, community-driven academic transit.
          </p>
        </section>

        {/* Search form */}
        <section className="mx-4 mb-3">
          <div className="rs-card p-4 space-y-3">
            {/* Departure */}
            <div>
              <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest block mb-1.5">
                Departure
              </label>
              <div className="flex items-center gap-2.5 rounded-xl border border-gray-200 bg-gray-50 px-3 py-2.5 transition-all duration-200 focus-within:border-brand/70 focus-within:shadow-[0_0_0_4px_rgba(200,16,46,0.14)]">
                <MapPin size={15} className="text-brand flex-shrink-0" />
                <input
                  className="flex-1 bg-transparent text-sm text-gray-800 outline-none placeholder-gray-400"
                  defaultValue="Campus Gate A"
                />
              </div>
            </div>
            {/* Destination */}
            <div>
              <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest block mb-1.5">
                Destination
              </label>
              <div className="flex items-center gap-2.5 rounded-xl border border-gray-200 bg-gray-50 px-3 py-2.5 transition-all duration-200 focus-within:border-brand/70 focus-within:shadow-[0_0_0_4px_rgba(200,16,46,0.14)]">
                <Navigation size={15} className="text-brand flex-shrink-0" />
                <input
                  className="flex-1 bg-transparent text-sm text-gray-800 outline-none placeholder-gray-400"
                  defaultValue="Science Park"
                />
              </div>
            </div>
            {/* Safety filter */}
            <div>
              <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest block mb-1.5">
                Safety Filter
              </label>
              <div className="flex items-center justify-between bg-gray-50 rounded-xl border border-gray-200 px-4 py-3">
                <div className="flex items-center gap-2">
                  <Shield size={15} className="text-brand flex-shrink-0" />
                  <span className="text-sm font-medium text-gray-700">
                    Female Only
                  </span>
                </div>
                <button
                  onClick={() => setFemaleOnly(!femaleOnly)}
                  type="button"
                  className={`inline-flex h-6 w-12 items-center rounded-full p-0.5 transition-colors ${
                    femaleOnly
                      ? "justify-end bg-red-500"
                      : "justify-start bg-gray-300"
                  }`}
                  role="switch"
                  aria-checked={femaleOnly}
                >
                  <div className="h-5 w-5 rounded-full bg-white shadow transition-all" />
                </button>
              </div>
            </div>

            {/* Search button */}
            <motion.button
              whileTap={{ scale: 0.95 }}
              className="rs-btn mt-1 flex min-h-[46px] items-center justify-center gap-2"
            >
              <Search size={16} /> Search Rides
            </motion.button>
          </div>
        </section>

        <motion.div variants={listContainer} initial="hidden" animate="visible">
          {/* Ride result 1 — Elena Rodriguez */}
          <motion.section variants={listItem} className="mx-4 mb-3">
            <div className="rs-card p-4">
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-3">
                  <img
                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=60&auto=format&fit=crop"
                    alt="Elena"
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <p className="text-base font-black text-gray-900">
                      Elena Rodriguez
                    </p>
                    <div className="flex items-center gap-1 mt-0.5">
                      <span className="text-yellow-400 text-xs">★</span>
                      <span className="text-xs font-bold text-gray-700">
                        4.9
                      </span>
                      <span className="text-xs text-brand font-semibold">
                        • Verified Student
                      </span>
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-[10px] font-black text-white bg-brand px-2 py-0.5 rounded-full mb-1 text-center">
                    FEMALE ONLY
                  </div>
                  <p className="text-xl font-black text-gray-900">$12</p>
                  <p className="text-[10px] text-gray-400 uppercase font-bold">
                    Per Seat
                  </p>
                </div>
              </div>

              {/* Route */}
              <div className="flex items-start gap-2 mb-3 pl-1">
                <div className="flex flex-col items-center mt-1 gap-1">
                  <div className="w-2 h-2 rounded-full bg-brand" />
                  <div className="w-px h-6 bg-gray-200" />
                  <div className="w-2 h-2 rounded-full border border-gray-400" />
                </div>
                <div className="flex-1 text-xs text-gray-600 space-y-3">
                  <div>
                    <p className="text-[10px] text-gray-400">08:30 AM</p>
                    <p className="font-semibold text-gray-900">
                      West Campus Dorms
                    </p>
                  </div>
                  <div>
                    <p className="text-[10px] text-gray-400">09:00 AM</p>
                    <p className="font-semibold text-gray-900">
                      Central Research Lab
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3 text-xs text-gray-500">
                  <span className="flex items-center gap-1">
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <circle cx="12" cy="7" r="4" />
                      <path d="M5 21v-2a7 7 0 0 1 14 0v2" />
                    </svg>
                    2 Seats Left
                  </span>
                  <span className="flex items-center gap-1">
                    <Car size={12} />
                    Tesla Model 3
                  </span>
                </div>
                <motion.div whileTap={{ scale: 0.95 }}>
                  <Link
                    href="/rides/booking/1"
                    className="inline-flex min-h-[44px] items-center rounded-full bg-brand px-5 py-2 text-sm font-bold text-white transition hover:bg-brand-dark"
                  >
                    Book
                  </Link>
                </motion.div>
              </div>
            </div>
          </motion.section>

          {/* Ride result 2 — Sarah Jenkins */}
          <motion.section variants={listItem} className="mx-4 mb-3">
            <div className="rs-card p-4">
              <div className="flex items-start justify-between mb-2">
                <img
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=60&auto=format&fit=crop"
                  alt="Sarah"
                  className="w-11 h-11 rounded-full object-cover"
                />
                <p className="text-xl font-black text-gray-900">$08</p>
              </div>
              <p className="text-base font-black text-gray-900 mb-1">
                Sarah Jenkins
              </p>
              <p className="text-xs text-gray-400 italic mb-3">
                &quot;Headed to the library for a late session. Quiet ride,
                music on request!&quot;
              </p>
              <div className="flex items-center gap-4 text-xs text-gray-500 mb-3">
                <span className="flex items-center gap-1">
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                  </svg>
                  Starts in 15 mins
                </span>
                <span className="flex items-center gap-1 text-brand font-semibold">
                  <Shield size={12} />
                  Female Only Ride
                </span>
              </div>
              <motion.div whileTap={{ scale: 0.95 }}>
                <Link
                  href="/rides/booking/2"
                  className="rs-btn inline-flex items-center justify-center"
                >
                  Book Now
                </Link>
              </motion.div>
            </div>
          </motion.section>

          {/* Ride result 3 — North Campus Loop (shuttle) */}
          <motion.section variants={listItem} className="mx-4 mb-3">
            <div className="rs-card p-4 flex items-center gap-4">
              <div className="w-16 h-16 rounded-xl overflow-hidden flex-shrink-0 bg-gray-100">
                <img
                  src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=80&auto=format&fit=crop"
                  alt="Bus"
                  className="w-full h-full object-cover opacity-60"
                />
              </div>
              <div className="flex-1">
                <div className="flex items-start justify-between">
                  <p className="text-sm font-black text-gray-900">
                    North Campus Loop
                  </p>
                  <p className="text-sm font-black text-gray-900">$05</p>
                </div>
                <p className="text-xs text-gray-400 mb-2 leading-snug">
                  Express shuttle carpool by Dr. Aria. Multiple stops available.
                </p>
                <div className="flex items-center gap-2">
                  <span className="text-[9px] font-black bg-pink-100 text-pink-600 px-2 py-0.5 rounded-full">
                    FEMALE PREFERRED
                  </span>
                  <motion.div whileTap={{ scale: 0.95 }}>
                    <Link
                      href="/rides/booking/3"
                      className="inline-flex min-h-[32px] items-center text-xs font-bold text-brand"
                    >
                      Details →
                    </Link>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.section>
        </motion.div>

        {/* Driving Tomorrow CTA */}
        <section className="mx-4 mb-4">
          <div className="rounded-2xl bg-brand p-6 text-center">
            <h3 className="text-lg font-black text-white mb-2">
              Driving Tomorrow?
            </h3>
            <p className="text-xs text-red-200 mb-4 leading-relaxed">
              List your ride and help a fellow student while covering your fuel
              costs.
            </p>
            <motion.button
              whileTap={{ scale: 0.95 }}
              className="rounded-full bg-white px-8 py-2.5 text-sm font-bold text-brand transition hover:bg-red-50"
            >
              Post a Ride
            </motion.button>
          </div>
        </section>
      </div>

      <BottomNav active="SEARCH" />
    </motion.div>
  );
}
