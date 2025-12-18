'use client';

import { useLenis } from '@/src/hooks/useLenis';

export function LenisProvider({ children }: { children: React.ReactNode }) {
  // Initialize Lenis smooth scrolling
  useLenis();

  return <>{children}</>;
}

