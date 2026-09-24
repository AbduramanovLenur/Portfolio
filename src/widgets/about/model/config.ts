import type { LucideIcon } from 'lucide-react';
import { Clock, Headphones, MessageCircle } from 'lucide-react';

export interface Advantage {
  icon: LucideIcon;
  titleKey: string;
  descriptionKey: string;
}

export interface Stat {
  value: string;
  labelKey: string;
}

export const advantages: Advantage[] = [
  {
    icon: MessageCircle,
    titleKey: 'about.advantages.communication.title',
    descriptionKey: 'about.advantages.communication.description',
  },
  {
    icon: Clock,
    titleKey: 'about.advantages.deadlines.title',
    descriptionKey: 'about.advantages.deadlines.description',
  },
  {
    icon: Headphones,
    titleKey: 'about.advantages.support.title',
    descriptionKey: 'about.advantages.support.description',
  },
];

export const stats: Stat[] = [
  { value: '3+', labelKey: 'about.stats.experience' },
  { value: '10+', labelKey: 'about.stats.projects' },
  { value: '20+', labelKey: 'about.stats.clients' },
  { value: '100%', labelKey: 'about.stats.satisfaction' },
];