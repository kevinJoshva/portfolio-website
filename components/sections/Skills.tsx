'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { SKILL_CATEGORIES } from '@/lib/skills';
import { fadeInUp, staggerContainer } from '@/lib/animations';
import {
  Smartphone,
  Layers,
  Server,
  Flame,
  Globe,
  Wrench,
  LucideIcon,
  CheckCircle2,
} from 'lucide-react';

const ICON_MAP: Record<string, LucideIcon> = {
  Smartphone,
  Layers,
  Server,
  Flame,
  Globe,
  Wrench,
};

export function Skills() {
  return (
    <section id="skills" className="scroll-mt-24 py-24 relative z-10 bg-slate-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="TECHNICAL CAPABILITIES"
          title="Skills &"
          highlightText="Expertise"
          subtitle="Honest, verified technical competencies across Flutter mobile architecture, API integration, state management, and modern development tools."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {SKILL_CATEGORIES.map((cat) => {
            const Icon = ICON_MAP[cat.iconName] || Smartphone;
            return (
              <motion.div
                key={cat.id}
                variants={fadeInUp}
                className="p-6 rounded-2xl bg-slate-900/60 backdrop-blur-md border border-white/[0.08] hover:border-brand-accent/40 transition-all duration-300 flex flex-col justify-between group hover:shadow-xl hover:shadow-brand-primary/5"
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-xl bg-brand-primary/10 border border-brand-primary/20 flex items-center justify-center text-brand-accent group-hover:scale-105 transition-transform">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-white group-hover:text-brand-accent transition-colors">
                        {cat.title}
                      </h3>
                      <span className="text-[10px] font-mono text-muted">
                        {cat.skills.length} verified competencies
                      </span>
                    </div>
                  </div>

                  <p className="text-xs text-muted leading-relaxed mb-5">
                    {cat.description}
                  </p>

                  {/* Skills List with practical descriptions communicating proficiency through project evidence */}
                  <div className="space-y-2.5 mb-2">
                    {cat.skills.map((skill) => (
                      <div
                        key={skill.name}
                        className="p-2.5 rounded-xl bg-white/[0.02] border border-white/[0.04] hover:bg-white/[0.05] hover:border-white/[0.08] transition-colors"
                      >
                        <div className="flex items-center justify-between">
                          <span className={`text-xs font-semibold ${skill.isPrimary ? 'text-white' : 'text-slate-300'}`}>
                            {skill.name}
                          </span>
                          {skill.isPrimary && (
                            <span className="text-[10px] font-mono text-brand-accent bg-brand-accent/10 px-2 py-0.5 rounded-full border border-brand-accent/20">
                              Core
                            </span>
                          )}
                        </div>
                        {skill.description && (
                          <p className="text-[11px] text-muted mt-1 leading-normal">
                            {skill.description}
                          </p>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-3 mt-2 border-t border-white/[0.05] flex items-center gap-1.5 text-[11px] text-slate-400 font-mono">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Demonstrated in featured projects</span>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
