'use client';

import React from 'react';
import Link from 'next/link';
import { PERSONAL_INFO, NAV_ITEMS } from '@/lib/constants';
import { Github, Gitlab, ArrowUp, Mail, MapPin, Code2 } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const footerNavLinks = NAV_ITEMS.filter((item) =>
    ['Home', 'About', 'Skills', 'Projects', 'Experience', 'Workflow', 'Contact'].includes(item.name)
  );

  return (
    <footer className="bg-slate-950 border-t border-white/[0.08] relative z-10 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-white/[0.06]">
          {/* Col 1: Identity */}
          <div className="md:col-span-2 space-y-3">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-brand-primary via-indigo-600 to-brand-accent flex items-center justify-center text-white font-bold text-sm shadow-md">
                <span className="font-mono text-xs">KT</span>
              </div>
              <span className="text-lg font-bold text-white tracking-tight">
                {PERSONAL_INFO.name}
              </span>
            </div>
            <p className="text-xs font-mono text-brand-accent">
              {PERSONAL_INFO.title}
            </p>
            <p className="text-sm text-muted max-w-md leading-relaxed">
              Building responsive, reliable mobile applications using Flutter and Dart, integrating REST APIs,
              authentication, and scalable state management to deliver practical solutions for real-world problems.
            </p>
            <div className="flex items-center gap-2 text-xs text-slate-400 pt-1">
              <MapPin className="w-3.5 h-3.5 text-brand-accent" />
              <span>{PERSONAL_INFO.location}</span>
            </div>
          </div>

          {/* Col 2: Navigation */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-300 font-semibold mb-4">
              Navigation
            </h4>
            <ul className="space-y-2 text-sm">
              {footerNavLinks.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault();
                      const targetId = item.href.replace('#', '');
                      const el = document.getElementById(targetId);
                      if (el) {
                        const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
                        el.scrollIntoView({ behavior: prefersReduced ? 'auto' : 'smooth', block: 'start' });
                        window.history.pushState(null, '', item.href);
                      }
                    }}
                    className="text-muted hover:text-white transition-colors cursor-pointer"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Verified Connections */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-300 font-semibold mb-4">
              Connect & Code
            </h4>
            <div className="space-y-2.5">
              <a
                href={PERSONAL_INFO.socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-sm text-muted hover:text-white transition-colors group"
              >
                <div className="w-7 h-7 rounded-lg bg-slate-900 border border-white/[0.08] flex items-center justify-center text-slate-300 group-hover:text-brand-accent group-hover:border-brand-accent/40 transition-colors">
                  <Github className="w-3.5 h-3.5" />
                </div>
                <span>GitHub Profile</span>
              </a>

              <a
                href={PERSONAL_INFO.socialLinks.gitlab}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-sm text-muted hover:text-white transition-colors group"
              >
                <div className="w-7 h-7 rounded-lg bg-slate-900 border border-white/[0.08] flex items-center justify-center text-slate-300 group-hover:text-orange-400 group-hover:border-orange-500/40 transition-colors">
                  <Gitlab className="w-3.5 h-3.5" />
                </div>
                <span>GitLab Profile</span>
              </a>

              <a
                href={`mailto:${PERSONAL_INFO.socialLinks.email}`}
                className="flex items-center gap-2.5 text-sm text-muted hover:text-white transition-colors group"
              >
                <div className="w-7 h-7 rounded-lg bg-slate-900 border border-white/[0.08] flex items-center justify-center text-slate-300 group-hover:text-cyan-400 group-hover:border-cyan-500/40 transition-colors">
                  <Mail className="w-3.5 h-3.5" />
                </div>
                <span>Email Inquiry</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>© {currentYear} {PERSONAL_INFO.name}. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <span className="font-mono text-[11px] text-muted">
              Flutter Developer · Mobile Application Developer
            </span>
            <button
              onClick={scrollToTop}
              aria-label="Back to top"
              className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 border border-white/[0.08] text-slate-300 hover:text-white transition-colors flex items-center gap-1.5 focus:outline-none focus:ring-2 focus:ring-brand-accent/50"
            >
              <ArrowUp className="w-3.5 h-3.5" />
              <span className="text-xs">Top</span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
