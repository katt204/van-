"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowDownRight, Download, Sparkles } from "lucide-react";
import { profile } from "@/data/profile";
import { fadeUp, staggerContainer } from "@/lib/motion";
import { HeroVisual } from "@/components/HeroVisual";

export function Hero() {
  const reduce = useReducedMotion();

  return (
    <section id="top" className="relative min-h-[100svh] overflow-hidden">
      <div className="absolute inset-0 hero-shell" />
      <div className="absolute inset-0 hero-grid opacity-60" />
      <div className="pointer-events-none absolute -top-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-cyan-400/20 blur-3xl pulse-soft" />
      <div className="pointer-events-none absolute right-[-4rem] bottom-10 h-64 w-64 rounded-full bg-sky-500/15 blur-3xl" />

      <div className="relative z-10 mx-auto flex min-h-[100svh] w-full max-w-6xl flex-col justify-center px-5 pb-16 pt-28 md:px-8 md:pb-20 md:pt-28">
        <motion.div
          variants={reduce ? undefined : staggerContainer}
          initial={reduce ? undefined : "hidden"}
          animate={reduce ? undefined : "visible"}
          className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]"
        >
          <div>
            <motion.div
              variants={fadeUp}
              className="inline-flex items-center gap-2 border border-white/15 bg-white/5 px-3 py-1.5 text-cyan-200 backdrop-blur-sm"
            >
              <Sparkles size={14} />
              <span className="font-mono text-[11px] tracking-[0.16em] uppercase">
                {profile.availability}
              </span>
            </motion.div>

            <motion.p
              variants={fadeUp}
              className="mt-6 font-mono text-[11px] tracking-[0.2em] text-white/50 uppercase"
            >
              {profile.title} · {profile.location}
            </motion.p>

            <motion.h1
              variants={fadeUp}
              className="mt-4 font-display text-[clamp(2.4rem,7vw,4.8rem)] leading-[0.95] font-extrabold tracking-tight text-white"
            >
              {profile.name}
            </motion.h1>

            <motion.div
              variants={fadeUp}
              className="mt-5 h-1 w-20 animated-gradient"
            />

            <motion.p
              variants={fadeUp}
              className="mt-6 max-w-xl font-display text-xl leading-snug font-medium text-white md:text-2xl"
            >
              {profile.headline}
            </motion.p>

            <motion.p
              variants={fadeUp}
              className="mt-4 max-w-xl text-base leading-relaxed text-slate-300 md:text-lg"
            >
              {profile.summary}
            </motion.p>

            <motion.div variants={fadeUp} className="mt-8 flex flex-wrap gap-3">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 bg-cyan-400 px-5 py-3 font-mono text-[11px] tracking-[0.16em] text-panel uppercase transition hover:bg-cyan-300"
              >
                View Projects
                <ArrowDownRight size={14} />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 border border-white/25 px-5 py-3 font-mono text-[11px] tracking-[0.16em] text-white uppercase transition hover:border-white hover:bg-white hover:text-panel"
              >
                Contact Me
              </a>
              <a
                href={profile.resumeUrl}
                download
                className="inline-flex items-center gap-2 px-3 py-3 font-mono text-[11px] tracking-[0.14em] text-white/70 uppercase transition hover:text-white"
              >
                <Download size={14} />
                Resume
              </a>
            </motion.div>
          </div>

          <motion.div variants={fadeUp} className="relative hidden lg:block">
            <div className="float-y">
              <HeroVisual />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
