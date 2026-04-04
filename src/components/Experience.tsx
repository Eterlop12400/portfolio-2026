"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const jobs = [
  {
    company: "University of South Florida",
    shortName: "USF",
    title: "Web Developer",
    location: "Tampa, FL",
    range: "May 2023 — Present",
    bullets: [
      "Develop and maintain responsive, accessible web pages and email templates using HTML, SCSS, MJML, and JavaScript",
      "Transitioned marketing data and workflows from HubSpot to Slate",
      "Collaborate on personalized, token-driven content across Slate campaigns",
      "Optimize legacy code and build new components aligned with branding guidelines",
      "Contribute to QA processes and troubleshoot cross-browser rendering issues",
    ],
  },
  {
    company: "Care2",
    shortName: "Care2",
    title: "Software Engineer",
    location: "Redwood City, CA",
    range: "Feb 2021 — May 2023",
    bullets: [
      "Developed websites using HTML, CSS, JavaScript, jQuery, and related technologies",
      "Translated design mockups into functional, responsive web interfaces",
      "Tested and reviewed website designs for responsiveness and cross-browser compatibility",
      "Collaborated with development teams using Agile methodologies",
    ],
  },
];

export default function Experience() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section id="experience" className="py-24 md:py-32">
      <div className="mx-auto max-w-4xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-4 mb-16"
        >
          <h2 className="text-3xl font-bold whitespace-nowrap">
            <span className="font-mono text-xl mr-2 gradient-text">02.</span>
            Where I&apos;ve Worked
          </h2>
          <div className="h-px flex-1 max-w-xs bg-gradient-to-r from-border to-transparent" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row gap-0"
        >
          {/* Tabs */}
          <div className="flex md:flex-col border-b md:border-b-0 md:border-l border-border">
            {jobs.map((job, i) => (
              <button
                key={job.shortName}
                onClick={() => setActiveTab(i)}
                className={`px-5 py-3 text-sm font-mono text-left whitespace-nowrap transition-all ${
                  i === activeTab
                    ? "text-accent bg-accent/5 border-b-2 md:border-b-0 md:border-l-2 border-accent md:-ml-px"
                    : "text-muted hover:text-foreground hover:bg-surface-light"
                }`}
              >
                {job.shortName}
              </button>
            ))}
          </div>

          {/* Content */}
          <div className="pt-6 md:pt-0 md:pl-8 min-h-[320px]">
            <h3 className="text-xl font-bold mb-1">
              {jobs[activeTab].title}{" "}
              <span className="gradient-text">@ {jobs[activeTab].company}</span>
            </h3>
            <p className="font-mono text-sm text-muted mb-6">
              {jobs[activeTab].range} · {jobs[activeTab].location}
            </p>
            <ul className="space-y-3">
              {jobs[activeTab].bullets.map((bullet, i) => (
                <li key={i} className="flex gap-3 text-muted leading-relaxed">
                  <span className="text-accent-secondary text-xs mt-1.5 shrink-0">&#9656;</span>
                  <span className="text-sm">{bullet}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
