"use client";

import FadeIn from "@/components/FadeIn";

export default function Contact() {
  return (
    <section id="contact" className="py-16 md:py-32">
      <div className="mx-auto max-w-2xl px-6 text-center">
        <FadeIn>
          <p className="font-mono text-sm mb-4 gradient-text">05. What&apos;s Next?</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Get In Touch</h2>
          <p className="text-muted text-lg mb-4 leading-relaxed">
            I&apos;m always open to new opportunities and interesting projects.
            Whether you have a question or just want to say hello, feel free to
            reach out.
          </p>
          <p className="font-mono text-sm text-muted/70 mb-12">
            Based in Spring Hill, FL
          </p>
          <a
            href="mailto:ericterlop@yahoo.com"
            className="inline-block px-8 py-4 rounded-lg bg-gradient-to-br from-accent to-accent-secondary text-white font-mono transition-all text-lg hover:shadow-[0_0_30px_rgba(124,58,237,0.3),0_0_60px_rgba(6,182,212,0.15)]"
          >
            Say Hello
          </a>
        </FadeIn>
      </div>
    </section>
  );
}
