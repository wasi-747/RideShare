"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Car, Loader2 } from "lucide-react";
import { motion } from "framer-motion";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleLogin() {
    setError("");
    if (!email || !password) {
      setError("Please fill in all fields.");
      return;
    }

    setLoading(true);
    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error || "Login failed. Please try again.");
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
      className="mobile-shell flex flex-col"
    >
      {/* Logo */}
      <header className="flex items-center gap-2 px-6 pt-8 pb-2">
        <div className="bg-brand rounded-lg p-1.5">
          <Car size={18} className="text-white" strokeWidth={2.5} />
        </div>
        <span className="text-lg font-black text-brand tracking-tight">
          RideShare
        </span>
      </header>

      {/* Content */}
      <main className="flex-1 px-6 pt-8 pb-6 flex flex-col">
        <h1 className="text-3xl font-black text-gray-900 mb-1">Welcome back</h1>
        <p className="text-sm text-gray-500 mb-8">
          Please enter your university credentials.
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

        <div className="space-y-3 mb-5">
          {/* Institutional Email */}
          <div className="rounded-2xl border border-gray-200 bg-gray-50 px-4 py-3 transition-all duration-200 focus-within:border-brand/70 focus-within:shadow-[0_0_0_4px_rgba(200,16,46,0.14)]">
            <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest block mb-1">
              Institutional Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-transparent text-sm text-gray-900 placeholder-gray-400 outline-none"
              placeholder="student@university.edu"
              onKeyDown={(e) => e.key === "Enter" && handleLogin()}
            />
          </div>

          {/* Security Key */}
          <div className="rounded-2xl border border-gray-200 bg-gray-50 px-4 py-3 transition-all duration-200 focus-within:border-brand/70 focus-within:shadow-[0_0_0_4px_rgba(200,16,46,0.14)]">
            <div className="flex items-center justify-between mb-1">
              <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                Security Key
              </label>
              <Link
                href="/auth/forgot-password"
                className="text-[10px] font-bold text-brand uppercase tracking-widest"
              >
                Forgot Password?
              </Link>
            </div>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full bg-transparent text-sm text-gray-900 placeholder-gray-400 outline-none"
              placeholder="••••••••"
              onKeyDown={(e) => e.key === "Enter" && handleLogin()}
            />
          </div>
        </div>

        {/* Primary button */}
        <motion.button
          whileTap={{ scale: 0.95 }}
          className="rs-btn mb-6 flex items-center justify-center gap-2"
          onClick={handleLogin}
          disabled={loading}
        >
          {loading ? (
            <>
              <Loader2 size={18} className="animate-spin" />
              Signing in...
            </>
          ) : (
            "Access Portal →"
          )}
        </motion.button>

        {/* Divider */}
        <div className="flex items-center gap-3 mb-5">
          <div className="flex-1 h-px bg-gray-200" />
          <span className="text-xs text-gray-400 font-medium">
            OR CONTINUE WITH
          </span>
          <div className="flex-1 h-px bg-gray-200" />
        </div>

        {/* Social auth */}
        <div className="grid grid-cols-2 gap-3 mb-8">
          <motion.button
            whileTap={{ scale: 0.95 }}
            className="flex min-h-[46px] items-center justify-center gap-2 rounded-full border border-gray-200 bg-white py-3 text-sm font-semibold text-gray-700 transition hover:bg-gray-50"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <rect width="24" height="24" rx="2" fill="#111" />
              <path
                d="M12 6C8.686 6 6 8.686 6 12s2.686 6 6 6 6-2.686 6-6-2.686-6-6-6zm0 10c-2.205 0-4-1.795-4-4s1.795-4 4-4 4 1.795 4 4-1.795 4-4 4z"
                fill="white"
              />
            </svg>
            Google
          </motion.button>
          <motion.button
            whileTap={{ scale: 0.95 }}
            className="flex min-h-[46px] items-center justify-center gap-2 rounded-full border border-gray-200 bg-white py-3 text-sm font-semibold text-gray-700 transition hover:bg-gray-50"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <rect width="24" height="24" rx="2" fill="#E5E5E5" />
              <path
                d="M4 8h16M4 12h16M4 16h10"
                stroke="#555"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
            SSO
          </motion.button>
        </div>

        <p className="text-center text-sm text-gray-500">
          New to RideShare?{" "}
          <Link href="/auth/register" className="text-brand font-bold">
            Create an account
          </Link>
        </p>
      </main>
    </motion.div>
  );
}
