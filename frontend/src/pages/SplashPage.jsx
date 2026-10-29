import React, { useState } from 'react'
import LoginForm from '../components/auth/LoginForm'
import SignupForm from '../components/auth/SignupForm'
import ImageCarousel from '../components/common/ImageCarousel'
import './SplashPage.css'

import spaceImage1 from '../assets/astronaut.jpeg'
import spaceImage2 from '../assets/planet.jpg'
import spaceImage3 from '../assets/rainbowstars.jpeg'

const carouselImages = [
  { 
    url: spaceImage1, 
    alt: 'Space image 1' 
  },
  { 
    url: spaceImage2, 
    alt: 'Space image 2' 
  },
  { 
    url: spaceImage3, 
    alt: 'Space image 3'
  },
]

const SplashPage = () => {
  const [showLogin, setShowLogin] = useState(true)

  return (
    <div className="splash-page">
      <div className="splash-content">
        {/* Left side - Brand section with carousel */}
        <div className="brand-section">
          <h1 className="brand-title">Alba Reality.</h1>
          <p className="brand-tagline">Where space meets earth.</p>
          
          {/* Image Carousel - Displays your images */}
          <div className="carousel-wrapper">
            <ImageCarousel images={carouselImages} autoPlayInterval={4000} />
          </div>
          
          <div className="space-fact">
            <p> Saturn could float in water because it is mostly made of gas, which is lighter than liquid.</p>
          </div>
        </div>
        
        {/* Right side - Auth section */}
        <div className="auth-section-wrapper">
          {showLogin ? (
            <>
              <LoginForm />
              <p className="auth-switch">
                Don't have an account? <button onClick={() => setShowLogin(false)}>Signup</button>
              </p>
            </>
          ) : (
            <>
              <SignupForm />
              <p className="auth-switch">
                Already have an account? <button onClick={() => setShowLogin(true)}>Login</button>
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  )
}

export default SplashPage