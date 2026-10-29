import React, { useState } from 'react'
import './EditProfile.css'

const EditProfile = ({ userData, onClose, onSave }) => {
  const [formData, setFormData] = useState({
    displayName: userData.displayName || '',
    bio: userData.bio || '',
    socialLinks: {
      instagram: userData.socialLinks?.instagram || '',
      twitter: userData.socialLinks?.twitter || ''
    }
  })

  const [errors, setErrors] = useState({})

  const handleChange = (e) => {
    const { name, value } = e.target
    if (name === 'instagram' || name === 'twitter') {
      setFormData(prev => ({
        ...prev,
        socialLinks: { ...prev.socialLinks, [name]: value }
      }))
    } else {
      setFormData(prev => ({ ...prev, [name]: value }))
    }
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }))
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Validation for the display name
    if (!formData.displayName.trim()) {
      setErrors({ displayName: 'Display name is required' })
      return
    }
    onSave(formData)
  }

  return (
    <div className="edit-profile-modal">
      <div className="edit-profile-content">
        <div className="edit-profile-header">
          <h3>Edit Profile</h3>
          <button className="close-btn" onClick={onClose}>✕</button>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="displayName">Display Name *</label>
            <input
              type="text"
              id="displayName"
              name="displayName"
              value={formData.displayName}
              onChange={handleChange}
              className={errors.displayName ? 'error' : ''}
            />
            {errors.displayName && <span className="error-message">{errors.displayName}</span>}
          </div>
          <div className="form-group">
            <label htmlFor="bio">Bio</label>
            <textarea
              id="bio"
              name="bio"
              value={formData.bio}
              onChange={handleChange}
              rows="3"
              placeholder="Tell us about yourself..."
            />
          </div>
          <div className="form-group">
            <label htmlFor="instagram">Instagram</label>
            <input
              type="text"
              id="instagram"
              name="instagram"
              value={formData.socialLinks.instagram}
              onChange={handleChange}
              placeholder="@username"
            />
          </div>
          <div className="form-group">
            <label htmlFor="twitter">Twitter/X</label>
            <input
              type="text"
              id="twitter"
              name="twitter"
              value={formData.socialLinks.twitter}
              onChange={handleChange}
              placeholder="@username"
            />
          </div>
          <div className="edit-profile-actions">
            <button type="button" className="cancel-btn" onClick={onClose}>Cancel</button>
            <button type="submit" className="save-btn">Save Changes</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default EditProfile