"use client";

import { useState } from "react";
import { T, Currency, Num, useGT } from "gt-next";
import { plans } from "@/data/membership";

export default function MembershipPage() {
  const gt = useGT();
  const [annual, setAnnual] = useState(false);

  const planNames: Record<string, string> = {
    "hot-desk": gt("Hot Desk"),
    "dedicated-desk": gt("Dedicated Desk"),
    "private-office": gt("Private Office"),
  };

  const planDescriptions: Record<string, string> = {
    "hot-desk": gt("Flexible seating in our open workspace. Perfect for freelancers who need a professional environment a few days a week."),
    "dedicated-desk": gt("Your own permanent desk with storage. Ideal for remote workers and small business owners who want a consistent workspace."),
    "private-office": gt("A fully enclosed office for teams that need privacy and focus. Customizable layout with premium amenities."),
  };

  const featureTranslations: Record<string, string> = {
    "Access to open workspace": gt("Access to open workspace"),
    "High-speed WiFi": gt("High-speed WiFi"),
    "Coffee and tea included": gt("Coffee and tea included"),
    "5 hours of meeting room use per month": gt("5 hours of meeting room use per month"),
    "Community events access": gt("Community events access"),
    "Printing (50 pages/month)": gt("Printing (50 pages/month)"),
    "Personal dedicated desk": gt("Personal dedicated desk"),
    "Lockable storage cabinet": gt("Lockable storage cabinet"),
    "10 hours of meeting room use per month": gt("10 hours of meeting room use per month"),
    "External monitor provided": gt("External monitor provided"),
    "Printing (200 pages/month)": gt("Printing (200 pages/month)"),
    "Mail handling": gt("Mail handling"),
    "24/7 access": gt("24/7 access"),
    "Private enclosed office": gt("Private enclosed office"),
    "Fits 2-8 people": gt("Fits 2-8 people"),
    "Lockable door and storage": gt("Lockable door and storage"),
    "20 hours of meeting room use per month": gt("20 hours of meeting room use per month"),
    "External monitors for each desk": gt("External monitors for each desk"),
    "Printing (unlimited)": gt("Printing (unlimited)"),
    "Phone booth access": gt("Phone booth access"),
    "Company signage on door": gt("Company signage on door"),
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <T>
          <h1 className="text-3xl font-bold text-white mb-2">Membership Plans</h1>
          <p className="text-zinc-400 max-w-xl mx-auto">
            Choose the plan that fits your work style. All memberships include community access and basic amenities.
          </p>
        </T>

        {/* Toggle */}
        <div className="flex items-center justify-center gap-4 mt-8">
          <T>
            <span className={`text-sm ${!annual ? "text-white font-medium" : "text-zinc-500"}`}>Monthly</span>
          </T>
          <button
            onClick={() => setAnnual(!annual)}
            className={`relative w-12 h-6 rounded-full transition-colors ${
              annual ? "bg-[#F59E0B]" : "bg-zinc-700"
            }`}
          >
            <div
              className={`absolute top-1 w-4 h-4 rounded-full bg-white transition-transform ${
                annual ? "translate-x-7" : "translate-x-1"
              }`}
            />
          </button>
          <T>
            <span className={`text-sm ${annual ? "text-white font-medium" : "text-zinc-500"}`}>
              Annual <span className="text-[#F59E0B] text-xs">(Save <Num>{17}</Num>%)</span>
            </span>
          </T>
        </div>
      </div>

      {/* Plan cards */}
      <div className="grid md:grid-cols-3 gap-6">
        {plans.map((plan) => {
          const price = annual ? plan.annualPrice : plan.monthlyPrice;
          return (
            <div
              key={plan.id}
              className={`bg-zinc-900 rounded-xl p-6 border ${
                plan.highlighted ? "border-[#F59E0B]" : "border-zinc-800"
              } relative`}
            >
              {plan.highlighted && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#F59E0B] text-[#18181B] text-xs font-bold px-3 py-1 rounded-full">
                  <T>Most Popular</T>
                </div>
              )}
              <h3 className="text-xl font-bold text-white mb-2">{planNames[plan.id] || plan.name}</h3>
              <p className="text-sm text-zinc-400 mb-6">{planDescriptions[plan.id] || plan.description}</p>
              <div className="mb-6">
                <span className="text-3xl font-bold text-[#F59E0B]">
                  <Currency currency="USD">{price}</Currency>
                </span>
                {annual ? <T><span className="text-zinc-500 text-sm">/yr</span></T> : <T><span className="text-zinc-500 text-sm">/mo</span></T>}
              </div>
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm">
                    <span className="text-[#F59E0B] mt-0.5">&#10003;</span>
                    <span className="text-zinc-300">{featureTranslations[feature] || feature}</span>
                  </li>
                ))}
              </ul>
              <button
                className={`w-full py-3 rounded-lg font-semibold transition-colors ${
                  plan.highlighted
                    ? "bg-[#F59E0B] text-[#18181B] hover:bg-amber-400"
                    : "bg-zinc-800 text-zinc-300 hover:bg-zinc-700"
                }`}
              >
                <T>Get Started</T>
              </button>
            </div>
          );
        })}
      </div>

      {/* Comparison table */}
      <div className="mt-16">
        <T>
          <h2 className="text-2xl font-bold text-white mb-8 text-center">Compare Plans</h2>
        </T>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-zinc-800">
                <th className="text-left py-3 text-zinc-400 font-medium"><T>Feature</T></th>
                {plans.map((p) => (
                  <th key={p.id} className="text-center py-3 text-white font-medium">{planNames[p.id] || p.name}</th>
                ))}
              </tr>
            </thead>
            <tbody className="text-zinc-400">
              {([
                [gt("WiFi"), true, true, true],
                [gt("Coffee & Tea"), true, true, true],
                [gt("Meeting Room Hours"), gt("5 hrs/mo"), gt("10 hrs/mo"), gt("20 hrs/mo")],
                [gt("Storage"), false, true, true],
                [gt("External Monitor"), false, true, true],
                [gt("24/7 Access"), false, true, true],
                [gt("Mail Handling"), false, true, true],
                [gt("Phone Booth"), false, false, true],
                [gt("Signage"), false, false, true],
              ] as [string, string | boolean, string | boolean, string | boolean][]).map(([feature, ...vals], i) => (
                <tr key={i} className="border-b border-zinc-800/50">
                  <td className="py-3">{feature}</td>
                  {vals.map((v, j) => (
                    <td key={j} className="text-center py-3">
                      {v === true ? (
                        <span className="text-[#F59E0B]">&#10003;</span>
                      ) : v === false ? (
                        <span className="text-zinc-600">&mdash;</span>
                      ) : (
                        <span>{v}</span>
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
