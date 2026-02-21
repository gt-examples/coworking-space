"use client";

import { useState } from "react";
import { T, Currency, Num } from "gt-next";
import { plans } from "@/data/membership";

export default function MembershipPage() {
  const [annual, setAnnual] = useState(false);

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
          const period = annual ? "/yr" : "/mo";
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
              <T>
                <h3 className="text-xl font-bold text-white mb-2">{plan.name}</h3>
                <p className="text-sm text-zinc-400 mb-6">{plan.description}</p>
              </T>
              <div className="mb-6">
                <T>
                  <span className="text-3xl font-bold text-[#F59E0B]">
                    <Currency currency="USD">{price}</Currency>
                  </span>
                  <span className="text-zinc-500 text-sm">{period}</span>
                </T>
              </div>
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm">
                    <span className="text-[#F59E0B] mt-0.5">&#10003;</span>
                    <T><span className="text-zinc-300">{feature}</span></T>
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
                  <th key={p.id} className="text-center py-3 text-white font-medium"><T>{p.name}</T></th>
                ))}
              </tr>
            </thead>
            <tbody className="text-zinc-400">
              {[
                ["WiFi", true, true, true],
                ["Coffee & Tea", true, true, true],
                ["Meeting Room Hours", "5 hrs/mo", "10 hrs/mo", "20 hrs/mo"],
                ["Storage", false, true, true],
                ["External Monitor", false, true, true],
                ["24/7 Access", false, true, true],
                ["Mail Handling", false, true, true],
                ["Phone Booth", false, false, true],
                ["Signage", false, false, true],
              ].map(([feature, ...vals], i) => (
                <tr key={i} className="border-b border-zinc-800/50">
                  <td className="py-3"><T>{feature as string}</T></td>
                  {vals.map((v, j) => (
                    <td key={j} className="text-center py-3">
                      {v === true ? (
                        <span className="text-[#F59E0B]">&#10003;</span>
                      ) : v === false ? (
                        <span className="text-zinc-600">&mdash;</span>
                      ) : (
                        <T><span>{v as string}</span></T>
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
