"use client";

const items = [
  "Advanced SEO",
  "Conversion Optimization",
  "Paid Traffic & PPC",
  "AI Automation & Bots",
  "Email Marketing",
  "Lead Generation",
  "Landing Page Design",
  "AI Chatbots",
  "A/B Testing",
  "Performance Audits",
  "Competitor Analysis",
  "Link Building",
];

export default function Ticker() {
  return (
    <div className="overflow-hidden py-5 border-y border-white/10">
      <div className="flex animate-ticker whitespace-nowrap">
        {[...items, ...items].map((item, i) => (
          <span
            key={i}
            className="inline-flex items-center gap-4 px-6 text-sm font-semibold text-gray-500 uppercase tracking-widest"
          >
            {item}
            <span className="text-[#c9a961] text-xs">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
