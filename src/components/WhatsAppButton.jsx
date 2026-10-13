import { buildWhatsAppLink, whatsappMessages } from '../utils/helpers.js';
import { WhatsAppIcon } from './Icons.jsx';

// A link styled as a button that opens WhatsApp with a pre-filled message.
// The phone number is set once in src/data/siteConfig.js.
export default function WhatsAppButton({
  message = whatsappMessages.general,
  children = 'Order on WhatsApp',
  variant = 'whatsapp', // any .btn--* style from global.css
  size = '', // '' or 'sm'
  className = '',
}) {
  return (
    <a
      href={buildWhatsAppLink(message)}
      target="_blank"
      rel="noopener noreferrer"
      className={`btn btn--${variant} ${size ? `btn--${size}` : ''} ${className}`}
    >
      <WhatsAppIcon size={size === 'sm' ? 17 : 20} />
      <span>{children}</span>
      <span className="visually-hidden"> (opens WhatsApp in a new tab)</span>
    </a>
  );
}
