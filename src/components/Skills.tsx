"use client";

import { motion } from "framer-motion";
import { profile } from "@/data/profile";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { fadeUp, staggerContainer } from "@/lib/motion";
import { getTechIcon, skillCategoryIcons } from "@/lib/icons";

export function Skills() {
  return (
    <section id="skills" className="border-b border-line bg-bg">
      <div className="mx-auto max-w-6xl px-5 py-20 md:px-8 lg:py-28">
        <Reveal>
          <SectionHeading
            eyebrow="Technical Skills"
            title="Tools I use to ship SaaS, cloud, and AI features."
            description="Grouped by area so you can quickly see the stack I work with most."
          />
        </Reveal>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3"
        >
          {profile.skillGroups.map((group) => {
            const CategoryIcon =
              skillCategoryIcons[group.id as keyof typeof skillCategoryIcons];

            return (
              <motion.article
                key={group.id}
                variants={fadeUp}
                whileHover={{ y: -4 }}
                className="border border-line bg-bg-elevated p-6 transition hover:border-accent/45 hover:shadow-[0_20px_50px_rgba(14,165,233,0.08)]"
              >
                <div className="flex items-start gap-3">
                  <div className="flex h-11 w-11 items-center justify-center border border-accent/20 bg-sky-50 text-accent-strong">
                    <CategoryIcon size={20} />
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-semibold text-ink">
                      {group.title}
                    </h3>
                    <p className="mt-1 text-sm text-ink-muted">{group.description}</p>
                  </div>
                </div>

                <ul className="mt-5 flex flex-wrap gap-2">
                  {group.items.map((item) => {
                    const Icon = getTechIcon(item);
                    return (
                      <li
                        key={item}
                        className="inline-flex items-center gap-2 border border-line bg-bg-soft px-3 py-1.5 text-sm text-ink"
                      >
                        <Icon className="h-3.5 w-3.5 text-accent-strong" />
                        {item}
                      </li>
                    );
                  })}
                </ul>
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
