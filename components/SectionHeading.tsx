export default function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="mb-12 inline-block text-3xl font-bold text-gray-900">
      <span className="relative">
        {children}
        <span className="absolute -bottom-1 left-0 h-0.5 w-full bg-brand" />
      </span>
    </h2>
  );
}
