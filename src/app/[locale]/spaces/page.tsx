"use client";

import { useState } from "react";
import Link from "next/link";
import { T, Num, Currency, Plural, Branch } from "gt-next";
import { spaces } from "@/data/spaces";

const spaceTypes = ["all", "desk", "office", "meeting-room"] as const;
const capacityOptions = [0, 1, 4, 6, 8, 12];
const priceRanges = [
  { label: "All Prices", min: 0, max: Infinity },
  { label: "Under $50/day", min: 0, max: 50 },
  { label: "$50-$150/day", min: 50, max: 150 },
  { label: "Over $150/day", min: 150, max: Infinity },
];

export default function SpacesPage() {
  const [typeFilter, setTypeFilter] = useState<string>("all");
  const [capacityFilter, setCapacityFilter] = useState(0);
  const [priceRange, setPriceRange] = useState(0);

  const filtered = spaces.filter((s) => {
    if (typeFilter !== "all" && s.type !== typeFilter) return false;
    if (capacityFilter > 0 && s.capacity < capacityFilter) return false;
    const range = priceRanges[priceRange];
    if (s.pricePerDay < range.min || s.pricePerDay > range.max) return false;
    return true;
  });

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <T>
        <h1 className="text-3xl font-bold text-white mb-2">Browse Spaces</h1>
        <p className="text-zinc-400 mb-8">Find the perfect workspace for your needs.</p>
      </T>

      {/* Filters */}
      <div className="flex flex-wrap gap-4 mb-8">
        {/* Type filter */}
        <div className="flex gap-2">
          {spaceTypes.map((type) => (
            <button
              key={type}
              onClick={() => setTypeFilter(type)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                typeFilter === type
                  ? "bg-[#F59E0B] text-[#18181B]"
                  : "bg-zinc-800 text-zinc-400 hover:text-zinc-200"
              }`}
            >
              <T>
                <Branch
                  branch={type}
                  all="All"
                  desk="Desks"
                  office="Offices"
                  meeting-room="Meeting Rooms"
                />
              </T>
            </button>
          ))}
        </div>

        {/* Capacity filter */}
        <select
          value={capacityFilter}
          onChange={(e) => setCapacityFilter(Number(e.target.value))}
          className="bg-zinc-800 border border-zinc-700 text-zinc-300 rounded-lg px-4 py-2 text-sm"
        >
          <option value={0}>Any Capacity</option>
          {capacityOptions.slice(1).map((cap) => (
            <option key={cap} value={cap}>{cap}+ people</option>
          ))}
        </select>

        {/* Price range filter */}
        <select
          value={priceRange}
          onChange={(e) => setPriceRange(Number(e.target.value))}
          className="bg-zinc-800 border border-zinc-700 text-zinc-300 rounded-lg px-4 py-2 text-sm"
        >
          {priceRanges.map((r, i) => (
            <option key={i} value={i}>{r.label}</option>
          ))}
        </select>
      </div>

      {/* Results count */}
      <div className="mb-6 text-sm text-zinc-400">
        <T>
          <Plural
            n={filtered.length}
            singular={<><Num>{filtered.length}</Num> space found</>}
            plural={<><Num>{filtered.length}</Num> spaces found</>}
          />
        </T>
      </div>

      {/* Space cards */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((space) => (
          <Link key={space.id} href={`/spaces/${space.id}`} className="group">
            <div className="bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden hover:border-zinc-700 transition-colors">
              <div
                className="h-40 flex items-end p-4"
                style={{ backgroundColor: space.color }}
              >
                <T>
                  <span className="text-xs font-medium bg-black/30 text-white px-2 py-1 rounded">
                    <Branch
                      branch={space.type}
                      desk="Desk"
                      office="Office"
                      meeting-room="Meeting Room"
                    />
                  </span>
                </T>
              </div>
              <div className="p-5">
                <T>
                  <h3 className="text-lg font-semibold text-white mb-1 group-hover:text-[#F59E0B] transition-colors">{space.name}</h3>
                  <p className="text-sm text-zinc-400 mb-3 line-clamp-2">{space.description}</p>
                </T>
                <div className="flex items-center justify-between">
                  <T>
                    <span className="text-[#F59E0B] font-semibold">
                      <Currency currency="USD">{space.pricePerDay}</Currency>/day
                    </span>
                  </T>
                  <T>
                    <span className="text-xs text-zinc-500 bg-zinc-800 px-2 py-1 rounded">
                      <Plural
                        n={space.capacity}
                        singular={<><Num>{space.capacity}</Num> person</>}
                        plural={<><Num>{space.capacity}</Num> people</>}
                      />
                    </span>
                  </T>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="text-center py-16">
          <T>
            <p className="text-zinc-400">No spaces match your filters. Try adjusting your criteria.</p>
          </T>
        </div>
      )}
    </div>
  );
}
