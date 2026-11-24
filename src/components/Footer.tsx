import Link from 'next/link';
import Image from 'next/image';
import { WA_URL } from '@/lib/data';

export default function Footer() {
  return (
    <footer className="tp-footer relative bg-[#2a170e] text-[#fffdf8] pt-12 pb-16 overflow-hidden">
      {/* Hill wave top */}
      <div className="absolute inset-x-0 top-0 -translate-y-[98%] pointer-events-none overflow-hidden leading-none z-10">
        <svg viewBox="0 0 1440 80" preserveAspectRatio="none" className="w-full h-12 md:h-16 text-[#2a170e] fill-current">
          <path d="M0 80V44c120-30 240-44 360-30s240 46 360 34 240-58 360-46 240 40 360 26v52z" />
        </svg>
      </div>

      {/* Twinkling stars */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 top-2 h-48 overflow-hidden opacity-70">
        <svg viewBox="0 0 40 40" className="tp-twinkle absolute text-[#f2be6b]" style={{ left: '8%', top: '15%', width: '12px' }}>
          <path d="M20 3c1.6 9.4 7.6 15.4 17 17-9.4 1.6-15.4 7.6-17 17-1.6-9.4-7.6-15.4-17-17 9.4-1.6 15.4-7.6 17-17z" fill="currentColor" />
        </svg>
        <svg viewBox="0 0 40 40" className="tp-twinkle absolute text-[#f2be6b]" style={{ left: '22%', top: '35%', width: '9px' }}>
          <path d="M20 3c1.6 9.4 7.6 15.4 17 17-9.4 1.6-15.4 7.6-17 17-1.6-9.4-7.6-15.4-17-17 9.4-1.6 15.4-7.6 17-17z" fill="currentColor" />
        </svg>
        <svg viewBox="0 0 40 40" className="tp-twinkle absolute text-[#f2be6b]" style={{ left: '48%', top: '12%', width: '11px' }}>
          <path d="M20 3c1.6 9.4 7.6 15.4 17 17-9.4 1.6-15.4 7.6-17 17-1.6-9.4-7.6-15.4-17-17 9.4-1.6 15.4-7.6 17-17z" fill="currentColor" />
        </svg>
        <svg viewBox="0 0 40 40" className="tp-twinkle absolute text-[#f2be6b]" style={{ left: '68%', top: '28%', width: '10px' }}>
          <path d="M20 3c1.6 9.4 7.6 15.4 17 17-9.4 1.6-15.4 7.6-17 17-1.6-9.4-7.6-15.4-17-17 9.4-1.6 15.4-7.6 17-17z" fill="currentColor" />
        </svg>
        <svg viewBox="0 0 40 40" className="tp-twinkle absolute text-[#f2be6b]" style={{ left: '88%', top: '20%', width: '13px' }}>
          <path d="M20 3c1.6 9.4 7.6 15.4 17 17-9.4 1.6-15.4 7.6-17 17-1.6-9.4-7.6-15.4-17-17 9.4-1.6 15.4-7.6 17-17z" fill="currentColor" />
        </svg>
      </div>

      <div className="gutter relative mx-auto grid max-w-[110rem] gap-12 pt-8 md:grid-cols-12 md:gap-x-12 md:gap-y-6">
        {/* Brand Col */}
        <div className="md:col-span-5">
          <p className="font-plush text-3xl md:text-4xl text-[#fef7e8] tracking-tight">
            Home, at last.
          </p>
          <p className="mt-4 max-w-md text-base leading-relaxed text-[#fffdf8]/80">
            Premium teacup and miniature puppies in Dubai. Raised with warmth, health-certified with care, and welcomed into families who cherish them forever.
          </p>

          <div className="mt-6 flex items-center gap-3">
            <a
              href={WA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full font-bold text-sm bg-[#25d366] text-white hover:bg-[#20ba59] transition-transform active:scale-95 shadow-md"
            >
              <span>💬</span>
              WhatsApp us
            </a>
            <Link
              href="/puppies"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full font-bold text-sm bg-[#fffdf8]/10 text-[#fffdf8] hover:bg-[#fffdf8]/20 transition-colors"
            >
              See all puppies
            </Link>
          </div>
        </div>

        {/* Explore Links */}
        <nav aria-label="Footer" className="md:col-span-3 md:col-start-7">
          <h2 className="font-scrawl text-2xl text-[#f2be6b] font-bold">Explore</h2>
          <ul className="mt-4 space-y-2.5 text-base">
            <li>
              <Link className="font-semibold text-[#fffdf8]/90 underline-offset-4 hover:text-[#f2be6b] hover:underline" href="/puppies">
                Available puppies
              </Link>
            </li>
            <li>
              <Link className="font-semibold text-[#fffdf8]/90 underline-offset-4 hover:text-[#f2be6b] hover:underline" href="/gone-home">
                Gone home
              </Link>
            </li>
            <li>
              <Link className="font-semibold text-[#fffdf8]/90 underline-offset-4 hover:text-[#f2be6b] hover:underline" href="/happy-families">
                Happy families
              </Link>
            </li>
            <li>
              <Link className="font-semibold text-[#fffdf8]/90 underline-offset-4 hover:text-[#f2be6b] hover:underline" href="/how-it-works">
                How it works
              </Link>
            </li>
            <li>
              <Link className="font-semibold text-[#fffdf8]/90 underline-offset-4 hover:text-[#f2be6b] hover:underline" href="/how-it-works#delivery">
                Delivery &amp; collection
              </Link>
            </li>
            <li>
              <Link className="font-semibold text-[#fffdf8]/90 underline-offset-4 hover:text-[#f2be6b] hover:underline" href="/faq">
                FAQ
              </Link>
            </li>
            <li>
              <Link className="font-semibold text-[#fffdf8]/90 underline-offset-4 hover:text-[#f2be6b] hover:underline" href="/contact">
                Visit &amp; contact
              </Link>
            </li>
          </ul>
        </nav>

        {/* Say Hello */}
        <div className="md:col-span-3">
          <h2 className="font-scrawl text-2xl text-[#f2be6b] font-bold">Say hello</h2>
          <ul className="mt-4 space-y-2.5 text-base text-[#fffdf8]/90">
            <li>
              <a className="font-semibold hover:text-[#f2be6b]" href={WA_URL} target="_blank" rel="noopener noreferrer">
                WhatsApp +971 50 000 0000
              </a>
            </li>
            <li>
              <a className="break-all hover:text-[#f2be6b]" href="mailto:hello@teddypups.ae">
                hello@teddypups.ae
              </a>
            </li>
            <li className="text-[#fffdf8]/80">
              Downtown Dubai, United Arab Emirates
            </li>
          </ul>

          <ul className="mt-6 flex flex-wrap gap-2.5" aria-label="Social media">
            {['Instagram', 'TikTok', 'Facebook'].map((platform) => (
              <li key={platform}>
                <a
                  href="https://www.instabizweb.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-9 items-center rounded-full border border-[#fffdf8]/30 px-3.5 text-xs font-semibold hover:border-[#f2be6b] hover:text-[#f2be6b] transition-colors"
                >
                  {platform}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="gutter relative mx-auto mt-14 flex max-w-[110rem] flex-col items-start justify-between gap-4 border-t border-[#fffdf8]/15 pt-6 text-sm text-[#fffdf8]/60 md:flex-row md:items-center">
        <span className="flex items-center gap-3 font-medium">
          <Image
            src="/brand/logo.png"
            alt="TeddyPups Logo"
            width={32}
            height={32}
            className="size-8 object-contain"
          />
          © {new Date().getFullYear()} TeddyPups U.A.E.
        </span>
        <span className="font-scrawl text-xl text-[#f2be6b]/90">every puppy is family</span>
      </div>
    </footer>
  );
}
