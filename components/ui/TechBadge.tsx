'use client';

import React from 'react';
import { cn } from '@/lib/utils';

interface TechBadgeProps {
  name: string;
  isPrimary?: boolean;
  size?: 'sm' | 'md';
  className?: string;
}

export function TechBadge({
  name,
  isPrimary = false,
  size = 'md',
  className = '',
}: TechBadgeProps) {
  const sizeStyles = {
    sm: 'text-xs px-2.5 py-1',
    md: 'text-xs sm:text-sm px-3 py-1.5',
  };

  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 rounded-lg font-mono font-medium transition-all duration-200 select-none border',
        sizeStyles[size],
        isPrimary
          ? 'bg-brand-primary/15 text-indigo-200 border-brand-primary/30 shadow-[0_0_12px_rgba(79,70,229,0.15)]'
          : 'bg-slate-800/60 text-slate-300 border-white/[0.08] hover:border-slate-600 hover:text-white',
        className
      )}
    >
      <span
        className={cn(
          'w-1.5 h-1.5 rounded-full shrink-0',
          isPrimary ? 'bg-brand-accent' : 'bg-slate-500'
        )}
      />
      <span>{name}</span>
    </span>
  );
}
