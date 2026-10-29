import React from 'react'
import './ImageDisplay.css'

const ImageDisplay = ({ imageUrl, alt }) => {
  return (
    <div className="image-display">
      <img src={imageUrl || 'https://via.placeholder.com/600x400'} alt={alt || 'Post image'} />
    </div>
  )
}

export default ImageDisplay