import Link from "next/link";
import { Car, AtSign, Lock, Zap, ArrowRight } from "lucide-react";

export default function ForgotPasswordPage() {
  return (
    <div className="mobile-shell flex flex-col bg-white">
      {/* Header */}
      <header className="flex items-center justify-between px-5 pt-6 pb-2">
        <div className="flex items-center gap-2">
          <div className="bg-brand rounded-lg p-1.5">
            <Car size={18} className="text-white" strokeWidth={2.5} />
          </div>
          <span className="text-lg font-black text-brand tracking-tight">RideShare</span>
        </div>
        <Link href="/auth/login" className="flex items-center gap-1 text-sm font-medium text-gray-600 hover:text-gray-900 transition">
          <span className="text-base">←</span> Back to Login
        </Link>
      </header>

      {/* Main content */}
      <main className="flex-1 px-6 pt-8 pb-8">
        {/* Headline */}
        <h1 className="text-4xl font-black text-gray-900 leading-tight mb-1">Security</h1>
        <h1 className="text-4xl font-black text-brand leading-tight mb-5">First.</h1>

        <p className="text-sm text-gray-500 leading-relaxed mb-10">
          Enter your university email to verify your identity and receive a secure password reset link.
        </p>

        {/* Form card */}
        <div className="rs-card p-5 mb-8">
          <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest block mb-3">
            University Email
          </label>
          <div className="flex items-center gap-3 rounded-xl border border-gray-200 bg-white px-4 py-3 mb-5 focus-within:border-brand transition">
            <AtSign size={16} className="text-brand flex-shrink-0" />
            <input
              type="email"
              className="flex-1 bg-transparent text-sm text-gray-900 placeholder-gray-400 outline-none"
              placeholder="name@university.edu"
            />
          </div>

          <button className="rs-btn flex items-center justify-center gap-2">
            Reset Password <ArrowRight size={16} />
          </button>
        </div>

        {/* Features */}
        <div className="grid grid-cols-2 gap-4 mb-12">
          <div>
            <div className="w-9 h-9 rounded-full bg-brand-soft flex items-center justify-center mb-3">
              <Lock size={16} className="text-brand" />
            </div>
            <p className="text-sm font-bold text-gray-900 mb-1">Encrypted</p>
            <p className="text-xs text-gray-500 leading-snug">
              Your data is protected by campus-grade security protocols.
            </p>
          </div>
          <div>
            <div className="w-9 h-9 rounded-full bg-brand-soft flex items-center justify-center mb-3">
              <Zap size={16} className="text-brand" />
            </div>
            <p className="text-sm font-bold text-gray-900 mb-1">Instant</p>
            <p className="text-xs text-gray-500 leading-snug">
              Reset links are delivered within seconds to your inbox.
            </p>
          </div>
        </div>

        <p className="text-center text-sm text-gray-500">
          Having trouble?{" "}
          <span className="text-brand font-semibold">Contact IT Support</span>
        </p>
      </main>
    </div>
  );
}
