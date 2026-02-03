import { Link, useRouterState } from '@tanstack/react-router';
import { Menu, X, ShoppingBag } from 'lucide-react';
import { useState } from 'react';
import { Button } from '@/components/ui/button';

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const currentPath = useRouterState().location.pathname;

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About Us' },
    { path: '/menu', label: 'Menu' },
    { path: '/contact', label: 'Contact' },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur">
      <div className="container mx-auto flex h-20 items-center justify-between px-4">
        <Link to="/" className="flex items-center gap-3">
          <div className="rounded-full bg-saffron p-2 text-white">
            <ShoppingBag size={24} />
          </div>
          <div className="flex flex-col">
            <span className="font-serif text-xl font-bold text-saffron md:text-2xl">Janata Mistanna</span>
            <span className="text-[10px] uppercase tracking-widest text-muted-foreground">Established 1968</span>
          </div>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-sm font-medium transition-colors hover:text-saffron ${currentPath === link.path ? 'text-saffron' : 'text-foreground'}`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X /> : <Menu />}
        </Button>
      </div>

      {mobileMenuOpen && (
        <nav className="border-t border-border bg-background p-4 md:hidden">
          {navLinks.map((link) => (
            <Link key={link.path} to={link.path} onClick={() => setMobileMenuOpen(false)} className="block py-3 text-sm font-medium">
              {link.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
