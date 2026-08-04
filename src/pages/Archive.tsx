import { useState } from 'react';
import { ArrowRight, Check } from 'lucide-react';
import Seal from '@/components/Seal';
import {
  RegistrationMark,
  CatalogLabel,
  DateStamp,
  CornerMarks,
  SectionNumber,
} from '@/components/ArchivalMarks';
import { useInView } from '@/hooks/useInView';
import { archiveOne, envelopeContents, archiveIndex } from '@/data';

type Props = {
  onNavigate: (page: string) => void;
};

export default function Archive({ onNavigate }: Props) {
  return (
    <div>
      {/* Hero */}
      <section className="relative h-[60vh] flex items-end overflow-hidden">
        <img
          src={archiveOne.heroImage}
          alt={archiveOne.title}
          className="absolute inset-0 w-full h-full object-cover scale-in"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-ink/20 to-ink/30" />

        <div className="absolute top-0 left-0 right-0 z-10 px-6 pt-24 pb-4">
          <div className="max-w-8xl mx-auto flex items-center justify-between">
            <div className="flex items-center gap-3">
              <RegistrationMark size={12} color="rgba(250,250,247,0.5)" />
              <CatalogLabel className="text-paper/60">{archiveOne.catalogId}</CatalogLabel>
            </div>
            <DateStamp className="text-paper/60">{archiveOne.date}</DateStamp>
          </div>
        </div>

        <div className="relative z-10 px-6 pb-16 md:pb-20 max-w-8xl mx-auto w-full">
          <p className="font-mono text-xs tracking-[0.2em] uppercase text-paper/70 mb-4 fade-in">
            Subscribe to the Archive
          </p>
          <h1 className="font-display font-light text-paper text-5xl md:text-7xl lg:text-8xl tracking-tight fade-up leading-[0.92] text-balance">
            Become an Archivist.
          </h1>
          <p className="font-display italic font-light text-paper/80 text-lg md:text-2xl mt-6 max-w-2xl fade-up">
            One envelope each month. One ingredient, five pieces, and a story
            that starts in the margin.
          </p>
        </div>
      </section>

      {/* The subscription */}
      <section className="py-32 md:py-40 px-6 rule-bottom">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-start gap-8 mb-16">
            <SectionNumber num="01" className="flex-shrink-0 -ml-2" />
            <div className="pt-6">
              <CatalogLabel className="text-accent">The Subscription</CatalogLabel>
              <h2 className="font-display font-light text-4xl md:text-6xl text-ink mt-3 leading-[0.95] tracking-tight text-balance">
                One way to receive. One envelope. Everything in it.
              </h2>
            </div>
          </div>

          {/* Single tier */}
          <div className="max-w-2xl mx-auto border border-rule bg-paper-warm p-10 md:p-14 relative tactile hover:shadow-lg" style={{ boxShadow: '0 0 0 0 rgba(0,0,0,0)' }}>
            <CornerMarks color="rgba(26,26,26,0.15)" />

            <div className="text-center mb-10">
              <h3 className="font-display italic font-light text-4xl text-ink mb-2">Archivist</h3>
              <p className="font-mono text-xs tracking-[0.16em] uppercase text-ink-light">
                The Full Archive · Monthly
              </p>
            </div>

            <div className="text-center mb-10">
              <p className="font-display font-light text-6xl text-accent">$23</p>
              <p className="font-mono text-xs text-ink-faint mt-2">per month · cancel anytime</p>
            </div>

            <ul className="space-y-4 mb-10">
              {envelopeContents.map((item) => (
                <li key={item.id} className="flex gap-3 text-ink-soft">
                  <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <span>
                    <span className="text-ink">{item.label}</span>
                    <span className="text-ink-light"> — {item.note.split('.')[0].toLowerCase()}.</span>
                  </span>
                </li>
              ))}
              <li className="flex gap-3 text-ink-soft">
                <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <span className="text-ink">Bonus print on your birthday</span>
              </li>
              <li className="flex gap-3 text-ink-soft">
                <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <span className="text-ink">Early access to originals & commissions</span>
              </li>
            </ul>

            <SubscribeButton />

            <p className="font-mono text-[11px] text-ink-faint mt-6 text-center tracking-[0.06em]">
              Your first envelope — Archive No. 001, Lemon Pickle — ships within the week.
            </p>
          </div>
        </div>
      </section>

      {/* How the archive arrives */}
      <section className="py-32 md:py-40 px-6 bg-paper-warm rule-bottom">
        <div className="max-w-8xl mx-auto">
          <div className="flex items-start gap-8 mb-20">
            <SectionNumber num="02" className="flex-shrink-0 -ml-2" />
            <div className="pt-6">
              <CatalogLabel className="text-accent">How It Arrives</CatalogLabel>
              <h2 className="font-display font-light text-4xl md:text-6xl text-ink mt-3 leading-[0.95] tracking-tight text-balance">
                How the archive arrives.
              </h2>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                num: '01',
                title: 'Subscribe',
                body: 'Join as an Archivist. Your first envelope — the current archive — ships within the week.',
              },
              {
                num: '02',
                title: 'Receive',
                body: 'A sealed envelope arrives each month: painting, recipe, science card, history card, and a letter.',
              },
              {
                num: '03',
                title: 'Collect',
                body: 'The archive grows by one each month. Each issue is designed to sit beside the last — same size, same seal, new story.',
              },
            ].map((step) => (
              <div key={step.num} className="border-t border-rule pt-6">
                <span className="font-mono text-xs text-accent tracking-[0.1em]">{step.num}</span>
                <h3 className="font-display text-2xl text-ink mt-3 mb-3">{step.title}</h3>
                <p className="text-ink-soft leading-relaxed">{step.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Archive index */}
      <section className="py-32 md:py-40 px-6 rule-bottom">
        <div className="max-w-8xl mx-auto">
          <div className="flex items-start gap-8 mb-20">
            <SectionNumber num="03" className="flex-shrink-0 -ml-2" />
            <div className="pt-6">
              <CatalogLabel className="text-accent">The Archive So Far</CatalogLabel>
              <h2 className="font-display font-light text-4xl md:text-6xl text-ink mt-3 leading-[0.95] tracking-tight text-balance">
                Five investigations, planned and in progress.
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-8">
            {archiveIndex.map((entry) => {
              const available = entry.status === 'available';
              return (
                <ArchiveDrawerCard key={entry.number} entry={entry} available={available} />
              );
            })}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 md:py-40 px-6 bg-ink text-center">
        <div className="max-w-2xl mx-auto">
          <div className="flex justify-center mb-10">
            <Seal size={64} color="#FAFAF7" sprigColor="#A9812E" veinColor="#1A1A1A" />
          </div>
          <CatalogLabel className="text-paper/50">Subscribe</CatalogLabel>
          <h2 className="font-display font-light text-4xl md:text-6xl text-paper mt-3 mb-8 leading-[0.95] tracking-tight text-balance">
            The archive begins with a jar.
          </h2>
          <p className="text-paper/60 mb-12 text-lg max-w-lg mx-auto">
            Subscribe before Archive No. 002 arrives, and your collection
            starts at the beginning.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <SubscribeButton dark />
            <button
              onClick={() => onNavigate('home')}
              className="px-10 py-4 border border-paper/20 text-paper font-mono text-xs tracking-[0.16em] uppercase hover:bg-paper/10 transition-colors duration-300"
            >
              Back to the Homepage
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

function SubscribeButton({ dark = false }: { dark?: boolean }) {
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
      className={`w-full py-4 font-mono text-xs tracking-[0.16em] uppercase transition-colors duration-500 inline-flex items-center justify-center gap-2 group tactile ${
        dark
          ? 'bg-paper text-ink hover:bg-accent hover:text-paper'
          : 'bg-ink text-paper hover:bg-accent'
      }`}
    >
      Become an Archivist — $23/month
      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-500" />
    </button>
  );
}

function ArchiveDrawerCard({
  entry,
  available,
}: {
  entry: (typeof archiveIndex)[number];
  available: boolean;
}) {
  const { ref, inView } = useInView<HTMLDivElement>();

  return (
    <div ref={ref} className={`group drawer ${inView ? '' : 'is-closed'}`}>
      <div className="relative overflow-hidden bg-paper-deep mb-4 aspect-[3/4]">
        <img
          src={entry.image}
          alt={entry.title}
          className={`w-full h-full object-cover img-soft ${inView ? 'is-revealed' : ''}`}
        />
        {!available && (
          <div className="absolute inset-0 bg-paper/30 backdrop-blur-[2px] group-hover:opacity-0 group-hover:backdrop-blur-0 transition-all duration-[900ms] ease-out pointer-events-none" />
        )}
        <span
          className={`absolute top-2 left-2 font-mono text-[9px] px-2 py-0.5 tracking-[0.04em] uppercase transition-all duration-500 ${
            available ? 'bg-accent text-paper' : 'bg-ink/70 text-paper/80 group-hover:bg-ink/50'
          }`}
        >
          {available ? 'Now' : 'Soon'}
        </span>
      </div>
      <CatalogLabel className="text-ink-faint">{entry.catalog}</CatalogLabel>
      <div className="flex items-baseline gap-2 mt-1">
        <span className="font-mono text-xs text-accent tracking-[0.1em]">
          {entry.number}
        </span>
        <h3
          className={`font-display text-lg transition-colors duration-500 ${
            available ? 'text-ink group-hover:text-accent' : 'text-ink-light group-hover:text-ink-soft'
          }`}
        >
          {entry.title}
        </h3>
      </div>
    </div>
  );
}
