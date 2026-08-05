import { useState, useRef, useCallback } from 'react';
import { ArrowRight } from 'lucide-react';
import { useInView } from '@/hooks/useInView';
import { envelopeContents } from '@/data';

type Props = {
  onNavigate: (page: string) => void;
};

export default function Home({ onNavigate }: Props) {
  const contentsRef = useRef<HTMLElement | null>(null);

  const scrollToContents = useCallback(() => {
    contentsRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, []);

  const setSectionRef = useCallback((node: HTMLElement | null) => {
    contentsRef.current = node;
  }, []);

  return (
    <div className="paper-texture">
      <Hero onNavigate={onNavigate} onSeeInside={scrollToContents} />
      <ContentsAccordion sectionRef={setSectionRef} />
    </div>
  );
}

/* ═══════════════════════════════════════════════════ */
/*  1. HERO                                              */
/* ═══════════════════════════════════════════════════ */
function Hero({
  onNavigate,
  onSeeInside,
}: {
  onNavigate: (page: string) => void;
  onSeeInside: () => void;
}) {
  return (
    <section className="relative min-h-screen flex items-end overflow-hidden">
      <img
        src="https://images.pexels.com/photos/7494618/pexels-photo-7494618.jpeg?auto=compress&cs=tinysrgb&h=1200&w=900"
        alt="Oil painting study of lemons with art supplies"
        className="absolute inset-0 w-full h-full object-cover scale-in"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-ink/10 to-ink/30" />

      <div className="relative z-10 w-full px-6 pb-16 md:pb-24">
        <div className="max-w-8xl mx-auto">
          <p className="font-mono text-xs tracking-[0.2em] uppercase text-paper/70 mb-6 fade-in">
            No. 001 — Pickling
          </p>
          <h1 className="font-display font-light text-paper text-5xl sm:text-7xl md:text-8xl lg:text-9xl leading-[0.92] tracking-tight fade-up max-w-5xl text-balance">
            Nothing we eat exists in isolation.
          </h1>
          <p className="font-display italic font-light text-paper/80 text-lg md:text-2xl mt-8 max-w-2xl leading-relaxed fade-up">
            Each month, Marginalia follows one ingredient, technique, or dish
            through an illustrated archive, part recipe, part artwork, part
            field note.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-12 fade-up">
            <button
              onClick={() => onNavigate('archive')}
              className="px-10 py-4 bg-paper text-ink font-mono text-xs tracking-[0.16em] uppercase hover:bg-accent hover:text-paper transition-colors duration-500 tactile"
            >
              Become an Archivist
            </button>
            <button
              onClick={onSeeInside}
              className="px-10 py-4 border border-paper/30 text-paper font-mono text-xs tracking-[0.16em] uppercase hover:bg-paper/10 transition-colors duration-500 tactile"
            >
              See what's inside
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════ */
/*  2. CONTENTS — horizontal accordion                    */
/*  5 collapsed panels side by side. On hover or click,  */
/*  the panel expands horizontally to reveal a full image */
/*  with a short label. Collapsed panels show a thin      */
/*  sliver with just a label.                             */
/* ═══════════════════════════════════════════════════ */
function ContentsAccordion({
  sectionRef,
}: {
  sectionRef: (node: HTMLElement | null) => void;
}) {
  const [active, setActive] = useState<number>(0);
  const { ref: viewRef, inView } = useInView<HTMLDivElement>();

  return (
    <section ref={sectionRef} className="py-32 md:py-40 px-6">
      <div className="max-w-8xl mx-auto">
        <div className="mb-20">
          <h2 className="font-display font-light text-4xl md:text-6xl text-ink leading-[0.95] tracking-tight text-balance">
            Five pieces. One ingredient.
          </h2>
        </div>

        <div
          ref={viewRef}
          className={`flex gap-1 h-[60vh] min-h-[420px] max-h-[600px] archival-blur ${
            inView ? 'is-revealed' : ''
          }`}
        >
          {envelopeContents.map((item, i) => {
            const isActive = active === i;
            return (
              <div
                key={item.id}
                className={`relative overflow-hidden bg-paper-deep cursor-pointer transition-all duration-[800ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${
                  isActive ? 'flex-[5]' : 'flex-[0.4]'
                }`}
                onMouseEnter={() => setActive(i)}
                onClick={() => setActive(i)}
              >
                {/* Full image — visible when expanded */}
                <img
                  src={item.image}
                  alt={item.label}
                  className={`absolute inset-0 w-full h-full object-cover transition-all duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${
                    isActive
                      ? 'opacity-100 scale-100 blur-0'
                      : 'opacity-40 scale-105 blur-[2px]'
                  }`}
                />

                {/* Dark overlay for text legibility when expanded */}
                <div
                  className={`absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/20 to-transparent transition-opacity duration-[800ms] ${
                    isActive ? 'opacity-100' : 'opacity-0'
                  }`}
                />

                {/* Collapsed label — vertical text on the sliver */}
                <div
                  className={`absolute inset-0 flex items-center justify-center transition-opacity duration-500 ${
                    isActive ? 'opacity-0' : 'opacity-100'
                  }`}
                >
                  <span className="font-mono text-[10px] tracking-[0.14em] uppercase text-paper/70 [writing-mode:vertical-rl] rotate-180 whitespace-nowrap">
                    {item.label}
                  </span>
                </div>

                {/* Expanded content — label and note */}
                <div
                  className={`absolute bottom-0 left-0 right-0 p-8 md:p-10 transition-all duration-[800ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${
                    isActive
                      ? 'opacity-100 translate-y-0'
                      : 'opacity-0 translate-y-4'
                  }`}
                >
                  <span className="font-mono text-[10px] tracking-[0.14em] uppercase text-paper/60 block mb-2">
                    {item.fig}
                  </span>
                  <h3 className="font-display font-light text-3xl md:text-4xl text-paper mb-3 leading-tight">
                    {item.label}
                  </h3>
                  <p className="text-paper/70 text-sm md:text-base leading-relaxed max-w-md">
                    {item.note}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
