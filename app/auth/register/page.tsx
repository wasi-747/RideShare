"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Car, Shield, Zap, Loader2 } from "lucide-react";
import { motion } from "framer-motion";

export default function RegisterPage() {
  const router = useRouter();
  const [form, setForm] = useState({
    studentId: "",
    email: "",
    firstName: "",
    lastName: "",
    phone: "",
    gender: "male" as "male" | "female" | "other",
    password: "",
    confirmPassword: "",
  });
  const [agreed, setAgreed] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  function updateField(field: string, value: string) {
    setForm((prev) => ({ ...prev, [field]: value }));
  }

  async function handleRegister() {
    setError("");

    // Validation
    if (!form.email || !form.password || !form.firstName || !form.lastName || !form.phone) {
      setError("Please fill in all required fields.");
      return;
    }
    if (form.password.length < 6) {
      setError("Password must be at least 6 characters.");
      return;
    }
    if (form.password !== form.confirmPassword) {
      setError("Passwords do not match.");
      return;
    }
    if (!agreed) {
      setError("Please agree to the Campus Guidelines.");
      return;
    }

    setLoading(true);
    try {
      const res = await fetch("/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: form.email,
          password: form.password,
          firstName: form.firstName,
          lastName: form.lastName,
          phone: form.phone,
          gender: form.gender,
          studentId: form.studentId || undefined,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error || "Registration failed. Please try again.");
        return;
      }

      // Store token and user data
      localStorage.setItem("token", data.token);
      localStorage.setItem("user", JSON.stringify(data.user));

      // Redirect to dashboard
      router.push("/dashboard");
    } catch {
      setError("Network error. Please check your connection.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      className="mobile-shell"
    >
      {/* Top nav */}
      <header className="flex items-center justify-between px-5 pt-5 pb-2">
        <div className="flex items-center gap-2">
          <div className="bg-brand rounded-lg p-1.5">
            <Car size={18} className="text-white" strokeWidth={2.5} />
          </div>
          <span className="text-lg font-black text-brand tracking-tight">
            RideShare
          </span>
        </div>
        <motion.div whileTap={{ scale: 0.95 }}>
          <Link
            href="/auth/login"
            className="inline-flex min-h-[40px] items-center rounded-full border border-gray-200 px-4 py-1.5 text-sm font-semibold text-gray-700 transition hover:bg-gray-50"
          >
            Login
          </Link>
        </motion.div>
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
          The New <span className="text-brand">Standard</span> in
          <br />
          Campus Travel.
        </h1>

        <p className="text-sm text-gray-500 leading-relaxed mb-5">
          Connect with fellow students and faculty for a smarter, greener, and
          more editorial carpool experience.
        </p>

        {/* Feature cards */}
        <div className="grid grid-cols-2 gap-3 mb-5">
          <motion.div
            whileHover={{ y: -4, boxShadow: "0 12px 24px rgba(17,17,17,0.12)" }}
            className="rs-card p-4"
          >
            <Shield size={20} className="text-brand mb-2" />
            <p className="text-sm font-bold text-gray-900 mb-1">
              Staff &amp; Student ID
            </p>
            <p className="text-xs text-gray-500 leading-snug">
              Mandatory university email verification for all users.
            </p>
          </motion.div>
          <motion.div
            whileHover={{ y: -4, boxShadow: "0 12px 24px rgba(17,17,17,0.12)" }}
            className="rs-card p-4"
          >
            <Zap size={20} className="text-brand mb-2" />
            <p className="text-sm font-bold text-gray-900 mb-1">
              Smart Routing
            </p>
            <p className="text-xs text-gray-500 leading-snug">
              Intelligent matches based on your academic schedule.
            </p>
          </motion.div>
        </div>

        {/* Campus image */}
        <div
          className="rounded-2xl overflow-hidden mb-2 bg-gradient-to-br from-green-100 to-blue-100"
          style={{ height: 160 }}
        >
          <div
            className="w-full h-full flex items-end justify-center pb-4"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1562774053-701939374585?w=800&auto=format&fit=crop')",
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
        <h2 className="text-xl font-black text-gray-900 mb-1">
          Create Account
        </h2>
        <p className="text-sm text-gray-500 mb-5">
          Join your campus community today.
        </p>

        {/* Error message */}
        {error && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-4 rounded-xl bg-red-50 border border-red-200 px-4 py-3 text-sm text-red-600 font-medium"
          >
            {error}
          </motion.div>
        )}

        <div className="space-y-3">
          <div>
            <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest block mb-1 px-1">
              University ID <span className="text-gray-300">(optional)</span>
            </label>
            <input
              className="rs-input"
              placeholder="STU-123456"
              value={form.studentId}
              onChange={(e) => updateField("studentId", e.target.value)}
            />
          </div>
          <div>
            <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest block mb-1 px-1">
              Email *
            </label>
            <input
              className="rs-input"
              type="email"
              placeholder="name@university.edu"
              value={form.email}
              onChange={(e) => updateField("email", e.target.value)}
            />
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest block mb-1 px-1">
                First Name *
              </label>
              <input
                className="rs-input"
                placeholder="First name"
                value={form.firstName}
                onChange={(e) => updateField("firstName", e.target.value)}
              />
            </div>
            <div>
              <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest block mb-1 px-1">
                Last Name *
              </label>
              <input
                className="rs-input"
                placeholder="Last name"
                value={form.lastName}
                onChange={(e) => updateField("lastName", e.target.value)}
              />
            </div>
          </div>
          <div>
            <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest block mb-1 px-1">
              Phone *
            </label>
            <input
              className="rs-input"
              type="tel"
              placeholder="+880 1XXX-XXXXXX"
              value={form.phone}
              onChange={(e) => updateField("phone", e.target.value)}
            />
          </div>
          <div>
            <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest block mb-1 px-1">
              Gender *
            </label>
            <select
              className="rs-input appearance-none"
              value={form.gender}
              onChange={(e) => updateField("gender", e.target.value)}
            >
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div>
            <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest block mb-1 px-1">
              Password *
            </label>
            <input
              className="rs-input"
              type="password"
              placeholder="••••••••"
              value={form.password}
              onChange={(e) => updateField("password", e.target.value)}
            />
          </div>
          <div>
            <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest block mb-1 px-1">
              Confirm Password *
            </label>
            <input
              className="rs-input"
              type="password"
              placeholder="••••••••"
              value={form.confirmPassword}
              onChange={(e) => updateField("confirmPassword", e.target.value)}
            />
          </div>
        </div>

        {/* Terms */}
        <div className="flex items-start gap-2.5 mt-4 mb-5">
          <button
            onClick={() => setAgreed(!agreed)}
            className={`mt-0.5 w-4 h-4 rounded border flex-shrink-0 flex items-center justify-center transition-all ${
              agreed
                ? "bg-brand border-brand"
                : "border-gray-300 bg-white"
            }`}
          >
            {agreed && (
              <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                <path d="M2 5L4 7L8 3" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            )}
          </button>
          <p className="text-xs text-gray-500 leading-relaxed">
            I agree to the RideShare{" "}
            <span className="text-brand font-semibold">Campus Guidelines</span>{" "}
            and Safety Protocol.
          </p>
        </div>

        <motion.button
          whileTap={{ scale: 0.95 }}
          className="rs-btn flex items-center justify-center gap-2"
          onClick={handleRegister}
          disabled={loading}
        >
          {loading ? (
            <>
              <Loader2 size={18} className="animate-spin" />
              Creating Account...
            </>
          ) : (
            "Create Account"
          )}
        </motion.button>

        <p className="text-center text-xs text-gray-500 mt-3">
          Already a member?{" "}
          <Link href="/auth/login" className="text-brand font-bold">
            Sign In
          </Link>
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
            <motion.div key={tab.label} whileTap={{ scale: 0.95 }}>
              <Link
                href={tab.href}
                className="flex min-h-[44px] min-w-[56px] flex-col items-center justify-center gap-1"
              >
                <div
                  className={`w-6 h-6 rounded-full flex items-center justify-center ${tab.active ? "bg-brand" : "bg-gray-100"}`}
                >
                  <div
                    className={`w-2 h-2 rounded-full ${tab.active ? "bg-white" : "bg-gray-400"}`}
                  />
                </div>
                <span
                  className={`text-[9px] font-bold ${tab.active ? "text-brand" : "text-gray-400"}`}
                >
                  {tab.label}
                </span>
              </Link>
            </motion.div>
          ))}
        </div>
      </nav>
    </motion.div>
  );
}
