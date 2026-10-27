'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { PERSONAL_INFO } from '@/lib/constants';
import { fadeInUp, staggerContainer } from '@/lib/animations';
import {
  GraduationCap,
  Smartphone,
  Server,
  Layers,
  MapPin,
  CheckCircle2,
  Code2,
  ShieldCheck,
  Flame,
  GitBranch,
} from 'lucide-react';

export function About() {
  // Required skill pills from Master Prompt:
  // Flutter, Dart, Provider, REST APIs, Firebase, Git, Java, JavaScript
  const aboutSkillPills = [
    'Flutter',
    'Dart',
    'Provider',
    'REST APIs',
    'Firebase',
    'Git',
    'Java',
    'JavaScript',
  ];

  const engineeringHighlights = [
    {
      title: 'Implementing Mobile Application Screens',
      description: 'Crafting responsive, pixel-accurate Flutter layouts with composable widget trees and smooth rendering.',
      icon: Smartphone,
    },
    {
      title: 'Integrating Backend REST APIs',
      description: 'Connecting client apps with endpoints, structuring requests, parsing responses, and handling loading/error states.',
      icon: Server,
    },
    {
      title: 'Managing Application State with Provider',
      description: 'Separating business logic from UI via ChangeNotifier and Consumer patterns for predictable data flow.',
      icon: Layers,
    },
    {
      title: 'Handling Authentication & Token Storage',
      description: 'Implementing login/registration flows, JWT bearer tokens, automatic token refresh, and encrypted local storage.',
      icon: ShieldCheck,
    },
    {
      title: 'Working with JSON Responses & Models',
      description: 'Building strongly-typed data transfer objects (DTOs) with null-safe factory constructors (fromJson / toJson).',
      icon: Code2,
    },
    {
      title: 'Debugging & Improving Reliability',
      description: 'Diagnosing edge bugs, investigating network/UI bottlenecks with Flutter DevTools, and fixing state issues.',
      icon: CheckCircle2,
    },
    {
      title: 'Collaborating on Real-World Projects',
      description: 'Working with Git repositories, branching workflows, pull/merge requests, and team delivery standards.',
      icon: GitBranch,
    },
  ];

  return (
    <section id="about" className="scroll-mt-24 py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Exact Section Heading: Building Mobile Experiences That Work */}
        <SectionHeading
          eyebrow="BACKGROUND & PHILOSOPHY"
          title="Building Mobile Experiences"
          highlightText="That Work"
          subtitle="A dedicated mobile application developer with hands-on experience crafting reliable Flutter applications, integrating REST APIs, and structuring maintainable state."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Side: Professional Narrative & Skill Pills */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            className="lg:col-span-6 space-y-6 text-slate-300 leading-relaxed text-base"
          >
            <div className="p-6 sm:p-8 rounded-2xl bg-slate-900/60 border border-white/[0.08] backdrop-blur-md space-y-5">
              <h3 className="text-xl font-bold text-white tracking-tight">
                Practical Mobile Engineering
              </h3>

              <p>
                I am a Flutter and mobile application developer based in{' '}
                <span className="text-white font-medium">{PERSONAL_INFO.location}</span>. My focus centers on
                translating business requirements and functional workflows into responsive, reliable mobile applications
                that solve real-world problems.
              </p>

              <p>
                My professional experience encompasses building production-style mobile interfaces, integrating
                backend REST APIs, implementing state management architectures with{' '}
                <span className="text-brand-accent font-mono font-medium">Provider</span>, managing secure authentication
                and token storage cycles, and developing business-oriented solutions spanning statutory filings, invoicing,
                and workforce management.
              </p>

              <p>
                With a formal engineering background (<span className="text-white font-medium">{PERSONAL_INFO.education.degree} in {PERSONAL_INFO.education.field}</span> from <span className="text-white font-medium">{PERSONAL_INFO.education.institution}</span>),
                I bring disciplined habits in object-oriented programming, clean code organization, data modeling, and Git version control to every application module.
              </p>

              {/* Verified Skill Pills */}
              <div className="pt-4 border-t border-white/[0.08]">
                <div className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold mb-3">
                  Core Technologies & Skills:
                </div>
                <div className="flex flex-wrap gap-2">
                  {aboutSkillPills.map((skill) => (
                    <span
                      key={skill}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono font-medium bg-brand-primary/10 border border-brand-primary/30 text-slate-200 hover:border-brand-accent hover:text-brand-accent transition-colors"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-accent" />
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Side: Highlight Practical Engineering Work */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            className="lg:col-span-6 space-y-3"
          >
            <div className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold mb-2 px-1">
              Practical Engineering Work:
            </div>

            {engineeringHighlights.map((item, idx) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={idx}
                  variants={fadeInUp}
                  className="p-4 rounded-xl bg-slate-900/50 border border-white/[0.06] hover:border-white/[0.14] transition-all flex items-start gap-3.5 group"
                >
                  <div className="w-8 h-8 rounded-lg bg-brand-primary/10 border border-brand-primary/20 flex items-center justify-center text-brand-accent shrink-0 mt-0.5 group-hover:scale-105 transition-transform">
                    <Icon className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white group-hover:text-brand-accent transition-colors">
                      {item.title}
                    </h4>
                    <p className="text-xs text-muted leading-relaxed mt-0.5">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
