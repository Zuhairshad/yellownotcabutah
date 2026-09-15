"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { navLinks } from "@/lib/nav-links";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      <header
        id="page-top"
        className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
          scrolled ? "bg-gold/95 shadow-md" : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
          <Link href="#page-top" className="block">
            <Image
              src="/images/logo.png"
              alt="Yellow Cab Utah"
              width={160}
              height={80}
              className="h-14 w-auto object-contain"
              priority
            />
          </Link>

          <button
            type="button"
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
            aria-controls="site-menu"
            onClick={() => setMenuOpen(true)}
            className="flex h-10 w-10 flex-col items-center justify-center gap-1.5"
          >
            <span className="h-0.5 w-7 bg-white" />
            <span className="h-0.5 w-7 bg-white" />
            <span className="h-0.5 w-7 bg-white" />
          </button>
        </div>
      </header>

      <div
        id="site-menu"
        className={`fixed inset-0 z-[60] flex flex-col items-center justify-center bg-gold/95 transition-opacity duration-300 ${
          menuOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
      >
        <button
          type="button"
          aria-label="Close menu"
          onClick={() => setMenuOpen(false)}
          className="absolute right-6 top-5 text-3xl font-light text-white"
        >
          &times;
        </button>

        <nav className="flex flex-col items-center gap-6 overflow-y-auto py-16">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-xl font-semibold text-white hover:text-navy"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </>
  );
}
