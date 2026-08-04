import { useEffect, useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Home from '@/pages/Home';
import Archive from '@/pages/Archive';
import About from '@/pages/About';

export default function App() {
  const [page, setPage] = useState('home');

  const navigate = (p: string) => {
    setPage(p);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-parchment">
      <Header onNavigate={navigate} current={page} />
      <main className="flex-1">
        {page === 'home' && <Home onNavigate={navigate} />}
        {page === 'archive' && <Archive onNavigate={navigate} />}
        {page === 'about' && <About />}
      </main>
      <Footer onNavigate={navigate} />
    </div>
  );
}
