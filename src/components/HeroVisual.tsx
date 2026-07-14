export function HeroVisual() {
  return (
    <div className="relative" aria-hidden="true">
      <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-cyan-400/20 via-transparent to-teal-400/10 blur-2xl" />
      <div className="relative overflow-hidden rounded-2xl border border-white/15 bg-panel-elevated/80 p-5 shadow-[0_30px_80px_rgba(0,0,0,0.45)] backdrop-blur">
        <div className="mb-4 flex items-center justify-between">
          <p className="font-mono text-[10px] tracking-[0.18em] text-cyan-200/80 uppercase">
            Architecture Canvas
          </p>
          <span className="h-2 w-2 rounded-full bg-emerald-400 pulse-soft" />
        </div>

        <svg viewBox="0 0 480 360" className="h-auto w-full" fill="none">
          <rect x="16" y="16" width="140" height="84" rx="10" fill="rgba(14,165,233,0.15)" stroke="rgba(56,189,248,0.55)" />
          <rect x="172" y="16" width="140" height="84" rx="10" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.2)" />
          <rect x="328" y="16" width="136" height="84" rx="10" fill="rgba(20,184,166,0.14)" stroke="rgba(45,212,191,0.5)" />

          <path d="M86 100v34M242 100v34M396 100v34" stroke="rgba(255,255,255,0.28)" strokeDasharray="4 5" />

          <rect x="48" y="134" width="384" height="72" rx="12" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.18)" />
          <path d="M76 160h90M76 178h58M190 160h110M190 178h74M330 160h70M330 178h48" stroke="rgba(255,255,255,0.4)" strokeWidth="4" strokeLinecap="round" />

          <rect x="16" y="230" width="140" height="96" rx="10" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.18)" />
          <rect x="172" y="230" width="140" height="96" rx="10" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.18)" />
          <rect x="328" y="230" width="136" height="96" rx="10" fill="rgba(14,165,233,0.12)" stroke="rgba(56,189,248,0.45)" />

          <text x="36" y="54" fill="rgba(186,230,253,0.9)" fontFamily="IBM Plex Mono, monospace" fontSize="11">CLIENT</text>
          <text x="192" y="54" fill="rgba(226,232,240,0.75)" fontFamily="IBM Plex Mono, monospace" fontSize="11">API GATEWAY</text>
          <text x="348" y="54" fill="rgba(153,246,228,0.9)" fontFamily="IBM Plex Mono, monospace" fontSize="11">LLM LAYER</text>
          <text x="36" y="270" fill="rgba(226,232,240,0.7)" fontFamily="IBM Plex Mono, monospace" fontSize="11">SERVICES</text>
          <text x="192" y="270" fill="rgba(226,232,240,0.7)" fontFamily="IBM Plex Mono, monospace" fontSize="11">DATA</text>
          <text x="348" y="270" fill="rgba(186,230,253,0.85)" fontFamily="IBM Plex Mono, monospace" fontSize="11">EDGE / CI</text>
        </svg>
      </div>
    </div>
  );
}
