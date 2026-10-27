'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { PERSONAL_INFO } from '@/lib/constants';
import { useActiveSection } from '@/hooks/useActiveSection';
import { Menu, X, ArrowUpRight, FileDown, Code2 } from 'lucide-react';
import { Button } from '@/components/ui/Button';

// Exact navigation mapping requested by Task 3
interface NavLinkItem {
  label: string;
  href: string;
  id: string;
}

const NAV_LINKS: readonly NavLinkItem[] = [
  { label: 'Home', href: '#home', id: 'home' },
  { label: 'About', href: '#about', id: 'about' },
  { label: 'Skills', href: '#skills', id: 'skills' },
  { label: 'Projects', href: '#projects', id: 'projects' },
  { label: 'Experience', href: '#experience', id: 'experience' },
  { label: 'Contact', href: '#contact', id: 'contact' },
] as const;

// Module-level static array to guarantee referential stability
const SECTION_IDS = NAV_LINKS.map((item) => item.id);

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [hoveredNav, setHoveredNav] = useState<string | null>(null);

  const { activeSection, lockActiveSection } = useActiveSection(SECTION_IDS, 130);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMobileMenu = () => setMobileMenuOpen(false);

  // Reliable, smooth section navigation that respects sticky header offset and prevents active flicker
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);

    if (element) {
      lockActiveSection(targetId);
      window.history.pushState(null, '', href);

      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      element.scrollIntoView({
        behavior: prefersReducedMotion ? 'auto' : 'smooth',
        block: 'start',
      });
    }

    if (mobileMenuOpen) {
      closeMobileMenu();
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-slate-950/85 backdrop-blur-md border-b border-white/[0.08] shadow-lg shadow-black/20 py-3.5'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Left: Kevin T wordmark + developer visual accent */}
        <a
          href="#home"
          onClick={(e) => handleNavClick(e, '#home')}
          className="group flex items-center gap-2.5 focus:outline-none focus:ring-2 focus:ring-brand-accent/50 rounded-lg p-1"
          aria-label="Kevin T — Portfolio Home"
        >
          {/* Developer-themed visual accent badge */}
          <div className="relative w-8 h-8 rounded-lg bg-gradient-to-tr from-brand-primary via-indigo-600 to-brand-accent flex items-center justify-center text-white font-bold text-sm shadow-md shadow-brand-primary/30 group-hover:scale-105 transition-transform">
            <span className="font-mono text-xs tracking-tighter">KT</span>
            {/* Tiny live indicator dot */}
            <span className="absolute -top-0.5 -right-0.5 w-2 h-2 rounded-full bg-brand-accent border border-slate-950 animate-pulse" />
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-1.5">
              <span className="text-base font-bold text-white tracking-tight group-hover:text-brand-accent transition-colors font-sans">
                {PERSONAL_INFO.name}
              </span>
              <span className="hidden sm:inline-flex items-center gap-1 px-1.5 py-0.5 rounded text-[10px] font-mono font-medium text-brand-accent bg-brand-accent/10 border border-brand-accent/20">
                <Code2 className="w-2.5 h-2.5" />
                <span>Flutter</span>
              </span>
            </div>
            <span className="text-[10px] font-mono text-muted tracking-wider uppercase hidden sm:block">
              Mobile App Developer
            </span>
          </div>
        </a>

        {/* Right: Desktop Navigation Links with active indicator & animated hover underline */}
        <nav
          className="hidden md:flex items-center gap-1 bg-slate-900/50 backdrop-blur-md border border-white/[0.08] rounded-full px-3 py-1.5 shadow-sm"
          aria-label="Main Navigation"
        >
          {NAV_LINKS.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.id}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                onMouseEnter={() => setHoveredNav(item.id)}
                onMouseLeave={() => setHoveredNav(null)}
                className={`relative px-3.5 py-1.5 rounded-full text-xs font-medium transition-colors ${
                  isActive
                    ? 'text-white font-semibold'
                    : 'text-slate-300 hover:text-white'
                }`}
              >
                {/* Active Section Pill Background */}
                {isActive && (
                  <motion.div
                    layoutId="activeNavIndicator"
                    className="absolute inset-0 bg-gradient-to-r from-brand-primary/40 to-brand-secondary/40 border border-brand-accent/30 rounded-full -z-10 shadow-sm"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}

                {/* Animated hover underline */}
                {hoveredNav === item.id && !isActive && (
                  <motion.div
                    layoutId="hoverNavUnderline"
                    className="absolute bottom-1 left-3 right-3 h-0.5 bg-brand-accent/70 rounded-full"
                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                  />
                )}

                {item.label}
              </a>
            );
          })}
        </nav>

        {/* Quick Actions (Desktop) */}
        <div className="hidden lg:flex items-center gap-3">
          <Button
            variant="secondary"
            size="sm"
            href={PERSONAL_INFO.resumeUrl}
            download="Kevin_T_Resume.pdf"
            icon={FileDown}
            className="text-xs py-2 px-3.5"
          >
            Resume
          </Button>
          <Button
            variant="primary"
            size="sm"
            href="#contact"
            onClick={(e) => handleNavClick(e as any, '#contact')}
            icon={ArrowUpRight}
            className="text-xs py-2 px-3.5"
          >
            Contact
          </Button>
        </div>

        {/* Mobile Menu Toggle Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-expanded={mobileMenuOpen}
          aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
          className="md:hidden p-2 rounded-xl bg-slate-900/80 border border-white/[0.08] text-slate-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-brand-accent/50"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Navigation Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="md:hidden bg-slate-950/95 backdrop-blur-xl border-b border-white/[0.1] px-4 pt-3 pb-6 shadow-2xl overflow-hidden"
          >
            <div className="flex flex-col space-y-1">
              {NAV_LINKS.map((item) => {
                const isActive = activeSection === item.id;
                return (
                  <a
                    key={item.id}
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className={`px-4 py-2.5 rounded-xl text-sm font-medium transition-colors flex items-center justify-between ${
                      isActive
                        ? 'bg-brand-primary/20 text-brand-accent border border-brand-accent/30 font-semibold'
                        : 'text-slate-300 hover:text-white hover:bg-white/[0.05]'
                    }`}
                  >
                    <span>{item.label}</span>
                    {isActive && <span className="w-1.5 h-1.5 rounded-full bg-brand-accent" />}
                  </a>
                );
              })}
            </div>

            <div className="mt-4 pt-4 border-t border-white/[0.08] flex flex-col gap-2.5">
              <Button
                variant="secondary"
                size="md"
                href={PERSONAL_INFO.resumeUrl}
                download="Kevin_T_Resume.pdf"
                icon={FileDown}
                onClick={closeMobileMenu}
                className="w-full justify-center"
              >
                Download Resume
              </Button>
              <Button
                variant="primary"
                size="md"
                href="#contact"
                icon={ArrowUpRight}
                onClick={(e) => handleNavClick(e as any, '#contact')}
                className="w-full justify-center"
              >
                Contact Me
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
