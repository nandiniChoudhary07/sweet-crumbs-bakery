import { useCallback, useEffect, useRef, useState } from 'react';
import { galleryImages } from '../data/content.js';
import { imagePath } from '../utils/helpers.js';
import Reveal from './Reveal.jsx';
import SectionHeading from './SectionHeading.jsx';
import { ArrowLeftIcon, ArrowRightIcon, CloseIcon } from './Icons.jsx';
import './Gallery.css';

export default function Gallery() {
  // Index of the photo open in the large viewer, or null when it is closed.
  const [openIndex, setOpenIndex] = useState(null);
  const closeButtonRef = useRef(null);
  const lastTriggerRef = useRef(null);

  const isOpen = openIndex !== null;
  const total = galleryImages.length;

  const openViewer = (index, event) => {
    lastTriggerRef.current = event.currentTarget;
    setOpenIndex(index);
  };

  const closeViewer = useCallback(() => {
    setOpenIndex(null);
    // Put keyboard focus back on the photo that was clicked.
    lastTriggerRef.current?.focus();
  }, []);

  const showNext = useCallback(() => setOpenIndex((index) => (index + 1) % total), [total]);
  const showPrevious = useCallback(
    () => setOpenIndex((index) => (index - 1 + total) % total),
    [total]
  );

  // While the viewer is open: keyboard controls, and stop the page behind from scrolling.
  useEffect(() => {
    if (!isOpen) return undefined;

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') closeViewer();
      if (event.key === 'ArrowRight') showNext();
      if (event.key === 'ArrowLeft') showPrevious();
    };

    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';
    closeButtonRef.current?.focus();

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [isOpen, closeViewer, showNext, showPrevious]);

  const openImage = isOpen ? galleryImages[openIndex] : null;

  return (
    <section className="section" aria-labelledby="gallery-title">
      <div className="container">
        <SectionHeading
          id="gallery-title"
          as="h1"
          eyebrow="Gallery"
          title={
            <>
              A peek inside <em>our bakery</em>
            </>
          }
          description="From the first tray of croissants to the last cake of the day. Tap any photo to see it larger."
        />

        <ul className="gallery">
          {galleryImages.map((item, index) => (
            <Reveal
              as="li"
              key={item.image}
              className={`gallery__item ${item.size ? `gallery__item--${item.size}` : ''}`}
              delay={(index % 4) * 80}
            >
              <button
                type="button"
                className="gallery__button"
                onClick={(event) => openViewer(index, event)}
                aria-label={`View larger photo: ${item.caption}`}
              >
                <img src={imagePath(item.image)} alt={item.alt} loading="lazy" decoding="async" />
                <span className="gallery__caption" aria-hidden="true">
                  {item.caption}
                </span>
              </button>
            </Reveal>
          ))}
        </ul>
      </div>

      {/* Large photo viewer */}
      {isOpen && (
        <div
          className="lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={`Photo ${openIndex + 1} of ${total}: ${openImage.caption}`}
          onClick={closeViewer}
        >
          <button
            ref={closeButtonRef}
            type="button"
            className="lightbox__button lightbox__close"
            onClick={closeViewer}
            aria-label="Close photo viewer"
          >
            <CloseIcon size={22} />
          </button>

          <button
            type="button"
            className="lightbox__button lightbox__previous"
            onClick={(event) => {
              event.stopPropagation();
              showPrevious();
            }}
            aria-label="Previous photo"
          >
            <ArrowLeftIcon size={22} />
          </button>

          {/* Clicking the photo itself should not close the viewer */}
          <figure className="lightbox__figure" onClick={(event) => event.stopPropagation()}>
            <img key={openImage.image} src={imagePath(openImage.image)} alt={openImage.alt} />
            <figcaption>
              {openImage.caption}
              <span>
                {openIndex + 1} / {total}
              </span>
            </figcaption>
          </figure>

          <button
            type="button"
            className="lightbox__button lightbox__next"
            onClick={(event) => {
              event.stopPropagation();
              showNext();
            }}
            aria-label="Next photo"
          >
            <ArrowRightIcon size={22} />
          </button>
        </div>
      )}
    </section>
  );
}
