import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import Caret from '@/components/Caret';

type Props = {
  onNavigate: (page: string) => void;
  current: string;
};

export default function Header({ onNavigate, current }: Props) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const links = [
    { label: 'Home', page: 'home' },
    { label: 'Archive', page: 'archive' },
    { label: 'About', page: 'about' },
  ];

  const go = (page: string) => {
    onNavigate(page);
    setMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-parchment/95 backdrop-blur-md border-b border-rule py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <button
          onClick={() => go('home')}
          className="flex items-end gap-1 font-display italic font-medium text-ink hover:text-madder transition-colors"
          style={{ fontSize: '1.75rem' }}
        >
          <Caret width={18} height={28} color={scrolled ? '#9C3427' : '#251F16'} />
          <span>Marginalia</span>
        </button>

        <nav className="hidden md:flex items-center gap-10">
          {links.map((l) => (
            <button
              key={l.page}
              onClick={() => go(l.page)}
              className={`font-mono text-xs tracking-[0.14em] uppercase transition-colors ${
                current === l.page
                  ? 'text-madder'
                  : 'text-ink-soft hover:text-madder'
              }`}
            >
              {l.label}
            </button>
          ))}
        </nav>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-ink"
          aria-label="Menu"
        >
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      <div
        className={`md:hidden overflow-hidden transition-all duration-400 ${
          menuOpen ? 'max-h-80' : 'max-h-0'
        }`}
      >
        <nav className="flex flex-col items-center gap-6 py-8 bg-parchment border-t border-rule">
          {links.map((l) => (
            <button
              key={l.page}
              onClick={() => go(l.page)}
              className={`font-mono text-xs tracking-[0.2em] uppercase transition-colors ${
                current === l.page ? 'text-madder' : 'text-ink-soft'
              }`}
            >
              {l.label}
            </button>
          ))}
        </nav>
      </div>
    </header>
  );
}
