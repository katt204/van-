"use client";

import { FormEvent, useState } from "react";
import { motion } from "framer-motion";
import { Download, Mail, MapPin, Phone, Send } from "lucide-react";
import { profile } from "@/data/profile";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { fadeUp, staggerContainer } from "@/lib/motion";
import { socialIcons } from "@/lib/icons";

export function Contact() {
  const [status, setStatus] = useState<"idle" | "sent">("idle");

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") || "");
    const email = String(data.get("email") || "");
    const message = String(data.get("message") || "");

    const subject = encodeURIComponent(`Portfolio inquiry from ${name}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\n${message}`,
    );

    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
    setStatus("sent");
    form.reset();
  }

  return (
    <section id="contact" className="bg-bg-elevated">
      <div className="mx-auto max-w-6xl px-5 py-20 md:px-8 lg:py-28">
        <Reveal>
          <SectionHeading
            eyebrow="Contact"
            title="Want to talk about a senior engineering role?"
            description="I am open to Senior Full Stack, Senior Software Engineer, and platform roles with US remote teams."
          />
        </Reveal>

        <div className="mt-12 grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="space-y-5"
          >
            <motion.a
              variants={fadeUp}
              href={`mailto:${profile.email}`}
              className="flex items-center gap-3 border border-line bg-white px-4 py-4 transition hover:border-accent/45"
            >
              <Mail className="text-accent-strong" size={18} />
              <span className="text-sm md:text-base">{profile.email}</span>
            </motion.a>
            <motion.a
              variants={fadeUp}
              href={`tel:${profile.phone.replace(/\s/g, "")}`}
              className="flex items-center gap-3 border border-line bg-white px-4 py-4 transition hover:border-accent/45"
            >
              <Phone className="text-accent-strong" size={18} />
              <span className="text-sm md:text-base">{profile.phone}</span>
            </motion.a>
            <motion.div
              variants={fadeUp}
              className="flex items-center gap-3 border border-line bg-white px-4 py-4"
            >
              <MapPin className="text-accent-strong" size={18} />
              <span className="text-sm md:text-base">{profile.location}</span>
            </motion.div>

            <motion.div variants={fadeUp} className="flex flex-wrap gap-3 pt-2">
              <a
                href={profile.resumeUrl}
                download
                className="inline-flex items-center gap-2 bg-ink px-4 py-3 font-mono text-[11px] tracking-[0.14em] text-white uppercase transition hover:bg-accent-strong"
              >
                <Download size={14} />
                Download Resume
              </a>
              <a
                href={profile.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border border-line px-4 py-3 font-mono text-[11px] tracking-[0.14em] text-ink uppercase transition hover:border-ink"
              >
                <socialIcons.linkedin className="h-3.5 w-3.5" />
                LinkedIn
              </a>
              <a
                href={profile.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border border-line px-4 py-3 font-mono text-[11px] tracking-[0.14em] text-ink uppercase transition hover:border-ink"
              >
                <socialIcons.github className="h-3.5 w-3.5" />
                GitHub
              </a>
            </motion.div>
          </motion.div>

          <Reveal>
            <form
              onSubmit={onSubmit}
              className="border border-line bg-white p-6 md:p-8"
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <label className="block text-sm text-ink-muted">
                  Name
                  <input
                    required
                    name="name"
                    autoComplete="name"
                    className="mt-2 w-full border border-line bg-bg-soft px-3 py-3 text-ink outline-none transition focus:border-accent"
                  />
                </label>
                <label className="block text-sm text-ink-muted">
                  Email
                  <input
                    required
                    type="email"
                    name="email"
                    autoComplete="email"
                    className="mt-2 w-full border border-line bg-bg-soft px-3 py-3 text-ink outline-none transition focus:border-accent"
                  />
                </label>
              </div>
              <label className="mt-5 block text-sm text-ink-muted">
                Message
                <textarea
                  required
                  name="message"
                  rows={5}
                  className="mt-2 w-full resize-y border border-line bg-bg-soft px-3 py-3 text-ink outline-none transition focus:border-accent"
                  placeholder="Role, team, timeline, and what you’re building…"
                />
              </label>
              <button
                type="submit"
                className="mt-6 inline-flex items-center gap-2 bg-accent-strong px-5 py-3 font-mono text-[11px] tracking-[0.16em] text-white uppercase transition hover:bg-sky-600"
              >
                <Send size={14} />
                Send Message
              </button>
              {status === "sent" ? (
                <p className="mt-3 text-sm text-signal">
                  Opening your email client…
                </p>
              ) : null}
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
