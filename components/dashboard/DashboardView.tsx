"use client";

import Link from "next/link";
import {
  Car,
  Search,
  Plus,
  History,
  BarChart2,
  MessageSquare,
  Calendar,
} from "lucide-react";
import { motion } from "framer-motion";
import BottomNav from "@/components/BottomNav";

const pageTransition = {
  initial: { opacity: 0, y: 18 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] as const },
};

export default function DashboardView() {
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
            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&auto=format&fit=crop"
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </div>
      </header>

      <div className="flex-1 overflow-y-auto pb-20">
        {/* Greeting + hero */}
        <section className="px-5 pt-5 pb-4 bg-white mb-2">
          <p className="text-sm text-gray-500 mb-0.5">Welcome back, Alex</p>
          <h1 className="text-[1.85rem] font-black text-gray-900 leading-tight">
            Your Academic
            <br />
            <span className="text-brand">Journey Today.</span>
          </h1>
        </section>

        {/* Quick Actions */}
        <section className="px-4 py-4 bg-white mb-2">
          <p className="text-sm font-bold text-gray-700 mb-3">Quick Actions</p>
          <div className="grid grid-cols-2 gap-3">
            {/* Offer Ride - brand red */}
            <motion.div
              whileHover={{
                y: -4,
                boxShadow: "0 16px 30px rgba(200,16,46,0.28)",
              }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href="/rides/post"
                className="flex min-h-[110px] flex-col items-center justify-center gap-2 rounded-2xl bg-brand py-6 text-white transition hover:bg-brand-dark"
              >
                <Plus size={24} strokeWidth={2.5} />
                <span className="text-[11px] font-bold tracking-widest">
                  OFFER RIDE
                </span>
              </Link>
            </motion.div>
            {/* Find Ride - light gray */}
            <motion.div
              whileHover={{
                y: -4,
                boxShadow: "0 12px 24px rgba(17,17,17,0.12)",
              }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href="/rides/search"
                className="flex min-h-[110px] flex-col items-center justify-center gap-2 rounded-2xl bg-gray-100 py-6 text-gray-600 transition hover:bg-gray-200"
              >
                <Search size={22} strokeWidth={2} />
                <span className="text-[11px] font-bold tracking-widest text-gray-600">
                  FIND RIDE
                </span>
              </Link>
            </motion.div>
            {/* History - light gray */}
            <motion.div
              whileTap={{ scale: 0.95 }}
              className="flex min-h-[110px] cursor-pointer flex-col items-center justify-center gap-2 rounded-2xl bg-gray-100 py-6 text-gray-500 transition hover:bg-gray-200"
            >
              <History size={22} strokeWidth={2} />
              <span className="text-[11px] font-bold tracking-widest">
                HISTORY
              </span>
            </motion.div>
            {/* Stats - salmon/coral */}
            <motion.div
              whileTap={{ scale: 0.95 }}
              className="flex min-h-[110px] cursor-pointer flex-col items-center justify-center gap-2 rounded-2xl py-6 transition"
              style={{ backgroundColor: "#F28B82" }}
            >
              <BarChart2 size={22} strokeWidth={2} className="text-white" />
              <span className="text-[11px] font-bold tracking-widest text-white">
                STATS
              </span>
            </motion.div>
          </div>
        </section>

        {/* PRO TIP banner */}
        <section className="mx-4 mb-3">
          <div className="rs-card px-4 py-3 flex items-center gap-3 overflow-hidden relative">
            <div>
              <span className="inline-block text-[10px] font-black bg-gray-800 text-white px-2 py-0.5 rounded-full mb-1">
                PRO TIP
              </span>
              <p className="text-sm font-semibold text-gray-800 leading-snug">
                Students who carpool 3× a week save $45 in parking fees.
              </p>
            </div>
          </div>
        </section>

        {/* My Upcoming Rides */}
        <section className="px-4 mb-3">
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-lg font-black text-gray-900">
              My Upcoming Rides
            </h2>
            <span className="text-sm font-semibold text-brand">View All</span>
          </div>

          {/* Active ride card */}
          <div className="rs-card p-4 mb-3 border-l-4 border-brand">
            <div className="flex items-start justify-between mb-3">
              <div className="flex items-center gap-2">
                <div className="bg-brand rounded-lg p-1.5">
                  <Car size={14} className="text-white" strokeWidth={2.5} />
                </div>
                <div>
                  <span className="text-[10px] font-black text-brand uppercase tracking-wider">
                    Active Now
                  </span>
                  <p className="text-base font-black text-gray-900 leading-tight">
                    Morning Lab
                    <br />
                    Shuttle
                  </p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-xl font-black text-gray-900">08:45</p>
                <p className="text-[10px] text-gray-400 uppercase tracking-wider">
                  Arrival
                  <br />
                  Time
                </p>
              </div>
            </div>

            {/* Route */}
            <div className="mb-3 pl-1">
              <div className="flex items-start gap-2 mb-2">
                <div className="mt-1 flex flex-col items-center">
                  <div className="w-2.5 h-2.5 rounded-full bg-brand flex-shrink-0" />
                  <div className="w-px h-8 bg-gray-200 my-1" />
                  <div className="w-2.5 h-2.5 rounded-full border-2 border-gray-400 flex-shrink-0" />
                </div>
                <div className="flex-1">
                  <div className="mb-3">
                    <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                      Pickup
                    </p>
                    <p className="text-sm font-bold text-gray-900">
                      North Campus Library
                    </p>
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                      Destination
                    </p>
                    <p className="text-sm font-bold text-gray-900">
                      Engineering Block B
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Progress */}
            <div className="flex items-center justify-between text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-1.5">
              <span>En Route</span>
              <span>2.4 KM Remaining</span>
            </div>
            <div className="w-full h-1.5 bg-gray-100 rounded-full mb-4">
              <div
                className="h-full bg-brand rounded-full"
                style={{ width: "60%" }}
              />
            </div>

            {/* Driver */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=60&auto=format&fit=crop"
                  alt="Driver"
                  className="w-9 h-9 rounded-full object-cover"
                />
                <div>
                  <p className="text-sm font-bold text-gray-900">Marcus Chen</p>
                  <p className="text-xs text-gray-400">
                    Verified Graduate Student
                  </p>
                </div>
              </div>
              <motion.button
                whileTap={{ scale: 0.95 }}
                className="flex min-h-[40px] items-center gap-1.5 rounded-lg border border-gray-200 px-3 py-1.5 text-xs font-semibold text-gray-600 transition hover:bg-gray-50"
              >
                <MessageSquare size={12} />
                MESSAGE
              </motion.button>
            </div>
          </div>

          {/* Confirmed upcoming ride */}
          <div className="rs-card p-4">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <Calendar size={15} className="text-gray-400" />
                <span className="text-sm font-bold text-gray-700">
                  Tomorrow, 14:00
                </span>
              </div>
              <span className="text-[10px] font-black text-brand bg-brand-soft px-2.5 py-1 rounded-full uppercase tracking-wider">
                Confirmed
              </span>
            </div>
            <div className="flex items-center gap-4 mb-3">
              <div>
                <p className="text-[10px] text-gray-400 uppercase font-bold tracking-widest mb-0.5">
                  From
                </p>
                <p className="text-sm font-black text-gray-900">South Dorms</p>
              </div>
              <div className="flex-1 h-px bg-gray-200" />
              <div>
                <p className="text-[10px] text-gray-400 uppercase font-bold tracking-widest mb-0.5">
                  To
                </p>
                <p className="text-sm font-black text-gray-900">Sports Arena</p>
              </div>
            </div>
            <div className="flex items-center gap-1.5">
              <div className="flex -space-x-2">
                <img
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=40&auto=format&fit=crop"
                  alt=""
                  className="w-7 h-7 rounded-full border-2 border-white object-cover"
                />
                <img
                  src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=40&auto=format&fit=crop"
                  alt=""
                  className="w-7 h-7 rounded-full border-2 border-white object-cover"
                />
                <div className="w-7 h-7 rounded-full bg-gray-200 border-2 border-white flex items-center justify-center text-[9px] font-bold text-gray-600">
                  +1
                </div>
              </div>
              <span className="text-xs text-gray-500 font-medium ml-1">
                3 Passengers Total
              </span>
            </div>
          </div>
        </section>
      </div>

      <BottomNav active="MY RIDES" />
    </motion.div>
  );
}
