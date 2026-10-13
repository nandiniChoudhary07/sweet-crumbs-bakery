import Reveal from './Reveal.jsx';

// The small label + big title + intro text used at the top of every section.
// Styles are in global.css (.section-heading).
// Pass as="h1" when the heading is the main title of a page.
export default function SectionHeading({
  eyebrow,
  title,
  description,
  id,
  align = 'center',
  as: Heading = 'h2',
}) {
  return (
    <Reveal className={`section-heading section-heading--${align}`}>
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <Heading id={id} className="section-heading__title">
        {title}
      </Heading>
      {description && <p className="section-heading__text">{description}</p>}
    </Reveal>
  );
}
