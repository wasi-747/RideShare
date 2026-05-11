import Link from "next/link";
import {
  MapPin,
  Plus,
  MessageCircle,
  User,
  Home,
  Search as SearchIcon,
} from "lucide-react";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white pb-20">
      {/* Mobile Header */}
      <header className="sticky top-0 z-50 bg-white border-b border-gray-100">
        <div className="px-4 py-3 flex items-center justify-between">
          <div className="font-bold text-xl text-red-600">RideShare</div>
          <div className="flex gap-2">
            <Link
              href="/profile"
              className="p-2 hover:bg-gray-100 rounded-lg transition"
            >
              <User size={24} className="text-gray-600" />
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-2xl mx-auto px-4">
        {/* Search Bar */}
        <div className="mt-6 mb-6">
          <Link
            href="/rides/search"
            className="w-full flex items-center gap-3 bg-gray-100 hover:bg-gray-200 transition p-4 rounded-2xl"
          >
            <SearchIcon size={20} className="text-gray-500" />
            <span className="text-gray-500">Where to?</span>
          </Link>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-2 gap-4 mb-8">
          <Link
            href="/rides/search"
            className="bg-red-600 hover:bg-red-700 text-white rounded-2xl p-6 flex flex-col items-center justify-center gap-3 transition transform hover:scale-105 shadow-lg"
          >
            <MapPin size={32} />
            <span className="font-bold text-lg">Find a Ride</span>
            <span className="text-sm text-red-100">Request now</span>
          </Link>

          <Link
            href="/rides/post"
            className="bg-blue-600 hover:bg-blue-700 text-white rounded-2xl p-6 flex flex-col items-center justify-center gap-3 transition transform hover:scale-105 shadow-lg"
          >
            <Plus size={32} />
            <span className="font-bold text-lg">Offer a Ride</span>
            <span className="text-sm text-blue-100">Earn money</span>
          </Link>
        </div>

        {/* Active Ride Card */}
        <section className="mb-8">
          <h2 className="text-lg font-bold text-gray-900 mb-4">
            Your Active Ride
          </h2>
          <div className="bg-gradient-to-br from-red-50 to-red-100 rounded-2xl p-6 border border-red-200">
            <div className="text-center">
              <p className="text-gray-600 mb-2">No active ride at the moment</p>
              <Link
                href="/rides/search"
                className="inline-block bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-lg font-semibold transition"
              >
                Find a Ride
              </Link>
            </div>
          </div>
        </section>

        {/* Recent Rides */}
        <section className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-bold text-gray-900">Recent Rides</h2>
            <Link
              href="/dashboard"
              className="text-red-600 hover:text-red-700 text-sm font-semibold"
            >
              See all
            </Link>
          </div>
          <div className="space-y-3">
            <div className="bg-gray-50 rounded-xl p-4 border border-gray-100 hover:border-gray-200 transition">
              <div className="flex gap-3">
                <div className="bg-blue-100 rounded-lg p-2 h-fit">
                  <MapPin size={20} className="text-blue-600" />
                </div>
                <div className="flex-1">
                  <p className="font-semibold text-gray-900">No recent rides</p>
                  <p className="text-sm text-gray-500">
                    Your rides will appear here
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-sm text-gray-400">--</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Highlights */}
        <section className="mb-8">
          <h2 className="text-lg font-bold text-gray-900 mb-4">
            Why RideShare?
          </h2>
          <div className="space-y-3">
            <div className="flex gap-3 p-4 bg-gray-50 rounded-xl border border-gray-100">
              <div className="text-2xl">🛡️</div>
              <div>
                <p className="font-semibold text-gray-900">Verified Students</p>
                <p className="text-sm text-gray-500">
                  All users verified with university emails
                </p>
              </div>
            </div>

            <div className="flex gap-3 p-4 bg-gray-50 rounded-xl border border-gray-100">
              <div className="text-2xl">💰</div>
              <div>
                <p className="font-semibold text-gray-900">Affordable Fares</p>
                <p className="text-sm text-gray-500">
                  Split costs and save money every trip
                </p>
              </div>
            </div>

            <div className="flex gap-3 p-4 bg-gray-50 rounded-xl border border-gray-100">
              <div className="text-2xl">⭐</div>
              <div>
                <p className="font-semibold text-gray-900">Rated Drivers</p>
                <p className="text-sm text-gray-500">
                  Choose from top-rated community drivers
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-100 px-4 py-3">
        <div className="max-w-2xl mx-auto flex justify-around">
          <Link
            href="/"
            className="flex flex-col items-center gap-1 text-red-600"
          >
            <Home size={24} />
            <span className="text-xs font-semibold">Home</span>
          </Link>

          <Link
            href="/rides/search"
            className="flex flex-col items-center gap-1 text-gray-400 hover:text-gray-600 transition"
          >
            <SearchIcon size={24} />
            <span className="text-xs font-semibold">Search</span>
          </Link>

          <Link
            href="/dashboard"
            className="flex flex-col items-center gap-1 text-gray-400 hover:text-gray-600 transition"
          >
            <MessageCircle size={24} />
            <span className="text-xs font-semibold">Rides</span>
          </Link>

          <Link
            href="/profile"
            className="flex flex-col items-center gap-1 text-gray-400 hover:text-gray-600 transition"
          >
            <User size={24} />
            <span className="text-xs font-semibold">Profile</span>
          </Link>
        </div>
      </nav>
    </div>
  );
}
