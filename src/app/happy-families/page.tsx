import type { Metadata } from 'next';
import HappyFamiliesClient from './HappyFamiliesClient';
import { happyMoments, happyFamiliesTestimonial } from '@/lib/data';

export const metadata: Metadata = {
  title: 'Happy families | TeddyPups U.A.E.',
  description: 'Nothing makes us happier than seeing our puppies in loving homes! Moments shared by our amazing families.',
};

export default function HappyFamiliesPage() {
  return (
    <main className="min-h-screen pt-24 pb-20">
      <HappyFamiliesClient moments={happyMoments} testimonial={happyFamiliesTestimonial} />
    </main>
  );
}
