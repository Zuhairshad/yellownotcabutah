export default function PullQuote({
  children,
  cite,
}: {
  children: React.ReactNode;
  cite?: string;
}) {
  return (
    <blockquote className="relative border-l-4 border-gold-deep pl-6">
      <span className="absolute -left-1 top-0 -translate-x-1/2 font-serif text-5xl leading-none text-gold-deep">
        &ldquo;
      </span>
      <div className="text-xl italic text-gold-deep">{children}</div>
      {cite && <p className="mt-2 text-sm text-charcoal/60">{cite}</p>}
    </blockquote>
  );
}
