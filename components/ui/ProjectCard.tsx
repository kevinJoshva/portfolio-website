'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Project } from '@/lib/projects';
import { TechBadge } from './TechBadge';
import { Button } from './Button';
import {
  CheckCircle2,
  Clock,
  ExternalLink,
  Github,
  Gitlab,
  FileSpreadsheet,
  FileCheck2,
  Users,
  Trophy,
  Smartphone,
  ChevronRight,
  Building2,
  CalendarDays,
  Layers,
  ArrowRight,
} from 'lucide-react';

interface ProjectCardProps {
  project: Project;
  index: number;
  onOpenDetails: (project: Project) => void;
}

export function ProjectCard({ project, index, onOpenDetails }: ProjectCardProps) {
  // Visual mockup graphics tailored to each of the 5 projects
  const renderMockupVisual = () => {
    switch (project.mockupType) {
      case 'invoice':
        return (
          <div className="w-full h-full p-3 sm:p-4 flex flex-col justify-between font-mono text-xs">
            <div className="flex items-center justify-between pb-2 border-b border-white/[0.08]">
              <div className="flex items-center gap-1.5 text-indigo-400">
                <FileSpreadsheet className="w-4 h-4" />
                <span className="font-semibold text-white">Invoice #BC-4921</span>
              </div>
              <span className="text-[10px] px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                PAID
              </span>
            </div>
            <div className="space-y-1.5 py-1 text-[11px]">
              <div className="flex justify-between text-slate-400">
                <span>Client Unit:</span>
                <span className="text-slate-200">Commercial Billing</span>
              </div>
              <div className="flex justify-between text-slate-400">
                <span>Subtotal:</span>
                <span className="text-slate-200">₹48,500.00</span>
              </div>
              <div className="flex justify-between text-slate-400">
                <span>Tax Breakdown:</span>
                <span className="text-slate-200">GST 18% (Applied)</span>
              </div>
            </div>
            <div className="p-2 rounded-lg bg-indigo-950/40 border border-indigo-500/20 flex justify-between items-center text-xs">
              <span className="text-indigo-300 font-sans">Total Amount:</span>
              <span className="font-bold text-white">₹57,230.00</span>
            </div>
          </div>
        );

      case 'filing':
        return (
          <div className="w-full h-full p-3 sm:p-4 flex flex-col justify-between font-mono text-xs">
            <div className="flex items-center justify-between pb-2 border-b border-white/[0.08]">
              <div className="flex items-center gap-1.5 text-cyan-400">
                <FileCheck2 className="w-4 h-4" />
                <span className="font-semibold text-white">eFiling Compliance</span>
              </div>
              <span className="text-[10px] px-2 py-0.5 rounded bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                SYNCED
              </span>
            </div>
            <div className="space-y-1 py-1 text-[11px]">
              <div className="p-1.5 rounded bg-white/[0.03] flex items-center justify-between">
                <span className="text-slate-300">Annual Return Filing</span>
                <span className="text-emerald-400 font-sans text-[10px]">Verified</span>
              </div>
              <div className="p-1.5 rounded bg-white/[0.03] flex items-center justify-between">
                <span className="text-slate-300">FCM Notification Alert</span>
                <span className="text-cyan-400 font-sans text-[10px]">Registered</span>
              </div>
            </div>
            <div className="p-2 rounded-lg bg-cyan-950/40 border border-cyan-500/20 flex items-center justify-between text-[11px]">
              <span className="text-cyan-300">REST Provider Service</span>
              <span className="text-emerald-400 font-mono">200 OK</span>
            </div>
          </div>
        );

      case 'hrms':
        return (
          <div className="w-full h-full p-3 sm:p-4 flex flex-col justify-between font-mono text-xs">
            <div className="flex items-center justify-between pb-2 border-b border-white/[0.08]">
              <div className="flex items-center gap-1.5 text-purple-400">
                <Users className="w-4 h-4" />
                <span className="font-semibold text-white">HRMS Portal</span>
              </div>
              <span className="text-[10px] px-2 py-0.5 rounded bg-purple-500/10 text-purple-300 border border-purple-500/20">
                ACTIVE
              </span>
            </div>
            <div className="grid grid-cols-2 gap-2 py-1 text-[11px]">
              <div className="p-2 rounded-lg bg-white/[0.03] border border-white/[0.04]">
                <div className="text-[10px] text-muted">Attendance</div>
                <div className="text-emerald-400 font-bold text-xs mt-0.5">Checked In</div>
                <div className="text-[9px] text-slate-500">09:15 AM</div>
              </div>
              <div className="p-2 rounded-lg bg-white/[0.03] border border-white/[0.04]">
                <div className="text-[10px] text-muted">Leave Balance</div>
                <div className="text-purple-300 font-bold text-xs mt-0.5">14 Days</div>
                <div className="text-[9px] text-slate-500">Paid Leave</div>
              </div>
            </div>
            <div className="p-2 rounded-lg bg-purple-950/40 border border-purple-500/20 flex items-center justify-between text-[11px]">
              <span className="text-purple-300">Payslip PDF</span>
              <span className="text-white flex items-center gap-1 text-[10px]">
                Viewer Ready <ChevronRight className="w-3 h-3" />
              </span>
            </div>
          </div>
        );

      case 'turftime':
        return (
          <div className="w-full h-full p-3 sm:p-4 flex flex-col justify-between font-mono text-xs">
            <div className="flex items-center justify-between pb-2 border-b border-white/[0.08]">
              <div className="flex items-center gap-1.5 text-emerald-400">
                <Trophy className="w-4 h-4" />
                <span className="font-semibold text-white">Turftime Sports Hub</span>
              </div>
              <span className="text-[10px] px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                AUTHENTICATED
              </span>
            </div>
            <div className="space-y-1 py-1 text-[11px]">
              <div className="flex justify-between items-center text-slate-300">
                <span>Selected Arena:</span>
                <span className="text-white font-sans font-medium">Turf Arena Pitch #1</span>
              </div>
              <div className="flex justify-between items-center text-slate-400">
                <span>Venue Query:</span>
                <span className="text-emerald-300">Paginated • 200 OK</span>
              </div>
              <div className="flex justify-between items-center text-slate-400">
                <span>Token Status:</span>
                <span className="text-slate-200">Auto-Refresh Active</span>
              </div>
            </div>
            <div className="p-2 rounded-lg bg-emerald-950/40 border border-emerald-500/20 flex items-center justify-between text-[11px]">
              <span className="text-emerald-300">Provider State</span>
              <span className="text-white font-mono text-[10px]">Slot Ready</span>
            </div>
          </div>
        );
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="group relative bg-slate-900/60 backdrop-blur-md border border-white/[0.08] hover:border-brand-accent/40 rounded-2xl overflow-hidden flex flex-col justify-between transition-all duration-300 hover:shadow-2xl hover:shadow-brand-primary/10"
    >
      {/* Top Banner with dynamic gradient */}
      <div
        className={`h-48 relative overflow-hidden bg-gradient-to-br ${project.themeGradient} p-4 flex items-center justify-center border-b border-white/[0.06]`}
      >
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff0a_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />

        {/* Center UI Preview Card mimicking mobile device screen */}
        <div className="relative w-full max-w-[280px] h-36 bg-slate-950/90 backdrop-blur-md rounded-xl border border-white/[0.12] shadow-xl overflow-hidden group-hover:scale-[1.02] transition-transform duration-300">
          {renderMockupVisual()}
        </div>

        {/* Category Pill Tag */}
        <div className="absolute top-3 left-3 flex items-center gap-1.5">
          <span className="px-2.5 py-1 rounded-full text-[11px] font-mono font-medium tracking-wide bg-slate-950/80 backdrop-blur-sm border border-white/[0.1] text-slate-300">
            {project.category}
          </span>
        </div>

        {/* Organization / Work Context */}
        {project.isProfessionalWork && (
          <div className="absolute top-3 right-3 hidden sm:block">
            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-mono bg-slate-950/80 backdrop-blur-sm border border-white/[0.1] text-indigo-300">
              <Building2 className="w-3 h-3" />
              <span>{project.organization || 'Client Work'}</span>
            </span>
          </div>
        )}
      </div>

      {/* Card Content */}
      <div className="p-6 flex-1 flex flex-col justify-between">
        <div>
          {/* Header */}
          <div className="flex items-center justify-between gap-2 mb-1.5">
            <h3 className="text-xl font-bold text-white group-hover:text-brand-accent transition-colors">
              {project.title}
            </h3>
            <span className="text-[11px] font-mono text-slate-400 bg-white/[0.04] px-2 py-0.5 rounded border border-white/[0.06]">
              {project.ownerRole}
            </span>
          </div>

          <p className="text-xs font-mono text-brand-accent/90 mb-3">
            {project.tagline}
          </p>

          <p className="text-sm text-muted leading-relaxed mb-5">
            {project.overview}
          </p>

          {/* Key Implementation Highlights */}
          <div className="mb-5">
            <div className="text-xs font-semibold text-slate-300 mb-2 flex items-center justify-between">
              <span>Implementation Highlights</span>
              <span className="text-[10px] text-muted">Feature Status</span>
            </div>
            <ul className="space-y-1.5">
              {project.keyFeatures.slice(0, 4).map((feat, fIndex) => (
                <li key={fIndex} className="flex items-start gap-2 text-xs">
                  {feat.isImplemented ? (
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                  ) : (
                    <Clock className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                  )}
                  <span className={feat.isImplemented ? 'text-slate-300' : 'text-slate-400 italic'}>
                    {feat.text}
                    {!feat.isImplemented && (
                      <span className="ml-1.5 text-[10px] text-amber-400/90 font-mono not-italic">(Planned)</span>
                    )}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Technology Badges */}
          <div className="flex flex-wrap gap-1.5 mb-6">
            {project.verifiedTechnologies.map((tech) => (
              <TechBadge
                key={tech}
                name={tech}
                size="sm"
                isPrimary={tech === 'Flutter' || tech === 'Dart'}
              />
            ))}
          </div>
        </div>

        {/* Action Controls & Modal Trigger */}
        <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between gap-2">
          {/* View Details Modal Button */}
          <button
            onClick={() => onOpenDetails(project)}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-brand-accent hover:text-white transition-colors group/btn py-1"
          >
            <span>Explore Architecture</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
          </button>

          {/* Public links if verified */}
          <div className="flex items-center gap-2">
            {project.githubUrl ? (
              <Button
                variant="secondary"
                size="sm"
                href={project.githubUrl}
                isExternal
                icon={Github}
              >
                GitHub
              </Button>
            ) : project.gitlabUrl ? (
              <Button
                variant="secondary"
                size="sm"
                href={project.gitlabUrl}
                isExternal
                icon={Gitlab}
              >
                GitLab
              </Button>
            ) : (
              <span className="text-[11px] font-mono text-slate-400 flex items-center gap-1">
                <Smartphone className="w-3 h-3 text-brand-accent" /> Mobile App
              </span>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
