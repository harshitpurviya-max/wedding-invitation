export function SectionHeading({ eyebrow, title, align = 'center' }) {
  const alignment = align === 'left' ? 'text-left' : 'text-center';

  return (
    <div className={`mb-8 ${alignment}`}>
      <p className="mb-2 text-[0.72rem] font-medium uppercase tracking-[0.34em] text-[#9a6a45]">
        {eyebrow}
      </p>
      <h2 className="font-display text-4xl text-[#2d1d1f] sm:text-5xl">{title}</h2>
    </div>
  );
}
