"use client";

import { useMemo, useState } from "react";

type SeatMode = "seat-number" | "passenger-count";

export default function RideBookingPanel() {
  const [seatMode, setSeatMode] = useState<SeatMode>("passenger-count");
  const [seatNumber, setSeatNumber] = useState("2A");
  const [passengerCount, setPassengerCount] = useState(1);
  const [agreed, setAgreed] = useState(false);

  const unitPrice = 4;
  const total = useMemo(
    () =>
      seatMode === "passenger-count" ? unitPrice * passengerCount : unitPrice,
    [seatMode, passengerCount],
  );

  return (
    <main className="mx-auto max-w-4xl px-4 py-8 sm:px-6">
      <h1 className="text-2xl font-bold tracking-tight text-gray-900">
        Secure your booking
      </h1>
      <p className="mt-1 text-sm text-gray-600">
        Checkout with transparent cost and verified driver details.
      </p>

      <section className="mt-5 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <article className="rounded-lg border border-gray-200 bg-white p-5 shadow-sm">
          <h2 className="text-lg font-bold text-gray-900">Ride Summary</h2>
          <div className="mt-4 space-y-3 text-sm text-gray-700">
            <p>
              <span className="font-semibold text-gray-800">Route:</span> North
              Hall to City Center
            </p>
            <p>
              <span className="font-semibold text-gray-800">Departure:</span>{" "}
              Tue, 6:15 PM
            </p>
            <p>
              <span className="font-semibold text-gray-800">Driver:</span> Mina
              A. (4.9★, 128 reviews)
            </p>
            <p className="rounded-md bg-pink-100 p-2 font-semibold text-pink-700">
              <span className="font-semibold text-pink-800">Safety:</span> Women
              Only Ride
            </p>
          </div>
        </article>

        <article className="rounded-lg border border-gray-200 bg-white p-5 shadow-sm">
          <h2 className="text-lg font-bold text-gray-900">Seat Selection</h2>

          <div className="mt-4 inline-flex rounded-lg border border-gray-200 bg-gray-100 p-1">
            <button
              onClick={() => setSeatMode("passenger-count")}
              className={`rounded-md px-3 py-2 text-sm font-semibold transition ${
                seatMode === "passenger-count"
                  ? "bg-white text-gray-800 shadow"
                  : "text-gray-600 hover:text-gray-800"
              }`}
            >
              Passenger Count
            </button>
            <button
              onClick={() => setSeatMode("seat-number")}
              className={`rounded-md px-3 py-2 text-sm font-semibold transition ${
                seatMode === "seat-number"
                  ? "bg-white text-gray-800 shadow"
                  : "text-gray-600 hover:text-gray-800"
              }`}
            >
              Pick Seat Number
            </button>
          </div>

          {seatMode === "passenger-count" ? (
            <div className="mt-4">
              <label className="text-sm font-medium text-gray-700">
                Passengers
              </label>
              <input
                type="number"
                min={1}
                max={4}
                value={passengerCount}
                onChange={(e) => setPassengerCount(Number(e.target.value))}
                className="light-input mt-2"
              />
            </div>
          ) : (
            <div className="mt-4">
              <label className="text-sm font-medium text-gray-700">
                Seat Number
              </label>
              <select
                value={seatNumber}
                onChange={(e) => setSeatNumber(e.target.value)}
                className="light-input mt-2"
              >
                <option>1A</option>
                <option>1B</option>
                <option>2A</option>
                <option>2B</option>
              </select>
            </div>
          )}

          <div className="mt-6 rounded-lg border border-orange-200 bg-orange-50 p-4">
            <p className="text-lg font-semibold text-orange-700">
              Total: ${total.toFixed(2)}
            </p>
            <p className="text-xs text-orange-600">
              Includes all platform fees.
            </p>
          </div>

          <label className="mt-6 flex items-start gap-3 text-sm text-gray-600">
            <input
              checked={agreed}
              onChange={() => setAgreed((v) => !v)}
              type="checkbox"
              className="mt-0.5 h-4 w-4 rounded border-gray-300 text-red-500 focus:ring-red-500"
            />
            I agree to cancellation policies and terms of service.
          </label>

          <button
            disabled={!agreed}
            className="mt-4 w-full rounded-md bg-red-500 py-3 text-sm font-bold text-white transition enabled:hover:bg-red-600 disabled:cursor-not-allowed disabled:bg-gray-400"
          >
            Confirm Booking
          </button>
        </article>
      </section>
    </main>
  );
}
