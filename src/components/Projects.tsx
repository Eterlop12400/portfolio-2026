"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { projects } from "@/data/projects";
import Image from "next/image";

function ProjectCard({
  project,
  index,
}: {
  project: (typeof projects)[0];
  index: number;
}) {
  const isEven = index % 2 === 0;
  const [activeImage, setActiveImage] = useState(0);
  const images = project.images ?? [{ src: project.image, label: project.title }];

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`group relative grid grid-cols-1 lg:grid-cols-2 gap-8 items-center ${
        !isEven ? "lg:direction-rtl" : ""
      }`}
    >
      {/* Image */}
      <div
        className={`relative ${!isEven ? "lg:order-2" : ""}`}
      >
        <div className="relative aspect-video rounded-xl overflow-hidden border border-border bg-surface gradient-border">
          <div className="absolute inset-0 bg-accent/10 group-hover:bg-transparent transition-all duration-300 z-10" />
          <Image
            src={images[activeImage].src}
            alt={`${project.title} - ${images[activeImage].label}`}
            fill
            className="object-contain"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>
        {images.length > 1 && (
          <div className="flex items-center justify-center gap-2 mt-3">
            {images.map((img, i) => (
              <button
                key={img.label}
                onClick={() => setActiveImage(i)}
                className={`font-mono text-xs px-4 py-2 rounded-full transition-all ${
                  i === activeImage
                    ? "bg-accent text-white"
                    : "bg-surface-light text-muted hover:text-foreground"
                }`}
              >
                {img.label}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Content */}
      <div className={!isEven ? "lg:order-1" : ""}>
        {project.featured && (
          <p className="font-mono text-sm gradient-text mb-2">Featured Project</p>
        )}
        <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
        <div className="p-5 rounded-xl bg-surface border border-border mb-4" aria-live="polite">
          <p className="text-muted leading-relaxed">
            {images[activeImage].description || project.description}
          </p>
          {project.highlights && project.highlights.length > 0 && (
            <ul className="mt-4 grid grid-cols-1 gap-y-1.5 text-sm text-muted">
              {project.highlights.map((h) => (
                <li key={h} className="flex items-baseline gap-2">
                  <span className="text-accent text-xs shrink-0">&#9654;</span>
                  <span>{h}</span>
                </li>
              ))}
            </ul>
          )}
        </div>
        <div
          className="flex flex-wrap gap-2 mb-6"
        >
          {project.tech.map((t) => (
            <span
              key={t}
              className="font-mono text-xs px-3 py-1 rounded-full bg-surface-light text-muted"
            >
              {t}
            </span>
          ))}
        </div>
        <div
          className="flex items-center gap-4"
        >
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted hover:text-accent transition-colors"
              aria-label={`${project.title} GitHub`}
            >
              <svg
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          )}
          {(images[activeImage].url || project.liveUrl) && (
            <a
              href={images[activeImage].url || project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted hover:text-accent transition-colors"
              aria-label={`${project.title} live site`}
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="py-16 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-4 mb-10 md:mb-16"
        >
          <h2 className="text-2xl md:text-3xl font-bold whitespace-nowrap">
            <span className="font-mono text-lg md:text-xl mr-2 gradient-text">01.</span>
            Things I&apos;ve Built
          </h2>
          <div className="h-px flex-1 max-w-xs bg-gradient-to-r from-border to-transparent" />
        </motion.div>

        <div className="space-y-16 md:space-y-24">
          {projects
            .filter((p) => p.featured)
            .map((project, i) => (
              <ProjectCard key={project.title} project={project} index={i} />
            ))}
        </div>

        {/* Other projects */}
        {projects.some((p) => !p.featured) && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 md:mt-24"
          >
            <h3 className="text-xl font-bold text-center mb-8">
              Other Projects
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects
                .filter((p) => !p.featured)
                .map((project) => (
                  <div
                    key={project.title}
                    className="group p-6 rounded-xl bg-surface border border-border hover:border-accent/40 transition-all glow gradient-border"
                  >
                    <h4 className="text-lg font-bold mb-2 group-hover:text-accent transition-colors">
                      {project.title}
                    </h4>
                    <p className="text-sm text-muted mb-4 leading-relaxed">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {project.tech.map((t) => (
                        <span
                          key={t}
                          className="font-mono text-xs text-muted/70"
                        >
                          {t}
                          {project.tech.indexOf(t) < project.tech.length - 1 &&
                            " ·"}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
}
