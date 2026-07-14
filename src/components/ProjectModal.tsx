"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, ExternalLink, X } from "lucide-react";
import { profile } from "@/data/profile";
import { getTechIcon } from "@/lib/icons";

type Project = (typeof profile.projects)[number];

type ProjectModalProps = {
  project: Project | null;
  onClose: () => void;
};

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  const [slideIndex, setSlideIndex] = useState(0);
  const slides = project?.media.slides ?? [];
  const hasCarousel = slides.length > 1;

  useEffect(() => {
    setSlideIndex(0);
  }, [project?.slug]);

  useEffect(() => {
    if (!project) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
        return;
      }
      if (!hasCarousel) return;
      if (event.key === "ArrowLeft") {
        setSlideIndex((current) =>
          current === 0 ? slides.length - 1 : current - 1,
        );
      }
      if (event.key === "ArrowRight") {
        setSlideIndex((current) =>
          current === slides.length - 1 ? 0 : current + 1,
        );
      }
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [project, onClose, hasCarousel, slides.length]);

  const activeSlide = slides[slideIndex] ?? slides[0];

  const goPrev = () => {
    setSlideIndex((current) =>
      current === 0 ? slides.length - 1 : current - 1,
    );
  };

  const goNext = () => {
    setSlideIndex((current) =>
      current === slides.length - 1 ? 0 : current + 1,
    );
  };

  return (
    <AnimatePresence>
      {project && activeSlide ? (
        <motion.div
          className="fixed inset-0 z-[80] flex items-center justify-center p-4 md:p-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          role="dialog"
          aria-modal="true"
          aria-labelledby="project-modal-title"
        >
          <button
            type="button"
            aria-label="Close project details"
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            onClick={onClose}
          />

          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.98 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            className="relative z-10 flex max-h-[90vh] w-full max-w-4xl flex-col overflow-hidden border border-white/10 bg-panel-elevated text-white shadow-[0_30px_80px_rgba(0,0,0,0.45)]"
          >
            <div className="flex items-start justify-between gap-4 border-b border-white/10 px-5 py-4 md:px-6">
              <div>
                <p className="font-mono text-[11px] tracking-[0.16em] text-cyan-300/80 uppercase">
                  {project.company}
                </p>
                <h3
                  id="project-modal-title"
                  className="mt-1 font-display text-2xl font-bold tracking-tight md:text-3xl"
                >
                  {project.title}
                </h3>
              </div>
              <button
                type="button"
                onClick={onClose}
                className="inline-flex h-10 w-10 shrink-0 items-center justify-center border border-white/15 text-white/80 transition hover:border-white hover:text-white"
                aria-label="Close"
              >
                <X size={18} />
              </button>
            </div>

            <div className="modal-scrollbar overflow-y-auto overscroll-contain">
              <div className="relative aspect-[16/10] w-full bg-black">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeSlide.src}
                    className="absolute inset-0"
                    initial={{ opacity: 0, x: 24 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -24 }}
                    transition={{ duration: 0.25 }}
                  >
                    <Image
                      src={activeSlide.src}
                      alt={activeSlide.alt}
                      fill
                      sizes="(max-width: 896px) 100vw, 896px"
                      className="object-cover object-top"
                      priority
                    />
                  </motion.div>
                </AnimatePresence>

                {hasCarousel ? (
                  <>
                    <button
                      type="button"
                      onClick={goPrev}
                      aria-label="Previous slide"
                      className="absolute top-1/2 left-3 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center border border-white/20 bg-black/45 text-white backdrop-blur-sm transition hover:bg-black/70"
                    >
                      <ChevronLeft size={18} />
                    </button>
                    <button
                      type="button"
                      onClick={goNext}
                      aria-label="Next slide"
                      className="absolute top-1/2 right-3 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center border border-white/20 bg-black/45 text-white backdrop-blur-sm transition hover:bg-black/70"
                    >
                      <ChevronRight size={18} />
                    </button>

                    <div className="absolute inset-x-0 bottom-3 z-10 flex items-center justify-center gap-2">
                      {slides.map((slide, index) => (
                        <button
                          key={slide.src}
                          type="button"
                          aria-label={`Go to slide ${index + 1}`}
                          onClick={() => setSlideIndex(index)}
                          className={`h-2.5 w-2.5 border transition ${
                            index === slideIndex
                              ? "border-cyan-300 bg-cyan-300"
                              : "border-white/40 bg-white/20 hover:bg-white/40"
                          }`}
                        />
                      ))}
                    </div>

                    <p className="absolute top-3 right-3 z-10 border border-white/15 bg-black/45 px-2 py-1 font-mono text-[10px] tracking-[0.14em] text-white/80 uppercase backdrop-blur-sm">
                      {slideIndex + 1} / {slides.length}
                    </p>
                  </>
                ) : null}
              </div>

              <div className="space-y-5 px-5 py-6 md:px-6">
                <p className="text-base leading-relaxed text-slate-300">
                  {project.summary}
                </p>

                <div className="grid gap-4 md:grid-cols-2">
                  <div className="border border-white/10 bg-white/[0.03] p-4">
                    <p className="font-mono text-[11px] tracking-[0.16em] text-cyan-300/80 uppercase">
                      Challenge
                    </p>
                    <p className="mt-2 text-sm leading-relaxed text-slate-400">
                      {project.challenge}
                    </p>
                  </div>
                  <div className="border border-white/10 bg-white/[0.03] p-4">
                    <p className="font-mono text-[11px] tracking-[0.16em] text-cyan-300/80 uppercase">
                      Result
                    </p>
                    <p className="mt-2 text-sm leading-relaxed text-slate-400">
                      {project.result}
                    </p>
                  </div>
                </div>

                <ul className="flex flex-wrap gap-2">
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

                <a
                  href={project.links.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 border border-cyan-300/40 px-4 py-2.5 font-mono text-[11px] tracking-[0.14em] text-cyan-200 uppercase transition hover:bg-cyan-300 hover:text-panel"
                >
                  <ExternalLink size={13} />
                  {project.links.label}
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
