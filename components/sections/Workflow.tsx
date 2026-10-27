'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { WORKFLOW_STEPS } from '@/lib/constants';
import { fadeInUp, staggerContainer } from '@/lib/animations';
import { Search, Layout, Cpu, Bug, CheckCircle2 } from 'lucide-react';

const ICONS = [Search, Layout, Cpu, Bug, CheckCircle2];

export function Workflow() {
  return (
    <section id="workflow" className="scroll-mt-24 py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="ENGINEERING PROCESS"
          title="Development"
          highlightText="Workflow"
          subtitle="A systematic, practical engineering process for taking mobile features from initial requirement through to release-ready Flutter code."
        />

        {/* 5-step horizontal/vertical responsive workflow grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-5 relative"
        >
          {WORKFLOW_STEPS.map((step, idx) => {
            const Icon = ICONS[idx] || CheckCircle2;
            return (
              <motion.div
                key={step.step}
                variants={fadeInUp}
                className="relative p-5 sm:p-6 rounded-2xl bg-slate-900/60 backdrop-blur-md border border-white/[0.08] hover:border-brand-accent/40 transition-all duration-300 flex flex-col justify-between group hover:shadow-xl hover:shadow-cyan-950/20"
              >
                <div>
                  {/* Step Number & Category Icon */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-brand-accent to-brand-primary">
                      {step.step}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-brand-accent group-hover:scale-110 transition-transform">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Step Title */}
                  <h3 className="text-base font-bold text-white mb-2 group-hover:text-brand-accent transition-colors">
                    {step.title}
                  </h3>

                  {/* Step Description */}
                  <p className="text-xs text-muted leading-relaxed mb-4">
                    {step.description}
                  </p>
                </div>

                {/* Practical Details / Checkpoints */}
                <div className="pt-3 border-t border-white/[0.06] space-y-1.5">
                  {step.details.map((detail, dIdx) => (
                    <div
                      key={dIdx}
                      className="text-[11px] font-mono text-slate-400 flex items-center gap-1.5"
                    >
                      <span className="w-1 h-1 rounded-full bg-brand-accent/70 shrink-0" />
                      <span>{detail}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
