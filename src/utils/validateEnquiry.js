import { dateFromToday } from './helpers.js';

// Custom cakes need at least this many days of notice.
export const MIN_NOTICE_DAYS = 2;
export const MAX_MESSAGE_LENGTH = 500;

// Checks one field and returns an error message, or '' when the value is fine.
export function validateField(name, value) {
  const text = String(value).trim();

  switch (name) {
    case 'name':
      if (!text) return 'Please enter your name.';
      if (text.length < 2) return 'Your name looks too short.';
      return '';

    case 'phone': {
      if (!text) return 'Please enter your phone number.';
      // Keep digits only, then drop a leading 91 or 0 if one was typed.
      let digits = text.replace(/\D/g, '');
      if (digits.length === 12 && digits.startsWith('91')) digits = digits.slice(2);
      if (digits.length === 11 && digits.startsWith('0')) digits = digits.slice(1);
      if (!/^[6-9]\d{9}$/.test(digits)) {
        return 'Enter a valid 10-digit mobile number.';
      }
      return '';
    }

    case 'email':
      // Email is optional, so only check it when something was typed.
      if (text && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(text)) {
        return 'Enter a valid email address, or leave this blank.';
      }
      return '';

    case 'occasion':
      return text ? '' : 'Please choose an occasion.';

    case 'date':
      if (!text) return 'Please choose the date you need the cake.';
      if (text < dateFromToday(MIN_NOTICE_DAYS)) {
        return `We need at least ${MIN_NOTICE_DAYS} days to make a custom cake.`;
      }
      return '';

    case 'size':
      return text ? '' : 'Please choose a cake size.';

    case 'message':
      if (text.length > MAX_MESSAGE_LENGTH) {
        return `Please keep your message under ${MAX_MESSAGE_LENGTH} characters.`;
      }
      return '';

    default:
      return '';
  }
}

// Field names in the order they appear in the form.
const fieldOrder = ['name', 'phone', 'email', 'occasion', 'date', 'size', 'flavour', 'message'];

// Checks every field. Returns an object like { name: 'Please enter your name.' }
// that only contains the fields with a problem.
export function validateEnquiry(values) {
  const errors = {};
  fieldOrder.forEach((name) => {
    const message = validateField(name, values[name] ?? '');
    if (message) errors[name] = message;
  });
  return errors;
}
