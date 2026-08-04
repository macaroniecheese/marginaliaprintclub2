import { Instagram } from 'lucide-react';
import Seal from '@/components/Seal';
import Caret from '@/components/Caret';

type Props = {
  onNavigate: (page: string) => void;
};

export default function Footer({ onNavigate }: Props) {
  return (
    <footer className="bg-ink text-parchment">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <button
            onClick={() => onNavigate('home')}
            className="flex items-end gap-1 font-display italic font-medium text-2xl text-parchment hover:text-zari transition-colors"
          >
            <Caret width={14} height={22} color="#2E4057" />
            <span>Marginalia</span>
          </button>

          <nav className="flex gap-8 font-mono text-xs tracking-[0.14em] uppercase text-parchment-deep/80">
            <button onClick={() => onNavigate('home')} className="hover:text-zari transition-colors">
              Home
            </button>
            <button onClick={() => onNavigate('archive')} className="hover:text-zari transition-colors">
              Archive
            </button>
            <button onClick={() => onNavigate('about')} className="hover:text-zari transition-colors">
              About
            </button>
          </nav>

          <div className="flex items-center gap-4">
            <a
              href="#"
              className="text-parchment-deep/80 hover:text-zari transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <span className="font-mono text-xs text-parchment-deep/50">
              hello@marginalia.mail
            </span>
          </div>
        </div>

        <p className="text-center font-mono text-xs text-parchment-deep/40 mt-8">
          notes from the edge of the recipe · © {new Date().getFullYear()} Marginalia
        </p>
      </div>
    </footer>
  );
}
