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

export function AndroidIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <path d="M6 10v6a1 1 0 0 0 1 1h1v3a1.3 1.3 0 0 0 2.6 0v-3h2.8v3a1.3 1.3 0 0 0 2.6 0v-3h1a1 1 0 0 0 1-1v-6H6Z" fill="currentColor" />
      <path d="M4.5 10.5v5a1 1 0 0 1-2 0v-5a1 1 0 0 1 2 0ZM21.5 10.5v5a1 1 0 0 1-2 0v-5a1 1 0 0 1 2 0Z" fill="currentColor" />
      <path d="M7.5 4.5 6.3 2.6m10.2 1.9 1.2-1.9M6 9c0-3 2.7-5 6-5s6 2 6 5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      <path d="M9.2 6.5h.01M14.8 6.5h.01" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

export function AppleIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M16.7 12.4c0-2.6 2.1-3.8 2.2-3.9-1.2-1.7-3-2-3.7-2-1.6-.2-3 .9-3.8.9-.8 0-2-.9-3.3-.9-1.7 0-3.3 1-4.1 2.6-1.8 3.1-.5 7.6 1.3 10.1.9 1.2 1.9 2.6 3.2 2.6 1.3-.1 1.8-.8 3.3-.8s1.9.8 3.3.8c1.4 0 2.2-1.2 3.1-2.5.7-1 1.3-2.3 1.6-3.5-2.1-.8-3.1-2.9-3.1-3.4Z" />
      <path d="M14.2 4.9c.7-.9 1.2-2.1 1.1-3.4-1.1 0-2.4.7-3.1 1.6-.7.8-1.3 2.1-1.1 3.3 1.2.1 2.4-.6 3.1-1.5Z" />
    </svg>
  );
}

export function GearIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.8" />
      <path
        d="M19.4 13.5a1.7 1.7 0 0 0 .3 1.9l.1.1a2 2 0 1 1-2.9 2.9l-.1-.1a1.7 1.7 0 0 0-1.9-.3 1.7 1.7 0 0 0-1 1.6V20a2 2 0 1 1-4 0v-.2a1.7 1.7 0 0 0-1.1-1.6 1.7 1.7 0 0 0-1.9.3l-.1.1a2 2 0 1 1-2.9-2.9l.1-.1a1.7 1.7 0 0 0 .3-1.9 1.7 1.7 0 0 0-1.6-1H4a2 2 0 1 1 0-4h.2a1.7 1.7 0 0 0 1.6-1.1 1.7 1.7 0 0 0-.3-1.9l-.1-.1a2 2 0 1 1 2.9-2.9l.1.1a1.7 1.7 0 0 0 1.9.3H10a1.7 1.7 0 0 0 1-1.6V4a2 2 0 1 1 4 0v.2a1.7 1.7 0 0 0 1 1.6 1.7 1.7 0 0 0 1.9-.3l.1-.1a2 2 0 1 1 2.9 2.9l-.1.1a1.7 1.7 0 0 0-.3 1.9V10a1.7 1.7 0 0 0 1.6 1H20a2 2 0 1 1 0 4h-.2a1.7 1.7 0 0 0-1.6 1Z"
        stroke="currentColor"
        strokeWidth="1.4"
      />
    </svg>
  );
}

export function PlaneIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <path
        d="M10.5 14.5 3 12.2l1-1.7 8-.1-3-6 2-.4 5 5.6 4.6-1.3a1.6 1.6 0 0 1 2 2l-1.3 4.6 5.6 5-.4 2-6-3-.1 8-1.7 1-2.2-7.5"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function PhoneIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <path
        d="M6.6 3.5 9 5.9a1 1 0 0 1 0 1.4L7.3 8.9a12 12 0 0 0 6.8 6.8l1.6-1.7a1 1 0 0 1 1.4 0l2.4 2.4a1 1 0 0 1 0 1.4l-1.3 1.3a2 2 0 0 1-2 .5A17 17 0 0 1 3.5 6.8a2 2 0 0 1 .5-2L5.2 3.5a1 1 0 0 1 1.4 0Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
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
