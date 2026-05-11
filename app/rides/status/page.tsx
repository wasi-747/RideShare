import { Car, Bell, MapPin, Navigation, MessageSquare } from "lucide-react";
import BottomNav from "@/components/BottomNav";

export default function RideStatusPage() {
  return (
    <div className="mobile-shell flex flex-col bg-white">
      {/* Top bar */}
      <header className="flex items-center justify-between px-5 pt-5 pb-3 border-b border-gray-100">
        <div className="flex items-center gap-2">
          <div className="bg-brand rounded-lg p-1.5">
            <Car size={18} className="text-white" strokeWidth={2.5} />
          </div>
          <span className="text-lg font-black text-brand tracking-tight">RideShare</span>
        </div>
        <div className="flex items-center gap-3">
          <button className="w-9 h-9 flex items-center justify-center rounded-full border border-gray-200 hover:bg-gray-50 transition relative">
            <Bell size={17} className="text-gray-600" />
          </button>
          <div className="w-9 h-9 rounded-full overflow-hidden border-2 border-gray-100">
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&auto=format&fit=crop"
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </header>

      <div className="flex-1 overflow-y-auto pb-20">
        {/* Route info */}
        <section className="px-5 pt-4 pb-3 border-b border-gray-50">
          <div className="flex items-start gap-3">
            <div className="flex flex-col items-center mt-1 gap-0.5">
              <div className="w-2.5 h-2.5 rounded-full bg-brand" />
              <div className="w-px h-6 bg-gray-200" />
              <div className="w-2.5 h-2.5 rounded-full border-2 border-gray-400" />
            </div>
            <div className="flex-1">
              <div className="mb-3">
                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Pickup</p>
                <p className="text-base font-black text-gray-900">Student Commons</p>
              </div>
              <div>
                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Destination</p>
                <p className="text-base font-black text-gray-900">Engineering Block B</p>
              </div>
            </div>
          </div>
        </section>

        {/* Start/End buttons */}
        <section className="px-5 py-3 border-b border-gray-50">
          <div className="grid grid-cols-2 gap-3">
            <button className="flex items-center justify-center gap-2 rounded-full border-2 border-gray-200 py-2.5 text-sm font-bold text-gray-600 hover:bg-gray-50 transition">
              <span className="text-gray-400">▶</span> START RIDE
            </button>
            <button className="flex items-center justify-center gap-2 rounded-full bg-brand py-2.5 text-sm font-bold text-white hover:bg-brand-dark transition">
              <span>■</span> END RIDE
            </button>
          </div>
        </section>

        {/* Stats */}
        <section className="px-5 py-3 border-b border-gray-50">
          <div className="grid grid-cols-2 gap-3">
            <div className="rs-card p-3">
              <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Distance</p>
              <p className="text-2xl font-black text-gray-900">3.8<span className="text-sm font-semibold text-gray-400 ml-0.5">km</span></p>
            </div>
            <div className="rs-card p-3">
              <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Earnings</p>
              <p className="text-2xl font-black text-brand">$18.40</p>
            </div>
          </div>
        </section>

        {/* Map */}
        <section className="px-5 py-3">
          <div className="rounded-2xl overflow-hidden relative" style={{ height: 160 }}>
            <div
              className="w-full h-full"
              style={{
                background: "linear-gradient(160deg, #2D9CDB 0%, #27AE60 50%, #2D9CDB 100%)",
              }}
            >
              {/* Simplified map lines */}
              <svg className="w-full h-full opacity-40" viewBox="0 0 390 160" preserveAspectRatio="none">
                <path d="M30 130 Q100 80 180 90 T320 50 L360 30" stroke="white" strokeWidth="3" fill="none" strokeDasharray="8 4" />
                <path d="M50 160 Q120 120 200 110 T340 70 L380 50" stroke="white" strokeWidth="1.5" fill="none" opacity="0.5" />
                <circle cx="360" cy="30" r="6" fill="white" opacity="0.9" />
                <circle cx="30" cy="130" r="5" fill="#FF6B6B" />
              </svg>
            </div>
            {/* Next turn bar */}
            <div className="absolute bottom-0 left-0 right-0 bg-white/95 backdrop-blur-sm px-4 py-2.5 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 bg-brand rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-black text-xs">A</span>
                </div>
                <div>
                  <p className="text-[9px] font-bold text-gray-400 uppercase tracking-widest">Next Turn</p>
                  <p className="text-xs font-bold text-gray-800">400m @ University Ave</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-xl font-black text-gray-900">8 MIN</p>
              </div>
            </div>
          </div>
        </section>

        {/* Current Passengers */}
        <section className="px-5 py-3 pb-5">
          <p className="text-[11px] font-black text-gray-900 uppercase tracking-widest mb-3">Current Passengers</p>
          <div className="space-y-2">
            {[
              { name: "Alex Thompson", dest: "Engineering Block B", img: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=60&auto=format&fit=crop" },
              { name: "Sarah Chen", dest: "Library North", img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=60&auto=format&fit=crop" },
            ].map((p) => (
              <div key={p.name} className="rs-card flex items-center justify-between px-4 py-3">
                <div className="flex items-center gap-3">
                  <img src={p.img} alt={p.name} className="w-9 h-9 rounded-full object-cover" />
                  <div>
                    <p className="text-sm font-bold text-gray-900">{p.name}</p>
                    <p className="text-xs text-gray-400 uppercase font-bold tracking-wider">{p.dest}</p>
                  </div>
                </div>
                <button className="w-8 h-8 flex items-center justify-center border border-brand-soft rounded-lg">
                  <MessageSquare size={14} className="text-brand" />
                </button>
              </div>
            ))}
          </div>
        </section>
      </div>

      <BottomNav active="STATUS" />
    </div>
  );
}
