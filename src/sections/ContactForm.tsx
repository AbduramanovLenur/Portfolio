import { useState } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Send, MapPin, Mail, Clock, CheckCircle2 } from "lucide-react";
import { ScrollReveal } from "@/components/effects/ScrollReveal";
import { GradientText } from "@/components/effects/GradientText";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

export function ContactForm() {
  const { t } = useTranslation();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  const includesItems = t("contact.includes.items", {
    returnObjects: true,
  }) as string[];

  return (
    <section id="contact" className="relative lg:py-24 md:py-20 sm:py-16 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <ScrollReveal>
            <span className="text-indigo-400 text-sm font-semibold tracking-wider uppercase mb-4 block">
              {t("contact.label")}
            </span>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              {t("contact.title").split("проект")[0]}
              <GradientText>
                {t("contact.title").includes("проект")
                  ? "проект"
                  : t("contact.title").includes("project")
                    ? "project"
                    : t("contact.title").includes("loyihangizni")
                      ? "loyihangizni"
                      : ""}
              </GradientText>
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              {t("contact.subtitle")}
            </p>
          </ScrollReveal>
        </div>

        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
          {/* Form */}
          <ScrollReveal delay={0.3} className="lg:col-span-3">
            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="p-8 md:p-12 rounded-2xl bg-emerald-500/5 border border-emerald-500/20 text-center"
              >
                <div className="w-16 h-16 rounded-full bg-emerald-500/20 flex items-center justify-center mx-auto mb-6">
                  <CheckCircle2 className="w-8 h-8 text-emerald-400" />
                </div>
                <h3 className="text-2xl font-semibold text-white mb-3">
                  {t("contact.form.success_title")}
                </h3>
                <p className="text-slate-400">
                  {t("contact.form.success_message")}
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-slate-300">
                      {t("contact.form.name")}{" "}
                      <span className="text-indigo-400">*</span>
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      placeholder={t("contact.form.name_placeholder")}
                      required
                      className="bg-slate-900/50 border-slate-800 text-white placeholder:text-slate-600 focus:border-indigo-500 focus:ring-indigo-500/20 h-12"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="contact" className="text-slate-300">
                      {t("contact.form.contact")}{" "}
                      <span className="text-indigo-400">*</span>
                    </Label>
                    <Input
                      id="contact"
                      name="contact"
                      placeholder={t("contact.form.contact_placeholder")}
                      required
                      className="bg-slate-900/50 border-slate-800 text-white placeholder:text-slate-600 focus:border-indigo-500 focus:ring-indigo-500/20 h-12"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="project" className="text-slate-300">
                    {t("contact.form.project")}
                  </Label>
                  <Textarea
                    id="project"
                    name="project"
                    placeholder={t("contact.form.project_placeholder")}
                    rows={6}
                    className="bg-slate-900/50 border-slate-800 text-white placeholder:text-slate-600 focus:border-indigo-500 focus:ring-indigo-500/20 resize-none"
                  />
                </div>

                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-500 hover:opacity-90 text-white font-semibold px-8 py-6 text-base rounded-xl shadow-glow hover:shadow-glow-lg transition-all duration-300 hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <motion.div
                          className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full mr-2"
                          animate={{ rotate: 360 }}
                          transition={{
                            duration: 1,
                            repeat: Infinity,
                            ease: "linear",
                          }}
                        />
                        {t("contact.form.submitting")}
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4 mr-2" />
                        {t("contact.form.submit")}
                      </>
                    )}
                  </Button>

                  <div className="flex items-center gap-2 text-slate-500 text-sm">
                    <Clock className="w-4 h-4" />
                    {t("contact.form.response_time")}
                  </div>
                </div>
              </form>
            )}
          </ScrollReveal>

          {/* Info sidebar */}
          <ScrollReveal delay={0.4} className="lg:col-span-2">
            <div className="space-y-8">
              <div className="p-6 rounded-2xl bg-slate-900/40 border border-slate-800/50">
                <h3 className="text-lg font-semibold text-white mb-6">
                  {t("contact.info.title")}
                </h3>

                <div className="space-y-5">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-indigo-500/10 flex items-center justify-center flex-shrink-0">
                      <Mail className="w-4 h-4 text-indigo-400" />
                    </div>
                    <div>
                      <div className="text-slate-500 text-sm mb-1">
                        {t("contact.info.email")}
                      </div>
                      <a
                        href="mailto:abdiramanovlenur@gmail.com"
                        className="text-white hover:text-indigo-400 transition-colors"
                      >
                        abdiramanovlenur@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-purple-500/10 flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-4 h-4 text-purple-400" />
                    </div>
                    <div>
                      <div className="text-slate-500 text-sm mb-1">
                        {t("contact.info.location")}
                      </div>
                      <div className="text-white">
                        {t("contact.info.location_value")}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-cyan-500/10 flex items-center justify-center flex-shrink-0">
                      <Clock className="w-4 h-4 text-cyan-400" />
                    </div>
                    <div>
                      <div className="text-slate-500 text-sm mb-1">
                        {t("contact.info.timezone")}
                      </div>
                      <div className="text-white">
                        {t("contact.info.timezone_value")}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-gradient-to-br from-indigo-500/5 to-purple-500/5 border border-indigo-500/10">
                <h4 className="text-white font-semibold mb-3">
                  {t("contact.includes.title")}
                </h4>
                <ul className="space-y-3">
                  {includesItems.map((item: string, index: number) => (
                    <li
                      key={index}
                      className="flex items-center gap-3 text-slate-400 text-sm"
                    >
                      <CheckCircle2 className="w-4 h-4 text-indigo-400 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
