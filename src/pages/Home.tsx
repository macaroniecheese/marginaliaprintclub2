import { useState } from 'react';
import { ArrowRight, Plus, Minus } from 'lucide-react';
import Seal from '@/components/Seal';
import {
  archiveOne,
  envelopeContents,
  archiveIndex,
  readingRoomArticle,
  sketchbook,
} from '@/data';

type Props = {
  onNavigate: (page: string) => void;
};

export default function Home({ onNavigate }: Props) {
  return (
    <div className="paper-texture">
      {/* 1. HERO */}
      <Hero onNavigate={onNavigate} />

      {/* 2. WHAT'S INSIDE THE ARCHIVE */}
      <WhatsInside />

      {/* 3. ARCHIVE NO. 001 */}
      <ArchiveFeature onNavigate={onNavigate} />

      {/* 4. ARCHIVE INDEX */}
      <ArchiveIndexSection />

      {/* 5. WHY MARGINALIA EXISTS */}
      <WhyMarginalia />

      {/* 6. READING ROOM */}
      <ReadingRoom />

      {/* 7. FROM THE SKETCHBOOK */}
      <Sketchbook />

      {/* 8. MARGIN NOTES (newsletter) */}
      <MarginNotes />
    </div>
  );
}

/* ──────────────────────────────────────────── */
/*  1. HERO                                     */
/* ──────────────────────────────────────────── */
function Hero({ onNavigate }: { onNavigate: (page: string) => void }) {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <img
        src={archiveOne.heroImage}
        alt={archiveOne.heroImageAlt}
        className="absolute inset-0 w-full h-full object-cover scale-in"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-ink/30 via-ink/20 to-ink/50" />
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto pt-20">
        <p className="font-mono text-xs tracking-[0.14em] uppercase text-parchment/80 mb-8 fade-in">
          {archiveOne.number} · {archiveOne.title}
        </p>
        <h1 className="font-display italic font-medium text-parchment text-5xl md:text-7xl lg:text-8xl tracking-wide leading-[0.95] fade-up text-balance">
          Every recipe tells a bigger story.
        </h1>
        <p className="font-display italic text-parchment/85 text-lg md:text-xl mt-8 max-w-2xl mx-auto leading-relaxed fade-up">
          Each month, subscribers receive a new archive — one ingredient
          explored through fine art, recipes, science, history, geography, and
          a personal letter. Not a box of products. A way of looking.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-12 fade-up">
          <button
            onClick={() => onNavigate('archive')}
            className="px-10 py-4 bg-madder text-parchment font-mono text-xs tracking-[0.14em] uppercase hover:bg-ink transition-colors"
          >
            Become an Archivist
          </button>
          <button
            onClick={() => onNavigate('archive')}
            className="px-10 py-4 border border-parchment/60 text-parchment font-mono text-xs tracking-[0.14em] uppercase hover:bg-parchment hover:text-ink transition-colors"
          >
            Explore Archive No. 001
          </button>
        </div>
        <p className="font-mono text-[11px] text-parchment/50 mt-8 tracking-[0.1em] uppercase">
          Archive No. 002 — Mustard Seeds — arrives this spring
        </p>
      </div>
    </section>
  );
}

