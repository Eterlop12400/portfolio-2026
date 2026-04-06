"use client";

import FadeIn from "@/components/FadeIn";
import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="py-16 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <FadeIn className="flex items-center gap-4 mb-10 md:mb-16">
          <h2 className="text-2xl md:text-3xl font-bold whitespace-nowrap">
            <span className="font-mono text-lg md:text-xl mr-2 gradient-text">04.</span>
            About Me
          </h2>
          <div className="h-px flex-1 max-w-xs bg-gradient-to-r from-border to-transparent" />
        </FadeIn>

        <FadeIn className="grid grid-cols-1 lg:grid-cols-5 gap-8 md:gap-12 items-start">
          <div className="lg:col-span-3 space-y-4 text-muted leading-relaxed">
            <p>
              I&apos;m a full-stack developer who loves taking ideas and
              turning them into real, working products. I can work across the
              entire stack, but my sweet spot is the frontend. I get the most
              energy from crafting interfaces that feel intuitive and bringing
              a vision to life in the browser.
            </p>
            <p>
              Most of my work revolves around{" "}
              <span className="text-accent-light">React</span>,{" "}
              <span className="text-accent-light">Next.js</span>, and{" "}
              <span className="text-accent-light">Node.js</span>. I&apos;ve
              built everything from marketplace platforms with payments and
              escrow systems to internal tools and business websites —
              always focused on clean design and a great user experience.
            </p>
            <p>
              When I&apos;m not coding, I&apos;m probably deep in the
              trading card game community, which also happens to be the
              inspiration behind some of my favorite projects.
            </p>
          </div>

          {/* Photo placeholder */}
          <div className="lg:col-span-2 flex justify-center">
            <div className="relative group">
              <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-xl overflow-hidden border-2 border-border group-hover:border-accent-light transition-colors duration-300">
                <Image
                  src="/images/headshot.jpg"
                  alt="Eric Terlop"
                  fill
                  className="object-cover"
                  sizes="256px"
                />
              </div>
              <div className="absolute -inset-2 rounded-xl border-2 border-accent-secondary/20 -z-10 translate-x-3 translate-y-3 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-300" />
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
