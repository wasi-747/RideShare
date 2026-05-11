"use client";

import { useState } from "react";
import { Car, X, Star, CheckCircle } from "lucide-react";
import BottomNav from "@/components/BottomNav";

const tags = ["Great Conversation", "Smooth Driving", "On Time", "Clean Car", "Good Music"];

export default function RideReviewPage() {
  const [rating, setRating] = useState(4);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  const toggleTag = (tag: string) => {
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
  };

  return (
    <div className="mobile-shell flex flex-col bg-[#F5F5F5]">
      {/* Top bar */}
      <header className="flex items-center justify-between px-5 pt-5 pb-3 bg-white">
        <div className="flex items-center gap-2">
          <div className="bg-brand rounded-lg p-1.5">
            <Car size={18} className="text-white" strokeWidth={2.5} />
          </div>
          <span className="text-lg font-black text-brand tracking-tight">RideShare</span>
        </div>
        <div className="flex items-center gap-3">
          <button className="w-8 h-8 flex items-center justify-center rounded-full border border-gray-200 bg-white hover:bg-gray-50 transition">
            <X size={16} className="text-gray-500" />
          </button>
          <div className="w-9 h-9 rounded-full overflow-hidden border-2 border-gray-100">
            <img
              src="https://images.unsplash.com/photo-1539701938214-0d9736e1c16b?w=80&auto=format&fit=crop"
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </header>

      <div className="flex-1 overflow-y-auto pb-20">
        {/* Check icon */}
        <div className="flex justify-center pt-6 pb-2">
          <div className="w-12 h-12 rounded-full bg-brand-soft flex items-center justify-center">
            <CheckCircle size={24} className="text-brand fill-brand" />
          </div>
        </div>

        {/* Title */}
        <div className="text-center px-6 mb-5">
          <h1 className="text-2xl font-black text-gray-900 mb-1">Rate Your Journey</h1>
          <p className="text-sm text-gray-400">Your feedback keeps the campus moving safely.</p>
        </div>

        {/* Driver card */}
        <section className="mx-4 mb-5">
          <div className="rs-card p-5 text-center">
            <div className="relative inline-block mb-3">
              <img
                src="https://images.unsplash.com/photo-1560250097-0dc05786f4e6?w=120&auto=format&fit=crop"
                alt="Driver"
                className="w-20 h-20 rounded-full object-cover border-4 border-white shadow-md"
              />
              <div className="absolute -bottom-1 -right-1 bg-yellow-400 text-white text-[10px] font-black px-1.5 py-0.5 rounded-full flex items-center gap-0.5">
                ★ 4.9
              </div>
            </div>
            <p className="text-[10px] font-black text-brand uppercase tracking-widest mb-1">Your Driver</p>
            <h2 className="text-xl font-black text-gray-900 mb-1">Professor Marcus T.</h2>
            <p className="text-xs text-gray-400 mb-3">Driving the Faculty Shuttle • Silver Tesla Model 3</p>
            <div className="flex items-center justify-center gap-2">
              <span className="text-[10px] font-black text-white bg-brand px-3 py-1 rounded-full">VERIFIED STAFF</span>
              <span className="text-[10px] font-bold text-gray-400">150+ RIDES</span>
            </div>
          </div>
        </section>

        {/* Rating section */}
        <section className="mx-4 mb-4">
          <div className="rs-card p-4">
            <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest text-center mb-3">Tap to Rate</p>
            <div className="flex items-center justify-center gap-2 mb-4">
              {[1, 2, 3, 4, 5].map((i) => (
                <button key={i} onClick={() => setRating(i)}>
                  <Star
                    size={32}
                    className={i <= rating ? "text-brand fill-brand" : "text-gray-200 fill-gray-100"}
                    strokeWidth={1.5}
                  />
                </button>
              ))}
            </div>

            {/* Comment box */}
            <div className="rounded-xl border border-gray-100 bg-gray-50 p-3">
              <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2">Add a Comment (Optional)</p>
              <textarea
                className="w-full bg-transparent text-sm text-gray-600 placeholder-gray-300 outline-none resize-none"
                rows={3}
                placeholder="Share your thoughts about the ride experience..."
              />
            </div>
          </div>
        </section>

        {/* What went well */}
        <section className="mx-4 mb-6">
          <p className="text-sm font-bold text-gray-900 mb-3">What went well?</p>
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <button
                key={tag}
                onClick={() => toggleTag(tag)}
                className={`rounded-full border px-4 py-2 text-sm font-medium transition ${
                  selectedTags.includes(tag)
                    ? "border-brand bg-brand-soft text-brand"
                    : "border-gray-200 bg-white text-gray-700 hover:border-gray-300"
                }`}
              >
                {tag}
              </button>
            ))}
          </div>
        </section>

        {/* Submit */}
        <div className="mx-4 mb-3">
          <button className="rs-btn">Submit Review</button>
        </div>
        <p className="text-center text-sm text-gray-400 pb-4">Skip for now</p>
      </div>

      <BottomNav active="RATING" />
    </div>
  );
}
