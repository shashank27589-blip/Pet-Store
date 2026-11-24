'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { puppies, WA_URL } from '@/lib/data';
import { WhatsAppIcon } from '@/components/icons';

const breeds = ['All', 'Maltipoo', 'Pomeranian', 'Toy Poodle', 'Cavapoo', 'Shih Tzu', 'Bichon', 'Maltese'];
const genders = ['All', 'Male', 'Female'];
const sources = ['All', 'Local', 'Imported'];

export default function PuppiesClient() {
  const [activeBreed, setActiveBreed] = useState('All');
  const [activeGender, setActiveGender] = useState('All');
  const [activeSource, setActiveSource] = useState('All');
  const [search, setSearch] = useState('');

  const filtered = puppies.filter((p) => {
    if (activeBreed !== 'All') {
      const match = p.breed.toLowerCase().includes(activeBreed.toLowerCase()) || 
                    p.slug.toLowerCase().includes(activeBreed.toLowerCase());
      if (!match) return false;
    }
    if (activeGender !== 'All' && p.gender.toLowerCase() !== activeGender.toLowerCase()) return false;
    if (activeSource !== 'All' && p.source.toLowerCase() !== activeSource.toLowerCase()) return false;
    if (search && !`${p.name} ${p.breed} ${p.tags.join(' ')}`.toLowerCase().includes(search.toLowerCase())) return false;
    return true;
  });

  return (
    <>
      {/* Page Hero */}
      <section
        className="tp-page-hero gutter pt-12 pb-10"
        style={{ '--sky-top': '#fffbf3', '--sky-bottom': '#f6cc85' } as React.CSSProperties}
        aria-labelledby="puppies-title"
      >
        <div className="max-w-[110rem] mx-auto text-center md:text-left">
          <span className="font-scrawl text-xl md:text-2xl" style={{ color: 'var(--color-toffee-ink)' }}>
            from Teddy’s sketchbook
          </span>
          <h1 id="puppies-title" className="font-plush text-4xl sm:text-5xl md:text-6xl mt-2 mb-3" style={{ color: 'var(--color-cocoa)' }}>
            Available puppies
          </h1>
          <p className="text-base md:text-lg max-w-2xl text-[var(--color-cocoa)]/80 leading-relaxed">
            Every listing shows real photos of the actual puppy. Open a profile to see them all, then ask us about them on WhatsApp.
          </p>
        </div>
      </section>

      <div className="gutter py-8 max-w-[110rem] mx-auto">
        {/* Search & Filters */}
        <div className="mb-8 space-y-4 bg-white/70 p-6 rounded-3xl border border-[var(--color-cocoa)]/10 shadow-sm">
          {/* Search */}
          <div className="relative max-w-md">
            <input
              type="search"
              placeholder="Search by name, breed, or tags…"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-11 pr-4 py-2.5 rounded-full border-2 border-[var(--color-cocoa)]/30 bg-[var(--color-milk)] text-sm font-medium text-[var(--color-cocoa)] placeholder-[var(--color-cocoa)]/50 focus:outline-none focus:border-[var(--color-toffee)]"
            />
            <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-base">🔍</span>
          </div>

          {/* Breed filter */}
          <div className="tp-filter-bar flex flex-wrap items-center gap-1.5">
            <span className="font-bold text-xs uppercase tracking-wider text-[var(--color-toffee-ink)] mr-1">Breed:</span>
            {breeds.map((b) => (
              <button
                key={b}
                className={`tp-filter-btn px-3 py-1.5 rounded-full text-xs font-bold transition-colors ${
                  activeBreed === b
                    ? 'bg-[var(--color-toffee)] text-white'
                    : 'bg-[var(--color-honey-soft)] text-[var(--color-cocoa)]/80 hover:bg-[var(--color-peach)]'
                }`}
                onClick={() => setActiveBreed(b)}
              >
                {b}
              </button>
            ))}
          </div>

          <div className="flex flex-wrap gap-6 pt-1">
            {/* Gender filter */}
            <div className="tp-filter-bar flex items-center gap-1.5">
              <span className="font-bold text-xs uppercase tracking-wider text-[var(--color-toffee-ink)] mr-1">Gender:</span>
              {genders.map((g) => (
                <button
                  key={g}
                  className={`tp-filter-btn px-3 py-1 rounded-full text-xs font-bold transition-colors ${
                    activeGender === g
                      ? 'bg-[var(--color-cocoa)] text-white'
                      : 'bg-[var(--color-honey-soft)] text-[var(--color-cocoa)]/80 hover:bg-[var(--color-peach)]'
                  }`}
                  onClick={() => setActiveGender(g)}
                >
                  {g}
                </button>
              ))}
            </div>

            {/* Source filter */}
            <div className="tp-filter-bar flex items-center gap-1.5">
              <span className="font-bold text-xs uppercase tracking-wider text-[var(--color-toffee-ink)] mr-1">Origin:</span>
              {sources.map((s) => (
                <button
                  key={s}
                  className={`tp-filter-btn px-3 py-1 rounded-full text-xs font-bold transition-colors ${
                    activeSource === s
                      ? 'bg-[var(--color-cocoa)] text-white'
                      : 'bg-[var(--color-honey-soft)] text-[var(--color-cocoa)]/80 hover:bg-[var(--color-peach)]'
                  }`}
                  onClick={() => setActiveSource(s)}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Count */}
        <div className="flex items-center justify-between mb-6">
          <p className="font-bold text-sm text-[var(--color-toffee-ink)]">
            {filtered.length} {filtered.length === 1 ? 'puppy' : 'puppies'} waiting for a home
          </p>
          <Link href="/gone-home" className="text-xs font-bold text-[var(--color-toffee)] hover:underline flex items-center gap-1">
            <span>🎟️</span>
            <span>View 27 puppies who already found homes →</span>
          </Link>
        </div>

        {/* Grid */}
        {filtered.length > 0 ? (
          <div className="tp-puppies-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filtered.map((pup) => {
              const imgSrc = pup.image.startsWith('http') ? pup.image : (pup.image.startsWith('/') ? pup.image : `/${pup.image}`);
              return (
                <Link
                  key={pup.id}
                  href={`/puppies/${pup.slug}`}
                  className="tp-puppy-card group bg-white border-2 border-[var(--color-cocoa)]/15 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col"
                >
                  <div className="tp-puppy-card__photo relative aspect-square overflow-hidden bg-[var(--color-honey)]/30">
                    <Image
                      src={imgSrc}
                      alt={`${pup.name}, ${pup.breed}`}
                      fill
                      sizes="(min-width: 1280px) 25vw, (min-width: 768px) 33vw, 100vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      unoptimized
                    />
                    
                    {/* Status badges */}
                    <div className="absolute top-3 left-3 flex flex-col gap-1.5 z-10">
                      <span className="px-2.5 py-1 rounded-full text-xs font-bold bg-white/90 text-[var(--color-wa-green)] shadow-sm backdrop-blur-xs flex items-center gap-1">
                        <span className="size-2 rounded-full bg-[var(--color-wa-green)] animate-pulse" />
                        Available
                      </span>
                      {pup.hasVideo && (
                        <span className="px-2.5 py-0.5 rounded-full text-[0.7rem] font-bold bg-black/70 text-white shadow-sm flex items-center gap-1">
                          ▶ video
                        </span>
                      )}
                    </div>

                    {pup.source === 'imported' && (
                      <span className="absolute top-3 right-3 px-2.5 py-1 rounded-full text-xs font-bold bg-[var(--color-honey)] text-[var(--color-toffee-ink)] border border-[var(--color-toffee)]/30 shadow-sm z-10">
                        ✈️ Imported
                      </span>
                    )}
                  </div>

                  <div className="tp-puppy-card__body p-5 flex-1 flex flex-col justify-between">
                    <div>
                      <span className="text-xs font-bold uppercase tracking-wider text-[var(--color-toffee)] block mb-1">
                        {pup.breed}
                      </span>
                      <h3 className="tp-puppy-card__name font-plush text-2xl text-[var(--color-cocoa)] group-hover:text-[var(--color-toffee)] transition-colors">
                        {pup.name}
                      </h3>
                      <div className="tp-puppy-card__meta text-xs font-semibold text-[var(--color-cocoa)]/70 mt-1 flex items-center gap-2">
                        <span>{pup.gender === 'Female' ? 'Girl' : 'Boy'}</span>
                        <span>·</span>
                        <span>{pup.age}</span>
                        <span>·</span>
                        <span>{pup.weight}</span>
                      </div>

                      <div className="flex flex-wrap gap-1.5 mt-3">
                        {pup.tags.slice(0, 3).map((tag) => (
                          <span
                            key={tag}
                            className="px-2 py-0.5 rounded-md text-[0.7rem] font-bold bg-[var(--color-honey-soft)] text-[var(--color-toffee-ink)] border border-[var(--color-cocoa)]/10"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="tp-puppy-card__price mt-5 pt-3 border-t border-[var(--color-cocoa)]/10 flex items-center justify-between">
                      <span className="font-bold text-base text-[var(--color-cocoa)]">
                        {pup.currency} {pup.price.toLocaleString()}
                      </span>
                      <span className="text-xs font-bold text-[var(--color-toffee)] group-hover:translate-x-1 transition-transform flex items-center gap-1">
                        Meet {pup.name} →
                      </span>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        ) : (
          <div className="text-center py-16 bg-white rounded-3xl border-2 border-dashed border-[var(--color-cocoa)]/20">
            <span className="text-5xl block mb-3">🐾</span>
            <p className="font-plush text-2xl text-[var(--color-cocoa)]">No puppies match your filters</p>
            <p className="text-sm text-[var(--color-cocoa)]/75 mt-1">Try resetting your filters or message us on WhatsApp for custom requests.</p>
            <button
              onClick={() => { setActiveBreed('All'); setActiveGender('All'); setActiveSource('All'); setSearch(''); }}
              className="mt-4 px-5 py-2 rounded-full border border-[var(--color-cocoa)] text-xs font-bold hover:bg-[var(--color-peach)] transition-colors"
            >
              Reset filters
            </button>
          </div>
        )}

        {/* Already Gone Home Banner */}
        <div className="mt-16 bg-[var(--color-peach)]/50 border-2 border-[var(--color-cocoa)]/20 rounded-3xl p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm">
          <div>
            <span className="font-scrawl text-lg text-[var(--color-toffee-ink)] font-bold">
              tickets home
            </span>
            <h2 className="font-plush text-2xl md:text-3xl text-[var(--color-cocoa)] mt-1">
              Already gone home
            </h2>
            <p className="text-sm md:text-base text-[var(--color-cocoa)]/80 mt-1 max-w-xl">
              Every puppy here has already joined a loving family. Looking for one just like them? Tell us — we’ll help you find your match.
            </p>
          </div>
          <Link
            href="/gone-home"
            className="btn btn-primary px-6 py-3 rounded-full font-bold text-sm bg-[var(--color-cocoa)] text-white hover:bg-[var(--color-brown-mid)] transition-transform active:scale-95 whitespace-nowrap"
          >
            See puppies gone home →
          </Link>
        </div>

        {/* Order upon request banner */}
        <div className="mt-8 rounded-3xl border-2 border-[var(--color-cocoa)]/20 bg-[var(--color-honey)] p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm">
          <div>
            <span className="font-scrawl text-lg text-[var(--color-toffee-ink)] font-bold">
              can’t find your dream breed?
            </span>
            <h2 className="font-plush text-2xl md:text-3xl text-[var(--color-cocoa)] mt-1">
              Order upon request ✈️
            </h2>
            <p className="text-sm md:text-base text-[var(--color-cocoa)]/80 mt-1 max-w-xl">
              We source rare teacup breeds from certified breeders in Europe, Korea, and beyond. Tell us what you’re looking for.
            </p>
          </div>
          <a
            href={WA_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-whatsapp px-6 py-3 rounded-full font-bold text-sm bg-[#25d366] text-white hover:bg-[#20ba59] transition-transform active:scale-95 whitespace-nowrap flex items-center gap-2"
          >
            <WhatsAppIcon className="w-4 h-4 fill-white" />
            Enquire on WhatsApp
          </a>
        </div>
      </div>
    </>
  );
}
