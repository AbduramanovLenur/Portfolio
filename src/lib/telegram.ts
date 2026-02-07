const TELEGRAM_BOT_TOKEN = import.meta.env.VITE_TELEGRAM_BOT_TOKEN;
const TELEGRAM_CHAT_ID = import.meta.env.VITE_TELEGRAM_CHAT_ID;

export async function sendToTelegram(
  name: string,
  contact: string,
  project: string,
) {
  const message = `
📩 *Новая заявка с сайта*:
*Имя:* ${name}
*Контакт:* ${contact}
*Проект:* ${project || "-"}
  `;

  const url = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`;

  const res = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      chat_id: TELEGRAM_CHAT_ID,
      text: message,
      parse_mode: "Markdown",
    }),
  });

  if (!res.ok) {
    throw new Error("Ошибка при отправке в Telegram");
  }

  return res.json();
}
