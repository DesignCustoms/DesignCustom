"use client";
import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Only activate on pointer devices (not iPhone/touch screens)
    if (!window.matchMedia("(pointer: fine)").matches) return;

    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    let mx = -200, my = -200;
    let rx = -200, ry = -200;
    let isDown = false;
    let rafId: number;

    const moveDot = (x: number, y: number, scale = 1) => {
      dot.style.transform = `translate(calc(${x}px - 50%), calc(${y}px - 50%)) scale(${scale})`;
    };

    const moveRing = (x: number, y: number, scale = 1) => {
      ring.style.transform = `translate(calc(${x}px - 50%), calc(${y}px - 50%)) scale(${scale})`;
    };

    const onMove = (e: MouseEvent) => {
      mx = e.clientX;
      my = e.clientY;
      moveDot(mx, my, isDown ? 0.4 : 1);
      dot.style.opacity = "1";
      ring.style.opacity = "1";
    };

    const onDown = () => {
      isDown = true;
      moveDot(mx, my, 0.4);
      ring.style.opacity = "1";
      ring.style.borderColor = "#c9a961";
      ring.style.transform = `translate(calc(${rx}px - 50%), calc(${ry}px - 50%)) scale(0.65)`;
    };

    const onUp = () => {
      isDown = false;
      moveDot(mx, my, 1);
      ring.style.borderColor = "rgba(201,169,97,0.6)";
    };

    document.addEventListener("mousemove", onMove);
    document.addEventListener("mousedown", onDown);
    document.addEventListener("mouseup", onUp);

    const tick = () => {
      rx += (mx - rx) * 0.11;
      ry += (my - ry) * 0.11;
      if (!isDown) moveRing(rx, ry, 1);
      rafId = requestAnimationFrame(tick);
    };
    rafId = requestAnimationFrame(tick);

    // Load-in click animation at page center
    const cx = window.innerWidth / 2;
    const cy = window.innerHeight / 2;
    mx = cx; my = cy; rx = cx; ry = cy;
    moveDot(cx, cy); moveRing(cx, cy);

    const loadTimer = setTimeout(() => {
      dot.style.opacity = "1";
      ring.style.opacity = "1";
      onDown();
      const upTimer = setTimeout(onUp, 240);
      return () => clearTimeout(upTimer);
    }, 800);

    return () => {
      clearTimeout(loadTimer);
      document.removeEventListener("mousemove", onMove);
      document.removeEventListener("mousedown", onDown);
      document.removeEventListener("mouseup", onUp);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <>
      <div
        ref={dotRef}
        className="fixed top-0 left-0 z-[9999] pointer-events-none w-2.5 h-2.5 rounded-full bg-[#c9a961] opacity-0"
        style={{ transition: "transform 0.08s ease, opacity 0.4s ease", willChange: "transform" }}
      />
      <div
        ref={ringRef}
        className="fixed top-0 left-0 z-[9998] pointer-events-none w-10 h-10 rounded-full border-2 opacity-0"
        style={{
          borderColor: "rgba(201,169,97,0.6)",
          transition: "opacity 0.4s ease, border-color 0.2s ease, transform 0.18s ease",
          willChange: "transform",
        }}
      />
    </>
  );
}
