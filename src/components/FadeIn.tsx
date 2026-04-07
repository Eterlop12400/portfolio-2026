"use client";

import { useRef, useEffect, useState, type ReactNode } from "react";

export default function FadeIn({
  children,
  className = "",
  delay = 0,
  margin = "0px",
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  margin?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(true);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Skip animations on mobile — content stays visible
    if (window.innerWidth < 768) return;

    const rect = el.getBoundingClientRect();
    // Already in viewport — stay visible, no animation
    if (rect.top < window.innerHeight) return;

    // Below viewport on desktop — hide and animate in on scroll
    setVisible(false);
    setAnimate(true);

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: margin }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [margin]);

  return (
    <div
      ref={ref}
      className={className}
      style={
        animate
          ? {
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(20px)",
              transition: `opacity 0.5s ease-out ${delay}s, transform 0.5s ease-out ${delay}s`,
            }
          : undefined
      }
    >
      {children}
    </div>
  );
}
