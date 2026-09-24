import { endpoints } from './endpoints';
import type { ContactPayload } from '../model/types';

const CHAT_ID = import.meta.env.VITE_TELEGRAM_CHAT_ID;

const buildMessage = ({ name, contact, project }: ContactPayload): string =>
  [
    '📩 *Новая заявка с сайта*:',
    `*Имя:* ${name}`,
    `*Контакт:* ${contact}`,
    `*Проект:* ${project || '-'}`,
  ].join('\n');

export const api = {
  sendMessage: async (payload: ContactPayload): Promise<void> => {
    const response = await fetch(endpoints.telegramMessage(), {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        chat_id: CHAT_ID,
        text: buildMessage(payload),
        parse_mode: 'Markdown',
      }),
    });

    if (!response.ok) {
      throw new Error(`Telegram API error: ${response.status}`);
    }
  },
};