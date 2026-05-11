"use client";

import { useState } from "react";

export default function RoleSelectionPage() {
  const [role, setRole] = useState<"passenger" | "driver">("passenger");

  return (
    <main className="mx-auto max-w-lg px-4 py-8">
      <section className="rounded-2xl border border-slate-200 bg-white p-6">
        <h1 className="text-xl font-bold">Choose your starting mode</h1>
        <p className="mt-1 text-sm text-slate-600">
          You can switch any time from your dashboard.
        </p>

        <div className="mt-4 grid gap-3 sm:grid-cols-2">
          <button
            onClick={() => setRole("passenger")}
            className={`rounded-xl border p-4 text-left ${
              role === "passenger"
                ? "border-teal-500 bg-teal-50"
                : "border-slate-200"
            }`}
          >
            <p className="font-semibold">I need a ride</p>
            <p className="text-sm text-slate-600">Passenger mode</p>
          </button>
          <button
            onClick={() => setRole("driver")}
            className={`rounded-xl border p-4 text-left ${
              role === "driver"
                ? "border-orange-500 bg-orange-50"
                : "border-slate-200"
            }`}
          >
            <p className="font-semibold">I am driving</p>
            <p className="text-sm text-slate-600">Driver mode</p>
          </button>
        </div>
      </section>
    </main>
  );
}
