import Link from "next/link";
import { Car } from "lucide-react";

export default function LoginPage() {
  return (
    <div className="mobile-shell flex flex-col">
      {/* Logo */}
      <header className="flex items-center gap-2 px-6 pt-8 pb-2">
        <div className="bg-brand rounded-lg p-1.5">
          <Car size={18} className="text-white" strokeWidth={2.5} />
        </div>
        <span className="text-lg font-black text-brand tracking-tight">RideShare</span>
      </header>

      {/* Content */}
      <main className="flex-1 px-6 pt-8 pb-6 flex flex-col">
        <h1 className="text-3xl font-black text-gray-900 mb-1">Welcome back</h1>
        <p className="text-sm text-gray-500 mb-8">Please enter your university credentials.</p>

        <div className="space-y-3 mb-5">
          {/* Institutional Email */}
          <div className="rounded-2xl border border-gray-200 bg-gray-50 px-4 py-3">
            <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest block mb-1">Institutional Email</label>
            <input
              type="email"
              className="w-full bg-transparent text-sm text-gray-900 placeholder-gray-400 outline-none"
              placeholder="student@university.edu"
            />
          </div>

          {/* Security Key */}
          <div className="rounded-2xl border border-gray-200 bg-gray-50 px-4 py-3">
            <div className="flex items-center justify-between mb-1">
              <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Security Key</label>
              <Link href="/auth/forgot-password" className="text-[10px] font-bold text-brand uppercase tracking-widest">
                Forgot Password?
              </Link>
            </div>
            <input
              type="password"
              className="w-full bg-transparent text-sm text-gray-900 placeholder-gray-400 outline-none"
              placeholder="••••••••"
            />
          </div>
        </div>

        {/* Primary button */}
        <button className="rs-btn mb-6">
          Access Portal →
        </button>

        {/* Divider */}
        <div className="flex items-center gap-3 mb-5">
          <div className="flex-1 h-px bg-gray-200" />
          <span className="text-xs text-gray-400 font-medium">OR CONTINUE WITH</span>
          <div className="flex-1 h-px bg-gray-200" />
        </div>

        {/* Social auth */}
        <div className="grid grid-cols-2 gap-3 mb-8">
          <button className="flex items-center justify-center gap-2 rounded-full border border-gray-200 bg-white py-3 text-sm font-semibold text-gray-700 hover:bg-gray-50 transition">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <rect width="24" height="24" rx="2" fill="#111" />
              <path d="M12 6C8.686 6 6 8.686 6 12s2.686 6 6 6 6-2.686 6-6-2.686-6-6-6zm0 10c-2.205 0-4-1.795-4-4s1.795-4 4-4 4 1.795 4 4-1.795 4-4 4z" fill="white" />
            </svg>
            Google
          </button>
          <button className="flex items-center justify-center gap-2 rounded-full border border-gray-200 bg-white py-3 text-sm font-semibold text-gray-700 hover:bg-gray-50 transition">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <rect width="24" height="24" rx="2" fill="#E5E5E5" />
              <path d="M4 8h16M4 12h16M4 16h10" stroke="#555" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
            SSO
          </button>
        </div>

        <p className="text-center text-sm text-gray-500">
          New to RideShare?{" "}
          <Link href="/auth/register" className="text-brand font-bold">Create an account</Link>
        </p>
      </main>
    </div>
  );
}
