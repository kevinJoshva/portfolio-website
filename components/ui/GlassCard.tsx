'use client';

import React from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';
import { cn } from '@/lib/utils';

interface GlassCardProps extends HTMLMotionProps<'div'> {
  children: React.ReactNode;
  glow?: boolean;
  glowColor?: 'primary' | 'accent' | 'secondary' | 'none';
  variant?: 'default' | 'subtle' | 'elevated';
  className?: string;
}

export function GlassCard({
  children,
  glow = false,
  glowColor = 'primary',
  variant = 'default',
  className = '',
  ...props
}: GlassCardProps) {
  const glowStyles = {
    primary: 'hover:shadow-[0_0_30px_rgba(79,70,229,0.18)] hover:border-brand-primary/40',
    accent: 'hover:shadow-[0_0_30px_rgba(6,182,212,0.18)] hover:border-brand-accent/40',
    secondary: 'hover:shadow-[0_0_30px_rgba(124,58,237,0.18)] hover:border-brand-secondary/40',
    none: '',
  };

  const variantStyles = {
    default: 'bg-slate-900/60 backdrop-blur-md border border-white/[0.08]',
    subtle: 'bg-slate-950/40 backdrop-blur-sm border border-white/[0.05]',
    elevated: 'bg-slate-900/85 backdrop-blur-xl border border-white/[0.12] shadow-2xl',
  };

  return (
    <motion.div
      className={cn(
        'rounded-2xl transition-all duration-300 relative overflow-hidden',
        variantStyles[variant],
        glow && glowStyles[glowColor],
        className
      )}
      {...props}
    >
      {children}
    </motion.div>
  );
}
