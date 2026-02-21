export interface MembershipPlan {
  id: string;
  name: string;
  description: string;
  monthlyPrice: number;
  annualPrice: number;
  features: string[];
  highlighted: boolean;
}

export const plans: MembershipPlan[] = [
  {
    id: "hot-desk",
    name: "Hot Desk",
    description: "Flexible seating in our open workspace. Perfect for freelancers who need a professional environment a few days a week.",
    monthlyPrice: 199,
    annualPrice: 1990,
    features: [
      "Access to open workspace",
      "High-speed WiFi",
      "Coffee and tea included",
      "5 hours of meeting room use per month",
      "Community events access",
      "Printing (50 pages/month)",
    ],
    highlighted: false,
  },
  {
    id: "dedicated-desk",
    name: "Dedicated Desk",
    description: "Your own permanent desk with storage. Ideal for remote workers and small business owners who want a consistent workspace.",
    monthlyPrice: 399,
    annualPrice: 3990,
    features: [
      "Personal dedicated desk",
      "Lockable storage cabinet",
      "High-speed WiFi",
      "Coffee and tea included",
      "10 hours of meeting room use per month",
      "External monitor provided",
      "Printing (200 pages/month)",
      "Mail handling",
      "24/7 access",
    ],
    highlighted: true,
  },
  {
    id: "private-office",
    name: "Private Office",
    description: "A fully enclosed office for teams that need privacy and focus. Customizable layout with premium amenities.",
    monthlyPrice: 899,
    annualPrice: 8990,
    features: [
      "Private enclosed office",
      "Fits 2-8 people",
      "Lockable door and storage",
      "High-speed WiFi",
      "Coffee and tea included",
      "20 hours of meeting room use per month",
      "External monitors for each desk",
      "Printing (unlimited)",
      "Mail handling",
      "24/7 access",
      "Phone booth access",
      "Company signage on door",
    ],
    highlighted: false,
  },
];
