import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Code2, Send, Linkedin, Github, Mail } from "lucide-react";

const socialLinks = [
  { icon: Send, href: "https://t.me/developer_and_seo", label: "Telegram" },
  {
    icon: Linkedin,
    href: "https://www.linkedin.com/in/lenur-abduramanov-9569441bb/",
    label: "LinkedIn",
  },
  {
    icon: Github,
    href: "https://github.com/AbduramanovLenur",
    label: "GitHub",
  },
  { icon: Mail, href: "mailto:abdiramanovlenur@gmail.com", label: "Email" },
];

export function Footer() {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative py-12 border-t border-slate-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo */}
          <motion.div
            className="flex items-center gap-3"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center">
              <Code2 className="w-5 h-5 text-white" />
            </div>
            <div>
              <div className="text-white font-semibold">
                {t("footer.title")}
              </div>
              <div className="text-slate-500 text-sm">
                {t("footer.subtitle")}
              </div>
            </div>
          </motion.div>

          {/* Social links */}
          <motion.div
            className="flex items-center gap-3"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {socialLinks.map((link) => (
              <motion.a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-500 hover:text-indigo-400 hover:border-indigo-500/30 hover:bg-indigo-500/5 transition-all duration-300"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                aria-label={link.label}
              >
                <link.icon className="w-4 h-4" />
              </motion.a>
            ))}
          </motion.div>

          {/* Copyright */}
          <motion.div
            className="text-slate-500 text-sm flex items-center gap-1"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <span>{t("footer.copyright", { year: currentYear })}</span>
          </motion.div>
        </div>

        {/* Back to top */}
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <motion.button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="text-slate-600 hover:text-indigo-400 text-sm font-medium transition-colors"
            whileHover={{ y: -2 }}
          >
            {t("footer.back_to_top")}
          </motion.button>
        </motion.div>
      </div>
    </footer>
  );
}
