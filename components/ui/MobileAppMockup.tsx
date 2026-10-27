'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Wifi,
  Battery,
  Signal,
  MapPin,
  Search,
  SlidersHorizontal,
  Star,
  Bell,
  ChevronDown,
  Home,
  Compass,
  Calendar,
  User,
  Zap,
} from 'lucide-react';

interface CategoryItem {
  id: string;
  name: string;
  icon: string;
}

const CATEGORIES: CategoryItem[] = [
  { id: 'all', name: 'All', icon: '⚡' },
  { id: 'cricket', name: 'Cricket', icon: '🏏' },
  { id: 'badminton', name: 'Badminton', icon: '🏸' },
  { id: 'football', name: 'Football', icon: '⚽' },
  { id: 'tennis', name: 'Tennis', icon: '🎾' },
];

export function MobileAppMockup() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [activeNav, setActiveNav] = useState<'home' | 'explore' | 'bookings' | 'profile'>('home');

  return (
    <div className="relative w-full max-w-lg mx-auto flex items-center justify-center p-4">
      {/* Soft ambient background glow providing depth without visual clutter */}
      <div className="absolute -inset-4 bg-gradient-to-tr from-brand-primary/25 via-brand-accent/15 to-brand-secondary/20 rounded-full blur-3xl -z-10 opacity-60" />

      {/* Central Phone Mockup Chassis */}
      <div className="relative w-[285px] sm:w-[315px] h-[595px] bg-slate-950 rounded-[44px] border-[7px] border-slate-800 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.8),0_0_40px_rgba(79,70,229,0.18)] overflow-hidden flex flex-col select-none">
        {/* Dynamic Island / Speaker Notch */}
        <div className="absolute top-2.5 left-1/2 -translate-x-1/2 w-24 h-5 bg-black rounded-full z-30 flex items-center justify-between px-2.5 pointer-events-none">
          <span className="w-2.5 h-2.5 rounded-full bg-slate-900 border border-slate-800" />
          <span className="w-2 h-2 rounded-full bg-cyan-500/80 animate-pulse" />
        </div>

        {/* Status Bar */}
        <div className="h-9 pt-2 px-6 flex items-center justify-between text-[11px] font-medium text-slate-400 shrink-0 select-none z-20">
          <span>09:41</span>
          <div className="flex items-center gap-1.5 text-slate-400">
            <Signal className="w-3 h-3" />
            <Wifi className="w-3 h-3" />
            <Battery className="w-3.5 h-3.5" />
          </div>
        </div>

        {/* Mobile App Header (Sports Venue App) */}
        <div className="px-4 pt-1.5 pb-2.5 flex items-center justify-between shrink-0 border-b border-white/[0.04]">
          <div>
            <div className="flex items-center gap-1">
              <span className="text-[10px] font-mono uppercase tracking-wider text-brand-accent font-semibold flex items-center gap-1">
                <Zap className="w-2.5 h-2.5 text-brand-accent fill-brand-accent" />
                Turftime
              </span>
            </div>
            <div className="flex items-center gap-1 text-slate-200 text-xs font-semibold cursor-pointer hover:text-brand-accent transition-colors">
              <MapPin className="w-3 h-3 text-brand-accent shrink-0" />
              <span>Trichy, Tamil Nadu</span>
              <ChevronDown className="w-3 h-3 text-slate-400" />
            </div>
          </div>

          <div className="flex items-center gap-2">
            {/* Notification Bell */}
            <div className="relative w-7 h-7 rounded-full bg-slate-900 border border-white/[0.08] flex items-center justify-center text-slate-300">
              <Bell className="w-3.5 h-3.5" />
              <span className="absolute top-1 right-1 w-1.5 h-1.5 rounded-full bg-brand-accent" />
            </div>

            {/* Profile Avatar */}
            <div className="w-7 h-7 rounded-full bg-gradient-to-tr from-brand-primary to-brand-accent p-[1px] flex items-center justify-center">
              <div className="w-full h-full rounded-full bg-slate-950 flex items-center justify-center text-[10px] font-mono font-bold text-white">
                KT
              </div>
            </div>
          </div>
        </div>

        {/* App Content Body (Scrollable) */}
        <div className="flex-1 overflow-y-auto px-4 py-2.5 space-y-3 font-sans scrollbar-none">
          {/* Search Bar */}
          <div className="relative flex items-center">
            <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 pointer-events-none" />
            <input
              type="text"
              readOnly
              placeholder="Search turf, courts, arenas..."
              className="w-full pl-8 pr-8 py-2 rounded-xl bg-slate-900/90 border border-white/[0.08] text-xs text-white placeholder-slate-500 focus:outline-none cursor-pointer"
            />
            <SlidersHorizontal className="w-3 h-3 text-brand-accent absolute right-3 pointer-events-none" />
          </div>

          {/* Sport Category Chips */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-0.5 scrollbar-none">
            {CATEGORIES.map((cat) => {
              const isSelected = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`flex items-center gap-1 px-2.5 py-1 rounded-lg text-[11px] font-medium whitespace-nowrap transition-all ${
                    isSelected
                      ? 'bg-gradient-to-r from-brand-primary to-brand-secondary text-white shadow-sm shadow-brand-primary/20 border border-brand-accent/30'
                      : 'bg-slate-900/80 text-slate-300 border border-white/[0.06] hover:bg-slate-900'
                  }`}
                >
                  <span className="text-[11px]">{cat.icon}</span>
                  <span>{cat.name}</span>
                </button>
              );
            })}
          </div>

          {/* Section Header */}
          <div className="flex items-center justify-between pt-0.5">
            <span className="text-xs font-bold text-white tracking-tight">Featured Venues</span>
            <span className="text-[10px] font-mono text-brand-accent hover:underline cursor-pointer">
              View All
            </span>
          </div>

          {/* Venue Card 1: Premier Turf Arena (Football & Cricket) */}
          <div className="bg-slate-900/80 border border-white/[0.08] rounded-2xl overflow-hidden shadow-sm hover:border-brand-accent/40 transition-colors">
            {/* Visual Thumbnail */}
            <div className="h-24 relative bg-gradient-to-br from-emerald-950/70 via-slate-900 to-slate-950 p-2.5 flex flex-col justify-between overflow-hidden">
              {/* Pitch grid graphic */}
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#10b98115_1px,transparent_1px),linear-gradient(to_bottom,#10b98115_1px,transparent_1px)] bg-[size:1rem_1rem] pointer-events-none" />
              <div className="absolute -right-3 -bottom-3 w-16 h-16 rounded-full border border-emerald-500/20 pointer-events-none" />

              <div className="relative z-10 flex items-center justify-between">
                <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[9px] font-mono font-medium bg-black/60 backdrop-blur-sm text-amber-300 border border-white/[0.1]">
                  <Star className="w-2.5 h-2.5 fill-amber-300 text-amber-300" />
                  <span>4.9 (128)</span>
                </span>
                <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[9px] font-mono text-emerald-400 bg-emerald-950/80 border border-emerald-500/30">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span>Available</span>
                </span>
              </div>

              <div className="relative z-10">
                <span className="text-[10px] font-mono text-emerald-300 bg-emerald-950/70 px-1.5 py-0.5 rounded border border-emerald-500/20">
                  ⚽ 5-a-Side AstroTurf
                </span>
              </div>
            </div>

            {/* Venue Details */}
            <div className="p-2.5">
              <div className="flex items-center justify-between">
                <h4 className="text-xs font-bold text-white">Premier Turf Arena</h4>
              </div>
              <p className="text-[10px] text-muted flex items-center gap-1 mt-0.5">
                <MapPin className="w-2.5 h-2.5 text-brand-accent" />
                <span>Thillai Nagar, Trichy • 2.4 km</span>
              </p>

              <div className="mt-2 pt-2 border-t border-white/[0.05] flex items-center justify-between">
                <div>
                  <span className="text-xs font-extrabold text-white">₹800</span>
                  <span className="text-[10px] text-muted font-normal"> / hour</span>
                </div>
                <button
                  type="button"
                  className="px-3 py-1 rounded-lg bg-gradient-to-r from-brand-primary to-brand-secondary text-white text-[10px] font-semibold shadow-sm hover:brightness-110 active:scale-95 transition-all"
                >
                  Book Slot
                </button>
              </div>
            </div>
          </div>

          {/* Venue Card 2: Smash Badminton Hub */}
          <div className="bg-slate-900/80 border border-white/[0.08] rounded-2xl overflow-hidden shadow-sm hover:border-brand-accent/40 transition-colors">
            {/* Visual Thumbnail */}
            <div className="h-24 relative bg-gradient-to-br from-indigo-950/70 via-slate-900 to-slate-950 p-2.5 flex flex-col justify-between overflow-hidden">
              {/* Court lines graphic */}
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#6366f115_1px,transparent_1px),linear-gradient(to_bottom,#6366f115_1px,transparent_1px)] bg-[size:1.2rem_1.2rem] pointer-events-none" />
              <div className="absolute -left-3 -bottom-3 w-16 h-16 rounded-full border border-indigo-500/20 pointer-events-none" />

              <div className="relative z-10 flex items-center justify-between">
                <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[9px] font-mono font-medium bg-black/60 backdrop-blur-sm text-amber-300 border border-white/[0.1]">
                  <Star className="w-2.5 h-2.5 fill-amber-300 text-amber-300" />
                  <span>4.8 (94)</span>
                </span>
                <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[9px] font-mono text-cyan-300 bg-cyan-950/80 border border-cyan-500/30">
                  <span>Instant Book</span>
                </span>
              </div>

              <div className="relative z-10">
                <span className="text-[10px] font-mono text-cyan-300 bg-cyan-950/70 px-1.5 py-0.5 rounded border border-cyan-500/20">
                  🏸 4 Wooden Courts · AC
                </span>
              </div>
            </div>

            {/* Venue Details */}
            <div className="p-2.5">
              <div className="flex items-center justify-between">
                <h4 className="text-xs font-bold text-white">Smash Pro Badminton</h4>
              </div>
              <p className="text-[10px] text-muted flex items-center gap-1 mt-0.5">
                <MapPin className="w-2.5 h-2.5 text-brand-accent" />
                <span>Cantonment, Trichy • 3.8 km</span>
              </p>

              <div className="mt-2 pt-2 border-t border-white/[0.05] flex items-center justify-between">
                <div>
                  <span className="text-xs font-extrabold text-white">₹450</span>
                  <span className="text-[10px] text-muted font-normal"> / hour</span>
                </div>
                <button
                  type="button"
                  className="px-3 py-1 rounded-lg bg-gradient-to-r from-brand-primary to-brand-secondary text-white text-[10px] font-semibold shadow-sm hover:brightness-110 active:scale-95 transition-all"
                >
                  Book Slot
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom App Navigation Bar */}
        <div className="px-5 py-2 border-t border-white/[0.08] bg-slate-950/95 flex items-center justify-between shrink-0">
          <button
            onClick={() => setActiveNav('home')}
            className={`flex flex-col items-center gap-0.5 transition-colors ${
              activeNav === 'home' ? 'text-brand-accent' : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <Home className="w-4 h-4" />
            <span className="text-[9px] font-medium">Home</span>
          </button>

          <button
            onClick={() => setActiveNav('explore')}
            className={`flex flex-col items-center gap-0.5 transition-colors ${
              activeNav === 'explore' ? 'text-brand-accent' : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <Compass className="w-4 h-4" />
            <span className="text-[9px] font-medium">Explore</span>
          </button>

          <button
            onClick={() => setActiveNav('bookings')}
            className={`flex flex-col items-center gap-0.5 transition-colors ${
              activeNav === 'bookings' ? 'text-brand-accent' : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <Calendar className="w-4 h-4" />
            <span className="text-[9px] font-medium">Bookings</span>
          </button>

          <button
            onClick={() => setActiveNav('profile')}
            className={`flex flex-col items-center gap-0.5 transition-colors ${
              activeNav === 'profile' ? 'text-brand-accent' : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <User className="w-4 h-4" />
            <span className="text-[9px] font-medium">Profile</span>
          </button>
        </div>

        {/* Bottom Home Indicator */}
        <div className="h-5 flex items-center justify-center shrink-0 bg-slate-950">
          <div className="w-28 h-1 bg-white/20 rounded-full" />
        </div>
      </div>
    </div>
  );
}
