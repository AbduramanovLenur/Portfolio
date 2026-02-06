import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { TrendingUp, ArrowRight } from "lucide-react";
import {
  ScrollReveal,
  StaggerContainer,
  StaggerItem,
} from "@/components/effects/ScrollReveal";
import { GradientText } from "@/components/effects/GradientText";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface Project {
  id: string;
  gradient: string;
  technologies: string[];
}

const projects: Project[] = [
  {
    id: "ecommerce",
    gradient: "from-indigo-500/20 to-purple-500/20",
    technologies: ["Vue 3", "Nuxt", "Pinia", "Tailwind"],
  },
  {
    id: "crm",
    gradient: "from-purple-500/20 to-pink-500/20",
    technologies: ["Vue 3", "Nuxt", "Pinia", "Tailwind"],
  },
  {
    id: "corporate",
    gradient: "from-cyan-500/20 to-blue-500/20",
    technologies: ["Vue 3", "Nuxt", "Pinia", "Tailwind"],
  },
  {
    id: "saas",
    gradient: "from-emerald-500/20 to-teal-500/20",
    technologies: ["Vue 3", "Nuxt", "Pinia", "Tailwind"],
  },
  {
    id: "pwa",
    gradient: "from-orange-500/20 to-red-500/20",
    technologies: ["Vue 3", "Nuxt", "Pinia", "Tailwind"],
  },
  {
    id: "analytics",
    gradient: "from-violet-500/20 to-indigo-500/20",
    technologies: ["Vue 3", "Nuxt", "Pinia", "Tailwind"],
  },
];

function ProjectCard({ project }: { project: Project }) {
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
      {/* Image area */}
      <div
        className={`relative h-48 overflow-hidden bg-gradient-to-br ${project.gradient}`}
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-6xl font-bold font-display text-white/10">
            {title.charAt(0)}
          </div>
        </div>

        {/* Overlay on hover */}
        <div className="absolute inset-0 bg-indigo-500/0 group-hover:bg-indigo-500/10 transition-colors duration-300" />

        {/* Type badge */}
        <div className="absolute top-4 left-4">
          <Badge
            variant="secondary"
            className="bg-slate-900/80 text-slate-300 border-0 backdrop-blur-sm"
          >
            {type}
          </Badge>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 p-6 flex flex-col">
        <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-indigo-300 transition-colors">
          {title}
        </h3>

        <p className="text-slate-400 text-sm leading-relaxed mb-4 flex-1">
          {description}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="text-xs px-2 py-1 rounded-md bg-slate-800 text-slate-400"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Result */}
        <div className="flex items-center gap-2 p-3 rounded-lg bg-emerald-500/10 border border-emerald-500/20 mb-4">
          <TrendingUp className="w-4 h-4 text-emerald-400 flex-shrink-0" />
          <span className="text-sm text-emerald-400 font-medium">{result}</span>
        </div>

        {/* Links */}
        <div className="flex items-center gap-4">
          <a
            href={`/project/${project.id}`}
            className="flex items-center gap-2 text-indigo-400 text-sm font-medium group/link hover:underline"
          >
            {t("portfolio.view_details")}
            <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
          </a>
        </div>
      </div>

      {/* Border glow on hover */}
      <div
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        style={{
          boxShadow: "inset 0 0 0 1px rgba(99, 102, 241, 0.3)",
        }}
      />
    </motion.div>
  );
}

export function Portfolio() {
  const { t } = useTranslation();

  return (
    <section
      id="portfolio"
      className="relative lg:py-24 md:py-20 sm:py-16 px-4"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <ScrollReveal>
            <span className="text-indigo-400 text-sm font-semibold tracking-wider uppercase mb-4 block">
              {t("portfolio.label")}
            </span>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              {t("portfolio.title").split("проекты")[0]}
              <GradientText>
                {t("portfolio.title").includes("проекты")
                  ? "проекты"
                  : t("portfolio.title").includes("Projects")
                    ? "Projects"
                    : t("portfolio.title").includes("loyihalar")
                      ? "loyihalar"
                      : ""}
              </GradientText>
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              {t("portfolio.subtitle")}
            </p>
          </ScrollReveal>
        </div>

        {/* Projects grid */}
        <StaggerContainer
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          staggerDelay={0.1}
        >
          {projects.map((project) => (
            <StaggerItem key={project.id}>
              <ProjectCard project={project} />
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* CTA */}
        <ScrollReveal delay={0.6} className="mt-16 text-center">
          <p className="text-slate-400 mb-6">{t("portfolio.cta")}</p>
          <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
            <Button
              variant="outline"
              className="border-slate-700 hover:border-indigo-500/50 hover:bg-indigo-500/5 text-slate-300 hover:text-white font-medium px-8 py-6"
              onClick={() => {
                const element = document.getElementById("contact");
                if (element) {
                  element.scrollIntoView({ behavior: "smooth" });
                }
              }}
            >
              {t("portfolio.cta_button")}
            </Button>
          </motion.div>
        </ScrollReveal>
      </div>
    </section>
  );
}
