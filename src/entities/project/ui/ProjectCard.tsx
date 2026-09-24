import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { ArrowRight, TrendingUp } from 'lucide-react';

import { Badge } from '@shared/ui';

import type { Project } from '../model/types';

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const { t } = useTranslation();
  const projectKey = `portfolio.projects.${project.id}`;

  const title = t(`${projectKey}.title`);
  const type = t(`${projectKey}.type`);
  const description = t(`${projectKey}.description`);
  const result = t(`${projectKey}.result`);

  return (
    <motion.div
      className="group relative flex flex-col h-full rounded-2xl bg-slate-900/40 border border-slate-800/50 overflow-hidden"
      whileHover={{ y: -8 }}
      transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
    >
      <div className={`relative h-48 overflow-hidden bg-gradient-to-br ${project.gradient}`}>
        <div className="absolute inset-0 flex items-center justify-center">
          <img
            src={`/images/${project.image || `${project.id}.webp`}`}
            alt={title}
            className="w-full h-full object-cover object-top"
            loading="lazy"
            width={384}
            height={192}
          />
        </div>

        <div className="absolute inset-0 bg-indigo-500/0 group-hover:bg-indigo-500/10 transition-colors duration-300" />

        <div className="absolute top-4 left-4">
          <Badge variant="secondary" className="bg-slate-900/80 text-slate-300 border-0 backdrop-blur-sm">
            {type}
          </Badge>
        </div>
      </div>

      <div className="flex-1 p-6 flex flex-col">
        <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-indigo-300 transition-colors">
          {title}
        </h3>

        <p className="text-slate-400 text-sm leading-relaxed mb-4 flex-1">
          {description}
        </p>

        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech) => (
            <span key={tech} className="text-xs px-2 py-1 rounded-md bg-slate-800 text-slate-400">
              {tech}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-2 p-3 rounded-lg bg-emerald-500/10 border border-emerald-500/20 mb-4">
          <TrendingUp className="w-4 h-4 text-emerald-400 flex-shrink-0" />
          <span className="text-sm text-emerald-400 font-medium">{result}</span>
        </div>

        {project.link && (
          <div className="flex items-center gap-4">
            <a
              href={project.link}
              className="flex items-center gap-2 text-indigo-400 text-sm font-medium group/link hover:underline"
              target="_blank"
              rel="noreferrer"
            >
              {t('portfolio.view_details')}
              <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
            </a>
          </div>
        )}
      </div>

      <div
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        style={{ boxShadow: 'inset 0 0 0 1px rgba(99, 102, 241, 0.3)' }}
      />
    </motion.div>
  );
}