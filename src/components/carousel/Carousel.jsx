import { useState, useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';


/**
 * Carousel Component with auto-play, manual controls, and keyboard navigation
 * @param {Array} slides - Array of slide objects with id, image, title, description, alt
 * @param {boolean} autoPlay - Enable/disable auto-play (default: true)
 * @param {number} interval - Auto-play interval in milliseconds (default: 5000)
 */
const Carousel = ({ slides, autoPlay = true, interval = 5000 }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Navigate to next slide
  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  }, [slides.length]);

  // Navigate to previous slide
  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  }, [slides.length]);

  // Go to specific slide
  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  // Toggle pause/play
  const togglePause = () => {
    setIsPaused((prev) => !prev);
  };

  // Auto-play effect
  useEffect(() => {
    if (!autoPlay || isPaused || slides.length <= 1) return;

    const timer = setInterval(nextSlide, interval);

    return () => clearInterval(timer);
  }, [autoPlay, isPaused, slides.length, interval, nextSlide]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowLeft') {
        prevSlide();
      } else if (e.key === 'ArrowRight') {
        nextSlide();
      } else if (e.key === ' ' || e.key === 'Spacebar') {
        e.preventDefault();
        togglePause();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextSlide, prevSlide]);

  if (!slides || slides.length === 0) {
    return <div className="empty">No slides to display</div>;
  }

  return (
    <div
      className="carousel"
      role="region"
      aria-label="Featured restaurants carousel"
      aria-live="polite"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Slides Container */}
      <div className="slidesWrapper">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`slide ${
              index === currentSlide ? 'active' : ''
            }`}
            aria-hidden={index !== currentSlide}
          >
            <img
              src={slide.image}
              alt={slide.alt || slide.title}
              className="image"
            />
            {(slide.title || slide.description) && (
              <div className="caption">
                {slide.title && <h3 className="title">{slide.title}</h3>}
                {slide.description && (
                  <p className="description">{slide.description}</p>
                )}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Previous Button */}
      <button
        className="control prev"
        onClick={prevSlide}
        aria-label="Previous slide"
        type="button"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="15 18 9 12 15 6" />
        </svg>
      </button>

      {/* Next Button */}
      <button
        className="control next"
        onClick={nextSlide}
        aria-label="Next slide"
        type="button"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="9 18 15 12 9 6" />
        </svg>
      </button>

      {/* Pause/Play Button */}
      {autoPlay && (
        <button
          className="pauseButton"
          onClick={togglePause}
          aria-label={isPaused ? 'Play carousel' : 'Pause carousel'}
          type="button"
        >
          {isPaused ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <polygon points="5 3 19 12 5 21 5 3" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <rect x="6" y="4" width="4" height="16" />
              <rect x="14" y="4" width="4" height="16" />
            </svg>
          )}
        </button>
      )}

      {/* Dots Indicator */}
      <div className="dots">
        {slides.map((slide, index) => (
          <button
            key={slide.id}
            className={`dot ${
              index === currentSlide ? 'activeDot' : ''
            }`}
            onClick={() => goToSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
            aria-current={index === currentSlide}
            type="button"
          />
        ))}
      </div>
    </div>
  );
};

Carousel.propTypes = {
  slides: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      title: PropTypes.string,
      description: PropTypes.string,
      alt: PropTypes.string,
    })
  ).isRequired,
  autoPlay: PropTypes.bool,
  interval: PropTypes.number,
};

export default Carousel;