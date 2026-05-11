"use client";

import { useState } from "react";

const labels = ["Punctuality", "Safety", "Comfort"];

export default function RideReviewPage() {
  const [score, setScore] = useState(5);

  return (
    <main className="mx-auto max-w-2xl px-4 py-8">
      <section className="rounded-2xl border border-slate-200 bg-white p-6">
        <h1 className="text-xl font-bold">Rate your ride</h1>
        <div className="mt-4 space-y-4">
          {labels.map((label) => (
            <div key={label} className="rounded-lg border border-slate-200 p-3">
              <p className="text-sm font-semibold text-slate-700">{label}</p>
              <input
                className="mt-2 w-full"
                min={1}
                max={5}
                type="range"
                value={score}
                onChange={(e) => setScore(Number(e.target.value))}
              />
              <p className="text-sm text-slate-600">{score} / 5</p>
            </div>
          ))}
          <textarea
            className="w-full rounded-lg border border-slate-300 p-3"
            placeholder="Optional written feedback"
          />
          <div className="flex flex-wrap gap-2">
            <button className="rounded-full bg-amber-100 px-3 py-1 text-xs font-semibold text-amber-800">
              Great DJ
            </button>
            <button className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-800">
              On Time
            </button>
            <button className="rounded-full bg-teal-100 px-3 py-1 text-xs font-semibold text-teal-800">
              Safe Driver
            </button>
          </div>
          <button className="w-full rounded-lg bg-teal-700 py-3 font-semibold text-white">
            Submit review
          </button>
        </div>
      </section>
    </main>
  );
}
