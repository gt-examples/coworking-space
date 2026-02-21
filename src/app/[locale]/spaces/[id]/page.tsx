"use client";

import { useState, use } from "react";
import Link from "next/link";
import { T, Num, Currency, Branch, useGT } from "gt-next";
import { spaces } from "@/data/spaces";

export default function SpaceDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const gt = useGT();
  const space = spaces.find((s) => s.id === id);
  const [selectedDate, setSelectedDate] = useState<number | null>(null);
  const [showBooking, setShowBooking] = useState(false);

  const spaceNames: Record<string, string> = {
    "hot-desk-1": gt("Flex Desk A"),
    "hot-desk-2": gt("Flex Desk B"),
    "dedicated-desk-1": gt("Reserved Desk Alpha"),
    "office-1": gt("Studio Suite"),
    "office-2": gt("Loft Office"),
    "meeting-1": gt("Boardroom"),
    "meeting-2": gt("Huddle Room"),
    "office-3": gt("Corner Office"),
  };

  const spaceDescriptions: Record<string, string> = {
    "hot-desk-1": gt("Open-plan hot desk in our main workspace area with natural lighting and ergonomic seating. Perfect for freelancers and remote workers."),
    "hot-desk-2": gt("Corner hot desk with a window view, offering a quiet space to focus. Includes a standing desk converter."),
    "dedicated-desk-1": gt("Your own permanent desk with lockable storage. Located in our quieter dedicated area with fellow long-term members."),
    "office-1": gt("Private office for small teams with glass walls, whiteboard, and a dedicated meeting nook. Ideal for startups."),
    "office-2": gt("Spacious private office on the mezzanine level with exposed brick walls and industrial charm. Fits a growing team."),
    "meeting-1": gt("Professional boardroom with large conference table, presentation screen, and video conferencing equipment."),
    "meeting-2": gt("Compact meeting space for quick team syncs and brainstorming sessions. Equipped with a smartboard."),
    "office-3": gt("Premium corner office with panoramic windows on two sides. The most private and prestigious space in our building."),
  };

  const amenityLabels: Record<string, string> = {
    "wifi": gt("High-Speed WiFi"),
    "power": gt("Power Outlets"),
    "coffee": gt("Coffee & Tea"),
    "printing": gt("Printing & Scanning"),
    "storage": gt("Lockable Storage"),
    "monitor": gt("External Monitor"),
    "whiteboard": gt("Whiteboard"),
    "phone-booth": gt("Phone Booth"),
    "standing-desk": gt("Standing Desk"),
    "projector": gt("Projector"),
    "video-conferencing": gt("Video Conferencing"),
  };

  const daysInMonth = 31;
  const monthName = gt("March 2026");

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
  const translatedName = spaceNames[space.id] || space.name;
  const translatedDescription = spaceDescriptions[space.id] || space.description;

  const dayAbbreviations = [gt("Su"), gt("Mo"), gt("Tu"), gt("We"), gt("Th"), gt("Fr"), gt("Sa")];

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
            <div>
              <span className="text-xs font-medium bg-black/30 text-white px-2 py-1 rounded mb-2 inline-block">
                <T>
                  <Branch
                    branch={space.type}
                    desk="Desk"
                    office="Office"
                    meeting-room="Meeting Room"
                  />
                </T>
              </span>
              <h1 className="text-3xl font-bold text-white">{translatedName}</h1>
            </div>
          </div>

          {/* Description */}
          <div>
            <T><h2 className="text-xl font-semibold text-white mb-3">About This Space</h2></T>
            <p className="text-zinc-400 leading-relaxed">{translatedDescription}</p>
          </div>

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
                  <span className="text-sm text-zinc-300">{amenityLabels[a] || a}</span>
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
              <h3 className="text-lg font-semibold text-white mb-4">Availability</h3>
            </T>
            <p className="text-sm text-zinc-400 mb-3">{monthName}</p>
            <div className="grid grid-cols-7 gap-1 mb-4">
              {dayAbbreviations.map((d) => (
                <div key={d} className="text-center text-xs text-zinc-500 py-1">{d}</div>
              ))}
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
            {selectedDate ? <T>Book This Space</T> : <T>Select a Date to Book</T>}
          </button>

          {/* Booking modal */}
          {showBooking && selectedDate && (
            <div className="bg-zinc-900 border border-[#F59E0B]/30 rounded-xl p-5 space-y-4">
              <T><h3 className="text-lg font-semibold text-white">Confirm Booking</h3></T>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <T><span className="text-zinc-400">Space</span></T>
                  <span className="text-white">{translatedName}</span>
                </div>
                <T>
                  <div className="flex justify-between">
                    <span className="text-zinc-400">Date</span>
                    <span className="text-white"><Num>{selectedDate}</Num>, 2026</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-zinc-400">Total</span>
                    <span className="text-[#F59E0B] font-semibold"><Currency currency="USD">{space.pricePerDay}</Currency></span>
                  </div>
                </T>
              </div>
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
