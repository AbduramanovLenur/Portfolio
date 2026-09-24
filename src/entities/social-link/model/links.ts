import { Github, Linkedin, Mail, Send } from 'lucide-react';

import type { SocialLink } from './types';

export const socialLinks: SocialLink[] = [
  {
    key: 'telegram',
    icon: Send,
    href: 'https://t.me/developer_and_seo',
    color: '#0088cc',
  },
  {
    key: 'linkedin',
    icon: Linkedin,
    href: 'https://www.linkedin.com/in/lenur-abduramanov-9569441bb/',
    color: '#0a66c2',
  },
  {
    key: 'github',
    icon: Github,
    href: 'https://github.com/AbduramanovLenur',
    color: '#6e5494',
  },
  {
    key: 'email',
    icon: Mail,
    href: 'mailto:abdiramanovlenur@gmail.com',
    color: '#ea4335',
  },
];