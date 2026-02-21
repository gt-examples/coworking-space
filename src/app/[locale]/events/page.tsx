"use client";

import { useState } from "react";
import { T, Num, Currency, DateTime, Plural } from "gt-next";
import { events } from "@/data/events";

const categories = ["all", "networking", "workshop", "wellness"];

export default function EventsPage() {
  const [category, setCategory] = useState("all");
  const [rsvpd, setRsvpd] = useState<Set<string>>(new Set());

  const filtered = category === "all" ? events : events.filter((e) => e.category === category);

  const toggleRsvp = (id: string) => {
    setRsvpd((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <T>
        <h1 className="text-3xl font-bold text-white mb-2">Community Events</h1>
        <p className="text-zinc-400 mb-8">Workshops, networking, and wellness events for our members.</p>
      </T>

      {/* Category filter */}
      <div className="flex gap-2 mb-8">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setCategory(cat)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors capitalize ${
              category === cat
                ? "bg-[#F59E0B] text-[#18181B]"
                : "bg-zinc-800 text-zinc-400 hover:text-zinc-200"
            }`}
          >
            <T>
              {cat === "all" ? "All Events" : cat === "networking" ? "Networking" : cat === "workshop" ? "Workshops" : "Wellness"}
            </T>
          </button>
        ))}
      </div>

      <div className="mb-6 text-sm text-zinc-400">
        <T>
          <Plural
            n={filtered.length}
            singular={<><Num>{filtered.length}</Num> event</>}
            plural={<><Num>{filtered.length}</Num> events</>}
          />
        </T>
      </div>

      {/* Event cards */}
      <div className="grid md:grid-cols-2 gap-6">
        {filtered.map((event) => {
          const spotsLeft = event.capacity - event.registered - (rsvpd.has(event.id) ? 1 : 0);
          return (
            <div key={event.id} className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
              <div className="flex items-start justify-between mb-3">
                <T>
                  <span className="text-xs font-medium bg-zinc-800 text-zinc-400 px-2 py-1 rounded capitalize">
                    {event.category}
                  </span>
                </T>
                {event.fee > 0 ? (
                  <T>
                    <span className="text-[#F59E0B] font-semibold text-sm">
                      <Currency currency="USD">{event.fee}</Currency>
                    </span>
                  </T>
                ) : (
                  <T>
                    <span className="text-emerald-400 text-xs font-medium">Free</span>
                  </T>
                )}
              </div>
              <T>
                <h3 className="text-lg font-semibold text-white mb-2">{event.name}</h3>
                <p className="text-sm text-zinc-400 mb-4 leading-relaxed">{event.description}</p>
              </T>
              <div className="flex flex-wrap gap-4 text-xs text-zinc-500 mb-4">
                <T>
                  <span><DateTime>{event.date}</DateTime></span>
                </T>
                <T>
                  <span><Num>{event.durationMinutes}</Num> min</span>
                </T>
                <T>
                  <span>
                    <Plural
                      n={spotsLeft}
                      singular={<><Num>{spotsLeft}</Num> spot left</>}
                      plural={<><Num>{spotsLeft}</Num> spots left</>}
                    /> of <Num>{event.capacity}</Num>
                  </span>
                </T>
              </div>
              <button
                onClick={() => toggleRsvp(event.id)}
                className={`w-full py-2 rounded-lg text-sm font-semibold transition-colors ${
                  rsvpd.has(event.id)
                    ? "bg-zinc-800 text-[#F59E0B] border border-[#F59E0B]/30"
                    : "bg-[#F59E0B] text-[#18181B] hover:bg-amber-400"
                }`}
              >
                <T>{rsvpd.has(event.id) ? "Cancel RSVP" : "RSVP"}</T>
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
