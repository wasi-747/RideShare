"use client";

import { useState } from "react";
import { Car, Shield, Clock, Minus, Plus } from "lucide-react";
import BottomNav from "@/components/BottomNav";
import { motion } from "framer-motion";

const pageTransition = {
  initial: { opacity: 0, y: 18 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] as const },
};

export default function RidePostPage() {
  const [seats, setSeats] = useState(3);
  const [femaleOnly, setFemaleOnly] = useState(true);

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
        {/* Hero */}
        <section className="px-5 pt-5 pb-4 bg-white mb-2">
          <p className="text-[11px] font-black text-brand uppercase tracking-widest mb-1">
            Drive the Campus
          </p>
          <h1 className="text-[2.2rem] font-black text-gray-900 leading-tight">
            Offer a<br />
            New Ride.
          </h1>
          {/* Progress dots */}
          <div className="flex gap-1.5 mt-4">
            <div className="h-1 flex-1 rounded-full bg-brand" />
            <div className="h-1 flex-1 rounded-full bg-brand" />
            <div className="h-1 flex-1 rounded-full bg-gray-200" />
          </div>
        </section>

        {/* Route inputs */}
        <section className="mx-4 mb-3">
          <div className="rs-card p-4">
            {/* Starting point */}
            <div className="flex items-center gap-3 border-b border-gray-100 pb-3 transition-all duration-200 focus-within:border-brand/50 focus-within:shadow-[0_0_0_4px_rgba(200,16,46,0.12)]">
              <div className="w-2.5 h-2.5 rounded-full bg-brand flex-shrink-0 mt-0.5" />
              <div className="flex-1">
                <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest block mb-1">
                  Starting Point
                </label>
                <input
                  className="w-full bg-transparent text-sm font-semibold text-brand outline-none placeholder-gray-300"
                  defaultValue="University North Gate"
                />
              </div>
            </div>
            {/* Destination */}
            <div className="flex items-center gap-3 pt-3 transition-all duration-200 focus-within:border-brand/50 focus-within:shadow-[0_0_0_4px_rgba(200,16,46,0.12)]">
              <div className="w-2.5 h-2.5 rounded-full border-2 border-gray-400 flex-shrink-0 mt-0.5" />
              <div className="flex-1">
                <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest block mb-1">
                  Where Are You Going?
                </label>
                <input
                  className="w-full bg-transparent text-sm font-semibold text-gray-400 outline-none placeholder-gray-300"
                  defaultValue="Downtown Tech Hub"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Available Seats */}
        <section className="mx-4 mb-3">
          <div className="rs-card p-4">
            <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest block mb-3">
              Available Seats
            </label>
            <div className="flex items-center justify-between">
              <motion.button
                whileTap={{ scale: 0.95 }}
                onClick={() => setSeats(Math.max(1, seats - 1))}
                className="flex h-11 w-11 items-center justify-center rounded-full border-2 border-gray-200 transition hover:bg-gray-50"
              >
                <Minus size={18} className="text-gray-600" strokeWidth={2.5} />
              </motion.button>
              <span className="text-4xl font-black text-gray-900">{seats}</span>
              <motion.button
                whileTap={{ scale: 0.95 }}
                onClick={() => setSeats(Math.min(8, seats + 1))}
                className="flex h-11 w-11 items-center justify-center rounded-full bg-brand transition hover:bg-brand-dark"
              >
                <Plus size={18} className="text-white" strokeWidth={2.5} />
              </motion.button>
            </div>
          </div>
        </section>

        {/* Departure Time */}
        <section className="mx-4 mb-3">
          <div className="rs-card p-4">
            <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest block mb-2">
              Departure Time
            </label>
            <div className="flex items-center gap-2">
              <Clock size={16} className="text-brand" />
              <span className="text-xl font-black text-gray-900">08:30AM</span>
            </div>
          </div>
        </section>

        {/* Female Only Toggle */}
        <section className="mx-4 mb-3">
          <div className="rs-card p-4">
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full bg-brand-soft flex items-center justify-center">
                  <Shield size={15} className="text-brand" />
                </div>
                <div>
                  <p className="text-sm font-bold text-gray-900">
                    Female Only Ride
                  </p>
                  <p className="text-xs text-gray-400 leading-snug mt-0.5">
                    Restrict ride visibility and booking
                    <br />
                    to female students only.
                  </p>
                </div>
              </div>
              <motion.button
                whileTap={{ scale: 0.95 }}
                onClick={() => setFemaleOnly(!femaleOnly)}
                type="button"
                role="switch"
                aria-checked={femaleOnly}
                aria-label="Toggle female only ride"
                className={`mt-1 inline-flex h-6 w-12 flex-shrink-0 items-center rounded-full p-0.5 transition-colors ${femaleOnly ? "bg-brand justify-end" : "bg-gray-300 justify-start"}`}
              >
                <span className="h-5 w-5 rounded-full bg-white shadow transition-all" />
              </motion.button>
            </div>
          </div>
        </section>

        {/* Map preview */}
        <section className="mx-4 mb-4">
          <div
            className="rounded-2xl overflow-hidden relative"
            style={{ height: 140 }}
          >
            <div
              className="w-full h-full"
              style={{
                background: "linear-gradient(135deg, #9CA3AF 0%, #6B7280 100%)",
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='400' height='200' viewBox='0 0 400 200' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='400' height='200' fill='%234B5563'/%3E%3Cpath d='M0 100 Q100 50 200 100 T400 100' stroke='%236B7280' fill='none' strokeWidth='20'/%3E%3Cpath d='M0 60 Q100 30 200 60 T400 60' stroke='%23374151' fill='none' strokeWidth='15'/%3E%3Cpath d='M50 0 L50 200' stroke='%236B7280' fill='none' strokeWidth='8'/%3E%3Cpath d='M150 0 L130 200' stroke='%23374151' fill='none' strokeWidth='6'/%3E%3Cpath d='M280 0 L300 200' stroke='%236B7280' fill='none' strokeWidth='10'/%3E%3C/svg%3E")`,
              }}
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="flex items-center gap-2 bg-white rounded-full px-4 py-2 shadow-lg">
                <div className="w-4 h-4 rounded bg-brand flex items-center justify-center">
                  <span className="text-white text-[8px] font-black">🗺</span>
                </div>
                <span className="text-xs font-black text-gray-800 uppercase tracking-wider">
                  Optimizing Path
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Post button */}
        <div className="mx-4 mb-2">
          <motion.button
            whileTap={{ scale: 0.95 }}
            className="rs-btn text-base"
          >
            Post Ride
          </motion.button>
        </div>
      </div>

      <BottomNav active="POST" />
    </motion.div>
  );
}
