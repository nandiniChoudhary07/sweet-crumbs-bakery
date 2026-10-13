import { Link } from 'react-router-dom';
import { siteConfig } from '../data/siteConfig.js';
import { imagePath } from '../utils/helpers.js';
import Reveal from './Reveal.jsx';
import { ArrowRightIcon } from './Icons.jsx';
import './About.css';

const values = [
  {
    title: 'Small batches',
    text: 'We bake through the day in small batches, so what you take home is always fresh.',
  },
  {
    title: 'Honest ingredients',
    text: 'Real butter, couverture chocolate and seasonal fruit. No premixes or preservatives.',
  },
  {
    title: 'Made by hand',
    text: 'Every croissant is folded and every cake is finished by hand in our own kitchen.',
  },
];

export default function About() {
  return (
    <section className="section section--pink about" aria-labelledby="about-title">
      <div className="container about__inner">
        <Reveal className="about__photos">
          <img
            className="about__photo about__photo--main"
            src={imagePath('baker-with-loaf.webp')}
            alt="A baker in a blue apron holding a freshly baked round loaf in a cloth"
            width="1200"
            height="800"
            loading="lazy"
            decoding="async"
          />
          <img
            className="about__photo about__photo--small"
            src={imagePath('baker-kneading.webp')}
            alt="Hands kneading dough on a floured wooden table"
            width="1200"
            height="800"
            loading="lazy"
            decoding="async"
          />
          <p className="about__since">
            <span>Since</span>
            <strong>{siteConfig.foundedYear}</strong>
          </p>
        </Reveal>

        <Reveal className="about__content" delay={120}>
          <p className="eyebrow">Our story</p>
          <h1 id="about-title" className="section-heading__title">
            A neighbourhood bakery with <em>a lot of heart</em>
          </h1>

          <div className="about__story">
            <p>
              {siteConfig.shortName} began in {siteConfig.foundedYear} in a tiny home kitchen,
              with one oven, a handwritten recipe book and weekend orders from friends and
              neighbours.
            </p>
            <p>
              Today we are a small team of bakers who still start before sunrise. We mix, fold and
              frost everything ourselves, and we would rather sell out for the day than serve
              something that is not at its best.
            </p>
          </div>

          <ul className="about__values">
            {values.map((value) => (
              <li key={value.title}>
                <h3>{value.title}</h3>
                <p>{value.text}</p>
              </li>
            ))}
          </ul>

          <Link to="/contact" className="text-link">
            Come and say hello
            <ArrowRightIcon size={18} />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
