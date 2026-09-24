import type { ReactNode } from 'react';

import { cn } from '@shared/lib';

interface GradientTextProps {
  children: ReactNode;
  className?: string;
  as?: 'span' | 'h1' | 'h2' | 'h3' | 'h4' | 'p';
}

export function GradientText({
  children,
  className,
  as: Component = 'span',
}: GradientTextProps) {
  return (
    <Component
      className={cn(
        'bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-purple-400 to-cyan-400',
        className,
      )}
    >
      {children}
    </Component>
  );
}