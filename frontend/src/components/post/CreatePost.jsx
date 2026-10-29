import React, { useState } from 'react'
import './CreatePost.css'

const CreatePost = ({ onPostCreated }) => {
  const [formData, setFormData] = useState({
    caption: '',
    imageUrl: ''
  })
  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)

  const validateForm = () => {
    const newErrors = {}
    if (!formData.caption.trim()) {
      newErrors.caption = 'Caption is required'
    } else if (formData.caption.length < 3) {
      newErrors.caption = 'Caption must be at least 3 characters'
    }
    if (!formData.imageUrl.trim()) {
      newErrors.imageUrl = 'Image URL is required'
    } else if (!formData.imageUrl.startsWith('http')) {
      newErrors.imageUrl = 'Please enter a valid URL'
    }
    return newErrors
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }))
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const validationErrors = validateForm()
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      return
    }
    setIsSubmitting(true)
    setTimeout(() => {
      console.log('New post:', formData)
      alert('Post created! (Stubbed)')
      setFormData({ caption: '', imageUrl: '' })
      setIsSubmitting(false)
      if (onPostCreated) onPostCreated()
    }, 1000)
  }

  return (
    <div className="create-post">
      <h4>Create Post</h4>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="imageUrl">Image URL</label>
          <input
            type="text"
            id="imageUrl"
            name="imageUrl"
            value={formData.imageUrl}
            onChange={handleChange}
            className={errors.imageUrl ? 'error' : ''}
            placeholder="https://example.com/image.jpg"
          />
          {errors.imageUrl && <span className="error-message">{errors.imageUrl}</span>}
        </div>
        <div className="form-group">
          <label htmlFor="caption">Caption</label>
          <textarea
            id="caption"
            name="caption"
            value={formData.caption}
            onChange={handleChange}
            className={errors.caption ? 'error' : ''}
            rows="2"
            placeholder="What's on your mind?"
          />
          {errors.caption && <span className="error-message">{errors.caption}</span>}
        </div>
        <button type="submit" className="create-post-btn" disabled={isSubmitting}>
          {isSubmitting ? 'Creating...' : 'Post'}
        </button>
      </form>
    </div>
  )
}

export default CreatePost