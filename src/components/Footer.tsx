import { Instagram } from 'lucide-react';
import Caret from '@/components/Caret';
import { RegistrationMark, CatalogLabel } from '@/components/ArchivalMarks';

type Props = {
  onNavigate: (page: string) => void;
};

export default function Footer({ onNavigate }: Props) {
  return (
    <footer className="bg-ink text-paper">
      <div className="max-w-8xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <button
              onClick={() => onNavigate('home')}
              className="flex items-end gap-1.5 font-display font-light text-2xl text-paper hover:text-accent transition-colors"
            >
              <Caret width={16} height={24} color="#9C3427" />
              <span className="tracking-tight">Marginalia</span>
            </button>
            <p className="font-mono text-xs text-paper/50 mt-4 leading-relaxed max-w-xs">
              A monthly archive exploring one ingredient through art, recipes,
              science, history, and personal letters.
            </p>
          </div>

          {/* Nav */}
          <div className="flex flex-col gap-3">
            <CatalogLabel className="text-paper/40 mb-1">Navigate</CatalogLabel>
            {[
              { label: 'Home', page: 'home' },
              { label: 'Archive', page: 'archive' },
              { label: 'About', page: 'about' },
            ].map((l) => (
              <button
                key={l.page}
                onClick={() => onNavigate(l.page)}
                className="font-mono text-xs tracking-[0.14em] uppercase text-paper/70 hover:text-accent transition-colors text-left"
              >
                {l.label}
              </button>
            ))}
          </div>

          {/* Contact */}
          <div className="flex flex-col gap-3">
            <CatalogLabel className="text-paper/40 mb-1">Contact</CatalogLabel>
            <a
              href="#"
              className="font-mono text-xs tracking-[0.14em] uppercase text-paper/70 hover:text-accent transition-colors"
            >
              hello@marginalia.mail
            </a>
            <a
              href="#"
              className="flex items-center gap-2 font-mono text-xs tracking-[0.14em] uppercase text-paper/70 hover:text-accent transition-colors"
            >
              <Instagram className="w-4 h-4" />
              Instagram
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-6 border-t border-paper/10 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <RegistrationMark size={10} color="rgba(250,250,247,0.3)" />
            <CatalogLabel className="text-paper/40">MGNL · Est. 2024</CatalogLabel>
          </div>
          <p className="font-mono text-[10px] text-paper/30 tracking-[0.06em]">
            notes from the edge of the recipe · © {new Date().getFullYear()} Marginalia
          </p>
        </div>
      </div>
    </footer>
  );
}
