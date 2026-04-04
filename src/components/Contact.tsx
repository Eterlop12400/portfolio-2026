"use client";

import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section id="contact" className="py-24 md:py-32">
      <div className="mx-auto max-w-2xl px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="font-mono text-sm mb-4 gradient-text">05. What&apos;s Next?</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Get In Touch</h2>
          <p className="text-muted text-lg mb-12 leading-relaxed">
            I&apos;m always open to new opportunities and interesting projects.
            Whether you have a question or just want to say hello, feel free to
            reach out.
          </p>
          <a
            href="mailto:ericterlop@yahoo.com"
            className="inline-block px-8 py-4 rounded-lg btn-gradient text-white font-mono transition-all text-lg"
          >
            Say Hello
          </a>
        </motion.div>
      </div>
    </section>
  );
}
