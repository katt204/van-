"use client";

import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import { Expand, ExternalLink } from "lucide-react";
import { profile } from "@/data/profile";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { ProjectModal } from "@/components/ProjectModal";
import { fadeUp, staggerContainer } from "@/lib/motion";
import { getTechIcon } from "@/lib/icons";

type Project = (typeof profile.projects)[number];

function ProjectMedia({ project }: { project: Project }) {
  return (
    <div className="group overflow-hidden rounded-xl border border-white/10 bg-[#060d18] shadow-[0_24px_60px_rgba(0,0,0,0.35)] transition group-hover/card:border-cyan-300/40">
      <div className="flex items-center gap-2 border-b border-white/10 px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-rose-400/80" />
        <span className="h-2.5 w-2.5 rounded-full bg-amber-300/80" />
        <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/80" />
        <span className="ml-3 truncate font-mono text-[10px] tracking-wide text-slate-400">
          {project.links.demo.replace(/^https?:\/\//, "")}
        </span>
      </div>

      <div className="relative aspect-[16/10] bg-black">
        <Image
          src={project.media.cover}
          alt={project.media.alt}
          fill
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="object-cover object-top transition duration-500 group-hover/card:scale-[1.02]"
          priority={project.slug === "breshna"}
        />
        <div className="absolute inset-0 flex items-end justify-between bg-gradient-to-t from-black/55 via-transparent to-transparent p-4 opacity-0 transition group-hover/card:opacity-100">
          <span className="inline-flex items-center gap-2 border border-white/20 bg-black/40 px-3 py-1.5 font-mono text-[10px] tracking-[0.14em] text-white uppercase backdrop-blur-sm">
            <Expand size={12} />
            View details
          </span>
        </div>
      </div>
    </div>
  );
}

export function Projects() {
  const [activeSlug, setActiveSlug] = useState<string | null>(null);
  const activeProject =
    profile.projects.find((project) => project.slug === activeSlug) ?? null;

  return (
    <section id="projects" className="border-b border-panel-line bg-panel text-white">
      <div className="mx-auto max-w-6xl px-5 py-20 md:px-8 lg:py-28">
        <Reveal>
          <SectionHeading
            light
            eyebrow="Projects"
            title="Selected work I have shipped."
            description="Live products across games, construction brands, social SaaS, calendar tools, and pharma marketplaces. Click a project for more detail."
          />
        </Reveal>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.08 }}
          className="mt-14 space-y-10"
        >
          {profile.projects.map((project, index) => (
            <motion.article
              key={project.slug}
              variants={fadeUp}
              className={`group/card grid cursor-pointer items-center gap-8 border border-white/10 bg-panel-elevated p-5 transition hover:border-cyan-300/30 md:p-8 lg:grid-cols-2 ${
                index % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
              }`}
              onClick={() => setActiveSlug(project.slug)}
              onKeyDown={(event) => {
                if (event.key === "Enter" || event.key === " ") {
                  event.preventDefault();
                  setActiveSlug(project.slug);
                }
              }}
              role="button"
              tabIndex={0}
              aria-label={`Open ${project.title} project details`}
            >
              <ProjectMedia project={project} />

              <div>
                <p className="font-mono text-[11px] tracking-[0.16em] text-cyan-300/80 uppercase">
                  {project.company}
                </p>
                <h3 className="mt-2 font-display text-2xl font-bold tracking-tight md:text-3xl">
                  {project.title}
                </h3>
                <p className="mt-3 text-base leading-relaxed text-slate-300">
                  {project.summary}
                </p>

                <div className="mt-5 space-y-3 text-sm leading-relaxed">
                  <p>
                    <span className="font-semibold text-white">Challenge: </span>
                    <span className="text-slate-400">{project.challenge}</span>
                  </p>
                  <p>
                    <span className="font-semibold text-white">Result: </span>
                    <span className="text-slate-400">{project.result}</span>
                  </p>
                </div>

                <ul className="mt-5 flex flex-wrap gap-2">
                  {project.stack.map((tech) => {
                    const Icon = getTechIcon(tech);
                    return (
                      <li
                        key={tech}
                        className="inline-flex items-center gap-1.5 border border-white/10 bg-white/5 px-2.5 py-1 text-xs text-slate-200"
                      >
                        <Icon className="h-3 w-3 text-cyan-300" />
                        {tech}
                      </li>
                    );
                  })}
                </ul>

                <div className="mt-6 flex flex-wrap gap-3">
                  <a
                    href={project.links.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(event) => event.stopPropagation()}
                    className="inline-flex items-center gap-2 border border-cyan-300/40 px-4 py-2 font-mono text-[11px] tracking-[0.14em] text-cyan-200 uppercase transition hover:bg-cyan-300 hover:text-panel"
                  >
                    <ExternalLink size={13} />
                    {project.links.label}
                  </a>
                  <button
                    type="button"
                    onClick={(event) => {
                      event.stopPropagation();
                      setActiveSlug(project.slug);
                    }}
                    className="inline-flex items-center gap-2 border border-white/15 px-4 py-2 font-mono text-[11px] tracking-[0.14em] text-white/75 uppercase transition hover:border-white hover:text-white"
                  >
                    <Expand size={13} />
                    View details
                  </button>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>

      <ProjectModal
        project={activeProject}
        onClose={() => setActiveSlug(null)}
      />
    </section>
  );
}
