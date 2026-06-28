export default function SectionHeading({
  number,
  children,
}: {
  number?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="mb-12">
      {number && (
        <p className="mb-2 font-mono text-sm text-accent">{number}</p>
      )}
      <h2 className="inline-block font-display text-3xl font-bold text-text">
        <span className="relative">
          {children}
          <span className="absolute -bottom-1 left-0 h-0.5 w-full bg-accent" />
        </span>
      </h2>
    </div>
  );
}
