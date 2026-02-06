import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { motion, AnimatePresence } from "framer-motion";
import { Code2, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { Link } from "react-router-dom";

const navLinks = [
  { label: "about", href: "#about" },
  { label: "technologies", href: "#technologies" },
  { label: "portfolio", href: "#portfolio" },
  { label: "contact", href: "#contact" },
];

export function Navigation() {
  const { t } = useTranslation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <motion.header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-slate-950/80 backdrop-blur-xl border-b border-slate-800/50"
            : "bg-transparent"
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <motion.div whileHover={{ scale: 1.02 }}>
              <Link
                to="/"
                className="flex items-center gap-2"
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              >
                <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center">
                  <Code2 className="w-4 h-4 text-white" />
                </div>
                <span className="text-white font-semibold hidden sm:block">
                  Lenur
                </span>
              </Link>
            </motion.div>

            {/* Desktop navigation */}
            <nav className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <Button
                  key={link.href}
                  variant="ghost"
                  className="text-slate-400 hover:text-white hover:bg-white/5"
                  onClick={() => scrollToSection(link.href)}
                >
                  {t(`nav.${link.label}`)}
                </Button>
              ))}
            </nav>

            {/* Right side */}
            <div className="flex items-center gap-3">
              <LanguageSwitcher />

              {/* CTA only desktop */}
              <div className="hidden lg:block">
                <Button
                  className="bg-gradient-to-r from-indigo-500 to-purple-500 hover:opacity-90 text-white font-medium px-6"
                  onClick={() => scrollToSection("#contact")}
                >
                  {t("nav.discuss")}
                </Button>
              </div>

              {/* Burger only mobile */}
              <Button
                variant="ghost"
                size="icon"
                className="lg:hidden text-slate-400 hover:text-white"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                {isMobileMenuOpen ? (
                  <X className="w-5 h-5" />
                ) : (
                  <Menu className="w-5 h-5" />
                )}
              </Button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="fixed inset-0 z-40 lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* Backdrop */}
            <motion.div
              className="absolute inset-0 bg-slate-950/90 backdrop-blur-xl"
              onClick={() => setIsMobileMenuOpen(false)}
            />

            {/* Menu content */}
            <motion.nav
              className="absolute top-16 left-0 right-0 p-4"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.2 }}
            >
              <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-4 space-y-2">
                {navLinks.map((link, index) => (
                  <motion.button
                    key={link.href}
                    className="w-full text-left px-4 py-3 rounded-xl text-slate-300 hover:text-white hover:bg-white/5 transition-colors"
                    onClick={() => scrollToSection(link.href)}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    {t(`nav.${link.label}`)}
                  </motion.button>
                ))}
                <motion.div
                  className="pt-2 border-t border-slate-800"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  <Button
                    className="w-full bg-gradient-to-r from-indigo-500 to-purple-500 hover:opacity-90 text-white font-medium"
                    onClick={() => scrollToSection("#contact")}
                  >
                    {t("nav.discuss")}
                  </Button>
                </motion.div>
              </div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
