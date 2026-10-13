import { useRef, useState } from 'react';
import { occasions } from '../data/content.js';
import { imagePath } from '../utils/helpers.js';
import EnquiryForm from './EnquiryForm.jsx';
import Reveal from './Reveal.jsx';
import SectionHeading from './SectionHeading.jsx';
import { ArrowRightIcon } from './Icons.jsx';
import './CustomCakes.css';

const steps = [
  { title: 'Tell us your idea', text: 'Share the occasion, date, size and any inspiration.' },
  { title: 'We design it together', text: 'We suggest flavours and a design, then confirm a quote.' },
  { title: 'Collect or get it delivered', text: 'Your cake is baked fresh for the day you need it.' },
];

export default function CustomCakes() {
  // The chosen occasion is kept here so that clicking an occasion card
  // can pre-select it in the enquiry form below.
  const [occasion, setOccasion] = useState('');
  const formAreaRef = useRef(null);

  // Pick the occasion in the form and bring the form into view.
  const chooseOccasion = (occasionId) => {
    setOccasion(occasionId);
    formAreaRef.current?.scrollIntoView({ block: 'start' });
  };

  return (
    <section className="section" aria-labelledby="custom-cakes-title">
      <div className="container">
        <SectionHeading
          id="custom-cakes-title"
          as="h1"
          eyebrow="Made to order"
          title={
            <>
              Custom cakes for <em>your celebration</em>
            </>
          }
          description="From first birthdays to wedding centrepieces, every custom cake is designed around your story, your flavours and your guest list."
        />

        {/* Occasion cards */}
        <ul className="occasions">
          {occasions.map((item, index) => (
            <Reveal as="li" key={item.id} delay={index * 90}>
              <button
                type="button"
                className={`occasion-card ${occasion === item.id ? 'occasion-card--selected' : ''}`}
                aria-pressed={occasion === item.id}
                onClick={() => chooseOccasion(item.id)}
              >
                <img
                  src={imagePath(item.image)}
                  alt={item.alt}
                  width="800"
                  height="600"
                  loading="lazy"
                  decoding="async"
                />
                <span className="occasion-card__overlay">
                  <span className="occasion-card__title">{item.title}</span>
                  <span className="occasion-card__text">{item.description}</span>
                  <span className="occasion-card__link">
                    Enquire now <ArrowRightIcon size={16} />
                  </span>
                </span>
              </button>
            </Reveal>
          ))}
        </ul>

        {/* How it works + enquiry form */}
        <div ref={formAreaRef} className="enquiry">
          <Reveal className="enquiry__intro">
            <p className="eyebrow">How it works</p>
            <h3 className="enquiry__title">Three simple steps to your dream cake</h3>

            <ol className="enquiry__steps">
              {steps.map((step, index) => (
                <li key={step.title}>
                  <span className="enquiry__step-number" aria-hidden="true">
                    {index + 1}
                  </span>
                  <div>
                    <h4>{step.title}</h4>
                    <p>{step.text}</p>
                  </div>
                </li>
              ))}
            </ol>

            <p className="enquiry__hint">
              Custom cakes start at ₹1,200 per kg. Please give us at least 48
              hours’ notice, and 2 weeks for wedding cakes.
            </p>
          </Reveal>

          <Reveal className="enquiry__form" delay={120}>
            <EnquiryForm occasion={occasion} onOccasionChange={setOccasion} />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
