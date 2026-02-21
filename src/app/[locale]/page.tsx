import Link from "next/link";
import { T, Num, Plural } from "gt-next";
import { getGT } from "gt-next/server";
import { spaces } from "@/data/spaces";

const totalDesks = spaces.filter(s => s.type === "desk").length;
const totalOffices = spaces.filter(s => s.type === "office").length;
const totalMeetingRooms = spaces.filter(s => s.type === "meeting-room").length;

export default async function HomePage() {
  const gt = await getGT();

  const amenities = [
    { icon: "Wi", label: gt("High-Speed WiFi") },
    { icon: "Co", label: gt("Unlimited Coffee & Tea") },
    { icon: "Pr", label: gt("Printing & Scanning") },
    { icon: "Lo", label: gt("Secure Storage") },
    { icon: "Ph", label: gt("Phone Booths") },
    { icon: "24", label: gt("24/7 Building Access") },
  ];

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
                <span className="text-sm font-medium text-white/90 bg-black/30 px-2 py-1 rounded">
                  {spaceNames[space.id] || space.name}
                </span>
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
                  {a.icon}
                </div>
                <span className="text-sm text-zinc-300">{a.label}</span>
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
          <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
            <T>
              <p className="text-zinc-300 text-sm mb-4 leading-relaxed">&ldquo;The community here is incredible. I came for the desk, but I stayed for the people. The networking events alone have landed me three major clients.&rdquo;</p>
              <div>
                <p className="text-white font-medium text-sm">Sarah Chen</p>
                <p className="text-zinc-500 text-xs">Freelance Designer — Member since <Num>{2023}</Num></p>
              </div>
            </T>
          </div>
          <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
            <T>
              <p className="text-zinc-300 text-sm mb-4 leading-relaxed">&ldquo;Moving our team from a home office to a private suite here was the best decision we made. The professional environment and fast internet make all the difference.&rdquo;</p>
              <div>
                <p className="text-white font-medium text-sm">Marcus Rivera</p>
                <p className="text-zinc-500 text-xs">Startup Founder — Member since <Num>{2024}</Num></p>
              </div>
            </T>
          </div>
          <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
            <T>
              <p className="text-zinc-300 text-sm mb-4 leading-relaxed">&ldquo;I love the flexibility of the hot desk plan. I can work from different spots depending on my mood, and the coffee is actually good.&rdquo;</p>
              <div>
                <p className="text-white font-medium text-sm">Yuki Tanaka</p>
                <p className="text-zinc-500 text-xs">Remote Software Engineer — Member since <Num>{2025}</Num></p>
              </div>
            </T>
          </div>
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
