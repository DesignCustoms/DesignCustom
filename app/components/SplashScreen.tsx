"use client";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function SplashScreen() {
  // 0 = initial (invisible), 1 = logo enters, 2 = cursor click, 3 = exit, 4 = done
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    // Lock scroll while splash is visible
    document.body.style.overflow = "hidden";

    const t1 = setTimeout(() => setPhase(1), 80);    // logo fades + scales in
    const t2 = setTimeout(() => setPhase(2), 1050);  // cursor click
    const t3 = setTimeout(() => setPhase(3), 1420);  // begin exit fade
    const t4 = setTimeout(() => {
      setPhase(4);
      document.body.style.overflow = "";
    }, 2300);

    return () => {
      [t1, t2, t3, t4].forEach(clearTimeout);
      document.body.style.overflow = "";
    };
  }, []);

  if (phase === 4) return null;

  const logoStyle: React.CSSProperties =
    phase === 0
      ? { opacity: 0, transform: "scale(0.86) translateY(14px)", transition: "none" }
      : phase === 1
      ? { opacity: 1, transform: "scale(1) translateY(0px)", transition: "opacity 0.5s ease, transform 0.6s cubic-bezier(0.34,1.25,0.64,1)" }
      : phase === 2
      ? { opacity: 1, transform: "scale(0.95)", transition: "transform 0.13s ease" }
      : { opacity: 1, transform: "scale(1)", transition: "transform 0.22s ease" };

  return (
    <div
      className="fixed inset-0 z-[99999] bg-[#080810] flex items-center justify-center"
      style={{
        opacity: phase === 3 ? 0 : 1,
        transition: phase === 3 ? "opacity 0.88s ease" : undefined,
        pointerEvents: phase >= 3 ? "none" : "all",
      }}
    >
      <div className="relative" style={logoStyle}>

        {/* Your full logo */}
        <Image
          src="/dc-full-logo.png"
          alt="Design Custom"
          width={260}
          height={260}
          priority
          className="logo-glow select-none"
          draggable={false}
        />

        {/* Cursor pointer that clicks — positioned over the cursor element in your logo */}
        <div
          className="absolute"
          style={{
            bottom: "16%",
            right: "12%",
            opacity: phase >= 1 ? 1 : 0,
            transform: phase === 2 ? "scale(0.65) translateY(4px)" : "scale(1)",
            transition: phase === 2
              ? "transform 0.1s ease"
              : phase > 2
              ? "transform 0.18s ease, opacity 0.3s ease"
              : "opacity 0.4s ease 0.4s",
            filter: "drop-shadow(0 2px 6px rgba(0,0,0,0.8))",
          }}
        >
          {/* Arrow cursor SVG */}
          <svg width="30" height="34" viewBox="0 0 30 34" fill="none">
            <path
              d="M3 2L3 24.5L8.8 18.5L13.2 28.5L16.8 27L12.4 17L20.5 17L3 2Z"
              fill="white"
              stroke="#1a1a2e"
              strokeWidth="2"
              strokeLinejoin="round"
              strokeLinecap="round"
            />
          </svg>
        </div>

        {/* Gold click ripple — appears at click moment */}
        {phase >= 2 && (
          <div
            className="absolute pointer-events-none"
            style={{ bottom: "15%", right: "11%", width: 36, height: 36 }}
          >
            <div className="splash-ripple" />
          </div>
        )}

      </div>
    </div>
  );
}
