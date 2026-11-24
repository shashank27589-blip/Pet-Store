'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import { PawIcon, WhatsAppIcon } from './icons';
import { WA_URL } from '@/lib/data';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/puppies', label: 'Puppies' },
  { href: '/happy-families', label: 'Happy families' },
  { href: '/how-it-works', label: 'How it works' },
  { href: '/faq', label: 'FAQ' },
  { href: '/contact', label: 'Visit & contact' },
];

export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  return (
    <>
      <header
        id="site-header"
        className="tp-header fixed inset-x-0 top-0 z-50 transition-all duration-300"
        data-scrolled={scrolled ? 'true' : 'false'}
      >
        <div className="tp-header__bar gutter">
          {/* Brand */}
          <Link href="/" className="tp-header__brand flex items-center gap-2.5" aria-label="TeddyPups U.A.E. — home">
            <Image
              src="/brand/logo.png"
              alt="TeddyPups Logo"
              width={52}
              height={52}
              className="tp-header__logo object-contain"
              priority
            />
            <span className="tp-header__name font-plush text-2xl font-bold tracking-tight text-[var(--color-cocoa)]">
              TeddyPups
            </span>
          </Link>

          {/* Desktop nav */}
          <nav aria-label="Main" className="tp-header__nav hidden lg:block">
            <ul className="flex items-center gap-1">
              {navLinks.map(({ href, label }) => {
                const isActive = pathname === href;
                return (
                  <li key={href}>
                    <Link
                      href={href}
                      className={`tp-nav-link relative inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full text-sm font-semibold transition-colors ${
                        isActive
                          ? 'bg-[var(--color-peach)] text-[var(--color-cocoa)]'
                          : 'text-[var(--color-cocoa)]/80 hover:text-[var(--color-cocoa)] hover:bg-[var(--color-honey-soft)]'
                      }`}
                      data-active={isActive ? 'true' : 'false'}
                      aria-current={isActive ? 'page' : undefined}
                    >
                      <span>{label}</span>
                      {isActive && <PawIcon className="tp-nav-link__paw w-3.5 h-3.5 text-[var(--color-toffee)]" />}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* End actions */}
          <div className="tp-header__end flex items-center gap-3">
            <a
              href={WA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-whatsapp tp-header__wa hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-full font-bold text-sm bg-[#25d366] text-white hover:bg-[#20ba59] transition-transform active:scale-95 shadow-sm"
            >
              <WhatsAppIcon className="w-4 h-4 fill-white" />
              WhatsApp us
            </a>
            <button
              type="button"
              className="lg:hidden inline-flex h-10 items-center gap-2 rounded-full border-2 border-[var(--color-cocoa)] bg-[var(--color-milk)] px-4 text-[0.95rem] font-semibold text-[var(--color-cocoa)] active:scale-95"
              aria-label="Open menu"
              onClick={() => setMenuOpen(true)}
            >
              <PawIcon className="w-4 h-4 text-[var(--color-toffee)]" />
              Menu
            </button>
          </div>
        </div>

        {/* Wavy hem */}
        <svg aria-hidden="true" className="tp-header__hem w-full h-3.5 block" width="100%" height="14" preserveAspectRatio="none">
          <defs>
            <pattern id="tp-hem" width="44" height="14" patternUnits="userSpaceOnUse">
              <path d="M0 0H44V2A22 11 0 0 1 0 2Z" fill="var(--color-milk)" />
              <path d="M0 2A22 11 0 0 0 44 2" fill="none" stroke="rgba(42,23,14,0.08)" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="14" fill="url(#tp-hem)" />
        </svg>
      </header>

      {/* Mobile Menu Drawer */}
      {menuOpen && (
        <div className="fixed inset-0 z-[100] flex">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/40 backdrop-blur-sm transition-opacity"
            onClick={() => setMenuOpen(false)}
          />

          {/* Panel */}
          <div className="relative ml-auto flex h-full w-full max-w-xs flex-col bg-[var(--color-milk)] p-6 shadow-2xl z-10">
            <div className="flex items-center justify-between pb-4 border-b border-[var(--color-cocoa)]/10">
              <span className="font-scrawl text-xl text-[var(--color-toffee-ink)] font-bold">where to, friend?</span>
              <button
                type="button"
                className="rounded-full p-2 text-[var(--color-cocoa)] hover:bg-[var(--color-peach)]/40 text-lg font-bold"
                onClick={() => setMenuOpen(false)}
                aria-label="Close menu"
              >
                ✕
              </button>
            </div>

            <nav className="mt-6 flex flex-col gap-2">
              {navLinks.map(({ href, label }) => {
                const isActive = pathname === href;
                return (
                  <Link
                    key={href}
                    href={href}
                    onClick={() => setMenuOpen(false)}
                    className={`flex items-center justify-between rounded-xl px-4 py-3 font-semibold text-lg transition-colors ${
                      isActive
                        ? 'bg-[var(--color-peach)] text-[var(--color-cocoa)] font-bold'
                        : 'text-[var(--color-cocoa)] hover:bg-[var(--color-honey-soft)]'
                    }`}
                  >
                    <span>{label}</span>
                    <PawIcon className="w-4 h-4 text-[var(--color-toffee)] opacity-60" />
                  </Link>
                );
              })}
            </nav>

            <div className="mt-auto pt-6 border-t border-[var(--color-cocoa)]/10 flex flex-col gap-3">
              <a
                href={WA_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-whatsapp w-full justify-center text-center py-3 rounded-full font-bold bg-[#25d366] text-white flex items-center gap-2"
              >
                <WhatsAppIcon className="w-4 h-4 fill-white" />
                WhatsApp us
              </a>
              <a
                href="tel:+971500000000"
                className="text-center text-sm font-semibold text-[var(--color-toffee-ink)] py-1"
              >
                📞 +971 50 000 0000
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
