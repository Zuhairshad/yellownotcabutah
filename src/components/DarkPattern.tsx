const TRIANGLE_BG =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='220' height='220'%3E%3Cg fill='none' stroke='%23ffffff' stroke-opacity='0.045'%3E%3Cpath d='M0 40 L60 0 L120 40 L60 90Z'/%3E%3Cpath d='M120 40 L180 0 L220 30 L170 90Z'/%3E%3Cpath d='M0 120 L60 90 L120 140 L50 190Z'/%3E%3Cpath d='M120 140 L170 90 L220 130 L180 200Z'/%3E%3C/g%3E%3C/svg%3E";

export default function DarkPattern({
  id,
  className = "",
  children,
}: {
  id?: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <section
      id={id}
      className={`relative overflow-hidden bg-navy text-white ${className}`}
      style={{ backgroundImage: `url("${TRIANGLE_BG}")` }}
    >
      {children}
    </section>
  );
}
