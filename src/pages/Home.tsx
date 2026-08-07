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
    // Height restricted to 80% viewport height, matching the native site background color
    <section className="relative h-[80vh] flex items-center overflow-hidden bg-paper px-6 sm:px-16 md:px-24 lg:px-36 xl:px-48">
      
      {/* Background Transparent Image Container — Z-indexed behind the typography content */}
      <div
        className="absolute inset-0 scale-in z-0 opacity-95 pointer-events-none"
        style={{
          backgroundImage: "url('/hero-image copy copy.webp')",
          backgroundSize: 'contain', // Set to contain so your cutout illustration doesn't stretch awkwardly
          backgroundPosition: 'right center', // Pushes the artwork to the right side to leave text breathing room
          backgroundRepeat: 'no-repeat',
        }}
        role="img"
        aria-hidden="true"
      />

      {/* Front-Facing Content Overlay — Sitting on top of the image layer (z-20) */}
      <div className="relative z-20 w-full max-w-xl py-12">
        <div>
          {/* 
            Added custom inline styles for a text-shadow using the exact paper texture color palette.
            This builds a microscopic halo protection layer around each letter stroke.
          */}
          <h1 
            className="font-display font-light text-ink text-4xl sm:text-5xl md:text-5xl lg:text-6xl xl:text-7xl leading-[0.92] tracking-tight fade-up text-balance"
            style={{
              textShadow: '0 0 12px var(--color-paper, #F5F3EE), 0 0 4px var(--color-paper, #F5F3EE)'
            }}
          >
            Nothing we eat exists in isolation.
          </h1>
          
          <p 
            className="font-display italic font-light text-ink-soft text-base md:text-lg lg:text-xl mt-8 leading-relaxed fade-up text-balance"
            style={{
              textShadow: '0 0 8px var(--color-paper, #F5F3EE)'
            }}
          >
            Each month, Marginalia follows one ingredient, technique, or dish
            through an illustrated archive, part recipe, part artwork, part
            field note.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mt-12 fade-up">
            <button
              onClick={() => onNavigate('archive')}
              className="px-10 py-4 bg-ink text-paper font-mono text-xs tracking-[0.16em] uppercase hover:bg-accent hover:text-white transition-colors duration-500 tactile"
            >
              Become an Archivist
            </button>
            <button
              onClick={onSeeInside}
              className="px-10 py-4 border border-rule text-ink font-mono text-xs tracking-[0.16em] uppercase hover:bg-ink/5 transition-colors duration-500 tactile"
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
            Contents of the Envelope
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
                  isActive ? 'flex-' : 'flex-[0.4]'
                }`}
                onMouseEnter={() => setActive(i)}
                onClick={() => setActive(i)}
              >
                <img
                  src={item.image}
                  alt={item.label}
                  className={`absolute inset-0 w-full h-full object-cover transition-all duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${
                    isActive
                      ? 'opacity-100 scale-100 blur-0'
                      : 'opacity-40 scale-105 blur-[2px]'
                  }`}
                />

                <div
                  className={`absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/20 to-transparent transition-opacity duration-[800ms] ${
                    isActive ? 'opacity-100' : 'opacity-0'
                  }`}
                />

                <div
                  className={`absolute inset-0 flex items-center justify-center transition-opacity duration-500 ${
                    isActive ? 'opacity-0' : 'opacity-100'
                  }`}
                >
                  <span className="font-mono text-[10px] tracking-[0.14em] uppercase text-paper [writing-mode:vertical-rl] rotate-180 whitespace-nowrap drop-shadow-[0_1px_2px_rgba(0,0,0,0.6)]">
                    {item.label}
                  </span>
                </div>

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
