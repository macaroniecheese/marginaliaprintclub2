import { useState } from 'react';
import { ArrowRight, Check } from 'lucide-react';
import Seal from '@/components/Seal';
import { archiveOne, envelopeContents, archiveIndex } from '@/data';

type Props = {
  onNavigate: (page: string) => void;
};

export default function Archive({ onNavigate }: Props) {
  return (
    <div>
      {/* Hero */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <img
          src={archiveOne.heroImage}
          alt={archiveOne.title}
          className="absolute inset-0 w-full h-full object-cover scale-in"
        />
        <div className="absolute inset-0 bg-ink/40" />
        <div className="relative z-10 text-center px-6">
          <p className="font-mono text-xs tracking-[0.14em] uppercase text-parchment/80 mb-6 fade-in">
            Subscribe to the Archive
          </p>
          <h1 className="font-display italic font-medium text-parchment text-4xl md:text-6xl lg:text-7xl tracking-wide fade-up">
            Become an Archivist
          </h1>
          <p className="font-display italic text-parchment/85 text-lg md:text-xl mt-6 max-w-xl mx-auto fade-up">
            One envelope each month. One ingredient, five pieces, and a story
            that starts in the margin.
          </p>
        </div>
      </section>

      {/* The subscription */}
      <section className="py-24 px-6 border-b border-rule">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-mono text-xs tracking-[0.16em] uppercase text-madder mb-4">
              The Subscription
            </h2>
            <p className="font-display italic text-3xl md:text-4xl text-ink-soft text-balance">
              One way to receive. One envelope. Everything in it.
            </p>
          </div>

          {/* Single tier — not a shop */}
          <div className="max-w-2xl mx-auto border border-ink bg-parchment p-10 md:p-12">
            <div className="flex items-center justify-center gap-3 mb-2">
              <h3 className="font-display italic text-3xl text-ink">Archivist</h3>
            </div>
            <p className="font-mono text-xs tracking-[0.14em] uppercase text-ink-soft mb-8 text-center">
              The Full Archive · Monthly
            </p>
            <p className="font-display text-5xl text-madder mb-2 text-center">$23</p>
            <p className="font-mono text-xs text-ink-soft mb-10 text-center">per month · cancel anytime</p>

            <ul className="space-y-4 mb-10">
              {envelopeContents.map((item) => (
                <li key={item.id} className="flex gap-3 text-ink-soft">
                  <Check className="w-5 h-5 text-neem flex-shrink-0 mt-0.5" />
                  <span>
                    <span className="text-ink">{item.label}</span>
                    <span className="text-ink-soft/70"> — {item.note.split('.')[0].toLowerCase()}.</span>
                  </span>
                </li>
              ))}
              <li className="flex gap-3 text-ink-soft">
                <Check className="w-5 h-5 text-neem flex-shrink-0 mt-0.5" />
                <span className="text-ink">Bonus print on your birthday</span>
              </li>
              <li className="flex gap-3 text-ink-soft">
                <Check className="w-5 h-5 text-neem flex-shrink-0 mt-0.5" />
                <span className="text-ink">Early access to originals & commissions</span>
              </li>
            </ul>

            <SubscribeButton />

            <p className="font-mono text-[11px] text-ink-soft/60 mt-6 text-center tracking-[0.06em]">
              Your first envelope — Archive No. 001, Lemon Pickle — ships within the week.
            </p>
          </div>
        </div>
      </section>

      {/* How the archive arrives */}
      <section className="py-24 px-6 bg-parchment-deep/40 border-t border-rule">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-mono text-xs tracking-[0.16em] uppercase text-madder mb-16 text-center">
            How the Archive Arrives
          </h2>
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
              <div key={step.num} className="text-center">
                <div className="font-display italic text-5xl text-zari mb-4">
                  {step.num}
                </div>
                <h3 className="font-display italic text-xl text-ink mb-3">{step.title}</h3>
                <p className="text-ink-soft leading-relaxed">{step.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Archive index preview */}
      <section className="py-24 px-6 border-t border-rule">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-mono text-xs tracking-[0.16em] uppercase text-madder mb-4 text-center">
            The Archive So Far
          </h2>
          <p className="font-display italic text-3xl md:text-4xl text-center text-ink-soft mb-16 text-balance">
            Five investigations, planned and in progress.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {archiveIndex.map((entry) => {
              const available = entry.status === 'available';
              return (
                <div key={entry.number} className="group">
                  <div className="relative overflow-hidden bg-parchment-deep mb-4 aspect-[3/4] border border-rule">
                    <img
                      src={entry.image}
                      alt={entry.title}
                      className={`w-full h-full object-cover transition-all duration-700 ${
                        available
                          ? 'group-hover:scale-105'
                          : 'grayscale opacity-50 group-hover:opacity-70'
                      }`}
                    />
                    <span
                      className={`absolute top-2 right-2 font-mono text-[9px] px-2 py-0.5 tracking-[0.04em] uppercase ${
                        available
                          ? 'bg-madder text-parchment'
                          : 'bg-ink/60 text-parchment/80'
                      }`}
                    >
                      {available ? 'Now' : 'Soon'}
                    </span>
                  </div>
                  <p className="font-mono text-[10px] text-madder tracking-[0.1em] mb-1">
                    {entry.number}
                  </p>
                  <h3
                    className={`font-display italic text-lg ${
                      available ? 'text-ink' : 'text-ink-soft/70'
                    }`}
                  >
                    {entry.title}
                  </h3>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 px-6 bg-ink text-center">
        <div className="max-w-2xl mx-auto">
          <div className="flex justify-center mb-8">
            <Seal size={72} color="#E7DAB9" sprigColor="#A9812E" veinColor="#251F16" />
          </div>
          <h2 className="font-display italic text-3xl md:text-4xl text-parchment mb-6">
            The archive begins with a jar.
          </h2>
          <p className="text-parchment-deep/70 mb-10">
            Subscribe before Archive No. 002 arrives, and your collection
            starts at the beginning.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <SubscribeButton dark />
            <button
              onClick={() => onNavigate('home')}
              className="px-10 py-4 border border-parchment/40 text-parchment font-mono text-xs tracking-[0.14em] uppercase hover:bg-parchment hover:text-ink transition-colors"
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
      <div className="w-full py-4 border border-neem text-neem font-mono text-xs tracking-[0.14em] uppercase text-center flex items-center justify-center gap-2">
        <Check className="w-4 h-4" />
        Welcome, Archivist — check your inbox
      </div>
    );
  }

  return (
    <button
      onClick={() => setSubmitted(true)}
      className={`w-full py-4 font-mono text-xs tracking-[0.14em] uppercase transition-colors inline-flex items-center justify-center gap-2 group ${
        dark
          ? 'bg-parchment text-ink hover:bg-zari'
          : 'bg-madder text-parchment hover:bg-ink'
      }`}
    >
      Become an Archivist — $23/month
      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
    </button>
  );
}
