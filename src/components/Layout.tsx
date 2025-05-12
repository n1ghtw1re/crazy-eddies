import { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from './Header';
import { Footer } from './Footer';
import { NewsTicker } from './NewsTicker';

export const Layout = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-cyber-black text-white crt-effect">
      {/* Noise and scanline effects */}
      <div className="noise"></div>
      <div className="scanlines"></div>
      
      {/* Add a static loading effect when the site first loads */}
      {mounted ? (
        <>
          <Header />
          <NewsTicker />
          <main className="flex-grow container mx-auto px-4 py-8 relative z-10">
            <Outlet />
          </main>
          <Footer />
        </>
      ) : (
        <div className="flex items-center justify-center h-screen">
          <div className="text-cyber-green font-glitch text-2xl animate-pulse">
            ACCESSING EDDIE'S NETWORK...
          </div>
        </div>
      )}
    </div>
  );
};