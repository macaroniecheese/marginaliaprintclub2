import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import Caret from '@/components/Caret';
import { RegistrationMark, CatalogLabel } from '@/components/ArchivalMarks';

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

  const onHero = !scrolled && current === 'home';
  // Hero is now split with a cream left panel — use ink text at all times on home
  const textColor = 'text-ink';
  const subText = onHero ? 'text-ink-light' : 'text-ink-light';
  const hoverColor = 'hover:text-accent';
  const activeColor = 'text-accent';

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-paper/95 backdrop-blur-md border-b border-rule py-3'
          : 'bg-paper/80 backdrop-blur-sm py-5'
      }`}
    >
      <div className="max-w-8xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => go('home')}
          className={`flex items-end gap-1.5 font-display font-light ${textColor} transition-colors duration-500`}
          style={{ fontSize: '1.5rem' }}
        >
          <Caret
            width={16}
            height={24}
            color="#9C3427"
          />
          <span className="tracking-tight">Marginalia</span>
        </button>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-12">
          {links.map((l) => (
            <button
              key={l.page}
              onClick={() => go(l.page)}
              className={`font-mono text-xs tracking-[0.16em] uppercase transition-colors duration-300 ${
                current === l.page ? activeColor : `${subText} ${hoverColor}`
              }`}
            >
              {l.label}
            </button>
          ))}
        </nav>

        {/* Mobile toggle */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className={`md:hidden ${textColor}`}
          aria-label="Menu"
        >
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-400 ${
          menuOpen ? 'max-h-80' : 'max-h-0'
        }`}
      >
        <nav className="flex flex-col items-center gap-8 py-10 bg-paper border-t border-rule">
          {links.map((l) => (
            <button
              key={l.page}
              onClick={() => go(l.page)}
              className={`font-mono text-xs tracking-[0.2em] uppercase transition-colors ${
                current === l.page ? 'text-accent' : 'text-ink-light'
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
