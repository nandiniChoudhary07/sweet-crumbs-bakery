import { offers } from '../data/content.js';
import { imagePath, whatsappMessages } from '../utils/helpers.js';
import Reveal from './Reveal.jsx';
import SectionHeading from './SectionHeading.jsx';
import WhatsAppButton from './WhatsAppButton.jsx';
import './Offers.css';

// Special offers and seasonal products. Edit them in src/data/content.js.
export default function Offers() {
  return (
    <section className="section offers" aria-labelledby="offers-title">
      <div className="container">
        <SectionHeading
          id="offers-title"
          eyebrow="This season"
          title={
            <>
              Special offers &amp; <em>seasonal bakes</em>
            </>
          }
          description="Limited-time treats and festive favourites. Available while the season lasts."
        />

        <div className="offers__grid">
          {offers.map((offer, index) => (
            <Reveal as="article" key={offer.id} className="offer-card" delay={index * 110}>
              <div className="offer-card__media">
                <img
                  src={imagePath(offer.image)}
                  alt={offer.alt}
                  width="800"
                  height="600"
                  loading="lazy"
                  decoding="async"
                />
                <span className="badge badge--pink offer-card__label">{offer.label}</span>
              </div>

              <div className="offer-card__body">
                <h3 className="offer-card__title">{offer.title}</h3>
                <p className="offer-card__description">{offer.description}</p>

                <p className="offer-card__price">
                  {offer.priceText}
                  {offer.oldPriceText && (
                    <>
                      {' '}
                      <span className="visually-hidden">Usual price </span>
                      <s>{offer.oldPriceText}</s>
                    </>
                  )}
                </p>
                <p className="offer-card__note">{offer.note}</p>

                <WhatsAppButton
                  message={whatsappMessages.offer(offer.whatsappText)}
                  variant="light"
                  size="sm"
                >
                  Ask on WhatsApp
                </WhatsAppButton>
              </div>
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  );
}
