"use client";

import { useState, use } from "react";
import Link from "next/link";
import { T, Num, Currency, Branch } from "gt-next";
import { spaces, amenityLabels } from "@/data/spaces";

const daysInMonth = 31;
const monthName = "March 2026";

export default function SpaceDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const space = spaces.find((s) => s.id === id);
  const [selectedDate, setSelectedDate] = useState<number | null>(null);
  const [showBooking, setShowBooking] = useState(false);

  if (!space) {
    return (
      <div className="max-w-6xl mx-auto px-4 py-24 text-center">
        <T>
          <h1 className="text-2xl font-bold text-white mb-4">Space Not Found</h1>
          <p className="text-zinc-400 mb-8">The space you are looking for does not exist.</p>
        </T>
        <Link href="/spaces" className="text-[#F59E0B] hover:underline">
          <T>Back to Spaces</T>
        </Link>
      </div>
    );
  }

  const days = Array.from({ length: daysInMonth }, (_, i) => i + 1);

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <Link href="/spaces" className="text-zinc-400 hover:text-[#F59E0B] text-sm mb-6 inline-block transition-colors">
        <T>Back to Spaces</T>
      </Link>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Left: Info */}
        <div className="lg:col-span-2 space-y-8">
          {/* Hero color block */}
          <div
            className="h-64 rounded-xl flex items-end p-6"
            style={{ backgroundColor: space.color }}
          >
            <T>
              <div>
                <span className="text-xs font-medium bg-black/30 text-white px-2 py-1 rounded mb-2 inline-block">
                  <Branch
                    branch={space.type}
                    desk="Desk"
                    office="Office"
                    meeting-room="Meeting Room"
                  />
                </span>
                <h1 className="text-3xl font-bold text-white">{space.name}</h1>
              </div>
            </T>
          </div>

          {/* Description */}
          <T>
            <div>
              <h2 className="text-xl font-semibold text-white mb-3">About This Space</h2>
              <p className="text-zinc-400 leading-relaxed">{space.description}</p>
            </div>
          </T>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-4 text-center">
              <T>
                <p className="text-2xl font-bold text-[#F59E0B]"><Num>{space.capacity}</Num></p>
                <p className="text-xs text-zinc-400">Capacity</p>
              </T>
            </div>
            <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-4 text-center">
              <T>
                <p className="text-2xl font-bold text-[#F59E0B]"><Num>{space.sqft}</Num></p>
                <p className="text-xs text-zinc-400">Square Feet</p>
              </T>
            </div>
            <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-4 text-center">
              <T>
                <p className="text-2xl font-bold text-[#F59E0B]"><Currency currency="USD">{space.pricePerDay}</Currency></p>
                <p className="text-xs text-zinc-400">Per Day</p>
              </T>
            </div>
          </div>

          {/* Amenities */}
          <div>
            <T>
              <h2 className="text-xl font-semibold text-white mb-3">Amenities</h2>
            </T>
            <div className="grid grid-cols-2 gap-3">
              {space.amenities.map((a) => (
                <div key={a} className="flex items-center gap-3 bg-zinc-900 border border-zinc-800 rounded-lg p-3">
                  <div className="w-2 h-2 rounded-full bg-[#F59E0B]" />
                  <T>
                    <span className="text-sm text-zinc-300">{amenityLabels[a] || a}</span>
                  </T>
                </div>
              ))}
            </div>
          </div>

          {/* Floor plan placeholder */}
          <div>
            <T>
              <h2 className="text-xl font-semibold text-white mb-3">Floor Plan</h2>
            </T>
            <div className="bg-zinc-900 border border-zinc-800 rounded-xl h-48 flex items-center justify-center">
              <T>
                <p className="text-zinc-500 text-sm">Floor plan visualization coming soon</p>
              </T>
            </div>
          </div>
        </div>

        {/* Right: Calendar & Booking */}
        <div className="space-y-6">
          {/* Calendar */}
          <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-5">
            <T>
              <h3 className="text-lg font-semibold text-white mb-4">Availability — {monthName}</h3>
            </T>
            <div className="grid grid-cols-7 gap-1 mb-4">
              {["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"].map((d) => (
                <div key={d} className="text-center text-xs text-zinc-500 py-1">{d}</div>
              ))}
              {/* offset for March 2026 starting on Sunday */}
              {days.map((day) => {
                const isBooked = space.bookedDates.includes(day);
                const isSelected = selectedDate === day;
                return (
                  <button
                    key={day}
                    onClick={() => !isBooked && setSelectedDate(isSelected ? null : day)}
                    disabled={isBooked}
                    className={`text-sm py-2 rounded transition-colors ${
                      isBooked
                        ? "bg-red-900/30 text-red-400 cursor-not-allowed"
                        : isSelected
                        ? "bg-[#F59E0B] text-[#18181B] font-semibold"
                        : "bg-zinc-800 text-zinc-300 hover:bg-zinc-700"
                    }`}
                  >
                    {day}
                  </button>
                );
              })}
            </div>
            <div className="flex gap-4 text-xs text-zinc-500">
              <T>
                <div className="flex items-center gap-1">
                  <div className="w-3 h-3 rounded bg-zinc-800" /> Available
                </div>
                <div className="flex items-center gap-1">
                  <div className="w-3 h-3 rounded bg-red-900/30" /> Booked
                </div>
                <div className="flex items-center gap-1">
                  <div className="w-3 h-3 rounded bg-[#F59E0B]" /> Selected
                </div>
              </T>
            </div>
          </div>

          {/* Pricing */}
          <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-5">
            <T>
              <h3 className="text-lg font-semibold text-white mb-3">Pricing</h3>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-zinc-400">Per Day</span>
                  <span className="text-white font-medium"><Currency currency="USD">{space.pricePerDay}</Currency></span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-zinc-400">Per Month</span>
                  <span className="text-white font-medium"><Currency currency="USD">{space.pricePerMonth}</Currency></span>
                </div>
              </div>
            </T>
          </div>

          {/* Book button */}
          <button
            onClick={() => setShowBooking(true)}
            disabled={!selectedDate}
            className={`w-full py-3 rounded-lg font-semibold transition-colors ${
              selectedDate
                ? "bg-[#F59E0B] text-[#18181B] hover:bg-amber-400"
                : "bg-zinc-800 text-zinc-500 cursor-not-allowed"
            }`}
          >
            <T>{selectedDate ? "Book This Space" : "Select a Date to Book"}</T>
          </button>

          {/* Booking modal */}
          {showBooking && selectedDate && (
            <div className="bg-zinc-900 border border-[#F59E0B]/30 rounded-xl p-5 space-y-4">
              <T>
                <h3 className="text-lg font-semibold text-white">Confirm Booking</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-zinc-400">Space</span>
                    <span className="text-white">{space.name}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-zinc-400">Date</span>
                    <span className="text-white">{monthName.split(" ")[0]} <Num>{selectedDate}</Num>, 2026</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-zinc-400">Total</span>
                    <span className="text-[#F59E0B] font-semibold"><Currency currency="USD">{space.pricePerDay}</Currency></span>
                  </div>
                </div>
              </T>
              <div className="flex gap-3">
                <button
                  onClick={() => { setShowBooking(false); setSelectedDate(null); }}
                  className="flex-1 py-2 rounded-lg bg-zinc-800 text-zinc-300 hover:bg-zinc-700 text-sm transition-colors"
                >
                  <T>Cancel</T>
                </button>
                <button
                  onClick={() => { setShowBooking(false); setSelectedDate(null); }}
                  className="flex-1 py-2 rounded-lg bg-[#F59E0B] text-[#18181B] font-semibold hover:bg-amber-400 text-sm transition-colors"
                >
                  <T>Confirm</T>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
