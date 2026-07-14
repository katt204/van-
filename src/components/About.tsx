"use client";

import { motion } from "framer-motion";
import { profile } from "@/data/profile";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { fadeUp, staggerContainer } from "@/lib/motion";

export function About() {
  return (
    <section id="about" className="border-b border-line bg-bg-elevated">
      <div className="mx-auto max-w-6xl px-5 py-20 md:px-8 lg:py-28">
        <Reveal>
          <SectionHeading
            eyebrow="About"
            title="Engineering with ownership and measurable impact."
            description="I work with remote US product teams, from architecture choices through to polished releases."
          />
        </Reveal>

        <div className="mt-12 grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <Reveal>
            <div className="space-y-5 text-base leading-relaxed text-ink-muted md:text-lg">
              {profile.about.map((paragraph) => (
                <p key={paragraph.slice(0, 40)}>{paragraph}</p>
              ))}
            </div>
          </Reveal>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="grid gap-3 sm:grid-cols-3 lg:grid-cols-1"
          >
            {profile.highlights.map((item) => (
              <motion.div
                key={item.label}
                variants={fadeUp}
                className="border border-line bg-bg-soft px-5 py-6 transition hover:border-accent/40"
              >
                <p className="font-display text-4xl font-bold tracking-tight text-accent-strong">
                  {item.value}
                </p>
                <p className="mt-2 text-sm text-ink-muted">{item.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <div className="mt-16">
          <Reveal>
            <h3 className="font-display text-2xl font-bold tracking-tight text-ink">
              Engineering philosophy
            </h3>
          </Reveal>
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="mt-6 grid gap-4 md:grid-cols-3"
          >
            {profile.philosophy.map((item) => (
              <motion.article
                key={item.title}
                variants={fadeUp}
                className="border border-line bg-white p-6 transition hover:-translate-y-1 hover:border-accent/50 hover:shadow-[0_18px_40px_rgba(15,23,42,0.08)]"
              >
                <h4 className="font-display text-lg font-semibold text-ink">
                  {item.title}
                </h4>
                <p className="mt-3 text-sm leading-relaxed text-ink-muted">
                  {item.description}
                </p>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
