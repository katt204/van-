"use client";

import { motion } from "framer-motion";
import { profile } from "@/data/profile";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { fadeUp, staggerContainer } from "@/lib/motion";
import { aiIcons } from "@/lib/icons";

export function Expertise() {
  return (
    <section id="expertise" className="border-b border-line bg-bg-soft">
      <div className="mx-auto max-w-6xl px-5 py-20 md:px-8 lg:py-28">
        <Reveal>
          <SectionHeading
            eyebrow="AI & Engineering Expertise"
            title="AI features that fit into real products."
            description="I like LLM work that sits behind solid services, clear UX, and cloud delivery you can run in production."
          />
        </Reveal>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="mt-12 grid gap-5 md:grid-cols-2"
        >
          {profile.aiExpertise.map((item) => {
            const Icon = aiIcons[item.icon as keyof typeof aiIcons];
            return (
              <motion.article
                key={item.title}
                variants={fadeUp}
                whileHover={{ y: -3 }}
                className="border border-line bg-white p-6 transition hover:border-accent/45 hover:shadow-[0_18px_40px_rgba(15,23,42,0.07)] md:p-8"
              >
                <div className="flex h-12 w-12 items-center justify-center border border-accent/20 bg-sky-50 text-accent-strong">
                  <Icon size={22} />
                </div>
                <h3 className="mt-5 font-display text-xl font-semibold text-ink">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-muted md:text-base">
                  {item.description}
                </p>
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
