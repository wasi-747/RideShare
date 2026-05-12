"use client";

import { Car, Star, Leaf, Users, Edit3 } from "lucide-react";
import { motion } from "framer-motion";
import BottomNav from "@/components/BottomNav";

const pageTransition = {
  initial: { opacity: 0, y: 18 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] as const },
};

export default function ProfilePage() {
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
        <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-gray-200">
          <img
            src="https://images.unsplash.com/photo-1539701938214-0d9736e1c16b?w=80&auto=format&fit=crop"
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </div>
      </header>

      <div className="flex-1 overflow-y-auto pb-20">
        {/* Profile photo */}
        <div className="relative bg-white mb-3">
          <div className="w-full" style={{ height: 220 }}>
            <img
              src="https://images.unsplash.com/photo-1539701938214-0d9736e1c16b?w=400&auto=format&fit=crop"
              alt="Hero Alam"
              className="w-full h-full object-cover object-top"
            />
          </div>
          {/* Edit button */}
          <motion.button
            whileTap={{ scale: 0.95 }}
            className="absolute bottom-3 right-4 flex h-10 w-10 items-center justify-center rounded-full bg-brand shadow-lg"
          >
            <Edit3 size={15} className="text-white" />
          </motion.button>

          {/* Name & badge */}
          <div className="px-5 pt-3 pb-4">
            <h1 className="text-2xl font-black text-gray-900 mb-1.5">
              Hero Alam
            </h1>
            <span className="inline-flex items-center gap-1.5 bg-brand text-white text-xs font-bold px-3 py-1 rounded-full">
              <div className="w-1.5 h-1.5 rounded-full bg-white" />
              Verified Student
            </span>
            <p className="text-sm text-gray-500 leading-relaxed mt-3">
              Senior CS Student at United International University.
              Eco-conscious commuter. I love early morning rides and discussing
              open-source tech.
            </p>
            {/* Rating */}
            <div className="flex items-center gap-1.5 mt-2">
              {[1, 2, 3, 4].map((i) => (
                <Star
                  key={i}
                  size={14}
                  className="text-yellow-400 fill-yellow-400"
                />
              ))}
              <Star size={14} className="text-yellow-400 fill-yellow-200" />
              <span className="text-sm font-bold text-gray-700 ml-1">4.8</span>
              <span className="text-xs text-gray-400">(124 Reviews)</span>
            </div>
          </div>
        </div>

        {/* Stats grid */}
        <section className="mx-4 mb-3">
          <div className="grid grid-cols-2 gap-3">
            <motion.div
              whileHover={{
                y: -4,
                boxShadow: "0 12px 24px rgba(17,17,17,0.12)",
              }}
              className="rs-card p-4"
            >
              <div className="flex items-center gap-2 mb-1">
                <Car size={18} className="text-brand" />
              </div>
              <p className="text-2xl font-black text-gray-900">42</p>
              <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                Rides Given
              </p>
            </motion.div>
            <motion.div
              whileHover={{
                y: -4,
                boxShadow: "0 12px 24px rgba(17,17,17,0.12)",
              }}
              className="rs-card p-4"
            >
              <div className="flex items-center gap-2 mb-1">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="text-brand"
                >
                  <path d="M3 12h18M3 6h18M3 18h18" />
                </svg>
              </div>
              <p className="text-2xl font-black text-gray-900">1.2k</p>
              <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                KM Shared
              </p>
            </motion.div>
            <motion.div
              whileHover={{
                y: -4,
                boxShadow: "0 12px 24px rgba(200,16,46,0.3)",
              }}
              className="rounded-2xl bg-brand p-4"
            >
              <div className="flex items-center gap-2 mb-1">
                <Leaf size={18} className="text-white" />
              </div>
              <p className="text-2xl font-black text-white">150kg</p>
              <p className="text-[10px] font-black text-red-200 uppercase tracking-widest">
                CO2 Saved
              </p>
            </motion.div>
            <motion.div
              whileHover={{
                y: -4,
                boxShadow: "0 12px 24px rgba(17,17,17,0.12)",
              }}
              className="rs-card p-4"
            >
              <div className="flex items-center gap-2 mb-1">
                <Users size={18} className="text-brand" />
              </div>
              <p className="text-2xl font-black text-gray-900">88</p>
              <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                Connections
              </p>
            </motion.div>
          </div>
        </section>

        {/* Personal Information */}
        <section className="mx-4 mb-3">
          <div className="rs-card p-4">
            <p className="text-[11px] font-black text-brand uppercase tracking-widest mb-3">
              Personal Information
            </p>
            {[
              { label: "University Email", value: "j.miller@wcu.edu.ac" },
              { label: "Major & Year", value: "Computer Science, Year 4" },
              {
                label: "Preferred Music",
                value: "Indie, Lo-fi, Tech Podcasts",
              },
            ].map((item) => (
              <div
                key={item.label}
                className="flex items-start justify-between py-3 border-b border-gray-50 last:border-0"
              >
                <div>
                  <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-0.5">
                    {item.label}
                  </p>
                  <p className="text-sm font-semibold text-gray-900">
                    {item.value}
                  </p>
                </div>
                <motion.button
                  whileTap={{ scale: 0.95 }}
                  className="mt-0.5 min-h-[36px] text-xs font-bold text-brand"
                >
                  Edit
                </motion.button>
              </div>
            ))}
          </div>
        </section>

        {/* Vehicle Details */}
        <section className="mx-4 mb-4">
          <div className="rs-card p-4">
            <div className="flex items-center justify-between mb-3">
              <p className="text-[11px] font-black text-brand uppercase tracking-widest">
                Vehicle Details
              </p>
              <span className="text-[10px] font-bold text-gray-500 bg-gray-100 px-2 py-0.5 rounded-full">
                Primary Car
              </span>
            </div>
            <div
              className="rounded-xl overflow-hidden mb-3"
              style={{ height: 130 }}
            >
              <img
                src="https://images.unsplash.com/photo-1617788138017-80ad40651399?w=400&auto=format&fit=crop"
                alt="Tesla Model 3"
                className="w-full h-full object-cover"
              />
            </div>
            <p className="text-base font-black text-gray-900">Tesla Model 3</p>
            <p className="text-xs text-gray-400 mb-3">Midnight Silver • 2022</p>
            <div className="inline-block border border-gray-200 rounded-full px-3 py-1">
              <span className="text-xs font-black text-gray-700 tracking-widest">
                VELOCITY-24
              </span>
            </div>
          </div>
        </section>
      </div>

      <BottomNav />
    </motion.div>
  );
}
