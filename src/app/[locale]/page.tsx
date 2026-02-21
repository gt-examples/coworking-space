import Link from "next/link";
import { T, Num, Plural } from "gt-next";
import { spaces } from "@/data/spaces";
import { testimonials } from "@/data/events";

const amenities = [
  { icon: "WiFi", label: "High-Speed WiFi" },
  { icon: "Coffee", label: "Unlimited Coffee & Tea" },
  { icon: "Print", label: "Printing & Scanning" },
  { icon: "Lock", label: "Secure Storage" },
  { icon: "Phone", label: "Phone Booths" },
  { icon: "24/7", label: "24/7 Building Access" },
];

const totalDesks = spaces.filter(s => s.type === "desk").length;
const totalOffices = spaces.filter(s => s.type === "office").length;
const totalMeetingRooms = spaces.filter(s => s.type === "meeting-room").length;

export default function HomePage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#18181B] via-zinc-900 to-[#18181B] py-24 px-4 border-b border-zinc-800">
        <div className="max-w-4xl mx-auto text-center">
          <T>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">Your Workspace, Your Way</h1>
            <p className="text-lg md:text-xl text-zinc-400 mb-8 max-w-2xl mx-auto">
              Flexible desks, private offices, and meeting rooms in the heart of the city. Join a thriving community of creators, founders, and remote professionals.
            </p>
          </T>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/spaces"
              className="inline-block bg-[#F59E0B] text-[#18181B] font-semibold px-8 py-3 rounded-lg hover:bg-amber-400 transition-colors"
            >
              <T>Browse Spaces</T>
            </Link>
            <Link
              href="/membership"
              className="inline-block border border-zinc-600 text-zinc-300 font-semibold px-8 py-3 rounded-lg hover:border-[#F59E0B] hover:text-[#F59E0B] transition-colors"
            >
              <T>View Plans</T>
            </Link>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid grid-cols-3 gap-6 text-center">
          <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
            <T>
              <p className="text-3xl font-bold text-[#F59E0B] mb-1"><Num>{totalDesks}</Num></p>
              <p className="text-sm text-zinc-400"><Plural n={totalDesks} singular="Hot Desk" plural="Hot Desks" /></p>
            </T>
          </div>
          <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
            <T>
              <p className="text-3xl font-bold text-[#F59E0B] mb-1"><Num>{totalOffices}</Num></p>
              <p className="text-sm text-zinc-400"><Plural n={totalOffices} singular="Private Office" plural="Private Offices" /></p>
            </T>
          </div>
          <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
            <T>
              <p className="text-3xl font-bold text-[#F59E0B] mb-1"><Num>{totalMeetingRooms}</Num></p>
              <p className="text-sm text-zinc-400"><Plural n={totalMeetingRooms} singular="Meeting Room" plural="Meeting Rooms" /></p>
            </T>
          </div>
        </div>
      </section>

      {/* Space Photos Grid */}
      <section className="max-w-6xl mx-auto px-4 pb-16">
        <T>
          <h2 className="text-2xl font-bold text-white mb-8 text-center">Our Spaces</h2>
        </T>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {spaces.slice(0, 4).map((space) => (
            <Link key={space.id} href={`/spaces/${space.id}`} className="group">
              <div
                className="aspect-[4/3] rounded-xl flex items-end p-4 group-hover:scale-[1.02] transition-transform"
                style={{ backgroundColor: space.color }}
              >
                <T>
                  <span className="text-sm font-medium text-white/90 bg-black/30 px-2 py-1 rounded">
                    {space.name}
                  </span>
                </T>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Amenities */}
      <section className="bg-zinc-900/50 py-16 px-4 border-y border-zinc-800">
        <div className="max-w-6xl mx-auto">
          <T>
            <h2 className="text-2xl font-bold text-white mb-8 text-center">Everything You Need</h2>
          </T>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {amenities.map((a) => (
              <div key={a.icon} className="bg-zinc-900 border border-zinc-800 rounded-xl p-5 flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-[#F59E0B]/10 flex items-center justify-center text-[#F59E0B] text-sm font-bold flex-shrink-0">
                  {a.icon.slice(0, 2)}
                </div>
                <T>
                  <span className="text-sm text-zinc-300">{a.label}</span>
                </T>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <T>
          <h2 className="text-2xl font-bold text-white mb-8 text-center">What Our Members Say</h2>
        </T>
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div key={t.name} className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
              <T>
                <p className="text-zinc-300 text-sm mb-4 leading-relaxed">&ldquo;{t.text}&rdquo;</p>
                <div>
                  <p className="text-white font-medium text-sm">{t.name}</p>
                  <p className="text-zinc-500 text-xs">{t.role} — Member since <Num>{t.memberSince}</Num></p>
                </div>
              </T>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 text-center">
        <T>
          <h2 className="text-2xl font-bold text-white mb-4">Ready to Find Your Space?</h2>
          <p className="text-zinc-400 mb-8 max-w-lg mx-auto">
            Join hundreds of professionals who have made CoWork Hub their second home.
          </p>
        </T>
        <Link href="/spaces" className="bg-[#F59E0B] text-[#18181B] font-semibold px-8 py-3 rounded-lg hover:bg-amber-400 transition-colors">
          <T>Explore Spaces</T>
        </Link>
      </section>
    </div>
  );
}
