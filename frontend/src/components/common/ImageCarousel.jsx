import React, { useState, useEffect } from 'react'
import './ImageCarousel.css'

const ImageCarousel = ({ images, autoPlayInterval = 5000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)

  // Auto-play functionality
  useEffect(() => {
    // Only set up auto-play if there are images
    if (images.length === 0) return

    const interval = setInterval(() => {
      nextSlide()
    }, autoPlayInterval)

    // Cleanup interval on component unmount or when dependencies change
    return () => clearInterval(interval)
  }, [currentIndex, images.length, autoPlayInterval])

  // Go to next slide
  const nextSlide = () => {
    if (isTransitioning || images.length === 0) return
    setIsTransitioning(true)
    setCurrentIndex((prevIndex) => 
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    )
    setTimeout(() => setIsTransitioning(false), 500)
  }

  // Go to previous slide
  const prevSlide = () => {
    if (isTransitioning || images.length === 0) return
    setIsTransitioning(true)
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    )
    setTimeout(() => setIsTransitioning(false), 500)
  }

  // Go to specific slide
  const goToSlide = (index) => {
    if (isTransitioning || index === currentIndex || images.length === 0) return
    setIsTransitioning(true)
    setCurrentIndex(index)
    setTimeout(() => setIsTransitioning(false), 500)
  }

  // If no images, show placeholder
  if (images.length === 0) {
    return (
      <div className="carousel-container">
        <div className="carousel-placeholder">
          <p>No images to display</p>
        </div>
      </div>
    )
  }

  return (
    <div className="carousel-container">
      <div className="carousel-wrapper">
        {/* Slides */}
        <div 
          className="carousel-slides"
          style={{ 
            transform: `translateX(-${currentIndex * 100}%)`,
            transition: isTransitioning ? 'transform 0.5s ease-in-out' : 'none'
          }}
        >
          {images.map((image, index) => (
            <div key={index} className="carousel-slide">
              <img 
                src={image.url} 
                alt={image.alt || `Slide ${index + 1}`} 
                loading="lazy"
              />
              {image.caption && (
                <div className="carousel-caption">
                  <p>{image.caption}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        {images.length > 1 && (
          <>
            <button 
              className="carousel-arrow carousel-arrow-left" 
              onClick={prevSlide}
              aria-label="Previous slide"
            >
              ❮
            </button>
            <button 
              className="carousel-arrow carousel-arrow-right" 
              onClick={nextSlide}
              aria-label="Next slide"
            >
              ❯
            </button>
          </>
        )}

        {/* Dots Indicator */}
        {images.length > 1 && (
          <div className="carousel-dots">
            {images.map((_, index) => (
              <button
                key={index}
                className={`carousel-dot ${index === currentIndex ? 'active' : ''}`}
                onClick={() => goToSlide(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default ImageCarousel