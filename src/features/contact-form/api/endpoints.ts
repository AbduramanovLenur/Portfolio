export const endpoints = {
  telegramMessage: () =>
    `https://api.telegram.org/bot${import.meta.env.VITE_TELEGRAM_BOT_TOKEN}/sendMessage`,
} as const;