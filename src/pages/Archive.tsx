import { useState } from 'react';
import { ArrowRight, Check } from 'lucide-react';
import { CornerMarks } from '@/components/ArchivalMarks';

type Props = {
  onNavigate: (page: string) => void;
};

export default function Archive({ onNavigate: _onNavigate }: Props) {
  return (
    <div className="pt-32 pb-32 px-6 flex items-center justify-center min-h-screen">
      <SubscriptionBox />
    </div>
  );
}

function SubscriptionBox() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="max-w-2xl w-full border border-rule bg-paper-warm p-10 md:p-14 relative">
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

      {submitted ? (
        <div className="w-full py-4 border border-accent text-accent font-mono text-xs tracking-[0.16em] uppercase text-center flex items-center justify-center gap-2">
          <Check className="w-4 h-4" />
          Welcome, Archivist — check your inbox
        </div>
      ) : (
        <button
          onClick={() => setSubmitted(true)}
          className="w-full py-4 bg-ink text-paper font-mono text-xs tracking-[0.16em] uppercase hover:bg-accent transition-colors duration-500 inline-flex items-center justify-center gap-2 group tactile"
        >
          Become an Archivist — $12/month
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-500" />
        </button>
      )}
    </div>
  );
}
