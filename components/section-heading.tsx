export function SectionHeading({ eyebrow, title, copy }: { eyebrow: string; title: string; copy?: string }) {
  return (
    <div className="mb-10 max-w-3xl">
      <p className="mb-3 text-xs font-semibold uppercase tracking-[0.32em] text-cyan-300/80">{eyebrow}</p>
      <h2 className="font-display text-3xl font-semibold leading-tight text-white sm:text-4xl lg:text-5xl">{title}</h2>
      {copy ? <p className="mt-4 text-base leading-7 text-slate-300 sm:text-lg">{copy}</p> : null}
    </div>
  );
}
