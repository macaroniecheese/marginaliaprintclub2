import Seal from '@/components/Seal';
import {
  RegistrationMark,
  CatalogLabel,
  DateStamp,
  MarginNote,
  CornerMarks,
  SectionNumber,
} from '@/components/ArchivalMarks';
import { aboutPortrait, archiveOne } from '@/data';

export default function About() {
  return (
    <div>
      {/* Hero */}
      <section className="relative h-[60vh] flex items-end overflow-hidden">
        <img
          src={aboutPortrait}
          alt="The studio"
          className="absolute inset-0 w-full h-full object-cover scale-in"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/10 to-ink/30" />

        {/* Top metadata bar */}
        <div className="absolute top-0 left-0 right-0 z-10 px-6 pt-24 pb-4">
          <div className="max-w-8xl mx-auto flex items-center justify-between">
            <div className="flex items-center gap-3">
              <RegistrationMark size={12} color="rgba(250,250,247,0.5)" />
              <CatalogLabel className="text-paper/60">MGNL-ABT · The Studio</CatalogLabel>
            </div>
            <DateStamp className="text-paper/60">Est. 2024</DateStamp>
          </div>
        </div>

        <div className="relative z-10 px-6 pb-16 md:pb-20 max-w-8xl mx-auto w-full">
          <p className="font-mono text-xs tracking-[0.2em] uppercase text-paper/70 mb-4 fade-in">
            The Studio
          </p>
          <h1 className="font-display font-light text-paper text-6xl md:text-8xl lg:text-9xl tracking-tight fade-up leading-[0.92]">
            About
          </h1>
        </div>
      </section>

      {/* Personal story */}
      <section className="py-32 md:py-40 px-6 rule-bottom">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-start gap-8 mb-16">
            <SectionNumber num="01" className="flex-shrink-0 -ml-2" />
            <div className="pt-6">
              <CatalogLabel className="text-accent">The Story</CatalogLabel>
              <h2 className="font-display font-light text-4xl md:text-6xl text-ink mt-3 leading-[0.95] tracking-tight text-balance">
                Why I started annotating the margins.
              </h2>
            </div>
          </div>

          <div className="space-y-6 text-lg text-ink-soft leading-relaxed">
            <p>
              I didn't set out to start a publication. I set out to answer a
              question about a jar of pickle.
            </p>
            <p>
              My grandmother kept one on the top shelf of her kitchen, where the
              afternoon sun landed. As a child I never thought about it — it was
              just there, the way salt is there, the way the gas burner is there.
              Ordinary. So ordinary it was invisible.
            </p>
            <p>
              Then I moved away from home, and I started cooking the things I
              grew up eating. I found the recipe for the pickle in my
              grandmother's handwriting, copied it exactly, and waited. Eleven
              days. And somewhere around day seven I opened the jar, smelled it,
              and realised I had no idea what was actually happening in there.
              Salt was doing something. The sun was doing something. Time was
              doing something. I just didn't know what.
            </p>
            <p>
              That one question — <em className="font-display italic text-ink">what is actually happening in the jar?</em> —
              became a painting, then a science card, then a history, then a
              letter to a friend. Then it became the question itself: what else
              am I eating every day without understanding? What other ingredient
              is sitting in the corner of the page, unexplained?
            </p>
            <p>
              That's Marginalia. Each month, I take one ingredient — the kind
              that usually gets a single line in a recipe, if it gets mentioned
              at all — and I give it the full treatment. I paint it. I research
              its chemistry. I trace it across borders and centuries. I write
              about it the way I'd write to a friend: here's what I found, here's
              what surprised me, here's what I'm still wondering about.
            </p>
            <p>
              I'm a painter by training. I'm not a historian, not a food
              scientist, not a chef. I'm someone who got curious and couldn't
              stop, and I think that's the right way to do this — because the
              ingredient in the corner of the page deserves the attention of
              someone who genuinely wants to know, not someone who already does.
            </p>
          </div>

          <div className="mt-12 pl-6 border-l-2 border-accent/30">
            <MarginNote className="text-2xl">
              from my kitchen to yours —
            </MarginNote>
          </div>
        </div>
      </section>

      {/* The practice */}
      <section className="py-32 md:py-40 px-6 bg-paper-warm">
        <div className="max-w-8xl mx-auto">
          <div className="flex items-start gap-8 mb-16">
            <SectionNumber num="02" className="flex-shrink-0 -ml-2" />
            <div className="pt-6">
              <CatalogLabel className="text-accent">The Practice</CatalogLabel>
              <h2 className="font-display font-light text-4xl md:text-6xl text-ink mt-3 leading-[0.95] tracking-tight text-balance">
                How each archive is made.
              </h2>
            </div>
          </div>

          <div className="grid md:grid-cols-[1fr_280px] gap-12 md:gap-20">
            <div>
              <p className="font-display italic text-xl md:text-2xl text-ink-soft leading-relaxed mb-8 max-w-2xl">
                Each archive starts with an ingredient I can't stop thinking
                about — something small, something from the corner of a recipe,
                something that deserves more attention than it usually gets.
              </p>
              <p className="text-ink-soft leading-relaxed max-w-2xl text-lg">
                I paint it, research its history, write about it like a letter to
                a friend, and send it all to you in an envelope. The seal and
                the caret stay the same every month. The painting and the story
                are the only things that change — so each archive feels like a
                new page in the same book.
              </p>
            </div>

            {/* Archive rail */}
            <div className="md:border-l md:border-rule md:pl-10">
              <CatalogLabel className="text-accent mb-4 block">Upcoming</CatalogLabel>
              <div className="space-y-5">
                {[
                  { num: '001', title: 'Lemon Pickle', date: 'Spring 2025' },
                  { num: '002', title: 'Mustard Seeds', date: 'Spring 2025' },
                  { num: '003', title: 'Tamarind', date: 'Summer 2025' },
                  { num: '004', title: 'Khichdi', date: 'Monsoon 2025' },
                  { num: '005', title: 'Curry Leaves', date: 'Autumn 2025' },
                ].map((item) => (
                  <div key={item.num} className="flex items-baseline gap-3">
                    <span className="font-mono text-xs text-accent tracking-[0.1em] w-8">
                      {item.num}
                    </span>
                    <div>
                      <p className="font-display text-ink">{item.title}</p>
                      <DateStamp>{item.date}</DateStamp>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
