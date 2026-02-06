import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import {
  ScrollReveal,
  StaggerContainer,
  StaggerItem,
} from "@/components/effects/ScrollReveal";

interface Tech {
  key: string;
  icon: string;
  color: string;
}

const technologies: Tech[] = [
  { key: "vue", icon: "V", color: "#42b883" },
  { key: "react", icon: "R", color: "#61dafb" },
  { key: "wordpress", icon: "W", color: "#21759b" },
  { key: "tilda", icon: "T", color: "#ffa500" },
  { key: "webflow", icon: "Wf", color: "#4353ff" },
  { key: "typescript", icon: "TS", color: "#3178c6" },
];

function TechCard({ tech }: { tech: Tech }) {
  const { t } = useTranslation();
  const name = t(`technologies.stack.${tech.key}.name`);
  const description = t(`technologies.stack.${tech.key}.description`);

  return (
    <motion.div
      className="group relative p-6 md:p-8 rounded-2xl bg-slate-900/40 border border-slate-800/50 hover:border-slate-700 transition-all duration-300 overflow-hidden"
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

export function Technologies() {
  const { t } = useTranslation();

  return (
    <section
      id="technologies"
      className="relative lg:py-24 md:py-20 sm:py-16 px-4"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <ScrollReveal>
            <span className="text-indigo-400 text-sm font-semibold tracking-wider uppercase mb-4 block">
              {t("technologies.label")}
            </span>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              {t("technologies.title")}
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              {t("technologies.subtitle")}
            </p>
          </ScrollReveal>
        </div>

        <StaggerContainer
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
          staggerDelay={0.1}
        >
          {technologies.map((tech) => (
            <StaggerItem key={tech.key}>
              <TechCard tech={tech} />
            </StaggerItem>
          ))}
        </StaggerContainer>

        <ScrollReveal delay={0.6} className="mt-16">
          <div className="p-8 rounded-2xl bg-gradient-to-r from-indigo-500/5 via-purple-500/5 to-cyan-500/5 border border-indigo-500/10">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  {t("technologies.more_tech")}
                </h3>
                <p className="text-slate-400">
                  {t("technologies.more_tech_desc")}
                </p>
              </div>
              <div className="flex items-center gap-3 text-indigo-400 font-medium">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                {t("technologies.ready")}
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
