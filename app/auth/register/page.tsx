import Link from "next/link";
import { Car, Shield, Zap } from "lucide-react";

export default function RegisterPage() {
  return (
    <div className="mobile-shell">
      {/* Top nav */}
      <header className="flex items-center justify-between px-5 pt-5 pb-2">
        <div className="flex items-center gap-2">
          <div className="bg-brand rounded-lg p-1.5">
            <Car size={18} className="text-white" strokeWidth={2.5} />
          </div>
          <span className="text-lg font-black text-brand tracking-tight">RideShare</span>
        </div>
        <Link href="/auth/login" className="text-sm font-semibold text-gray-700 border border-gray-200 rounded-full px-4 py-1.5 hover:bg-gray-50 transition">
          Login
        </Link>
      </header>

      {/* Hero section */}
      <section className="px-5 pt-4 pb-2">
        {/* Badge */}
        <div className="inline-flex items-center gap-1.5 bg-brand-soft text-brand text-xs font-bold px-3 py-1 rounded-full mb-4">
          <div className="w-1.5 h-1.5 rounded-full bg-brand" />
          VERIFIED CAMPUS NETWORK
        </div>

        {/* Headline */}
        <h1 className="text-[2.1rem] font-black leading-tight text-gray-900 mb-3">
          The New{" "}
          <span className="text-brand">Standard</span> in
          <br />Campus Travel.
        </h1>

        <p className="text-sm text-gray-500 leading-relaxed mb-5">
          Connect with fellow students and faculty for a smarter, greener, and more editorial carpool experience.
        </p>

        {/* Feature cards */}
        <div className="grid grid-cols-2 gap-3 mb-5">
          <div className="rs-card p-4">
            <Shield size={20} className="text-brand mb-2" />
            <p className="text-sm font-bold text-gray-900 mb-1">Staff &amp; Student ID</p>
            <p className="text-xs text-gray-500 leading-snug">Mandatory university email verification for all users.</p>
          </div>
          <div className="rs-card p-4">
            <Zap size={20} className="text-brand mb-2" />
            <p className="text-sm font-bold text-gray-900 mb-1">Smart Routing</p>
            <p className="text-xs text-gray-500 leading-snug">Intelligent matches based on your academic schedule.</p>
          </div>
        </div>

        {/* Campus image */}
        <div className="rounded-2xl overflow-hidden mb-2 bg-gradient-to-br from-green-100 to-blue-100" style={{ height: 160 }}>
          <div className="w-full h-full flex items-end justify-center pb-4"
            style={{
              backgroundImage: "url('https://images.unsplash.com/photo-1562774053-701939374585?w=800&auto=format&fit=crop')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
        </div>
      </section>

      {/* Divider */}
      <div className="h-2 bg-gray-100 mx-0" />

      {/* Create Account form */}
      <section className="px-5 pt-6 pb-4">
        <h2 className="text-xl font-black text-gray-900 mb-1">Create Account</h2>
        <p className="text-sm text-gray-500 mb-5">Join your campus community today.</p>

        <div className="space-y-3">
          <div>
            <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest block mb-1 px-1">University ID</label>
            <input className="rs-input" placeholder="STU-123456" />
          </div>
          <div>
            <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest block mb-1 px-1">Institutional Email</label>
            <input className="rs-input" type="email" placeholder="name@university.edu" />
          </div>
          <div>
            <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest block mb-1 px-1">Full Legal Name</label>
            <input className="rs-input" placeholder="As it appears on campus ID" />
          </div>
          <div>
            <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest block mb-1 px-1">Password</label>
            <input className="rs-input" type="password" placeholder="••••••••" />
          </div>
          <div>
            <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest block mb-1 px-1">Confirm Password</label>
            <input className="rs-input" type="password" placeholder="••••••••" />
          </div>
        </div>

        {/* Terms */}
        <div className="flex items-start gap-2.5 mt-4 mb-5">
          <div className="mt-0.5 w-4 h-4 rounded border border-gray-300 flex-shrink-0" />
          <p className="text-xs text-gray-500 leading-relaxed">
            I agree to the RideShare{" "}
            <span className="text-brand font-semibold">Campus Guidelines</span>
            {" "}and Safety Protocol.
          </p>
        </div>

        <button className="rs-btn">Create Account</button>

        <p className="text-center text-xs text-gray-500 mt-3">
          Already a member?{" "}
          <Link href="/auth/login" className="text-brand font-bold">Sign In</Link>
        </p>
      </section>

      {/* Bottom mini-nav for auth */}
      <nav className="sticky bottom-0 bg-white border-t border-gray-100 px-6 py-3">
        <div className="flex items-center justify-around">
          {[
            { label: "REGISTER", href: "/auth/register", active: true },
            { label: "LOGIN", href: "/auth/login", active: false },
            { label: "HELP", href: "#", active: false },
          ].map((tab) => (
            <Link key={tab.label} href={tab.href} className="flex flex-col items-center gap-1">
              <div className={`w-6 h-6 rounded-full flex items-center justify-center ${tab.active ? "bg-brand" : "bg-gray-100"}`}>
                <div className={`w-2 h-2 rounded-full ${tab.active ? "bg-white" : "bg-gray-400"}`} />
              </div>
              <span className={`text-[9px] font-bold ${tab.active ? "text-brand" : "text-gray-400"}`}>{tab.label}</span>
            </Link>
          ))}
        </div>
      </nav>
    </div>
  );
}
