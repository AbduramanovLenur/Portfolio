export interface NavLink {
  key: string;
  href: string;
}

export const navLinks: NavLink[] = [
  { key: 'about', href: '#about' },
  { key: 'technologies', href: '#technologies' },
  { key: 'portfolio', href: '#portfolio' },
  { key: 'contact', href: '#contact' },
];