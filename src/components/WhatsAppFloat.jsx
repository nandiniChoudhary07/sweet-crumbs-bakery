import { useEffect, useState } from 'react';
import { buildWhatsAppLink, whatsappMessages } from '../utils/helpers.js';
import { WhatsAppIcon } from './Icons.jsx';
import './WhatsAppFloat.css';

// The round WhatsApp button fixed to the bottom-right corner.
// It appears after the visitor scrolls past the top of the page.
export default function WhatsAppFloat() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 500);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <a
      href={buildWhatsAppLink(whatsappMessages.general)}
      target="_blank"
      rel="noopener noreferrer"
      className={`whatsapp-float ${visible ? 'whatsapp-float--visible' : ''}`}
      aria-label="Order on WhatsApp (opens in a new tab)"
      // Keep the hidden button out of the keyboard tab order.
      tabIndex={visible ? undefined : -1}
      aria-hidden={visible ? undefined : 'true'}
    >
      <WhatsAppIcon size={28} />
      <span className="whatsapp-float__label">Order on WhatsApp</span>
    </a>
  );
}
