import { useState } from 'react';
import { ArrowRight, Check } from 'lucide-react';
import {
  CatalogLabel,
  CornerMarks,
  SectionNumber,
} from '@/components/ArchivalMarks';
import { archiveIndex } from '@/data';

type Props = {
  onNavigate: (page: string) => void;
};

export default function Archive({ onNavigate }: Props) {
  return (
    <div className="pt-32">
      {/* Subscription */}
      <section className="py-24 md:py-32 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-start gap-8 mb-16">
            <SectionNumber num="01" className="flex-shrink-0 -ml-2" />
            <div className="pt-6">
              <CatalogLabel className="text-accent">Subscribe</CatalogLabel>
            </div>
          </div>

          {/* Single tier */}
          <div className="max-w-2xl mx-auto border border-rule bg-paper-warm p-10 md:p-14 relative">
            <CornerMarks color="rgba(26,26,26,0.15)" />

            <div className="text-center mb-10">
              <h3 className="font-display italic font-light text-4xl text-ink mb-2">
                Archivist
              </h3>
              <p className="font-mono text-xs tracking-[0.16em] uppercase text-ink-light">
                Monthly Investigation
              </p>
            </div>

            <div className="text-center mb-10">
              <p className="font-display font-light text-6xl text-accent">$12</p>
              <p className="font-mono text-xs text-ink-faint mt-2">
                per month · cancel anytime
              </p>
            </div>

            <ul className="space-y-4 mb-10">
              {[
                'The original 4x6 art print',
                'The recipe',
                'The field notes',
                'The handwritten letter',
                'The surprise',
                'The curated Spotify playlist',
              ].map((item) => (
                <li key={item} className="flex gap-3 text-ink-soft">
                  <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-ink">{item}</span>
                </li>
              ))}
            </ul>

            <SubscribeButton />
          </div>
        </div>
      </section>

      {/* Archive index */}
      <section className="py-24 md:py-32 px-6">
        <div className="max-w-8xl mx-auto">
          <div className="flex items-start gap-8 mb-20">
            <SectionNumber num="02" className="flex-shrink-0 -ml-2" />
            <div className="pt-6">
              <CatalogLabel className="text-accent">Archive Index</CatalogLabel>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {archiveIndex.map((entry) => (
              <ArchiveIndexCard key={entry.number} entry={entry} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

function SubscribeButton() {
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <div className="w-full py-4 border border-accent text-accent font-mono text-xs tracking-[0.16em] uppercase text-center flex items-center justify-center gap-2">
        <Check className="w-4 h-4" />
        Welcome, Archivist — check your inbox
      </div>
    );
  }

  return (
    <button
      onClick={() => setSubmitted(true)}
      className="w-full py-4 bg-ink text-paper font-mono text-xs tracking-[0.16em] uppercase hover:bg-accent transition-colors duration-500 inline-flex items-center justify-center gap-2 group tactile"
    >
      Become an Archivist — $12/month
      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-500" />
    </button>
  );
}

function ArchiveIndexCard({
  entry,
}: {
  entry: (typeof archiveIndex)[number];
}) {
  const available = entry.status === 'available';

  return (
    <div className="group cursor-default">
      <div className="relative overflow-hidden bg-paper-deep mb-4 aspect-[3/4]">
        <img
          src={entry.image}
          alt={entry.title}
          className={`w-full h-full object-cover transition-all duration-[900ms] ease-out ${
            available
              ? 'opacity-100'
              : 'opacity-30 grayscale group-hover:opacity-100 group-hover:grayscale-0'
          }`}
        />
        {!available && (
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <span className="font-mono text-[10px] tracking-[0.14em] uppercase text-paper bg-ink/60 px-3 py-1.5 transition-opacity duration-500 group-hover:opacity-0">
              Coming Soon
            </span>
          </div>
        )}
      </div>
      <p className="font-display text-lg text-ink leading-tight">
        {entry.number} — {entry.title}
      </p>
      <p className="font-mono text-[10px] tracking-[0.06em] text-ink-faint mt-1 uppercase">
        {entry.note}
      </p>
    </div>
  );
}
