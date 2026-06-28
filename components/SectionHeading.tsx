export default function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="mb-12 inline-block font-display text-3xl font-bold text-text">
      <span className="relative">
        {children}
        <span className="absolute -bottom-1 left-0 h-0.5 w-full bg-accent" />
      </span>
    </h2>
  );
}
