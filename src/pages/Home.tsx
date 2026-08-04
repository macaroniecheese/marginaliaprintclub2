import { useState } from 'react';
import { ArrowRight, Plus, Minus } from 'lucide-react';
import Seal from '@/components/Seal';
import {
  RegistrationMark,
  CatalogLabel,
  DateStamp,
  MarginNote,
  CornerMarks,
  SectionNumber,
} from '@/components/ArchivalMarks';
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
      <Hero onNavigate={onNavigate} />
      <WhatsInside />
      <ArchiveFeature onNavigate={onNavigate} />
      <ArchiveIndexSection />
      <WhyMarginalia />
      <ReadingRoom />
      <Sketchbook />
      <MarginNotes />
    </div>
  );
}

/* ═══════════════════════════════════════════════════ */
/*  1. HERO — artwork is the hero, oversized type       */
/* ═══════════════════════════════════════════════════ */
function Hero({ onNavigate }: { onNavigate: (page: string) => void }) {
  return (
    <section className="relative min-h-screen flex items-end overflow-hidden">
      <img
        src={archiveOne.heroImage}
        alt={archiveOne.heroImageAlt}
        className="absolute inset-0 w-full h-full object-cover scale-in"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-ink/10 to-ink/30" />

      {/* Top metadata bar */}
      <div className="absolute top-0 left-0 right-0 z-10 px-6 pt-24 pb-4">
        <div className="max-w-8xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <RegistrationMark size={12} color="rgba(250,250,247,0.5)" />
            <CatalogLabel className="text-paper/60">{archiveOne.catalogId}</CatalogLabel>
          </div>
          <DateStamp className="text-paper/60">{archiveOne.date}</DateStamp>
        </div>
      </div>

      {/* Bottom content */}
      <div className="relative z-10 w-full px-6 pb-16 md:pb-24">
        <div className="max-w-8xl mx-auto">
          <p className="font-mono text-xs tracking-[0.2em] uppercase text-paper/70 mb-6 fade-in">
            {archiveOne.number} — {archiveOne.title}
          </p>
          <h1 className="font-display font-light text-paper text-5xl sm:text-7xl md:text-8xl lg:text-9xl leading-[0.92] tracking-tight fade-up max-w-5xl text-balance">
            Every recipe tells a bigger story.
          </h1>
          <p className="font-display italic font-light text-paper/80 text-lg md:text-2xl mt-8 max-w-2xl leading-relaxed fade-up">
            Each month, subscribers receive a new archive — one ingredient
            explored through fine art, recipes, science, history, geography, and
            a personal letter. Not a box of products. A way of looking.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-12 fade-up">
            <button
              onClick={() => onNavigate('archive')}
              className="px-10 py-4 bg-paper text-ink font-mono text-xs tracking-[0.16em] uppercase hover:bg-accent hover:text-paper transition-colors duration-300"
            >
              Become an Archivist
            </button>
            <button
              onClick={() => onNavigate('archive')}
              className="px-10 py-4 border border-paper/30 text-paper font-mono text-xs tracking-[0.16em] uppercase hover:bg-paper/10 transition-colors duration-300"
            >
              Explore Archive No. 001
            </button>
          </div>
          <p className="font-mono text-[11px] text-paper/40 mt-8 tracking-[0.1em] uppercase">
            No. 002 — Mustard Seeds — arrives this spring
          </p>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════ */
/*  2. WHAT'S INSIDE — archival envelope reveal        */
/* ═══════════════════════════════════════════════════ */
function WhatsInside() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="py-32 md:py-40 px-6 rule-bottom">
      <div className="max-w-5xl mx-auto">
        {/* Section header */}
        <div className="flex items-start gap-8 mb-20">
          <SectionNumber num="01" className="flex-shrink-0 -ml-2" />
          <div className="pt-6">
            <CatalogLabel className="text-accent">Contents of the Envelope</CatalogLabel>
            <h2 className="font-display font-light text-4xl md:text-6xl text-ink mt-3 leading-[0.95] tracking-tight text-balance">
              Open the envelope.<br />
              <span className="italic text-ink-soft">Five pieces, one ingredient.</span>
            </h2>
          </div>
        </div>

        {/* Envelope stack */}
        <div className="space-y-1">
          {envelopeContents.map((item, i) => {
            const isOpen = open === i;
            return (
              <div
                key={item.id}
                className={`border-t border-rule transition-colors duration-300 ${
                  isOpen ? 'bg-paper-warm' : 'bg-transparent'
                }`}
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full flex items-center gap-6 md:gap-10 py-6 md:py-8 text-left group"
                >
                  {/* Catalog number */}
                  <CatalogLabel className="hidden md:block w-20 flex-shrink-0 text-ink-faint">
                    {item.catalog}
                  </CatalogLabel>

                  {/* Thumbnail */}
                  <div className="relative w-14 h-14 md:w-16 md:h-16 flex-shrink-0 overflow-hidden bg-paper-deep">
                    <img
                      src={item.image}
                      alt={item.label}
                      className={`w-full h-full object-cover transition-all duration-700 ${
                        isOpen ? 'opacity-100' : 'opacity-50 grayscale group-hover:opacity-80 group-hover:grayscale-0'
                      }`}
                    />
                  </div>

                  {/* Label */}
                  <div className="flex-1 min-w-0">
                    <span className="font-mono text-[10px] tracking-[0.1em] uppercase text-accent">
                      {item.fig}
                    </span>
                    <h3 className="font-display text-xl md:text-2xl text-ink mt-0.5">
                      {item.label}
                    </h3>
                  </div>

                  {/* Toggle */}
                  <div className="flex-shrink-0 text-ink-light">
                    {isOpen ? (
                      <Minus className="w-4 h-4" />
                    ) : (
                      <Plus className="w-4 h-4 group-hover:text-accent transition-colors" />
                    )}
                  </div>
                </button>

                {/* Reveal panel */}
                <div
                  className={`grid transition-all duration-500 ease-out ${
                    isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="pb-8 pl-0 md:pl-[10.5rem]">
                      <div className="flex flex-col md:flex-row gap-8 items-start">
                        <div className="relative w-full md:w-56 aspect-[3/2] overflow-hidden bg-paper-deep flex-shrink-0">
                          <img src={item.image} alt={item.label} className="w-full h-full object-cover" />
                          <CornerMarks />
                        </div>
                        <div>
                          <p className="text-ink-soft leading-relaxed text-base md:text-lg max-w-md">
                            {item.note}
                          </p>
                          <MarginNote className="mt-4 block">
                            {isOpen ? '↳ see the envelope for the full version' : ''}
                          </MarginNote>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="border-t border-rule" />

        <p className="font-mono text-xs text-ink-faint mt-10 max-w-md leading-relaxed">
          Each piece is printed on archival paper, annotated by hand, and sealed
          with the Marginalia mark. The envelope is part of the object.
        </p>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════ */
/*  3. ARCHIVE NO. 001 — the current issue              */
/* ═══════════════════════════════════════════════════ */
function ArchiveFeature({ onNavigate }: { onNavigate: (page: string) => void }) {
  return (
    <section className="py-32 md:py-40 px-6 bg-paper-warm rule-bottom">
      <div className="max-w-8xl mx-auto">
        {/* Section header */}
        <div className="flex items-start gap-8 mb-20">
          <SectionNumber num="02" className="flex-shrink-0 -ml-2" />
          <div className="pt-6">
            <CatalogLabel className="text-accent">The Current Archive</CatalogLabel>
            <h2 className="font-display font-light text-4xl md:text-6xl text-ink mt-3 leading-[0.95] tracking-tight">
              Archive No. 001
            </h2>
          </div>
        </div>

        <div className="grid md:grid-cols-[1.3fr_1fr] gap-12 md:gap-20 items-start">
          {/* Artwork — the hero */}
          <div className="relative">
            <div className="relative aspect-[4/5] overflow-hidden bg-paper-deep">
              <img
                src={archiveOne.heroImage}
                alt={archiveOne.title}
                className="w-full h-full object-cover"
              />
              <CornerMarks />
            </div>
            {/* Museum caption */}
            <div className="mt-4 flex items-start gap-4">
              <RegistrationMark size={10} color="rgba(26,26,26,0.4)" className="mt-1 flex-shrink-0" />
              <div>
                <CatalogLabel>{archiveOne.catalogId} · {archiveOne.date}</CatalogLabel>
                <p className="font-display italic text-ink mt-1">
                  {archiveOne.title}, <span className="text-ink-light">oil on linen</span>
                </p>
              </div>
            </div>
          </div>

          {/* Details */}
          <div className="md:pt-8">
            <h3 className="font-display italic font-light text-5xl md:text-6xl text-ink mb-4 leading-[0.95] tracking-tight">
              {archiveOne.title}
            </h3>
            <p className="font-display italic text-xl text-ink-light mb-10">
              {archiveOne.subtitle}
            </p>
            <p className="text-ink-soft leading-relaxed mb-10 text-lg">
              {archiveOne.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => onNavigate('archive')}
                className="inline-flex items-center gap-2 px-8 py-3.5 bg-ink text-paper font-mono text-xs tracking-[0.16em] uppercase hover:bg-accent transition-colors duration-300 group"
              >
                Subscribe — No. 001
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={() => onNavigate('archive')}
                className="px-8 py-3.5 border border-rule font-mono text-xs tracking-[0.16em] uppercase text-ink-soft hover:border-ink hover:text-ink transition-colors duration-300"
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

/* ═══════════════════════════════════════════════════ */
/*  4. ARCHIVE INDEX — collectible grid                 */
/* ═══════════════════════════════════════════════════ */
function ArchiveIndexSection() {
  return (
    <section className="py-32 md:py-40 px-6 rule-bottom">
      <div className="max-w-8xl mx-auto">
        <div className="flex items-start gap-8 mb-20">
          <SectionNumber num="03" className="flex-shrink-0 -ml-2" />
          <div className="pt-6">
            <CatalogLabel className="text-accent">The Archive Index</CatalogLabel>
            <h2 className="font-display font-light text-4xl md:text-6xl text-ink mt-3 leading-[0.95] tracking-tight text-balance">
              Where the investigation goes next.
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-16">
          {archiveIndex.map((entry) => {
            const available = entry.status === 'available';
            return (
              <div key={entry.number} className="group">
                <div className="relative overflow-hidden bg-paper-deep mb-5 aspect-[4/3]">
                  <img
                    src={entry.image}
                    alt={entry.title}
                    className={`w-full h-full object-cover transition-all duration-700 ${
                      available
                        ? 'group-hover:scale-105'
                        : 'grayscale opacity-40 group-hover:opacity-60 group-hover:grayscale-0'
                    }`}
                  />
                  <span
                    className={`absolute top-3 left-3 font-mono text-[10px] px-2.5 py-1 tracking-[0.08em] uppercase ${
                      available ? 'bg-accent text-paper' : 'bg-ink/70 text-paper/80'
                    }`}
                  >
                    {available ? 'Available' : 'Coming Soon'}
                  </span>
                </div>
                {/* Museum caption */}
                <div className="flex items-baseline gap-3 mb-2">
                  <CatalogLabel className="text-accent">{entry.catalog}</CatalogLabel>
                  <span className="text-ink-faint">·</span>
                  <DateStamp>{entry.date}</DateStamp>
                </div>
                <div className="flex items-baseline gap-3">
                  <span className="font-mono text-sm text-accent tracking-[0.1em]">
                    {entry.number}
                  </span>
                  <h3
                    className={`font-display text-2xl md:text-3xl ${
                      available ? 'text-ink' : 'text-ink-light'
                    }`}
                  >
                    {entry.title}
                  </h3>
                </div>
                <p className="font-mono text-[11px] text-ink-faint mt-1 tracking-[0.04em] uppercase">
                  {entry.note}
                </p>
              </div>
            );
          })}
        </div>

        <p className="font-mono text-xs text-ink-faint mt-16 max-w-lg leading-relaxed">
          The index grows by one each month. Future investigations are teased,
          not stocked — each ingredient earns its place when the painting and
          the research are done.
        </p>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════ */
/*  5. WHY MARGINALIA EXISTS — personal story           */
/* ═══════════════════════════════════════════════════ */
function WhyMarginalia() {
  return (
    <section className="py-32 md:py-40 px-6 bg-paper-warm rule-bottom">
      <div className="max-w-3xl mx-auto">
        <div className="flex items-start gap-8 mb-16">
          <SectionNumber num="04" className="flex-shrink-0 -ml-2" />
          <div className="pt-6">
            <CatalogLabel className="text-accent">Editor's Note</CatalogLabel>
            <h2 className="font-display font-light text-4xl md:text-6xl text-ink mt-3 leading-[0.95] tracking-tight text-balance">
              Why Marginalia exists.
            </h2>
          </div>
        </div>

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
            The question was <em className="font-display italic text-ink">why</em>. Why salt? Why the sun? Why
            eleven days and not ten? Why does every culture that grows lemons
            have some version of this exact thing, and why did they all arrive
            at it on their own?
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

        <div className="mt-12 pl-6 border-l-2 border-accent/30">
          <MarginNote className="text-2xl">
            from my kitchen to yours —
          </MarginNote>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════ */
/*  6. READING ROOM — featured essay                     */
/* ═══════════════════════════════════════════════════ */
function ReadingRoom() {
  return (
    <section className="py-32 md:py-40 px-6 rule-bottom">
      <div className="max-w-8xl mx-auto">
        <div className="flex items-start gap-8 mb-20">
          <SectionNumber num="05" className="flex-shrink-0 -ml-2" />
          <div className="pt-6">
            <CatalogLabel className="text-accent">Reading Room</CatalogLabel>
            <h2 className="font-display font-light text-4xl md:text-6xl text-ink mt-3 leading-[0.95] tracking-tight text-balance">
              A short piece, for the table.
            </h2>
          </div>
        </div>

        <div className="grid md:grid-cols-[1fr_1.3fr] gap-12 md:gap-20 items-center">
          <div className="relative">
            <div className="relative aspect-[3/4] overflow-hidden bg-paper-deep">
              <img
                src={readingRoomArticle.image}
                alt={readingRoomArticle.title}
                className="w-full h-full object-cover"
              />
              <CornerMarks />
            </div>
            <div className="mt-4">
              <CatalogLabel>{readingRoomArticle.catalog}</CatalogLabel>
            </div>
          </div>
          <div>
            <div className="flex items-center gap-4 mb-6">
              <CatalogLabel className="text-accent">Essay</CatalogLabel>
              <span className="text-ink-faint">·</span>
              <DateStamp>{readingRoomArticle.date}</DateStamp>
              <span className="text-ink-faint">·</span>
              <DateStamp>{readingRoomArticle.readTime}</DateStamp>
            </div>
            <h3 className="font-display font-light text-3xl md:text-5xl text-ink mb-8 leading-[0.95] tracking-tight text-balance">
              {readingRoomArticle.title}
            </h3>
            <p className="text-ink-soft leading-relaxed mb-10 text-lg">
              {readingRoomArticle.excerpt}
            </p>
            <button className="inline-flex items-center gap-2 font-mono text-xs tracking-[0.16em] uppercase text-accent hover:text-ink transition-colors group border-b border-accent/30 pb-1">
              Continue Reading
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════ */
/*  7. FROM THE SKETCHBOOK — works in progress           */
/* ═══════════════════════════════════════════════════ */
function Sketchbook() {
  return (
    <section className="py-32 md:py-40 px-6 bg-paper-warm rule-bottom">
      <div className="max-w-8xl mx-auto">
        <div className="flex items-start gap-8 mb-20">
          <SectionNumber num="06" className="flex-shrink-0 -ml-2" />
          <div className="pt-6">
            <CatalogLabel className="text-accent">From the Sketchbook</CatalogLabel>
            <h2 className="font-display font-light text-4xl md:text-6xl text-ink mt-3 leading-[0.95] tracking-tight text-balance">
              Works in progress, before they become an archive.
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {sketchbook.map((item, i) => (
            <div key={item.id} className="group">
              <div className="relative overflow-hidden bg-paper-deep aspect-square mb-4">
                <img
                  src={item.image}
                  alt={item.caption}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <span className="absolute top-2 left-2 font-mono text-[9px] text-paper bg-ink/60 px-1.5 py-0.5 tracking-[0.04em]">
                  {item.catalog}
                </span>
              </div>
              <div className="flex items-baseline gap-2">
                <CatalogLabel className="text-ink-faint">{String(i + 1).padStart(2, '0')}</CatalogLabel>
                <p className="font-mono text-[11px] text-ink-soft leading-relaxed">
                  {item.caption}
                </p>
              </div>
            </div>
          ))}
        </div>

        <p className="font-mono text-xs text-ink-faint mt-14 max-w-md leading-relaxed">
          The sketchbook is where the archive takes shape — first drawings,
          recipe tests, colour studies, and science illustrations before
          they're ready for the envelope.
        </p>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════ */
/*  8. MARGIN NOTES — newsletter                        */
/* ═══════════════════════════════════════════════════ */
function MarginNotes() {
  return (
    <section className="py-32 md:py-40 px-6">
      <div className="max-w-2xl mx-auto text-center">
        <div className="flex justify-center mb-10">
          <Seal size={64} />
        </div>
        <CatalogLabel className="text-accent">Margin Notes</CatalogLabel>
        <h2 className="font-display font-light text-4xl md:text-6xl text-ink mt-3 mb-8 leading-[0.95] tracking-tight text-balance">
          Occasional sketches, discoveries, and previews from upcoming archives.
        </h2>
        <p className="text-ink-soft leading-relaxed mb-12 max-w-lg mx-auto text-lg">
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
            className="flex-1 px-5 py-3.5 bg-transparent border border-rule text-ink placeholder:text-ink-faint focus:outline-none focus:border-accent transition-colors font-mono text-sm"
          />
          <button
            type="submit"
            className="px-8 py-3.5 bg-ink text-paper font-mono text-xs tracking-[0.16em] uppercase hover:bg-accent transition-colors duration-300"
          >
            Subscribe
          </button>
        </form>
        <p className="font-mono text-[11px] text-ink-faint mt-6 tracking-[0.06em]">
          No spam, no schedules. Just notes from the margin.
        </p>
      </div>
    </section>
  );
}
