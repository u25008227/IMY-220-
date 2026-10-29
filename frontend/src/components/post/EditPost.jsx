import React, { useState } from 'react'
import './EditPost.css'

const EditPost = ({ postData, onSave, onCancel }) => {
  const [formData, setFormData] = useState({
    caption: postData.caption || ''
  })
  const [errors, setErrors] = useState({})

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }))
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!formData.caption.trim()) {
      setErrors({ caption: 'Caption is required' })
      return
    }
    onSave(formData)
  }

  return (
    <div className="edit-post">
      <h4>Edit Post</h4>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="caption">Caption</label>
          <textarea
            id="caption"
            name="caption"
            value={formData.caption}
            onChange={handleChange}
            className={errors.caption ? 'error' : ''}
            rows="3"
          />
          {errors.caption && <span className="error-message">{errors.caption}</span>}
        </div>
        <div className="edit-post-actions">
          <button type="button" className="cancel-edit-btn" onClick={onCancel}>Cancel</button>
          <button type="submit" className="save-edit-btn">Save Changes</button>
        </div>
      </form>
    </div>
  )
}

export default EditPost