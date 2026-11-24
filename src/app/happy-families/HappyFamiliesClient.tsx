'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { HappyMoment, WA_URL } from '@/lib/data';
import { WhatsAppIcon } from '@/components/icons';

interface Props {
  moments: HappyMoment[];
  testimonial: {
    quote: string;
    author: string;
    location: string;
  };
}

export default function HappyFamiliesClient({ moments, testimonial }: Props) {
  const [selectedImg, setSelectedImg] = useState<string | null>(null);

  return (
    <div className="gutter max-w-[110rem] mx-auto">
      {/* Header section */}
      <section className="text-center pt-8 pb-12 max-w-4xl mx-auto">
        <span className="font-scrawl text-2xl text-[var(--color-toffee-ink)] font-bold">
          our wall of happy endings
        </span>
        <h1 className="font-plush text-4xl sm:text-5xl md:text-6xl text-[var(--color-cocoa)] mt-2 mb-4">
          Happy families
        </h1>
        <p className="text-lg md:text-xl text-[var(--color-cocoa)]/80 leading-relaxed max-w-2xl mx-auto">
          Nothing makes us happier than seeing our puppies in loving homes! Here are some beautiful moments shared by our amazing clients after welcoming their furry friends.
        </p>

        <div className="mt-6 inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[var(--color-peach)]/70 text-[var(--color-toffee-ink)] font-bold text-sm">
          <span>📸</span>
          <span>{moments.length} moments and counting</span>
        </div>
      </section>

      {/* Featured Testimonial Quote */}
      <section className="my-10 max-w-3xl mx-auto">
        <figure className="bg-[var(--color-honey-soft)] border-2 border-[var(--color-toffee)]/30 rounded-3xl p-8 md:p-10 text-center shadow-md relative">
          <span className="font-plush text-5xl text-[var(--color-toffee)] opacity-30 absolute top-4 left-6">
            “
          </span>
          <blockquote className="text-lg md:text-xl font-medium text-[var(--color-cocoa)] leading-relaxed italic relative z-10 pt-2">
            {testimonial.quote.replace(/[“”]/g, '')}
          </blockquote>
          <figcaption className="mt-6 font-bold text-[var(--color-toffee-ink)]">
            — {testimonial.author}, <span className="font-normal text-[var(--color-cocoa)]/70">{testimonial.location}</span>
          </figcaption>
        </figure>
      </section>

      {/* Wall of Moments (Polaroids Grid) */}
      <section aria-label="Moments gallery" className="mt-14">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6">
          {moments.map((m, i) => {
            const tilt = ((i % 5) - 2) * 1.3;
            const imgSrc = m.img.startsWith('http') ? m.img : (m.img.startsWith('/') ? m.img : `/${m.img}`);
            return (
              <div
                key={i}
                className="tp-polaroid cursor-pointer group"
                style={{ transform: `rotate(${tilt.toFixed(1)}deg)` }}
                onClick={() => setSelectedImg(imgSrc)}
              >
                <div className="relative aspect-[4/5] overflow-hidden rounded bg-[var(--color-honey)]/40">
                  <Image
                    src={imgSrc}
                    alt={m.alt || 'Happy TeddyPups family'}
                    fill
                    sizes="(min-width: 1280px) 20vw, (min-width: 768px) 25vw, 45vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    unoptimized
                  />
                  <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white text-2xl">
                    🔍
                  </div>
                </div>
                <div className="mt-2.5 text-center">
                  <span className="font-scrawl text-sm text-[var(--color-toffee-ink)] font-bold">
                    TeddyPups family ♥
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImg && (
        <div
          className="fixed inset-0 z-[200] bg-black/85 flex items-center justify-center p-4 backdrop-blur-sm"
          onClick={() => setSelectedImg(null)}
        >
          <div className="relative max-w-2xl max-h-[90vh] bg-white p-3 rounded-2xl shadow-2xl overflow-hidden" onClick={e => e.stopPropagation()}>
            <button
              onClick={() => setSelectedImg(null)}
              className="absolute top-4 right-4 z-10 size-10 rounded-full bg-black/60 text-white font-bold flex items-center justify-center hover:bg-black transition-colors"
              aria-label="Close"
            >
              ✕
            </button>
            <div className="relative w-[85vw] max-w-lg aspect-[4/5]">
              <Image
                src={selectedImg}
                alt="Enlarged happy family moment"
                fill
                className="object-cover rounded-xl"
                unoptimized
              />
            </div>
            <div className="py-3 text-center">
              <span className="font-scrawl text-xl text-[var(--color-toffee-ink)] font-bold">
                Every puppy is family ♥
              </span>
            </div>
          </div>
        </div>
      )}

      {/* Bottom CTA */}
      <section className="mt-20 text-center pb-8">
        <h2 className="font-plush text-3xl md:text-4xl text-[var(--color-cocoa)] mb-4">
          Ready to welcome your own puppy?
        </h2>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/puppies"
            className="btn btn-primary inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-bold bg-[var(--color-toffee)] text-white hover:bg-[var(--color-toffee-ink)] transition-transform active:scale-95 shadow-md"
          >
            Browse available puppies
          </Link>
          <a
            href={WA_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-whatsapp inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-bold bg-[#25d366] text-white hover:bg-[#20ba59] transition-transform active:scale-95 shadow-md"
          >
            <WhatsAppIcon className="w-5 h-5 fill-white" />
            Talk with us on WhatsApp
          </a>
        </div>
      </section>
    </div>
  );
}