/* ──────────────────────────────────────────── */
/*  2. WHAT'S INSIDE THE ARCHIVE                 */
/* ──────────────────────────────────────────── */
function WhatsInside() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="py-24 md:py-32 px-6 border-b border-rule">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-mono text-xs tracking-[0.16em] uppercase text-madder mb-4">
            What's Inside the Archive
          </h2>
          <p className="font-display italic text-3xl md:text-4xl text-ink-soft text-balance">
            Open the envelope. Five pieces, one ingredient, one story.
          </p>
        </div>

        {/* Envelope stack — click to reveal each piece */}
        <div className="space-y-3">
          {envelopeContents.map((item, i) => {
            const isOpen = open === i;
            return (
              <div
                key={item.id}
                className={`border border-rule bg-parchment transition-all duration-500 ${
                  isOpen ? 'shadow-lg' : ''
                }`}
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full flex items-center gap-6 p-5 md:p-6 text-left group"
                >
                  {/* Thumbnail */}
                  <div className="relative w-16 h-16 md:w-20 md:h-20 flex-shrink-0 overflow-hidden bg-parchment-deep border border-rule">
                    <img
                      src={item.image}
                      alt={item.label}
                      className={`w-full h-full object-cover transition-all duration-700 ${
                        isOpen ? 'scale-100' : 'scale-90 opacity-60'
                      }`}
                    />
                    <span className="absolute inset-0 flex items-center justify-center bg-ink/0 group-hover:bg-ink/10 transition-colors" />
                  </div>

                  {/* Label */}
                  <div className="flex-1 min-w-0">
                    <p className="font-mono text-[10px] tracking-[0.1em] uppercase text-madder mb-1">
                      {item.fig}
                    </p>
                    <h3 className="font-display italic text-xl md:text-2xl text-ink">
                      {item.label}
                    </h3>
                  </div>

                  {/* Toggle */}
                  <div className="flex-shrink-0 text-ink-soft">
                    {isOpen ? (
                      <Minus className="w-5 h-5" />
                    ) : (
                      <Plus className="w-5 h-5 group-hover:text-madder transition-colors" />
                    )}
                  </div>
                </button>

                {/* Reveal panel */}
                <div
                  className={`grid transition-all duration-500 ease-out ${
                    isOpen
                      ? 'grid-rows-[1fr] opacity-100'
                      : 'grid-rows-[0fr] opacity-0'
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="px-5 md:px-6 pb-6 md:pb-8 pl-5 md:pl-[7.5rem]">
                      <div className="flex flex-col md:flex-row gap-6 items-start">
                        <div className="w-full md:w-48 aspect-[3/2] overflow-hidden bg-parchment-deep border border-rule flex-shrink-0">
                          <img
                            src={item.image}
                            alt={item.label}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <p className="text-ink-soft leading-relaxed text-base md:text-lg">
                          {item.note}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <p className="font-mono text-xs text-ink-soft/70 mt-10 text-center max-w-md mx-auto leading-relaxed">
          Each piece is printed on archival paper, annotated by hand, and
          sealed with the Marginalia mark. The envelope is part of the object.
        </p>
      </div>
    </section>
  );
}

/* ──────────────────────────────────────────── */
/*  3. ARCHIVE NO. 001                           */
/* ──────────────────────────────────────────── */
function ArchiveFeature({ onNavigate }: { onNavigate: (page: string) => void }) {
  return (
    <section className="py-24 md:py-32 px-6 bg-parchment-deep/30 border-b border-rule">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-[1.2fr_1fr] gap-12 md:gap-16 items-center">
          {/* Artwork */}
          <div className="relative">
            <div className="aspect-[4/5] overflow-hidden bg-parchment-deep border border-rule">
              <img
                src={archiveOne.heroImage}
                alt={archiveOne.title}
                className="w-full h-full object-cover"
              />
            </div>
            <span className="absolute top-4 right-4 font-mono text-[10px] text-parchment bg-ink/55 px-2 py-1 tracking-[0.04em]">
              {archiveOne.number}
            </span>
          </div>

          {/* Details */}
          <div>
            <p className="font-mono text-xs tracking-[0.16em] uppercase text-madder mb-4">
              The Current Archive
            </p>
            <h2 className="font-display italic font-medium text-4xl md:text-5xl text-ink mb-3">
              {archiveOne.title}
            </h2>
            <p className="font-display italic text-lg text-ink-soft mb-8">
              {archiveOne.subtitle}
            </p>
            <p className="text-ink-soft leading-relaxed mb-10">
              {archiveOne.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => onNavigate('archive')}
                className="inline-flex items-center gap-2 px-8 py-3.5 bg-madder text-parchment font-mono text-xs tracking-[0.14em] uppercase hover:bg-ink transition-colors group"
              >
                Subscribe — Archive No. 001
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={() => onNavigate('archive')}
                className="px-8 py-3.5 border border-ink font-mono text-xs tracking-[0.14em] uppercase hover:bg-ink hover:text-parchment transition-colors"
              >
                Read the Full Archive
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ──────────────────────────────────────────── */
/*  4. ARCHIVE INDEX                            */
/* ──────────────────────────────────────────── */
function ArchiveIndexSection() {
  return (
    <section className="py-24 md:py-32 px-6 border-b border-rule">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-mono text-xs tracking-[0.16em] uppercase text-madder mb-4">
            Archive Index
          </h2>
          <p className="font-display italic text-3xl md:text-4xl text-ink-soft text-balance">
            Where the investigation goes next.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          {archiveIndex.map((entry) => {
            const available = entry.status === 'available';
            return (
              <div
                key={entry.number}
                className="group cursor-default"
              >
                <div className="relative overflow-hidden bg-parchment-deep mb-5 aspect-[4/3] border border-rule">
                  <img
                    src={entry.image}
                    alt={entry.title}
                    className={`w-full h-full object-cover transition-transform duration-700 ${
                      available
                        ? 'group-hover:scale-105'
                        : 'grayscale opacity-50 group-hover:opacity-70 group-hover:grayscale-0 transition-all duration-700'
                    }`}
                  />
                  <span
                    className={`absolute top-3 right-3 font-mono text-[10px] px-2.5 py-1 tracking-[0.06em] uppercase ${
                      available
                        ? 'bg-madder text-parchment'
                        : 'bg-ink/60 text-parchment/80'
                    }`}
                  >
                    {available ? 'Available' : 'Coming Soon'}
                  </span>
                </div>
                <div className="flex items-baseline gap-3 mb-1">
                  <span className="font-mono text-xs text-madder tracking-[0.1em]">
                    {entry.number}
                  </span>
                  <span className="font-mono text-[10px] text-ink-soft/50">
                    —
                  </span>
                  <span className="font-mono text-[10px] text-ink-soft/70 tracking-[0.06em] uppercase">
                    {entry.note}
                  </span>
                </div>
                <h3
                  className={`font-display italic text-2xl ${
                    available ? 'text-ink' : 'text-ink-soft/70'
                  }`}
                >
                  {entry.title}
                </h3>
              </div>
            );
          })}
        </div>

        <p className="font-mono text-xs text-ink-soft/60 mt-14 text-center max-w-lg mx-auto leading-relaxed">
          The index grows by one each month. Future investigations are teased,
          not stocked — each ingredient earns its place when the painting and
          the research are done.
        </p>
      </div>
    </section>
  );
}

/* ──────────────────────────────────────────── */
/*  5. WHY MARGINALIA EXISTS                     */
/* ──────────────────────────────────────────── */
function WhyMarginalia() {
  return (
    <section className="py-24 md:py-32 px-6 bg-parchment-deep/30 border-b border-rule">
      <div className="max-w-3xl mx-auto">
        <div className="flex justify-center mb-10">
          <Seal size={64} />
        </div>
        <h2 className="font-mono text-xs tracking-[0.16em] uppercase text-madder mb-4 text-center">
          Why Marginalia Exists
        </h2>
        <h3 className="font-display italic text-3xl md:text-4xl text-center text-ink mb-12 text-balance">
          It started with a jar of pickle and a question I couldn't put down.
        </h3>

        <div className="space-y-6 text-lg text-ink-soft leading-relaxed">
          <p>
            My grandmother kept a jar of lemon pickle on the top shelf of her
            kitchen, in a spot where the sun hit every afternoon. I never
            thought about it. It was just there — like the salt, like the
            matches, like the things that are so ordinary they become
            invisible.
          </p>
          <p>
            Years later, standing in my own kitchen a thousand miles from hers,
            I started wondering about that jar. Not the recipe — I had that.
            The question was why. Why salt? Why the sun? Why eleven days and
            not ten? Why does every culture that grows lemons have some version
            of this exact thing, and why did they all arrive at it on their own?
          </p>
          <p>
            One question became five. Five became a painting, a science card, a
            history, a letter. That's the whole project. Marginalia is what
            happens when you take the ingredient in the corner of the page —
            the one the recipe doesn't bother to explain — and give it the
            attention it quietly deserves.
          </p>
          <p>
            I'm not a historian or a scientist. I'm a painter who got curious
            and couldn't stop. Each archive is me going down the research hole
            and sending you what I find — the art, the method, the chemistry,
            the geography, and the memory — sealed in an envelope, once a month.
          </p>
        </div>

        <p className="font-script text-2xl text-indigo text-center mt-12">
          from my kitchen to yours —
        </p>
      </div>
    </section>
  );
}

/* ──────────────────────────────────────────── */
/*  6. READING ROOM                             */
/* ──────────────────────────────────────────── */
function ReadingRoom() {
  return (
    <section className="py-24 md:py-32 px-6 border-b border-rule">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-mono text-xs tracking-[0.16em] uppercase text-madder mb-4">
            Reading Room
          </h2>
          <p className="font-display italic text-3xl md:text-4xl text-ink-soft text-balance">
            A short piece, for the table.
          </p>
        </div>

        <div className="grid md:grid-cols-[1fr_1.3fr] gap-10 md:gap-14 items-center">
          <div className="aspect-[3/4] overflow-hidden bg-parchment-deep border border-rule">
            <img
              src={readingRoomArticle.image}
              alt={readingRoomArticle.title}
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <p className="font-mono text-[11px] tracking-[0.1em] uppercase text-ink-soft/60 mb-4">
              Essay · {readingRoomArticle.readTime}
            </p>
            <h3 className="font-display italic text-3xl md:text-4xl text-ink mb-6 leading-tight text-balance">
              {readingRoomArticle.title}
            </h3>
            <p className="text-ink-soft leading-relaxed mb-8">
              {readingRoomArticle.excerpt}
            </p>
            <button className="inline-flex items-center gap-2 font-mono text-xs tracking-[0.14em] uppercase text-madder hover:text-ink transition-colors group">
              Continue Reading
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ──────────────────────────────────────────── */
/*  7. FROM THE SKETCHBOOK                       */
/* ──────────────────────────────────────────── */
function Sketchbook() {
  return (
    <section className="py-24 md:py-32 px-6 bg-parchment-deep/30 border-b border-rule">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-mono text-xs tracking-[0.16em] uppercase text-madder mb-4">
            From the Sketchbook
          </h2>
          <p className="font-display italic text-3xl md:text-4xl text-ink-soft text-balance">
            Works in progress, before they become an archive.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {sketchbook.map((item, i) => (
            <div
              key={item.id}
              className="group"
            >
              <div className="relative overflow-hidden bg-parchment-deep aspect-square border border-rule mb-3">
                <img
                  src={item.image}
                  alt={item.caption}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <span className="absolute top-2 right-2 font-mono text-[9px] text-parchment bg-ink/50 px-1.5 py-0.5 tracking-[0.04em]">
                  {String(i + 1).padStart(2, '0')}
                </span>
              </div>
              <p className="font-mono text-[11px] text-ink-soft leading-relaxed">
                {item.caption}
              </p>
            </div>
          ))}
        </div>

        <p className="font-mono text-xs text-ink-soft/60 mt-12 text-center max-w-md mx-auto leading-relaxed">
          The sketchbook is where the archive takes shape — first drawings,
          recipe tests, colour studies, and science illustrations before
          they're ready for the envelope.
        </p>
      </div>
    </section>
  );
}

/* ──────────────────────────────────────────── */
/*  8. MARGIN NOTES (newsletter)                */
/* ──────────────────────────────────────────── */
function MarginNotes() {
  return (
    <section className="py-24 md:py-32 px-6">
      <div className="max-w-2xl mx-auto text-center">
        <div className="flex justify-center mb-8">
          <Seal size={72} />
        </div>
        <h2 className="font-mono text-xs tracking-[0.16em] uppercase text-madder mb-4">
          Margin Notes
        </h2>
        <h3 className="font-display italic text-3xl md:text-4xl text-ink mb-6 text-balance">
          Occasional sketches, discoveries, and previews from upcoming archives.
        </h3>
        <p className="text-ink-soft leading-relaxed mb-10 max-w-lg mx-auto">
          Not a newsletter in the usual sense. More like a postcard from the
          studio — a drawing, a finding, or a look at what's coming next. Sent
          now and then, when there's something worth sending.
        </p>
        <form
          onSubmit={(e) => e.preventDefault()}
          className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
        >
          <input
            type="email"
            required
            placeholder="your email"
            className="flex-1 px-5 py-3 bg-parchment border border-rule text-ink placeholder:text-ink-soft/50 focus:outline-none focus:border-madder transition-colors font-mono text-sm"
          />
          <button
            type="submit"
            className="px-8 py-3 bg-ink text-parchment font-mono text-xs tracking-[0.14em] uppercase hover:bg-madder transition-colors"
          >
            Subscribe
          </button>
        </form>
        <p className="font-mono text-[11px] text-ink-soft/50 mt-6 tracking-[0.06em]">
          No spam, no schedules. Just notes from the margin.
        </p>
      </div>
    </section>
  );
}
