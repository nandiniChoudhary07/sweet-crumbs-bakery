import { testimonials } from '../data/content.js';
import Reveal from './Reveal.jsx';
import SectionHeading from './SectionHeading.jsx';
import { StarIcon } from './Icons.jsx';
import './Testimonials.css';

// IMPORTANT: the testimonials in src/data/content.js are placeholder text.
// Replace them with real customer reviews (with permission) before the
// website is used by a real bakery.
export default function Testimonials() {
  return (
    <section className="section section--tint" aria-labelledby="testimonials-title">
      <div className="container">
        <SectionHeading
          id="testimonials-title"
          eyebrow="Kind words"
          title={
            <>
              What our customers <em>say</em>
            </>
          }
          description="A few kind words from the people we bake for."
        />

        <ul className="testimonials">
          {testimonials.map((item, index) => (
            <Reveal as="li" key={item.id} delay={index * 110}>
              <figure className="testimonial">
                <div className="testimonial__stars" role="img" aria-label={`${item.rating} out of 5 stars`}>
                  {Array.from({ length: item.rating }, (_, star) => (
                    <StarIcon key={star} size={18} />
                  ))}
                </div>

                <blockquote className="testimonial__quote">“{item.quote}”</blockquote>

                <figcaption className="testimonial__author">
                  <span className="testimonial__avatar" aria-hidden="true">
                    {item.name.charAt(0)}
                  </span>
                  <span>
                    <strong>{item.name}</strong>
                    <span className="testimonial__detail">{item.detail}</span>
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
