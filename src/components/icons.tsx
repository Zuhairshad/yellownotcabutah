type IconProps = {
  className?: string;
};

export function MailIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="1.8" />
      <path d="M3.5 6.5 12 13l8.5-6.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function CakeIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <path d="M4 12h16v7a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-7Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
      <path d="M4 12c0-2 2-2 2-4s-1-2-1-2m6 6c0-2 2-2 2-4s-1-2-1-2m6 6c0-2 2-2 2-4s-1-2-1-2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M3 16.5h18" stroke="currentColor" strokeWidth="1.8" />
    </svg>
  );
}

export function BuildingIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <rect x="5" y="3" width="14" height="18" rx="1" stroke="currentColor" strokeWidth="1.8" />
      <path d="M9 7h.01M15 7h.01M9 11h.01M15 11h.01M9 15h.01M15 15h.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M10 21v-4h4v4" stroke="currentColor" strokeWidth="1.8" />
    </svg>
  );
}

export function GraduationCapIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <path d="m2 8 10-4 10 4-10 4-10-4Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
      <path d="M6 10.5V15c0 1.5 2.5 3 6 3s6-1.5 6-3v-4.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M22 8v6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

export function LinkIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <path d="M9 15 15 9" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M11 7.5 12.5 6a4 4 0 1 1 5.5 5.5L16.5 13M13 16.5 11.5 18A4 4 0 1 1 6 12.5L7.5 11" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function TaxiIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <path d="M5 16v2a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1v-1h8v1a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1v-2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M3.5 16 5 10.5A2 2 0 0 1 6.9 9h10.2a2 2 0 0 1 1.9 1.5L20.5 16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      <rect x="3" y="16" width="18" height="2.5" rx="1" fill="currentColor" />
      <circle cx="7.5" cy="18.5" r="1.5" fill="currentColor" />
      <circle cx="16.5" cy="18.5" r="1.5" fill="currentColor" />
      <path d="M10 6h4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}
