import type { Metadata } from 'next';
import ContactClient from './ContactClient';
import { showroomInfo, WA_URL } from '@/lib/data';

export const metadata: Metadata = {
  title: 'Visit & contact | TeddyPups U.A.E.',
  description: 'Have questions about our puppies or adoption process? Visit our Downtown Dubai showroom or fill out our letter form.',
};

export default function ContactPage() {
  return (
    <main className="min-h-screen pt-24 pb-20">
      <ContactClient info={showroomInfo} waUrl={WA_URL} />
    </main>
  );
}
