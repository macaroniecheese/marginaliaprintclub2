import Seal from '@/components/Seal';
import { aboutPortrait } from '@/data';

export default function About() {
  return (
    <div>
      {/* Hero */}
      <section className="relative h-[55vh] flex items-end overflow-hidden">
        <img
          src={aboutPortrait}
          alt="The studio"
          className="absolute inset-0 w-full h-full object-cover scale-in"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/70 to-transparent" />
        <div className="relative z-10 px-6 pb-12 max-w-7xl mx-auto w-full">
          <p className="font-mono text-xs tracking-[0.14em] uppercase text-parchment/80 mb-4 fade-in">
            The Studio
          </p>
          <h1 className="font-display italic font-medium text-parchment text-5xl md:text-6xl tracking-wide fade-up">
            About
          </h1>
        </div>
      </section>

      {/* Personal story — replaces artist bio */}
      <section className="py-24 md:py-32 px-6 border-b border-rule">
        <div className="max-w-3xl mx-auto">
          <div className="flex justify-center mb-10">
            <Seal size={64} />
          </div>
          <h2 className="font-mono text-xs tracking-[0.16em] uppercase text-madder mb-4 text-center">
            The Story
          </h2>
          <h3 className="font-display italic text-3xl md:text-4xl text-center text-ink mb-12 text-balance">
            Why I started annotating the margins.
          </h3>

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

          <p className="font-script text-2xl text-indigo text-center mt-12">
            from my kitchen to yours —
          </p>
        </div>
      </section>

      {/* The practice — rail layout */}
      <section className="py-24 px-6 bg-parchment-deep/40 border-t border-rule">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-[1fr_200px] gap-12 md:gap-14">
          <div>
            <h2 className="font-mono text-xs tracking-[0.16em] uppercase text-madder mb-8">
              The Practice
            </h2>
            <p className="font-display italic text-xl md:text-2xl text-ink-soft leading-relaxed mb-6 max-w-2xl">
              Each archive starts with an ingredient I can't stop thinking
              about — something small, something from the corner of a recipe,
              something that deserves more attention than it usually gets.
            </p>
            <p className="text-ink-soft leading-relaxed max-w-2xl">
              I paint it, research its history, write about it like a letter to
              a friend, and send it all to you in an envelope. The seal and the
              caret stay the same every month. The painting and the story are
              the only things that change — so each archive feels like a new
              page in the same book.
            </p>
          </div>
          <div className="md:border-t md:border-rule md:pt-4">
            <p className="font-mono text-xs text-madder leading-relaxed uppercase tracking-[0.03em]">
              <span className="text-zari tracking-[4px]">✦ ✦ ✦</span>
              <br />
              <br />
              <b className="text-ink">archive 001</b>
              <br />
              lemon pickle
              <br />
              <br />
              <b className="text-ink">archive 002</b>
              <br />
              mustard seeds — spring
              <br />
              <br />
              <b className="text-ink">archive 003</b>
              <br />
              tamarind — summer
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
