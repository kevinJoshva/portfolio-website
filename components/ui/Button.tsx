'use client';

import React from 'react';
import Link from 'next/link';
import { LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  isExternal?: boolean;
  download?: boolean | string;
  icon?: LucideIcon;
  iconPosition?: 'left' | 'right';
  children: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement | HTMLAnchorElement>;
}

export function Button({
  variant = 'primary',
  size = 'md',
  href,
  isExternal = false,
  download,
  icon: Icon,
  iconPosition = 'right',
  className,
  children,
  onClick,
  ...props
}: ButtonProps) {
  const baseStyles =
    'inline-flex items-center justify-center font-medium transition-all duration-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-accent/50 focus:ring-offset-2 focus:ring-offset-background disabled:opacity-50 disabled:pointer-events-none select-none';

  const variants = {
    primary:
      'bg-gradient-to-r from-brand-primary to-brand-secondary text-white shadow-lg shadow-brand-primary/25 hover:shadow-brand-primary/40 hover:brightness-110 active:scale-[0.98]',
    secondary:
      'bg-slate-800/90 text-slate-100 border border-slate-700/80 hover:bg-slate-700/90 hover:border-slate-600 shadow-md active:scale-[0.98]',
    ghost:
      'text-slate-300 hover:text-white hover:bg-white/[0.08] active:scale-[0.98]',
    outline:
      'border border-brand-accent/40 text-brand-accent hover:bg-brand-accent/10 hover:border-brand-accent active:scale-[0.98]',
  };

  const sizes = {
    sm: 'text-xs px-3.5 py-1.5 gap-1.5',
    md: 'text-sm px-5 py-2.5 gap-2',
    lg: 'text-base px-6 py-3.5 gap-2.5',
  };

  const combinedClassName = cn(baseStyles, variants[variant], sizes[size], className);

  const content = (
    <>
      {Icon && iconPosition === 'left' && <Icon className="w-4 h-4 shrink-0 transition-transform group-hover:-translate-x-0.5" />}
      <span>{children}</span>
      {Icon && iconPosition === 'right' && <Icon className="w-4 h-4 shrink-0 transition-transform group-hover:translate-x-0.5" />}
    </>
  );

  if (href) {
    if (isExternal) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          download={download}
          onClick={onClick as React.MouseEventHandler<HTMLAnchorElement>}
          className={cn('group', combinedClassName)}
        >
          {content}
        </a>
      );
    }

    if (href.startsWith('#')) {
      return (
        <a
          href={href}
          download={download}
          onClick={(e) => {
            if (onClick) {
              onClick(e as any);
            }
          }}
          className={cn('group', combinedClassName)}
        >
          {content}
        </a>
      );
    }

    return (
      <Link
        href={href}
        download={download}
        onClick={onClick as React.MouseEventHandler<HTMLAnchorElement>}
        className={cn('group', combinedClassName)}
      >
        {content}
      </Link>
    );
  }

  return (
    <button className={cn('group', combinedClassName)} onClick={onClick as React.MouseEventHandler<HTMLButtonElement>} {...props}>
      {content}
    </button>
  );
}
