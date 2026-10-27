'use client';

import { useState, useEffect, useRef, useCallback } from 'react';

/**
 * Robust, production-grade active section hook that:
 * 1. Accurately tracks the active section during both down-scroll and up-scroll.
 * 2. Uses requestAnimationFrame to throttle calculations and maintain 60+ FPS.
 * 3. Handles top-of-page edge case (guaranteeing 'home' is active when near top).
 * 4. Handles bottom-of-page edge case (guaranteeing 'contact' is active when reached).
 * 5. Uses a non-blocking lock for programmatic clicks with automatic unfreezing on manual scroll (wheel/touch/keyboard).
 * 6. Avoids dependency thrashing and prevents observer desync.
 */
export function useActiveSection(sectionIds: readonly string[], offset: number = 130) {
  const [activeSection, setActiveSection] = useState<string>(sectionIds[0] || 'home');

  const activeSectionRef = useRef(activeSection);
  activeSectionRef.current = activeSection;

  const sectionIdsRef = useRef(sectionIds);
  sectionIdsRef.current = sectionIds;

  const offsetRef = useRef(offset);
  offsetRef.current = offset;

  // Click lock state to prevent intermediate tab flickering during smooth scrolling
  const clickLockedIdRef = useRef<string | null>(null);
  const lockTimestampRef = useRef<number>(0);
  const rafIdRef = useRef<number | null>(null);

  // Programmatically lock active section during smooth scroll from nav clicks
  const lockActiveSection = useCallback((id: string) => {
    setActiveSection(id);
    activeSectionRef.current = id;
    clickLockedIdRef.current = id;
    lockTimestampRef.current = Date.now();
  }, []);

  useEffect(() => {
    // Helper to immediately release the click lock
    const releaseLock = () => {
      clickLockedIdRef.current = null;
    };

    // Any manual user interaction immediately breaks the programmatic lock
    window.addEventListener('wheel', releaseLock, { passive: true });
    window.addEventListener('touchmove', releaseLock, { passive: true });
    window.addEventListener('keydown', releaseLock, { passive: true });

    const checkActiveSection = () => {
      const currentIds = sectionIdsRef.current;
      const currentOffset = offsetRef.current;

      if (!currentIds || currentIds.length === 0) return;

      // If locked by a click, check whether we reached the target or expired (800ms max)
      if (clickLockedIdRef.current) {
        const elapsed = Date.now() - lockTimestampRef.current;
        if (elapsed > 800) {
          clickLockedIdRef.current = null;
        } else {
          const targetEl = document.getElementById(clickLockedIdRef.current);
          if (targetEl) {
            const rect = targetEl.getBoundingClientRect();
            // If the target element has arrived near the offset line, release lock
            if (Math.abs(rect.top - currentOffset) < 40) {
              clickLockedIdRef.current = null;
            }
          }
          // If still locked, retain clicked section
          return;
        }
      }

      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;

      // 1. Top of page edge case
      if (scrollY < 80) {
        if (activeSectionRef.current !== currentIds[0]) {
          setActiveSection(currentIds[0]);
        }
        return;
      }

      // 2. Bottom of page edge case (e.g. contact section on large screens)
      if (scrollY + windowHeight >= documentHeight - 50) {
        const lastSection = currentIds[currentIds.length - 1];
        if (lastSection && activeSectionRef.current !== lastSection) {
          setActiveSection(lastSection);
        }
        return;
      }

      // 3. Normal reading line detection (down & up scroll)
      let foundSection = currentIds[0];

      for (let i = 0; i < currentIds.length; i++) {
        const id = currentIds[i];
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= currentOffset) {
            foundSection = id;
          } else {
            // Once an element's top is beyond the offset line, subsequent ones are further down
            break;
          }
        }
      }

      if (activeSectionRef.current !== foundSection) {
        setActiveSection(foundSection);
      }
    };

    const handleScroll = () => {
      if (rafIdRef.current !== null) return;
      rafIdRef.current = window.requestAnimationFrame(() => {
        rafIdRef.current = null;
        checkActiveSection();
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll, { passive: true });

    // Initial check on mount
    checkActiveSection();

    // Check for direct URL hash on initial load
    if (window.location.hash) {
      const hashId = window.location.hash.replace('#', '');
      if (sectionIdsRef.current.includes(hashId)) {
        lockActiveSection(hashId);
      }
    }

    const handleHashChange = () => {
      if (window.location.hash) {
        const hashId = window.location.hash.replace('#', '');
        if (sectionIdsRef.current.includes(hashId)) {
          lockActiveSection(hashId);
        }
      }
    };

    window.addEventListener('hashchange', handleHashChange);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
      window.removeEventListener('wheel', releaseLock);
      window.removeEventListener('touchmove', releaseLock);
      window.removeEventListener('keydown', releaseLock);
      window.removeEventListener('hashchange', handleHashChange);
      if (rafIdRef.current !== null) {
        window.cancelAnimationFrame(rafIdRef.current);
      }
    };
  }, [lockActiveSection]);

  return { activeSection, lockActiveSection };
}
