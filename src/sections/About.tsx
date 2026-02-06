import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { MessageCircle, Clock, Headphones, CheckCircle2 } from "lucide-react";
import {
  ScrollReveal,
  StaggerContainer,
  StaggerItem,
} from "@/components/effects/ScrollReveal";
import { GradientText } from "@/components/effects/GradientText";

export function About() {
  const { t } = useTranslation();

  // ❗ Храним КЛЮЧИ, а не переведённый текст
  const advantages = [
    {
      icon: MessageCircle,
      titleKey: "about.advantages.communication.title",
      descriptionKey: "about.advantages.communication.description",
    },
    {
      icon: Clock,
      titleKey: "about.advantages.deadlines.title",
      descriptionKey: "about.advantages.deadlines.description",
    },
    {
      icon: Headphones,
      titleKey: "about.advantages.support.title",
      descriptionKey: "about.advantages.support.description",
    },
  ];

  const stats = [
    { value: "3+", labelKey: "about.stats.experience" },
    { value: "10+", labelKey: "about.stats.projects" },
    { value: "20+", labelKey: "about.stats.clients" },
    { value: "100%", labelKey: "about.stats.satisfaction" },
  ];

  return (
    <section id="about" className="relative lg:py-24 md:py-20 sm:py-16 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="mb-6">
          <span className="text-indigo-400 text-sm font-semibold tracking-wider uppercase mb-4 block">
            {t("about.label")}
          </span>
        </ScrollReveal>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* LEFT */}
          <div>
            <ScrollReveal delay={0.1}>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-8 leading-tight">
                {t("about.title").split("которые работают")[0]}
                <GradientText>
                  {t("about.title").includes("которые работают")
                    ? "которые работают"
                    : t("about.title").includes("that work")
                      ? "that work"
                      : t("about.title").includes("ishlaydigan")
                        ? "ishlaydigan"
                        : ""}
                </GradientText>
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div className="space-y-6 text-slate-400 text-lg leading-relaxed mb-12">
                <p>{t("about.description1")}</p>
                <p>{t("about.description2")}</p>
                <p>{t("about.description3")}</p>
              </div>
            </ScrollReveal>

            {/* STATS */}
            <StaggerContainer
              className="grid grid-cols-2 sm:grid-cols-4 gap-6"
              staggerDelay={0.1}
            >
              {stats.map((stat) => (
                <StaggerItem key={stat.labelKey}>
                  <div className="text-center p-4 rounded-xl bg-slate-900/50 border border-slate-800">
                    <div className="text-2xl md:text-3xl font-bold gradient-text mb-1">
                      {stat.value}
                    </div>
                    <div className="text-xs text-slate-500">
                      {t(stat.labelKey)}
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>

          {/* RIGHT */}
          <div className="lg:pl-8">
            <ScrollReveal delay={0.3}>
              <h3 className="text-xl font-semibold text-white mb-8">
                {t("about.advantages_title")}
              </h3>
            </ScrollReveal>

            <StaggerContainer className="space-y-6" staggerDelay={0.15}>
              {advantages.map((advantage) => (
                <StaggerItem key={advantage.titleKey}>
                  <motion.div
                    className="group flex gap-5 p-6 rounded-2xl bg-slate-900/30 border border-slate-800/50 hover:border-indigo-500/30 hover:bg-slate-900/50 transition-all duration-300"
                    whileHover={{ x: 4 }}
                  >
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-500/20 to-purple-500/20 flex items-center justify-center group-hover:from-indigo-500/30 group-hover:to-purple-500/30 transition-all duration-300">
                        <advantage.icon className="w-5 h-5 text-indigo-400" />
                      </div>
                    </div>

                    <div>
                      <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
                        {t(advantage.titleKey)}
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </h4>
                      <p className="text-slate-400 text-sm leading-relaxed">
                        {t(advantage.descriptionKey)}
                      </p>
                    </div>
                  </motion.div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </div>
      </div>
    </section>
  );
}
