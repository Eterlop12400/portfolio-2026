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
  // Start visible so server HTML shows content immediately
  const [visible, setVisible] = useState(true);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // If already in viewport, stay visible
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight) {
      setVisible(true);
      setMounted(true);
      return;
    }

    // Not in viewport — hide and animate in when scrolled to
    setVisible(false);
    setMounted(true);

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
        mounted
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
