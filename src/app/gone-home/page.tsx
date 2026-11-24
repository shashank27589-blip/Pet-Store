import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { goneHomeTickets, WA_URL } from '@/lib/data';
import { WhatsAppIcon } from '@/components/icons';

export const metadata: Metadata = {
  title: 'Gone home | TeddyPups U.A.E.',
  description: 'Every puppy here has already joined a loving family. Looking for one just like them? Tell us — we’ll help you find your match.',
};

export default function GoneHomePage() {
  return (
    <main className="min-h-screen pt-24 pb-20">
      {/* Header section */}
      <section className="gutter max-w-[110rem] mx-auto text-center pt-8 pb-12">
        <span className="font-scrawl text-2xl text-[var(--color-toffee-ink)] font-bold">
          tickets home
        </span>
        <h1 className="font-plush text-4xl sm:text-5xl md:text-6xl text-[var(--color-cocoa)] mt-2 mb-4">
          Gone home
        </h1>
        <p className="max-w-2xl mx-auto text-lg text-[var(--color-cocoa)]/80 leading-relaxed">
          Every puppy here has already joined a loving family. Looking for one just like them? Tell us — we’ll help you find your match.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/puppies"
            className="btn btn-primary inline-flex items-center gap-2 px-6 py-3 rounded-full font-bold bg-[var(--color-toffee)] text-white hover:bg-[var(--color-toffee-ink)] transition-transform active:scale-95 shadow-md"
          >
            See available puppies
          </Link>
          <a
            href={WA_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-whatsapp inline-flex items-center gap-2 px-6 py-3 rounded-full font-bold bg-[#25d366] text-white hover:bg-[#20ba59] transition-transform active:scale-95 shadow-md"
          >
            <WhatsAppIcon className="w-4 h-4 fill-white" />
            Enquire on WhatsApp
          </a>
        </div>
      </section>

      {/* Ticket counter pill */}
      <div className="gutter max-w-[110rem] mx-auto mb-10 flex items-center justify-between border-b border-[var(--color-cocoa)]/10 pb-4">
        <div className="flex items-center gap-2 font-scrawl text-xl text-[var(--color-toffee-ink)] font-bold">
          <span>🎟️</span>
          <span>{goneHomeTickets.length} puppies happily rehomed</span>
        </div>
        <span className="text-sm font-semibold text-[var(--color-cocoa)]/60">
          Showing all home tickets
        </span>
      </div>

      {/* Tickets Grid */}
      <div className="gutter max-w-[110rem] mx-auto">
        <ul className="tp-tickets" aria-label="Puppies who have gone home">
          {goneHomeTickets.map((ticket, index) => {
            const tilt = (index % 2 === 0 ? -1.2 : 1.2) * ((index % 3) + 0.8);
            return (
              <li
                key={ticket.href + index}
                className="tp-ticket"
                style={{ '--tilt': `${tilt.toFixed(1)}deg` } as React.CSSProperties}
              >
                <Link
                  href={ticket.href}
                  className="tp-ticket__link group no-underline text-inherit hover:no-underline"
                  style={{ textDecoration: 'none', color: 'inherit' }}
                >
                  <span className="tp-ticket__main">
                    <span className="tp-ticket__photo">
                      <Image
                        src={ticket.img.startsWith('http') ? ticket.img : (ticket.img.startsWith('/') ? ticket.img : `/${ticket.img}`)}
                        alt={ticket.alt || `${ticket.name} puppy`}
                        width={96}
                        height={96}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        unoptimized
                      />
                    </span>
                    <span className="tp-ticket__body">
                      <span className="font-scrawl tp-ticket__kicker">one ticket home</span>
                      <span className="font-plush tp-ticket__name">{ticket.name}</span>
                      <span className="tp-ticket__meta">{ticket.meta}</span>
                      <span className="tp-ticket__route">
                        <span>{ticket.origin}</span>
                        <svg viewBox="0 0 60 12" aria-hidden="true">
                          <path d="M2 6h46" />
                          <path d="M44 2l6 4-6 4" />
                        </svg>
                        <span>{ticket.destination}</span>
                      </span>
                    </span>
                  </span>
                  <span aria-hidden="true" className="tp-ticket__stub">
                    <span className="font-plush">admit one</span>
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>

      {/* Bottom CTA banner */}
      <section className="gutter max-w-[110rem] mx-auto mt-20">
        <div className="bg-[var(--color-peach)]/60 border-2 border-[var(--color-cocoa)]/20 rounded-3xl p-8 md:p-12 text-center max-w-4xl mx-auto shadow-sm">
          <span className="text-4xl block mb-2">🐾</span>
          <h2 className="font-plush text-3xl md:text-4xl text-[var(--color-cocoa)] mb-3">
            Want a puppy just like one of these?
          </h2>
          <p className="text-base md:text-lg text-[var(--color-cocoa)]/80 max-w-xl mx-auto mb-6">
            We can source the exact breed, coat color, and personality you are dreaming of from our certified breeder network.
          </p>
          <a
            href={WA_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-whatsapp inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-bold text-base bg-[#25d366] text-white hover:bg-[#20ba59] transition-transform active:scale-95 shadow-md"
          >
            <WhatsAppIcon className="w-5 h-5 fill-white" />
            Request your dream puppy on WhatsApp
          </a>
        </div>
      </section>
    </main>
  );
}
