import { useEffect, useState } from 'react';
import { siteConfig } from '../data/siteConfig.js';
import { CloseIcon } from './Icons.jsx';
import './AnnouncementBar.css';

// The thin bar at the very top. It cycles through the messages in
// siteConfig.announcements and can be closed by the visitor.
export default function AnnouncementBar() {
  const messages = siteConfig.announcements;
  const [index, setIndex] = useState(0);
  const [closed, setClosed] = useState(false);

  useEffect(() => {
    // No need to rotate when there is only one message or the bar is closed.
    if (closed || messages.length < 2) return undefined;

    // Visitors who prefer reduced motion just see the first message.
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return undefined;

    const timer = setInterval(() => {
      setIndex((current) => (current + 1) % messages.length);
    }, 4500);

    return () => clearInterval(timer);
  }, [closed, messages.length]);

  if (closed || messages.length === 0) return null;

  return (
    <aside className="announcement" aria-label="Announcements">
      <div className="container announcement__inner">
        {/* The key makes React re-create the element so the fade animation replays */}
        <p key={index} className="announcement__text">
          <span className="announcement__dot" aria-hidden="true" />
          {messages[index]}
        </p>
        <button
          type="button"
          className="announcement__close"
          onClick={() => setClosed(true)}
          aria-label="Close announcement bar"
        >
          <CloseIcon size={16} />
        </button>
      </div>
    </aside>
  );
}
