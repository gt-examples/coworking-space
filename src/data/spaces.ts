export interface Space {
  id: string;
  name: string;
  type: "desk" | "office" | "meeting-room";
  description: string;
  capacity: number;
  pricePerDay: number;
  pricePerMonth: number;
  sqft: number;
  amenities: string[];
  color: string;
  bookedDates: number[]; // days of month that are booked
}

export const spaces: Space[] = [
  {
    id: "hot-desk-1",
    name: "Flex Desk A",
    type: "desk",
    description: "Open-plan hot desk in our main workspace area with natural lighting and ergonomic seating. Perfect for freelancers and remote workers.",
    capacity: 1,
    pricePerDay: 25,
    pricePerMonth: 350,
    sqft: 40,
    amenities: ["wifi", "power", "coffee", "printing"],
    color: "#3B82F6",
    bookedDates: [3, 7, 12, 15, 20, 25],
  },
  {
    id: "hot-desk-2",
    name: "Flex Desk B",
    type: "desk",
    description: "Corner hot desk with a window view, offering a quiet space to focus. Includes a standing desk converter.",
    capacity: 1,
    pricePerDay: 30,
    pricePerMonth: 400,
    sqft: 45,
    amenities: ["wifi", "power", "coffee", "standing-desk"],
    color: "#6366F1",
    bookedDates: [1, 5, 8, 14, 19, 22, 28],
  },
  {
    id: "dedicated-desk-1",
    name: "Reserved Desk Alpha",
    type: "desk",
    description: "Your own permanent desk with lockable storage. Located in our quieter dedicated area with fellow long-term members.",
    capacity: 1,
    pricePerDay: 40,
    pricePerMonth: 550,
    sqft: 50,
    amenities: ["wifi", "power", "coffee", "printing", "storage", "monitor"],
    color: "#8B5CF6",
    bookedDates: [2, 6, 10, 16, 21, 26],
  },
  {
    id: "office-1",
    name: "Studio Suite",
    type: "office",
    description: "Private office for small teams with glass walls, whiteboard, and a dedicated meeting nook. Ideal for startups.",
    capacity: 4,
    pricePerDay: 120,
    pricePerMonth: 1800,
    sqft: 200,
    amenities: ["wifi", "power", "coffee", "printing", "whiteboard", "phone-booth"],
    color: "#F59E0B",
    bookedDates: [4, 9, 13, 18, 24],
  },
  {
    id: "office-2",
    name: "Loft Office",
    type: "office",
    description: "Spacious private office on the mezzanine level with exposed brick walls and industrial charm. Fits a growing team.",
    capacity: 8,
    pricePerDay: 200,
    pricePerMonth: 3200,
    sqft: 400,
    amenities: ["wifi", "power", "coffee", "printing", "whiteboard", "phone-booth", "storage", "monitor"],
    color: "#EF4444",
    bookedDates: [1, 11, 17, 23, 29],
  },
  {
    id: "meeting-1",
    name: "Boardroom",
    type: "meeting-room",
    description: "Professional boardroom with large conference table, presentation screen, and video conferencing equipment.",
    capacity: 12,
    pricePerDay: 150,
    pricePerMonth: 2200,
    sqft: 350,
    amenities: ["wifi", "power", "projector", "video-conferencing", "whiteboard"],
    color: "#10B981",
    bookedDates: [2, 5, 8, 11, 14, 17, 20, 23, 26],
  },
  {
    id: "meeting-2",
    name: "Huddle Room",
    type: "meeting-room",
    description: "Compact meeting space for quick team syncs and brainstorming sessions. Equipped with a smartboard.",
    capacity: 6,
    pricePerDay: 80,
    pricePerMonth: 1200,
    sqft: 150,
    amenities: ["wifi", "power", "whiteboard", "video-conferencing"],
    color: "#14B8A6",
    bookedDates: [3, 6, 9, 13, 16, 19, 22, 27],
  },
  {
    id: "office-3",
    name: "Corner Office",
    type: "office",
    description: "Premium corner office with panoramic windows on two sides. The most private and prestigious space in our building.",
    capacity: 3,
    pricePerDay: 150,
    pricePerMonth: 2400,
    sqft: 250,
    amenities: ["wifi", "power", "coffee", "printing", "storage", "monitor", "phone-booth"],
    color: "#F97316",
    bookedDates: [7, 14, 21, 28],
  },
];

export const amenityLabels: Record<string, string> = {
  wifi: "High-Speed WiFi",
  power: "Power Outlets",
  coffee: "Coffee & Tea",
  printing: "Printing & Scanning",
  storage: "Lockable Storage",
  monitor: "External Monitor",
  whiteboard: "Whiteboard",
  "phone-booth": "Phone Booth",
  "standing-desk": "Standing Desk",
  projector: "Projector",
  "video-conferencing": "Video Conferencing",
};
