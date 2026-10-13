import { siteConfig } from '../data/siteConfig.js';

// Builds the URL for a photo stored in /public/images.
export function imagePath(fileName) {
  return `${import.meta.env.BASE_URL}images/${fileName}`;
}

// 1249 -> "₹1,249"
export function formatPrice(amount) {
  return `₹${amount.toLocaleString('en-IN')}`;
}

// Builds a WhatsApp "click to chat" link that opens with a pre-filled message.
// The number comes from siteConfig.whatsappNumber.
export function buildWhatsAppLink(message) {
  return `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

// Ready-made WhatsApp messages used around the site.
export const whatsappMessages = {
  general: `Hello ${siteConfig.name}! I would like to place an order.`,
  product: (productName) =>
    `Hello ${siteConfig.name}! I would like to order: ${productName}. Is it available today?`,
  offer: (offerText) =>
    `Hello ${siteConfig.name}! I would like to know more about ${offerText}.`,
};

// Returns a date as "YYYY-MM-DD" (the format used by <input type="date">),
// a given number of days from today.
export function dateFromToday(daysAhead) {
  const date = new Date();
  date.setDate(date.getDate() + daysAhead);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

// "2026-11-08" -> "8 November 2026"
export function formatDate(isoDate) {
  const [year, month, day] = isoDate.split('-').map(Number);
  return new Date(year, month - 1, day).toLocaleDateString('en-IN', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
}

// "08:00" -> "8:00 AM"
export function formatTime(time) {
  const [hours, minutes] = time.split(':').map(Number);
  const suffix = hours >= 12 ? 'PM' : 'AM';
  const hour12 = hours % 12 === 0 ? 12 : hours % 12;
  return `${hour12}:${String(minutes).padStart(2, '0')} ${suffix}`;
}

// Checks the opening hours in siteConfig against the visitor's current time.
export function isOpenNow(hours, now = new Date()) {
  const today = hours.find((entry) => entry.days.includes(now.getDay()));
  if (!today) return false;
  const currentTime = `${String(now.getHours()).padStart(2, '0')}:${String(
    now.getMinutes()
  ).padStart(2, '0')}`;
  return currentTime >= today.open && currentTime < today.close;
}
