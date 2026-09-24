import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { CheckCircle2, Clock, Send } from 'lucide-react';

import { Button, Input, Label, Textarea } from '@shared/ui';

import { useContactForm } from '../model/useContactForm';

const inputClassName =
  'bg-slate-900/50 border-slate-800 text-white placeholder:text-slate-600 focus:border-indigo-500 focus:ring-indigo-500/20 h-12';

export function ContactForm() {
  const { t } = useTranslation();
  const { isSubmitted, isSubmitting, error, handleSubmit } = useContactForm();

  if (isSubmitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="p-8 md:p-12 rounded-2xl bg-emerald-500/5 border border-emerald-500/20 text-center"
      >
        <div className="w-16 h-16 rounded-full bg-emerald-500/20 flex items-center justify-center mx-auto mb-6">
          <CheckCircle2 className="w-8 h-8 text-emerald-400" />
        </div>
        <h3 className="text-2xl font-semibold text-white mb-3">
          {t('contact.form.success_title')}
        </h3>
        <p className="text-slate-400">{t('contact.form.success_message')}</p>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid sm:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="name" className="text-slate-300">
            {t('contact.form.name')} <span className="text-indigo-400">*</span>
          </Label>
          <Input
            id="name"
            name="name"
            placeholder={t('contact.form.name_placeholder')}
            required
            className={inputClassName}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="contact" className="text-slate-300">
            {t('contact.form.contact')} <span className="text-indigo-400">*</span>
          </Label>
          <Input
            id="contact"
            name="contact"
            placeholder={t('contact.form.contact_placeholder')}
            required
            className={inputClassName}
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="project" className="text-slate-300">
          {t('contact.form.project')}
        </Label>
        <Textarea
          id="project"
          name="project"
          placeholder={t('contact.form.project_placeholder')}
          rows={6}
          className="bg-slate-900/50 border-slate-800 text-white placeholder:text-slate-600 focus:border-indigo-500 focus:ring-indigo-500/20 resize-none"
        />
      </div>

      {error && (
        <p className="text-red-400 text-sm" role="alert">
          {error}
        </p>
      )}

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
                transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
              />
              {t('contact.form.submitting')}
            </>
          ) : (
            <>
              <Send className="w-4 h-4 mr-2" />
              {t('contact.form.submit')}
            </>
          )}
        </Button>

        <div className="flex items-center gap-2 text-slate-500 text-sm">
          <Clock className="w-4 h-4" />
          {t('contact.form.response_time')}
        </div>
      </div>
    </form>
  );
}