import type { Metadata } from 'next';
import FaqClient from './FaqClient';
import { faqItems } from '@/lib/data';

export const metadata: Metadata = {
  title: 'Questions & answers | TeddyPups U.A.E.',
  description: 'Can’t find what you’re looking for? Message us on WhatsApp — our team is available 24/7.',
};

export default function FaqPage() {
  return (
    <main className="min-h-screen pt-24 pb-20">
      <FaqClient items={faqItems} />
    </main>
  );
}
