'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { WORK_EXPERIENCE, EDUCATION_HISTORY } from '@/lib/experience';
import { TechBadge } from '@/components/ui/TechBadge';
import { fadeInUp, staggerContainer } from '@/lib/animations';
import {
  Briefcase,
  GraduationCap,
  MapPin,
  CheckCircle2,
  Building2,
  ShieldAlert,
} from 'lucide-react';

export function Experience() {
  return (
    <section id="experience" className="scroll-mt-24 py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="PROFESSIONAL JOURNEY"
          title="Experience &"
          highlightText="Background"
          subtitle="Real-world mobile engineering contributions, production Flutter development, and academic foundations."
        />

        <div className="max-w-4xl mx-auto">
          {/* Work Experience Section */}
          <div className="mb-14">
            <div className="flex items-center gap-2.5 mb-8">
              <div className="w-8 h-8 rounded-lg bg-brand-primary/10 border border-brand-primary/20 flex items-center justify-center text-brand-primary">
                <Briefcase className="w-4 h-4" />
              </div>
              <h3 className="text-xl font-bold text-white tracking-tight">
                Professional Experience
              </h3>
            </div>

            <div className="relative pl-6 sm:pl-8 border-l border-white/[0.1] space-y-8">
              {WORK_EXPERIENCE.map((exp) => (
                <motion.div
                  key={exp.id}
                  variants={fadeInUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: '-50px' }}
                  className="relative group"
                >
                  {/* Timeline indicator node */}
                  <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-slate-900 border-2 border-brand-accent group-hover:scale-125 transition-transform" />

                  <div className="p-6 sm:p-7 rounded-2xl bg-slate-900/60 backdrop-blur-md border border-white/[0.08] hover:border-brand-accent/40 transition-all">
                    {/* Header */}
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                      <div>
                        <h4 className="text-lg sm:text-xl font-bold text-white group-hover:text-brand-accent transition-colors">
                          {exp.role}
                        </h4>
                        <div className="flex items-center gap-2 text-sm text-brand-accent font-medium mt-0.5">
                          <Building2 className="w-3.5 h-3.5" />
                          <span>{exp.company}</span>
                        </div>
                      </div>

                      <div className="flex items-center gap-3 text-xs font-mono text-muted">
                        <span className="flex items-center gap-1">
                          <MapPin className="w-3 h-3 text-brand-accent" />
                          {exp.location}
                        </span>
                        <span className="px-2.5 py-0.5 rounded-full bg-brand-primary/10 border border-brand-primary/25 text-brand-accent">
                          {exp.period}
                        </span>
                      </div>
                    </div>

                    <p className="text-sm text-slate-300 leading-relaxed mb-5">
                      {exp.description}
                    </p>

                    {/* Factual Responsibilities & Contributions */}
                    <div className="mb-5">
                      <h5 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold mb-3">
                        Verified Responsibilities & Contributions:
                      </h5>
                      <ul className="space-y-2">
                        {exp.responsibilities.map((resp, rIdx) => (
                          <li key={rIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                            <CheckCircle2 className="w-4 h-4 text-brand-accent shrink-0 mt-0.5" />
                            <span>{resp}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Tech Badges */}
                    <div className="flex flex-wrap gap-1.5 pt-4 border-t border-white/[0.06]">
                      {exp.technologies.map((tech) => (
                        <TechBadge
                          key={tech}
                          name={tech}
                          size="sm"
                          isPrimary={tech === 'Flutter' || tech === 'Dart' || tech === 'Provider'}
                        />
                      ))}
                    </div>

                    {/* Configurable note */}
                    {exp.confirmationNote && (
                      <div className="mt-3 text-[11px] font-mono text-slate-500 italic">
                        * {exp.confirmationNote}
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Education Timeline */}
          <div>
            <div className="flex items-center gap-2.5 mb-8">
              <div className="w-8 h-8 rounded-lg bg-brand-secondary/10 border border-brand-secondary/20 flex items-center justify-center text-brand-secondary">
                <GraduationCap className="w-4 h-4" />
              </div>
              <h3 className="text-xl font-bold text-white tracking-tight">
                Education
              </h3>
            </div>

            <div className="relative pl-6 sm:pl-8 border-l border-white/[0.1]">
              {EDUCATION_HISTORY.map((edu) => (
                <motion.div
                  key={edu.id}
                  variants={fadeInUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: '-50px' }}
                  className="relative group"
                >
                  <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-slate-900 border-2 border-brand-secondary group-hover:scale-125 transition-transform" />

                  <div className="p-6 sm:p-7 rounded-2xl bg-slate-900/60 backdrop-blur-md border border-white/[0.08] hover:border-brand-secondary/40 transition-all">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                      <div>
                        <h4 className="text-lg font-bold text-white">
                          {edu.degree} in {edu.field}
                        </h4>
                        <div className="text-sm text-indigo-300 font-medium">
                          {edu.institution}
                        </div>
                      </div>

                      <div className="flex items-center gap-3 text-xs font-mono text-muted">
                        <span>{edu.location}</span>
                        <span className="px-2.5 py-0.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300">
                          Class of {edu.graduationYear}
                        </span>
                      </div>
                    </div>

                    <ul className="space-y-1.5 mt-4 text-xs sm:text-sm text-slate-300">
                      {edu.highlights.map((h, hIdx) => (
                        <li key={hIdx} className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-brand-secondary shrink-0 mt-2" />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
