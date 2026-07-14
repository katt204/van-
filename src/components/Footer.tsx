import { profile } from "@/data/profile";

export function Footer() {
  return (
    <footer className="border-t border-line bg-panel text-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-5 py-8 md:flex-row md:items-center md:justify-between md:px-8">
        <p className="font-mono text-[11px] tracking-[0.16em] text-white/55 uppercase">
          © {new Date().getFullYear()} {profile.name}
        </p>
        <p className="text-sm text-white/60">
          Senior Full Stack Engineer · SaaS · Cloud · AI Systems
        </p>
      </div>
    </footer>
  );
}
