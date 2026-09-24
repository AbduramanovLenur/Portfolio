import { useTranslation } from 'react-i18next';
import { CheckCircle2, Clock, Mail, MapPin } from 'lucide-react';

export function ContactInfo() {
  const { t } = useTranslation();

  const includesItems = t('contact.includes.items', { returnObjects: true }) as string[];

  const items = [
    {
      icon: Mail,
      iconClassName: 'bg-indigo-500/10',
      iconColor: 'text-indigo-400',
      label: t('contact.info.email'),
      value: (
        <a href="mailto:abdiramanovlenur@gmail.com" className="text-white hover:text-indigo-400 transition-colors">
          abdiramanovlenur@gmail.com
        </a>
      ),
    },
    {
      icon: MapPin,
      iconClassName: 'bg-purple-500/10',
      iconColor: 'text-purple-400',
      label: t('contact.info.location'),
      value: <div className="text-white">{t('contact.info.location_value')}</div>,
    },
    {
      icon: Clock,
      iconClassName: 'bg-cyan-500/10',
      iconColor: 'text-cyan-400',
      label: t('contact.info.timezone'),
      value: <div className="text-white">{t('contact.info.timezone_value')}</div>,
    },
  ];

  return (
    <div className="space-y-8">
      <div className="p-6 rounded-2xl bg-slate-900/40 border border-slate-800/50">
        <h3 className="text-lg font-semibold text-white mb-6">{t('contact.info.title')}</h3>

        <div className="space-y-5">
          {items.map((item) => (
            <div key={item.label} className="flex items-start gap-4">
              <div className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 ${item.iconClassName}`}>
                <item.icon className={`w-4 h-4 ${item.iconColor}`} />
              </div>
              <div>
                <div className="text-slate-500 text-sm mb-1">{item.label}</div>
                {item.value}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="p-6 rounded-2xl bg-gradient-to-br from-indigo-500/5 to-purple-500/5 border border-indigo-500/10">
        <h4 className="text-white font-semibold mb-3">{t('contact.includes.title')}</h4>
        <ul className="space-y-3">
          {includesItems.map((item) => (
            <li key={item} className="flex items-center gap-3 text-slate-400 text-sm">
              <CheckCircle2 className="w-4 h-4 text-indigo-400 flex-shrink-0" />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}