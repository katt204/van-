"use client";

import { motion } from "framer-motion";
import { Briefcase, GraduationCap } from "lucide-react";
import { profile } from "@/data/profile";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { fadeUp, staggerContainer } from "@/lib/motion";

export function Experience() {
  return (
    <section id="work" className="border-b border-line bg-bg-elevated">
      <div className="mx-auto max-w-6xl px-5 py-20 md:px-8 lg:py-28">
        <Reveal>
          <SectionHeading
            eyebrow="Experience"
            title="Roles where I owned real product delivery."
            description="Remote work with US teams, including architecture calls, performance fixes, and features that made it to production."
          />
        </Reveal>

        <motion.ol
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.12 }}
          className="relative mt-14"
        >
          <span
            aria-hidden="true"
            className="absolute top-4 bottom-4 left-4 w-px -translate-x-1/2 bg-line"
          />
          {profile.experience.map((job, index) => (
            <motion.li
              key={`${job.company}-${job.period}`}
              variants={fadeUp}
              className="relative flex gap-5 pb-12 last:pb-0 md:gap-6"
            >
              <span className="relative z-10 flex h-8 w-8 shrink-0 items-center justify-center border border-accent/30 bg-sky-50 text-accent-strong">
                <Briefcase size={14} />
              </span>
              <div className="min-w-0 flex-1 border border-line bg-white p-6 transition hover:border-accent/40 md:p-8">
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <p className="font-mono text-[11px] tracking-[0.16em] text-accent-strong uppercase">
                      {job.period}
                    </p>
                    <h3 className="mt-2 font-display text-2xl font-bold tracking-tight text-ink">
                      {job.role}
                    </h3>
                    <p className="mt-1 text-base text-ink">
                      {job.company}
                      <span className="text-ink-muted"> · {job.location}</span>
                    </p>
                  </div>
                  <span className="font-mono text-[11px] tracking-[0.14em] text-ink-muted uppercase">
                    0{index + 1}
                  </span>
                </div>
                <ul className="mt-5 space-y-3">
                  {job.points.map((point) => (
                    <li
                      key={point}
                      className="relative pl-4 text-sm leading-relaxed text-ink-muted before:absolute before:top-2 before:left-0 before:h-1.5 before:w-1.5 before:bg-accent md:text-base"
                    >
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.li>
          ))}
        </motion.ol>

        <Reveal className="mt-10">
          <div className="flex flex-wrap items-center gap-4 border border-line bg-bg-soft px-6 py-5">
            <div className="flex h-10 w-10 items-center justify-center border border-line bg-white text-ink">
              <GraduationCap size={18} />
            </div>
            <div>
              <p className="font-display text-lg font-semibold text-ink">
                {profile.education.degree}
              </p>
              <p className="text-sm text-ink-muted">
                {profile.education.school} · {profile.education.period}
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
