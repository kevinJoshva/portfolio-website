'use client';

import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Project } from '@/lib/projects';
import { TechBadge } from './TechBadge';
import { Button } from './Button';
import {
  X,
  ExternalLink,
  Github,
  Gitlab,
  ShieldCheck,
  CheckCircle2,
  Clock,
  Layers,
  Server,
  Database,
  Building2,
  Code2,
  UserCheck,
} from 'lucide-react';

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

export function ProjectModal({ project, isOpen, onClose }: ProjectModalProps) {
  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!project) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
        >
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-slate-950/80 backdrop-blur-md -z-10"
          />

          {/* Modal Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="relative w-full max-w-3xl max-h-[90vh] bg-slate-900 border border-white/[0.12] rounded-3xl shadow-2xl shadow-black/80 overflow-y-auto text-left"
          >
            {/* Modal Header Banner */}
            <div
              className={`p-6 sm:p-8 bg-gradient-to-r ${project.themeGradient} border-b border-white/[0.08] relative`}
            >
              <button
                onClick={onClose}
                aria-label="Close project details"
                className="absolute top-5 right-5 w-9 h-9 rounded-full bg-slate-950/70 border border-white/[0.15] text-slate-300 hover:text-white flex items-center justify-center hover:bg-slate-950 transition-colors focus:outline-none focus:ring-2 focus:ring-brand-accent/50"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="flex flex-wrap items-center gap-2 mb-3">
                <span className="px-3 py-1 rounded-full text-xs font-mono font-medium bg-slate-950/80 border border-white/[0.1] text-brand-accent">
                  {project.category}
                </span>
                {project.isProfessionalWork && (
                  <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-mono bg-indigo-950/80 border border-indigo-500/30 text-indigo-300">
                    <Building2 className="w-3 h-3" />
                    <span>{project.organization || 'Professional Client Work'}</span>
                  </span>
                )}
              </div>

              <h2 id="modal-title" className="text-2xl sm:text-3xl font-extrabold text-white">
                {project.title}
              </h2>
              <p className="text-sm font-mono text-brand-accent mt-1">
                {project.tagline}
              </p>
            </div>

            {/* Modal Body */}
            <div className="p-6 sm:p-8 space-y-6 text-slate-300 text-sm">
              {/* Overview */}
              <div>
                <h3 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold mb-2">
                  Project Overview
                </h3>
                <p className="leading-relaxed text-slate-300">
                  {project.overview}
                </p>
              </div>

              {/* Developer Role & Scope */}
              <div className="p-4 rounded-xl bg-slate-950/60 border border-white/[0.06] flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-brand-primary/10 border border-brand-primary/20 flex items-center justify-center text-brand-accent">
                    <UserCheck className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[11px] font-mono text-muted">Role & Involvement</div>
                    <div className="text-sm font-bold text-white">{project.ownerRole}</div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-[11px] font-mono text-muted">Context</div>
                  <div className="text-xs font-medium text-slate-300">
                    {project.isProfessionalWork ? 'Team Collaboration / Client App' : 'Project Architecture'}
                  </div>
                </div>
              </div>

              {/* Specific Contributions */}
              <div>
                <h3 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold mb-3">
                  Specific Engineering Contributions:
                </h3>
                <ul className="space-y-2">
                  {project.specificContributions.map((contrib, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-200">
                      <CheckCircle2 className="w-4 h-4 text-brand-accent shrink-0 mt-0.5" />
                      <span>{contrib}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Architecture Breakdown */}
              <div className="space-y-3">
                <h3 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold">
                  Technical Architecture:
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div className="p-3.5 rounded-xl bg-slate-950/70 border border-white/[0.06]">
                    <div className="flex items-center gap-1.5 text-brand-accent text-xs font-semibold mb-1">
                      <Layers className="w-3.5 h-3.5" />
                      <span>State Pattern</span>
                    </div>
                    <p className="text-[11px] text-slate-400 leading-normal">
                      {project.architecture.statePattern}
                    </p>
                  </div>

                  <div className="p-3.5 rounded-xl bg-slate-950/70 border border-white/[0.06]">
                    <div className="flex items-center gap-1.5 text-brand-primary text-xs font-semibold mb-1">
                      <Server className="w-3.5 h-3.5" />
                      <span>Network Layer</span>
                    </div>
                    <p className="text-[11px] text-slate-400 leading-normal">
                      {project.architecture.networkLayer}
                    </p>
                  </div>

                  <div className="p-3.5 rounded-xl bg-slate-950/70 border border-white/[0.06]">
                    <div className="flex items-center gap-1.5 text-emerald-400 text-xs font-semibold mb-1">
                      <Database className="w-3.5 h-3.5" />
                      <span>Local Storage</span>
                    </div>
                    <p className="text-[11px] text-slate-400 leading-normal">
                      {project.architecture.storage}
                    </p>
                  </div>
                </div>
              </div>

              {/* Representative Code Implementation Snippet */}
              <div>
                <div className="flex items-center justify-between pb-1 mb-2">
                  <h3 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold flex items-center gap-1.5">
                    <Code2 className="w-3.5 h-3.5 text-brand-accent" />
                    <span>Implementation Pattern Snippet</span>
                  </h3>
                  <span className="text-[10px] font-mono text-muted">
                    {project.architecture.codeSnippet.filename}
                  </span>
                </div>
                <div className="p-4 rounded-xl bg-slate-950 border border-white/[0.08] font-mono text-xs overflow-x-auto text-slate-300">
                  <pre className="text-[11px] leading-relaxed">
                    <code>{project.architecture.codeSnippet.code}</code>
                  </pre>
                </div>
              </div>

              {/* Verified Technologies */}
              <div>
                <h3 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold mb-2">
                  Verified Technologies:
                </h3>
                <div className="flex flex-wrap gap-1.5">
                  {project.verifiedTechnologies.map((tech) => (
                    <TechBadge key={tech} name={tech} size="sm" isPrimary={tech === 'Flutter' || tech === 'Dart'} />
                  ))}
                </div>
              </div>

              {/* Confidentiality / Codebase Access Notice */}
              {project.confidentialityNote && (
                <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.06] flex items-start gap-2.5 text-xs text-slate-400">
                  <ShieldCheck className="w-4 h-4 text-brand-accent shrink-0 mt-0.5" />
                  <span>
                    <strong>Confidentiality Notice:</strong> {project.confidentialityNote}{' '}
                    Internal business endpoints and private customer credentials have been omitted in compliance with professional standards.
                  </span>
                </div>
              )}

              {/* Action Buttons */}
              <div className="pt-4 border-t border-white/[0.08] flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center gap-2">
                  {project.githubUrl ? (
                    <Button variant="secondary" size="sm" href={project.githubUrl} isExternal icon={Github}>
                      GitHub Repository
                    </Button>
                  ) : project.gitlabUrl ? (
                    <Button variant="secondary" size="sm" href={project.gitlabUrl} isExternal icon={Gitlab}>
                      GitLab Repository
                    </Button>
                  ) : (
                    <span className="text-xs font-mono text-muted bg-white/[0.03] px-3 py-1.5 rounded-lg border border-white/[0.05]">
                      Repository: Private / Enterprise Controlled
                    </span>
                  )}

                  {project.liveDemoUrl && (
                    <Button variant="primary" size="sm" href={project.liveDemoUrl} isExternal icon={ExternalLink}>
                      Live Demo
                    </Button>
                  )}
                </div>

                <Button variant="ghost" size="sm" onClick={onClose}>
                  Close
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
