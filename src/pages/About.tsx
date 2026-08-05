import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { CatalogLabel, SectionNumber } from '@/components/ArchivalMarks';

const faqs = [
  {
    q: 'What exactly arrives in the mail?',
    a: 'An envelope with five pieces inside: an original 4x6 art print, a recipe card, a set of field notes (the science and the geography), a handwritten letter from the studio, and a surprise enclosure that changes every month — sometimes a playlist, sometimes a seed packet, sometimes something else entirely.',
  },
  {
    q: 'How often does a new archive arrive?',
    a: 'Once a month. Each investigation takes roughly four weeks — painting, researching, testing, writing — and then it gets sealed and sent. The archive grows by one each month.',
  },
  {
    q: 'Do I need to start from No. 001?',
    a: 'You can start whenever you like. Each archive stands on its own — it is one ingredient, one story, one envelope. But if you begin at No. 001, your collection grows in order, and the shelf starts to tell a story of its own.',
  },
  {
    q: 'Can I cancel anytime?',
    a: 'Yes. There is no lock-in. You can pause or cancel your subscription at any time, no questions asked. You keep everything that has already arrived.',
  },
  {
    q: 'Is this a food magazine or an art project?',
    a: 'It is neither and both. I am a painter who got curious about food and could not stop researching. Each archive is part artwork, part recipe, part field note — the way a curious friend might share what they found, if that friend also painted and had very strong feelings about paper.',
  },
  {
    q: 'Where do you ship?',
    a: 'Currently anywhere in the world. The envelope is flat and light, so it travels easily. If your postal service can deliver a letter, it can deliver Marginalia.',
  },
  {
    q: 'What if I already know a lot about food?',
    a: 'Even better. The archives are not beginner guides — they are investigations, written for people who like to go deep. If you already know the recipe, the field notes and the letter are where the surprises tend to live.',
  },
];

export default function About() {
  return (
    <div className="pt-32">
      {/* Editor's note */}
      <section className="py-24 md:py-32 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-start gap-8 mb-16">
            <SectionNumber num="01" className="flex-shrink-0 -ml-2" />
            <div className="pt-6">
              <CatalogLabel className="text-accent">Editor's Note</CatalogLabel>
            </div>
          </div>

          <div className="space-y-6 text-lg text-ink-soft leading-relaxed">
            <p>
              I started Marginalia because of a jar of pickle I could not
              explain. My grandmother kept one on the top shelf of her kitchen,
              where the afternoon sun hit it every day. I never thought about it
              — it was just there, the way salt is there, the way the gas burner
              is there. Ordinary. So ordinary it was invisible.
            </p>
            <p>
              Years later, a thousand miles from her kitchen, I started cooking
              the things I grew up eating. I found her recipe, copied it
              exactly, and waited eleven days. Somewhere around day seven I
              opened the jar, smelled it, and realised I had no idea what was
              actually happening in there. Salt was doing something. The sun was
              doing something. Time was doing something. I just did not know
              what.
            </p>
            <p>
              That one question became a painting, then a science card, then a
              map, then a letter. Then it became a bigger question: what else am
              I eating every day without understanding? What other ingredient is
              sitting in the corner of the page, unexplained?
            </p>
            <p>
              That is Marginalia. Each month I take one ingredient, technique,
              or dish — the kind that usually gets a single line in a recipe, if
              it gets mentioned at all — and I follow it wherever it goes. The
              chemistry. The geography. The family it travelled through. The
              story it carries that nobody tells you, because it is too obvious
              to mention.
            </p>
            <p>
              I am a painter by training. Not a historian, not a food scientist,
              not a chef. Someone who got curious and could not stop — and I
              think that is the right way to do this. The ingredient in the
              corner of the page deserves the attention of someone who genuinely
              wants to know, not someone who already does.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 md:py-32 px-6 bg-paper-warm">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-start gap-8 mb-16">
            <SectionNumber num="02" className="flex-shrink-0 -ml-2" />
            <div className="pt-6">
              <CatalogLabel className="text-accent">FAQ</CatalogLabel>
            </div>
          </div>

          <div className="space-y-2">
            {faqs.map((item, i) => (
              <FaqItem key={i} q={item.q} a={item.a} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-rule">
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center justify-between gap-4 py-5 text-left group"
      >
        <span className="font-display text-lg md:text-xl text-ink group-hover:text-accent transition-colors duration-300">
          {q}
        </span>
        <span className="flex-shrink-0 w-8 h-8 flex items-center justify-center text-ink-soft">
          {open ? (
            <Minus className="w-4 h-4" />
          ) : (
            <Plus className="w-4 h-4" />
          )}
        </span>
      </button>
      <div
        className={`overflow-hidden transition-all duration-[500ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${
          open ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <p className="pb-6 text-ink-soft leading-relaxed pr-12">{a}</p>
      </div>
    </div>
  );
}
