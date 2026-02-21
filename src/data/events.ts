export interface CoworkingEvent {
  id: string;
  name: string;
  description: string;
  date: Date;
  durationMinutes: number;
  capacity: number;
  registered: number;
  fee: number;
  category: string;
}

export const events: CoworkingEvent[] = [
  {
    id: "networking-march",
    name: "Monthly Networking Mixer",
    description: "Connect with fellow coworkers over drinks and appetizers. A relaxed evening to expand your professional network and share ideas.",
    date: new Date(2026, 2, 15, 18, 0),
    durationMinutes: 120,
    capacity: 50,
    registered: 32,
    fee: 0,
    category: "networking",
  },
  {
    id: "workshop-pitch",
    name: "Pitch Perfect Workshop",
    description: "Learn to craft and deliver a compelling elevator pitch. Hands-on practice with feedback from experienced entrepreneurs.",
    date: new Date(2026, 2, 20, 14, 0),
    durationMinutes: 180,
    capacity: 20,
    registered: 14,
    fee: 25,
    category: "workshop",
  },
  {
    id: "lunch-learn-ai",
    name: "Lunch & Learn: AI for Small Business",
    description: "Discover practical ways to use AI tools to streamline your small business operations. Lunch provided.",
    date: new Date(2026, 2, 22, 12, 0),
    durationMinutes: 90,
    capacity: 30,
    registered: 27,
    fee: 10,
    category: "workshop",
  },
  {
    id: "yoga-morning",
    name: "Morning Yoga Session",
    description: "Start your workday with a 45-minute guided yoga session in our rooftop terrace. All levels welcome. Mats provided.",
    date: new Date(2026, 3, 1, 7, 30),
    durationMinutes: 45,
    capacity: 15,
    registered: 9,
    fee: 0,
    category: "wellness",
  },
  {
    id: "demo-day",
    name: "Startup Demo Day",
    description: "Watch member startups present their products to a panel of investors and mentors. An inspiring afternoon of innovation.",
    date: new Date(2026, 3, 5, 15, 0),
    durationMinutes: 180,
    capacity: 80,
    registered: 55,
    fee: 0,
    category: "networking",
  },
  {
    id: "workshop-branding",
    name: "Brand Identity Workshop",
    description: "A hands-on workshop on building a strong brand identity. Covers logo design principles, color psychology, and brand voice.",
    date: new Date(2026, 3, 10, 10, 0),
    durationMinutes: 240,
    capacity: 16,
    registered: 12,
    fee: 45,
    category: "workshop",
  },
];

export const testimonials = [
  {
    name: "Sarah Chen",
    role: "Freelance Designer",
    text: "The community here is incredible. I came for the desk, but I stayed for the people. The networking events alone have landed me three major clients.",
    memberSince: 2023,
  },
  {
    name: "Marcus Rivera",
    role: "Startup Founder",
    text: "Moving our team from a home office to a private suite here was the best decision we made. The professional environment and fast internet make all the difference.",
    memberSince: 2024,
  },
  {
    name: "Yuki Tanaka",
    role: "Remote Software Engineer",
    text: "I love the flexibility of the hot desk plan. I can work from different spots depending on my mood, and the coffee is actually good.",
    memberSince: 2025,
  },
];
