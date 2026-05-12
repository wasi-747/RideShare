"use client";

import Link from "next/link";
import {
  Car,
  Shield,
  Users,
  MapPin,
  Star,
  ChevronRight,
  Sparkles,
} from "lucide-react";
import { motion } from "framer-motion";

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
};

const stagger = {
  animate: {
    transition: { staggerChildren: 0.1 },
  },
};

export default function WelcomePage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="mobile-shell flex flex-col bg-white"
    >
      {/* ── Hero Section ── */}
      <section className="relative overflow-hidden px-6 pt-10 pb-8">
        {/* Background glow */}
        <div className="absolute -top-20 -right-20 w-60 h-60 rounded-full bg-brand/10 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-16 -left-16 w-48 h-48 rounded-full bg-brand/5 blur-3xl pointer-events-none" />

        {/* Logo */}
        <motion.div
          variants={fadeUp}
          initial="initial"
          animate="animate"
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex items-center gap-2.5 mb-10"
        >
          <div className="bg-brand rounded-xl p-2 shadow-lg shadow-brand/25">
            <Car size={22} className="text-white" strokeWidth={2.5} />
          </div>
          <span className="text-xl font-black text-brand tracking-tight">
            RideShare
          </span>
        </motion.div>

        {/* Headline */}
        <motion.div
          variants={stagger}
          initial="initial"
          animate="animate"
        >
          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="inline-flex items-center gap-1.5 bg-brand-soft text-brand text-[11px] font-bold px-3 py-1.5 rounded-full mb-5">
              <Sparkles size={12} />
              VERIFIED CAMPUS NETWORK
            </div>
          </motion.div>

          <motion.h1
            variants={fadeUp}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-[2.6rem] font-black leading-[1.08] text-gray-900 mb-4"
          >
            Your Campus,
            <br />
            <span className="text-brand">Connected.</span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-[15px] text-gray-500 leading-relaxed mb-8 max-w-[300px]"
          >
            Join fellow students for safe, verified rides across campus and
            beyond. Split costs, reduce emissions, make friends.
          </motion.p>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          variants={fadeUp}
          initial="initial"
          animate="animate"
          transition={{ duration: 0.5, delay: 0.5 }}
          className="space-y-3"
        >
          <motion.div whileTap={{ scale: 0.97 }}>
            <Link href="/auth/register" className="rs-btn flex items-center justify-center gap-2 no-underline">
              Get Started <ChevronRight size={18} />
            </Link>
          </motion.div>

          <motion.div whileTap={{ scale: 0.97 }}>
            <Link href="/auth/login" className="rs-btn-outline flex items-center justify-center gap-2 no-underline">
              I Already Have an Account
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* ── Divider ── */}
      <div className="h-2 bg-gray-50" />

      {/* ── Features Grid ── */}
      <motion.section
        variants={stagger}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, margin: "-40px" }}
        className="px-6 pt-8 pb-6"
      >
        <motion.h2
          variants={fadeUp}
          transition={{ duration: 0.4 }}
          className="text-lg font-black text-gray-900 mb-5"
        >
          Why Students Love RideShare
        </motion.h2>

        <div className="grid grid-cols-2 gap-3">
          {[
            {
              icon: <Shield size={20} className="text-brand" />,
              title: "Verified Only",
              desc: "University email & ID verification required",
              bg: "bg-red-50",
            },
            {
              icon: <Users size={20} className="text-blue-600" />,
              title: "Gender Safety",
              desc: "Women-only & same-gender ride options",
              bg: "bg-blue-50",
            },
            {
              icon: <MapPin size={20} className="text-emerald-600" />,
              title: "Smart Routes",
              desc: "Matched rides based on your schedule",
              bg: "bg-emerald-50",
            },
            {
              icon: <Star size={20} className="text-amber-600" />,
              title: "Rated Drivers",
              desc: "Community-vetted ratings & reviews",
              bg: "bg-amber-50",
            },
          ].map((feature) => (
            <motion.div
              key={feature.title}
              variants={fadeUp}
              transition={{ duration: 0.4 }}
              whileHover={{ y: -3, boxShadow: "0 8px 24px rgba(0,0,0,0.08)" }}
              className="rs-card p-4"
            >
              <div
                className={`w-9 h-9 rounded-xl ${feature.bg} flex items-center justify-center mb-3`}
              >
                {feature.icon}
              </div>
              <p className="text-sm font-bold text-gray-900 mb-1">
                {feature.title}
              </p>
              <p className="text-xs text-gray-500 leading-snug">
                {feature.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* ── Divider ── */}
      <div className="h-2 bg-gray-50" />

      {/* ── Social Proof ── */}
      <motion.section
        variants={fadeUp}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="px-6 pt-8 pb-6"
      >
        <div className="rs-card p-5 bg-gradient-to-br from-brand/[0.03] to-brand/[0.08] border-brand/10">
          <div className="flex items-center gap-3 mb-4">
            {/* Stacked avatars */}
            <div className="flex -space-x-2">
              {["bg-brand", "bg-blue-500", "bg-emerald-500", "bg-amber-500"].map(
                (color, i) => (
                  <div
                    key={i}
                    className={`w-8 h-8 rounded-full ${color} border-2 border-white flex items-center justify-center`}
                  >
                    <span className="text-white text-[10px] font-bold">
                      {["R", "S", "A", "M"][i]}
                    </span>
                  </div>
                )
              )}
            </div>
            <div>
              <p className="text-sm font-bold text-gray-900">500+ Students</p>
              <p className="text-xs text-gray-500">already on campus rides</p>
            </div>
          </div>

          <div className="flex items-center gap-1 mb-2">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                size={14}
                className="text-amber-400 fill-amber-400"
              />
            ))}
            <span className="text-xs font-bold text-gray-700 ml-1">4.9</span>
          </div>
          <p className="text-sm text-gray-600 italic leading-relaxed">
            &ldquo;Finally a carpool app that actually feels safe. Knowing
            everyone is verified makes all the difference.&rdquo;
          </p>
          <p className="text-xs font-semibold text-gray-400 mt-2">
            — Sarah K., 3rd Year
          </p>
        </div>
      </motion.section>

      {/* ── Bottom CTA ── */}
      <motion.section
        variants={fadeUp}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="px-6 pt-4 pb-10"
      >
        <motion.div whileTap={{ scale: 0.97 }}>
          <Link
            href="/auth/register"
            className="rs-btn flex items-center justify-center gap-2 no-underline"
          >
            Join RideShare Today <ChevronRight size={18} />
          </Link>
        </motion.div>
        <p className="text-center text-xs text-gray-400 mt-3">
          Free forever · No credit card needed
        </p>
      </motion.section>
    </motion.div>
  );
}
