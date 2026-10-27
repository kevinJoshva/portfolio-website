'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { PERSONAL_INFO } from '@/lib/constants';
import { Button } from '@/components/ui/Button';
import { MobileAppMockup } from '@/components/ui/MobileAppMockup';
import { FileDown, FolderGit2, Mail, MapPin } from 'lucide-react';
import { fadeInUp, staggerContainer } from '@/lib/animations';

export function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  // Typewriter effect for animated professional titles
  useEffect(() => {
    const currentRole = PERSONAL_INFO.heroRoles[roleIndex];
    const typingSpeed = isDeleting ? 35 : 75;
    const pauseDuration = 2200;

    let timeout: NodeJS.Timeout;

    if (!isDeleting && displayedText === currentRole) {
      timeout = setTimeout(() => setIsDeleting(true), pauseDuration);
    } else if (isDeleting && displayedText === '') {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % PERSONAL_INFO.heroRoles.length);
    } else {
      timeout = setTimeout(() => {
        setDisplayedText(
          isDeleting
            ? currentRole.substring(0, displayedText.length - 1)
            : currentRole.substring(0, displayedText.length + 1)
        );
      }, typingSpeed);
    }

    return () => clearTimeout(timeout);
  }, [displayedText, isDeleting, roleIndex]);

  return (
    <section
      id="home"
      className="scroll-mt-24 relative min-h-[92vh] flex items-center justify-center pt-24 pb-16 overflow-hidden"
    >
      {/* Background aurora gradient meshes */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[550px] bg-mesh-glow pointer-events-none -z-10" />
      <div className="absolute top-1/3 -right-48 w-96 h-96 bg-brand-primary/10 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 -left-48 w-96 h-96 bg-brand-accent/10 rounded-full blur-3xl pointer-events-none -z-10" />

      {/* Grid line background overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Hero Copy */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="lg:col-span-7 flex flex-col justify-center text-left"
          >
            {/* Professional Status Label (Accurate & Verified) */}
            <motion.div variants={fadeInUp} className="mb-4 flex flex-wrap items-center gap-2.5">
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-medium text-brand-accent bg-brand-accent/10 border border-brand-accent/20">
                <span className="w-2 h-2 rounded-full bg-brand-accent animate-ping" />
                <span>Available for Mobile Projects</span>
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono text-slate-400 bg-white/[0.03] border border-white/[0.06]">
                <MapPin className="w-3 h-3 text-brand-accent" />
                <span>Trichy, Tamil Nadu</span>
              </span>
            </motion.div>

            {/* Small Introduction */}
            <motion.div variants={fadeInUp} className="space-y-1 mb-2">
              <span className="text-xs sm:text-sm font-mono uppercase tracking-widest text-slate-400 font-semibold">
                HELLO, I&apos;M
              </span>
              {/* Main Heading */}
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white font-sans">
                {PERSONAL_INFO.name}
              </h1>
            </motion.div>

            {/* Animated Professional Titles */}
            <motion.div variants={fadeInUp} className="h-10 sm:h-12 flex items-center mb-6">
              <span className="text-xl sm:text-2xl lg:text-3xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-brand-accent via-indigo-300 to-purple-400 font-mono">
                {displayedText}
              </span>
              <span className="w-0.5 h-6 sm:h-8 bg-brand-accent ml-1.5 animate-pulse" />
            </motion.div>

            {/* EXACT Hero Bio */}
            <motion.p
              variants={fadeInUp}
              className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mb-8"
            >
              {PERSONAL_INFO.bio}
            </motion.p>

            {/* Hero CTA Buttons */}
            <motion.div
              variants={fadeInUp}
              className="flex flex-wrap items-center gap-3.5 mb-10"
            >
              <Button
                variant="primary"
                size="lg"
                href="#projects"
                onClick={(e) => {
                  e.preventDefault();
                  const el = document.getElementById('projects');
                  if (el) {
                    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
                    el.scrollIntoView({ behavior: prefersReduced ? 'auto' : 'smooth', block: 'start' });
                    window.history.pushState(null, '', '#projects');
                  }
                }}
                icon={FolderGit2}
              >
                Explore My Projects
              </Button>

              <Button
                variant="secondary"
                size="lg"
                href={PERSONAL_INFO.resumeUrl}
                download="Kevin_T_Resume.pdf"
                icon={FileDown}
              >
                Download Resume
              </Button>

              <Button
                variant="ghost"
                size="lg"
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  const el = document.getElementById('contact');
                  if (el) {
                    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
                    el.scrollIntoView({ behavior: prefersReduced ? 'auto' : 'smooth', block: 'start' });
                    window.history.pushState(null, '', '#contact');
                  }
                }}
                icon={Mail}
              >
                Contact Me
              </Button>
            </motion.div>

            {/* Compact Technology Line */}
            <motion.div
              variants={fadeInUp}
              className="pt-6 border-t border-white/[0.08] flex flex-wrap items-center gap-2 sm:gap-3 text-xs sm:text-sm font-mono text-slate-400"
            >
              <span className="text-slate-500 uppercase text-[11px] tracking-wider font-semibold mr-1">
                Tech Stack:
              </span>
              {PERSONAL_INFO.coreSkillsRow.map((skill, index) => (
                <React.Fragment key={skill}>
                  <span className="text-slate-200 hover:text-brand-accent transition-colors font-medium">
                    {skill}
                  </span>
                  {index < PERSONAL_INFO.coreSkillsRow.length - 1 && (
                    <span className="text-brand-accent/50 select-none">·</span>
                  )}
                </React.Fragment>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Column: Custom Animated Mobile Workspace Visual */}
          <div className="lg:col-span-5 flex items-center justify-center">
            <MobileAppMockup />
          </div>
        </div>
      </div>
    </section>
  );
}
