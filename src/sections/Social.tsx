import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Send, Linkedin, Github, Mail } from "lucide-react";
import {
  ScrollReveal,
  StaggerContainer,
  StaggerItem,
} from "@/components/effects/ScrollReveal";
import { GradientText } from "@/components/effects/GradientText";

interface SocialLink {
  key: string;
  icon: React.ElementType;
  href: string;
  color: string;
}

const socialLinks: SocialLink[] = [
  {
    key: "telegram",
    icon: Send,
    href: "https://t.me/developer_and_seo",
    color: "#0088cc",
  },
  {
    key: "linkedin",
    icon: Linkedin,
    href: "https://www.linkedin.com/in/lenur-abduramanov-9569441bb/",
    color: "#0a66c2",
  },
  {
    key: "github",
    icon: Github,
    href: "https://github.com/AbduramanovLenur",
    color: "#6e5494",
  },
  {
    key: "email",
    icon: Mail,
    href: "mailto:abdiramanovlenur@gmail.com",
    color: "#ea4335",
  },
];

function SocialButton({ link }: { link: SocialLink }) {
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
      {/* Glow effect */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: `radial-gradient(circle at 20% 50%, ${link.color}10 0%, transparent 60%)`,
        }}
      />

      <div className="relative z-10 flex items-center gap-4 w-full">
        {/* Icon */}
        <div
          className="w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-110"
          style={{
            background: `${link.color}15`,
            color: link.color,
          }}
        >
          <link.icon className="w-5 h-5" />
        </div>

        {/* Text */}
        <div className="flex-1">
          <h3 className="text-white font-semibold group-hover:text-indigo-300 transition-colors">
            {name}
          </h3>
          <p className="text-slate-500 text-sm">{description}</p>
        </div>

        {/* Arrow */}
        <motion.div
          className="text-slate-600 group-hover:text-indigo-400 transition-colors"
          initial={{ x: 0 }}
          whileHover={{ x: 4 }}
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
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

export function Social() {
  const { t } = useTranslation();

  return (
    <section id="social" className="relative lg:py-24 md:py-20 sm:py-16 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              {t("social.title").split("вместе")[0]}
              <GradientText>
                {t("social.title").includes("вместе")
                  ? "вместе"
                  : t("social.title").includes("together")
                    ? "together"
                    : t("social.title").includes("birga")
                      ? "birga"
                      : ""}
              </GradientText>
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <p className="text-slate-400 text-lg">{t("social.subtitle")}</p>
          </ScrollReveal>
        </div>

        {/* Social links */}
        <StaggerContainer
          className="grid sm:grid-cols-2 gap-4"
          staggerDelay={0.1}
        >
          {socialLinks.map((link) => (
            <StaggerItem key={link.key}>
              <SocialButton link={link} />
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Availability badge */}
        <ScrollReveal delay={0.5} className="mt-12 text-center">
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-emerald-500/10 border border-emerald-500/20">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
            </span>
            <span className="text-emerald-400 font-medium">
              {t("social.available")}
            </span>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
