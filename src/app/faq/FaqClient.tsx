'use client';

import { useState } from 'react';
import { WA_URL } from '@/lib/data';
import { WhatsAppIcon } from '@/components/icons';

interface FaqItem {
  id: string;
  question: string;
  answer: string;
  tilt: string;
  pin: string;
}

export default function FaqClient({ items }: { items: FaqItem[] }) {
  const [search, setSearch] = useState('');
  const [userQuestion, setUserQuestion] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const filtered = items.filter(
    (item) =>
      item.question.toLowerCase().includes(search.toLowerCase()) ||
      item.answer.toLowerCase().includes(search.toLowerCase())
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!userQuestion.trim()) return;
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setUserQuestion('');
    }, 4000);
  };

  return (
    <div className="gutter max-w-[110rem] mx-auto">
      {/* Header */}
      <section className="text-center pt-8 pb-10 max-w-3xl mx-auto">
        <span className="font-scrawl text-2xl text-[var(--color-toffee-ink)] font-bold">
          sniff out a question
        </span>
        <h1 className="font-plush text-4xl sm:text-5xl md:text-6xl text-[var(--color-cocoa)] mt-2 mb-4">
          Questions &amp; answers
        </h1>
        <p className="text-lg md:text-xl text-[var(--color-cocoa)]/80 leading-relaxed">
          Can’t find what you’re looking for? Message us on WhatsApp — our team is available 24/7.
        </p>

        {/* Search */}
        <div className="mt-8 max-w-md mx-auto relative">
          <input
            type="search"
            placeholder="Search questions (e.g. vaccination, delivery)…"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-11 pr-4 py-3 rounded-full border-2 border-[var(--color-cocoa)] bg-[var(--color-milk)] text-sm font-medium text-[var(--color-cocoa)] placeholder-[var(--color-cocoa)]/50 focus:outline-none focus:ring-2 focus:ring-[var(--color-toffee)]"
          />
          <span className="absolute left-4 top-1/2 -translate-y-1/2 text-lg">🔍</span>
        </div>

        <div className="mt-6 inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[var(--color-peach)]/60 text-xs font-bold text-[var(--color-toffee-ink)]">
          <span>📌</span>
          <span>{filtered.length} notes on the board</span>
        </div>
      </section>

      {/* Sticky Notes Corkboard Grid */}
      <section aria-label="FAQ Board" className="mt-6 mb-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {filtered.map((item, index) => {
            const colors = ['#fffdf4', '#fef8eb', '#fdfaf2', '#fffaf0'];
            const bg = colors[index % colors.length];
            return (
              <div
                key={item.id}
                className="relative rounded-2xl p-6 md:p-7 shadow-md border border-[var(--color-cocoa)]/15 transition-transform duration-200 hover:rotate-0 hover:scale-[1.02] hover:shadow-lg hover:z-10"
                style={{
                  backgroundColor: bg,
                  transform: `rotate(${item.tilt})`,
                }}
              >
                {/* Pin visual */}
                <div
                  className="absolute -top-3 left-1/2 -translate-x-1/2 size-6 rounded-full shadow-md border-2 border-white flex items-center justify-center text-xs"
                  style={{ backgroundColor: item.pin }}
                >
                  📍
                </div>

                <div className="pt-2">
                  <h2 className="font-plush text-xl text-[var(--color-cocoa)] mb-3 leading-snug">
                    {item.question}
                  </h2>
                  <p className="text-sm md:text-base text-[var(--color-cocoa)]/80 leading-relaxed">
                    {item.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-16 bg-[var(--color-milk)] rounded-3xl border border-dashed border-[var(--color-cocoa)]/20">
            <span className="text-4xl block mb-2">🐾</span>
            <p className="text-lg font-bold text-[var(--color-cocoa)]">
              No matching questions found
            </p>
            <p className="text-sm text-[var(--color-cocoa)]/70 mt-1">
              Ask us directly on WhatsApp and we’ll reply in minutes!
            </p>
          </div>
        )}
      </section>

      {/* Ask Your Own Question Section */}
      <section className="max-w-2xl mx-auto bg-[var(--color-peach)]/50 border-2 border-[var(--color-cocoa)]/15 rounded-3xl p-8 text-center shadow-sm">
        <span className="text-3xl block mb-2">❓</span>
        <h2 className="font-plush text-2xl md:text-3xl text-[var(--color-cocoa)] mb-2">
          Ask your own question
        </h2>
        <p className="text-sm md:text-base text-[var(--color-cocoa)]/80 mb-6">
          Have a specific question about our teacup puppies, travel arrangements, or care routines?
        </p>

        {submitted ? (
          <div className="bg-[var(--color-grass)] border border-[#2d6622]/30 rounded-2xl p-4 text-[#2d6622] font-bold text-sm">
            ✓ Thank you! We received your question. You can also message us directly on WhatsApp for an immediate answer.
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
            <input
              type="text"
              placeholder="Type your question here…"
              value={userQuestion}
              onChange={(e) => setUserQuestion(e.target.value)}
              required
              className="flex-1 px-5 py-3 rounded-full border-2 border-[var(--color-cocoa)] bg-white text-sm focus:outline-none focus:ring-2 focus:ring-[var(--color-toffee)]"
            />
            <button
              type="submit"
              className="px-6 py-3 rounded-full bg-[var(--color-toffee)] text-white font-bold text-sm hover:bg-[var(--color-toffee-ink)] transition-transform active:scale-95 shadow-sm whitespace-nowrap"
            >
              Send question
            </button>
          </form>
        )}

        <div className="mt-6 pt-6 border-t border-[var(--color-cocoa)]/10">
          <a
            href={WA_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-bold text-[#25d366] hover:underline"
          >
            <WhatsAppIcon className="w-4 h-4 fill-[#25d366]" />
            Or ask directly on WhatsApp (+971 50 000 0000) →
          </a>
        </div>
      </section>
    </div>
  );
}
