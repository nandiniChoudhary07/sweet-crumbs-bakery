import { siteConfig } from '../data/siteConfig.js';
import { formatTime, imagePath, isOpenNow } from '../utils/helpers.js';
import Reveal from './Reveal.jsx';
import SectionHeading from './SectionHeading.jsx';
import WhatsAppButton from './WhatsAppButton.jsx';
import { ArrowRightIcon, ClockIcon, MailIcon, MapPinIcon, PhoneIcon } from './Icons.jsx';
import './Contact.css';

export default function Contact() {
  const { address, hours } = siteConfig;
  const openNow = isOpenNow(hours);

  return (
    <section className="section" aria-labelledby="contact-title">
      <div className="container">
        <SectionHeading
          id="contact-title"
          as="h1"
          eyebrow="Visit us"
          title={
            <>
              Come in, the oven is <em>always warm</em>
            </>
          }
          description="Drop by for a coffee and something sweet, or message us to place an order for pickup or delivery."
        />

        <div className="contact">
          <Reveal className="contact__details">
            <ul className="contact__list">
              <li>
                <span className="contact__icon">
                  <MapPinIcon size={22} />
                </span>
                <div>
                  <h3>Address</h3>
                  <address>
                    {siteConfig.name}
                    <br />
                    {address.line1}
                    <br />
                    {address.line2}
                  </address>
                  <a
                    href={address.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-link contact__link"
                  >
                    Open in Google Maps
                    <span className="visually-hidden"> (opens in a new tab)</span>
                    <ArrowRightIcon size={16} />
                  </a>
                </div>
              </li>

              <li>
                <span className="contact__icon">
                  <ClockIcon size={22} />
                </span>
                <div>
                  <h3>
                    Opening hours
                    <span className={`badge ${openNow ? 'badge--green' : 'badge--pink'}`}>
                      {openNow ? 'Open now' : 'Closed now'}
                    </span>
                  </h3>
                  <dl className="contact__hours">
                    {hours.map((entry) => (
                      <div key={entry.label}>
                        <dt>{entry.label}</dt>
                        <dd>
                          {formatTime(entry.open)} – {formatTime(entry.close)}
                        </dd>
                      </div>
                    ))}
                  </dl>
                </div>
              </li>

              <li>
                <span className="contact__icon">
                  <PhoneIcon size={22} />
                </span>
                <div>
                  <h3>Phone</h3>
                  <p>
                    <a href={`tel:${siteConfig.phoneHref}`} className="contact__plain-link">
                      {siteConfig.phoneDisplay}
                    </a>
                  </p>
                </div>
              </li>

              <li>
                <span className="contact__icon">
                  <MailIcon size={22} />
                </span>
                <div>
                  <h3>Email</h3>
                  <p>
                    <a href={`mailto:${siteConfig.email}`} className="contact__plain-link">
                      {siteConfig.email}
                    </a>
                  </p>
                </div>
              </li>
            </ul>

            <div className="contact__buttons">
              <WhatsAppButton />
              <a href={`tel:${siteConfig.phoneHref}`} className="btn btn--outline">
                <PhoneIcon size={18} />
                Call the Bakery
              </a>
            </div>
          </Reveal>

          {/* Photo card that links to Google Maps */}
          <Reveal className="contact__map" delay={120}>
            <img
              src={imagePath('shop-display.webp')}
              alt="Glass display case filled with pastries and breads inside the bakery"
              width="1200"
              height="800"
              loading="lazy"
              decoding="async"
            />
            <div className="contact__map-card">
              <span className="contact__map-pin">
                <MapPinIcon size={24} />
              </span>
              <div>
                <p className="contact__map-title">Find your way to us</p>
                <p>
                  {address.line1}, {address.line2}
                </p>
              </div>
              <a
                href={address.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn--primary btn--sm"
              >
                Get Directions
                <span className="visually-hidden"> on Google Maps (opens in a new tab)</span>
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
