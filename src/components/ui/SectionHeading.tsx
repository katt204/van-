type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  light?: boolean;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  light = false,
}: SectionHeadingProps) {
  return (
    <div className="max-w-2xl">
      <p
        className={`font-mono text-[11px] tracking-[0.2em] uppercase ${
          light ? "text-cyan-300/70" : "text-cyan-700"
        }`}
      >
        {eyebrow}
      </p>
      <h2
        className={`mt-3 font-display text-3xl leading-tight font-bold tracking-tight md:text-4xl lg:text-5xl ${
          light ? "text-white" : "text-ink"
        }`}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={`mt-4 text-base leading-relaxed md:text-lg ${
            light ? "text-slate-300" : "text-ink-muted"
          }`}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
