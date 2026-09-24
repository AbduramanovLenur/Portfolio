import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

import type { SocialLink } from '../model/types';

interface SocialCardProps {
  link: SocialLink;
}

export function SocialCard({ link }: SocialCardProps) {
  const { t } = useTranslation();
  const name = t(`social.links.${link.key}.name`);
  const description = t(`social.links.${link.key}.description`);

  return (
    <motion.a
      href={link.href}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative flex items-center gap-4 p-5 rounded-2xl bg-slate-900/40 border border-slate-800/50 hover:border-slate-700 transition-all duration-300 overflow-hidden"
      whileHover={{ scale: 1.02, y: -2 }}
      whileTap={{ scale: 0.98 }}
    >
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: `radial-gradient(circle at 20% 50%, ${link.color}10 0%, transparent 60%)`,
        }}
      />

      <div className="relative z-10 flex items-center gap-4 w-full">
        <div
          className="w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-110"
          style={{ background: `${link.color}15`, color: link.color }}
        >
          <link.icon className="w-5 h-5" />
        </div>

        <div className="flex-1">
          <h3 className="text-white font-semibold group-hover:text-indigo-300 transition-colors">
            {name}
          </h3>
          <p className="text-slate-500 text-sm">{description}</p>
        </div>

        <motion.div
          className="text-slate-600 group-hover:text-indigo-400 transition-colors"
          initial={{ x: 0 }}
          whileHover={{ x: 4 }}
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M7 17L17 7M17 7H7M17 7v10"
            />
          </svg>
        </motion.div>
      </div>
    </motion.a>
  );
}