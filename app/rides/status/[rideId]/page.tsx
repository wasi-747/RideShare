"use client";

import { useState } from "react";

export default function RideStatusPage() {
  const [status, setStatus] = useState<"on-the-way" | "in-progress" | "ended">(
    "on-the-way",
  );

  return (
    <main className="mx-auto max-w-xl px-4 py-8">
      <section className="rounded-2xl border border-slate-200 bg-white p-6">
        <h1 className="text-xl font-bold">Today&apos;s Ride Status</h1>
        <p className="mt-2 rounded-lg bg-slate-100 p-3 text-sm font-semibold text-slate-700">
          Passenger view:{" "}
          {status === "on-the-way"
            ? "Driver is on the way"
            : status === "in-progress"
              ? "Ride in progress"
              : "Ride ended"}
        </p>
        <div className="mt-4 flex gap-2">
          <button
            onClick={() => setStatus("in-progress")}
            className="rounded-lg bg-teal-700 px-4 py-2 text-sm font-semibold text-white"
          >
            Start Ride
          </button>
          <button
            onClick={() => setStatus("ended")}
            className="rounded-lg bg-orange-600 px-4 py-2 text-sm font-semibold text-white"
          >
            End Ride
          </button>
        </div>
      </section>
    </main>
  );
}
