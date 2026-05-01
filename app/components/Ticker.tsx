"use client";

const items = [
  "Advanced SEO",
  "Conversion Optimization",
  "Social Media Growth",
  "Analytics & Insights",
  "Email Marketing",
  "Ongoing Maintenance",
  "Landing Page Design",
  "Content Strategy",
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
