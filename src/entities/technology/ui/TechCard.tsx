import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

import type { Technology } from '../model/types';

interface TechCardProps {
  tech: Technology;
}

export function TechCard({ tech }: TechCardProps) {
  const { t } = useTranslation();
  const name = t(`technologies.stack.${tech.key}.name`);
  const description = t(`technologies.stack.${tech.key}.description`);

  return (
    <motion.div
      className="group relative p-6 md:p-8 rounded-2xl bg-slate-900/40 border border-slate-800/50 hover:border-slate-700 transition-all duration-300 overflow-hidden h-full"
      whileHover={{ y: -4, scale: 1.01 }}
      transition={{ duration: 0.3 }}
    >
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: `radial-gradient(circle at 50% 0%, ${tech.color}15 0%, transparent 60%)`,
        }}
      />

      <div className="relative z-10">
        <div
          className="w-14 h-14 rounded-xl flex items-center justify-center text-xl font-bold font-mono mb-5 transition-transform duration-300 group-hover:scale-110"
          style={{
            background: `${tech.color}15`,
            color: tech.color,
            boxShadow: `0 0 20px ${tech.color}10`,
          }}
        >
          {tech.icon}
        </div>

        <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-indigo-300 transition-colors">
          {name}
        </h3>
        <p className="text-slate-400 text-sm leading-relaxed">{description}</p>
      </div>

      <div
        className="absolute top-0 right-0 w-20 h-20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: `radial-gradient(circle at 100% 0%, ${tech.color}10 0%, transparent 70%)`,
        }}
      />
    </motion.div>
  );
}