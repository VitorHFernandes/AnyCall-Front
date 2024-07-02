import { format, toZonedTime } from 'date-fns-tz';

export const getBrasiliaTime = (): string => {
  const timeZone = 'America/Sao_Paulo';
  const now = new Date();
  const zonedTime = toZonedTime(now, timeZone);

  return format(zonedTime, 'HH:mm', { timeZone });
};
