import { motion, type Variants } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Code2, Zap, Users, FileCode, Rocket } from "lucide-react";
import { Button } from "@/components/ui/button";
import { GradientText } from "@/components/effects/GradientText";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.4, 0, 0.2, 1] as const,
    },
  },
};

export function Hero() {
  const { t } = useTranslation();

  const benefits = [
    { icon: Zap, label: t("hero.benefits.performance") },
    { icon: Users, label: t("hero.benefits.ux") },
    { icon: FileCode, label: t("hero.benefits.clean_code") },
    { icon: Rocket, label: t("hero.benefits.modern_stack") },
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative flex items-center justify-center overflow-hidden lg:py-14 md:py-11 py-8">
      {/* Code decorations */}
      <motion.div
        className="absolute top-32 left-8 md:left-16 text-xs md:text-sm font-mono text-indigo-500/20 hidden lg:block"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1, duration: 0.8 }}
      >
        <pre className="leading-relaxed">
          {`const developer = {
  name: 'Lenur',
  role: 'Frontend',
  stack: ['Vue', 'React'],
  passion: 'Clean UI'
};`}
        </pre>
      </motion.div>

      <motion.div
        className="absolute bottom-32 right-8 md:right-16 text-xs md:text-sm font-mono text-purple-500/20 hidden lg:block"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.2, duration: 0.8 }}
      >
        <pre className="leading-relaxed text-right">
          {`// Building digital
// experiences that
// matter

return <Success />;`}
        </pre>
      </motion.div>

      {/* Main content */}
      <motion.div
        className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Name badge */}
        <motion.div variants={itemVariants} className="mb-6">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-sm font-medium">
            <Code2 className="w-4 h-4" />
            {t("hero.name")}
          </span>
        </motion.div>

        {/* Main heading */}
        <motion.h1
          variants={itemVariants}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6"
        >
          <GradientText as="span" className="font-display">
            Frontend
          </GradientText>
          <br />
          <span className="text-white">Developer</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          variants={itemVariants}
          className="text-lg sm:text-xl md:text-2xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          {t("hero.subtitle")}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
        >
          <Button
            size="lg"
            className="bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-500 hover:opacity-90 text-white font-semibold px-8 py-6 text-base rounded-xl shadow-glow hover:shadow-glow-lg transition-all duration-300 hover:scale-[1.02]"
            onClick={() => scrollToSection("contact")}
          >
            {t("hero.cta_primary")}
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-slate-700 hover:border-indigo-500/50 hover:bg-indigo-500/5 text-slate-300 hover:text-white font-semibold px-8 py-6 text-base rounded-xl transition-all duration-300"
            onClick={() => scrollToSection("portfolio")}
          >
            {t("hero.cta_secondary")}
          </Button>
        </motion.div>

        {/* Benefits */}
        <motion.div
          variants={itemVariants}
          className="flex flex-wrap justify-center gap-6 md:gap-10"
        >
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.label}
              className="flex items-center gap-2 text-slate-500"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 + index * 0.1, duration: 0.5 }}
            >
              <benefit.icon className="w-4 h-4 text-indigo-400" />
              <span className="text-sm font-medium">{benefit.label}</span>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
