"use client";

import { useMemo } from "react";
import { searchRides } from "@/lib/api";
import {
  useRideFiltersStore,
  type GenderPolicy,
} from "@/state/useRideFiltersStore";

const genderOptions: Array<{
  value: GenderPolicy;
  label: string;
  helper: string;
}> = [
  {
    value: "any",
    label: "No gender restriction",
    helper: "Show all verified rides",
  },
  {
    value: "women_only",
    label: "Women Only Rides",
    helper: "Safety-first women-only matching",
  },
  {
    value: "same_gender_only",
    label: "Same Gender Only",
    helper: "Driver and passenger same-gender matching",
  },
];

const ridesPreview = [
  {
    id: "r1",
    driver: "Mina A.",
    rating: 4.9,
    route: "North Hall -> City Center",
    price: "$4",
    seats: 2,
    gender: "Women Only",
  },
  {
    id: "r2",
    driver: "Sam K.",
    rating: 4.7,
    route: "Campus Gate -> East Station",
    price: "$3",
    seats: 1,
    gender: "Same Gender",
  },
];

export default function RideSearchFilters() {
  const {
    origin,
    destination,
    date,
    time,
    priceMin,
    priceMax,
    driverRating,
    luggageSpace,
    genderPolicy,
    setField,
  } = useRideFiltersStore();

  const activeSafetyLabel = useMemo(
    () =>
      genderOptions.find((item) => item.value === genderPolicy)?.label ||
      "No gender restriction",
    [genderPolicy],
  );

  const handleSearch = async () => {
    await searchRides(
      {
        origin,
        destination,
        date,
        time,
        filters: {
          priceRange: [priceMin, priceMax],
          driverRating,
          luggageSpace,
        },
        safety: {
          genderPolicy,
        },
      },
      "mock-jwt-token",
    );
  };

  return (
    <main className="mx-auto max-w-6xl px-4 py-6 sm:px-6">
      <section className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm sm:p-5">
        <h1 className="text-2xl font-bold tracking-tight text-gray-900">
          Find a safe campus ride
        </h1>
        <p className="mt-1 text-sm text-gray-600">
          Leverage our verified student network for peace of mind.
        </p>

        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          <input
            value={origin}
            onChange={(e) => setField("origin", e.target.value)}
            className="light-input"
            placeholder="Origin (e.g. North Hall)"
          />
          <input
            value={destination}
            onChange={(e) => setField("destination", e.target.value)}
            className="light-input"
            placeholder="Destination (e.g. Downtown)"
          />
          <input
            value={date}
            onChange={(e) => setField("date", e.target.value)}
            className="light-input"
            type="date"
          />
          <input
            value={time}
            onChange={(e) => setField("time", e.target.value)}
            className="light-input"
            type="time"
          />
        </div>

        <div className="mt-4 rounded-lg border border-pink-200 bg-pink-50 p-4">
          <h3 className="font-semibold text-pink-800">Gender Policy</h3>
          <p className="text-sm text-pink-700">{activeSafetyLabel}</p>
          <div className="mt-3 flex flex-wrap gap-2">
            {genderOptions.map((opt) => (
              <button
                key={opt.value}
                onClick={() => setField("genderPolicy", opt.value)}
                className={`rounded-full px-3 py-1 text-xs font-semibold transition ${
                  genderPolicy === opt.value
                    ? "bg-pink-600 text-white"
                    : "bg-white text-pink-700 hover:bg-pink-100"
                }`}
              >
                {opt.label}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-4">
          <button onClick={handleSearch} className="brand-btn">
            Search Rides
          </button>
        </div>
      </section>

      <section className="mt-6">
        <h2 className="text-lg font-bold text-gray-800">Available Now</h2>
        <div className="mt-4 grid gap-4">
          {ridesPreview.map((ride) => (
            <article
              key={ride.id}
              className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-semibold">{ride.driver}</p>
                  <p className="text-sm text-gray-600">{ride.route}</p>
                </div>
                <div className="text-right">
                  <p className="font-bold text-red-500">{ride.price}</p>
                  <p className="text-xs text-gray-500">{ride.seats} seats</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
