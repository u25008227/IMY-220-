import React, { useState } from 'react'
import axios from 'axios'
import './AuthForms.css'

const SignupForm = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    displayName: ''
  })
  const [errors, setErrors] = useState({})
  const [isLoading, setIsLoading] = useState(false)

  const validateForm = () => {
    const newErrors = {}
    if (!formData.username.trim()) {
      newErrors.username = 'Username is required'
    } else if (formData.username.length < 3) {
      newErrors.username = 'Username must be at least 3 characters'
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!formData.email.includes('@')) {
      newErrors.email = 'Email must contain @'
    }
    if (!formData.password) {
      newErrors.password = 'Password is required'
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters'
    }
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match'
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

  const handleSubmit = async (e) => {
    e.preventDefault()
    const validationErrors = validateForm()
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      return
    }
    setIsLoading(true)
    try {
      const { confirmPassword, ...signupData } = formData
      const response = await axios.post('/api/auth/signup', signupData)
      console.log('Signup response:', response.data)
      
      // Store user data
      if (response.data.user) {
        localStorage.setItem('user', JSON.stringify(response.data.user))
      }
      if (response.data.token) {
        localStorage.setItem('token', response.data.token)
      }
      
      // Navigate to home page using window.location
      window.location.href = '/home'
      
    } catch (error) {
      console.error('Signup error:', error)
      alert('Signup failed. Please try again.')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <form className="auth-form" onSubmit={handleSubmit}>
      <h2>Sign Up</h2>
      <div className="form-group">
        <label htmlFor="displayName">Display Name</label>
        <input
          type="text"
          id="displayName"
          name="displayName"
          value={formData.displayName}
          onChange={handleChange}
          placeholder="What should we call you?"
        />
      </div>
      <div className="form-group">
        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          name="username"
          value={formData.username}
          onChange={handleChange}
          className={errors.username ? 'error' : ''}
          placeholder="Choose a unique username"
        />
        {errors.username && <span className="error-message">{errors.username}</span>}
      </div>
      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className={errors.email ? 'error' : ''}
          placeholder="Enter your email"
        />
        {errors.email && <span className="error-message">{errors.email}</span>}
      </div>
      <div className="form-group">
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          className={errors.password ? 'error' : ''}
          placeholder="Create a password (min 6 characters)"
        />
        {errors.password && <span className="error-message">{errors.password}</span>}
      </div>
      <div className="form-group">
        <label htmlFor="confirmPassword">Confirm Password</label>
        <input
          type="password"
          id="confirmPassword"
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleChange}
          className={errors.confirmPassword ? 'error' : ''}
          placeholder="Confirm your password"
        />
        {errors.confirmPassword && <span className="error-message">{errors.confirmPassword}</span>}
      </div>
      <button type="submit" className="auth-btn" disabled={isLoading}>
        {isLoading ? 'Creating account...' : 'Create Account'}
      </button>
    </form>
  )
}

export default SignupForm