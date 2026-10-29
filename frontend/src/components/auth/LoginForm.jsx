import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import './AuthForms.css'

const LoginForm = () => {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  })
  const [errors, setErrors] = useState({})
  const [isLoading, setIsLoading] = useState(false)

  const validateForm = () => {
    const newErrors = {}
    if (!formData.username.trim()) {
      newErrors.username = 'Username is required'
    }
    if (!formData.password) {
      newErrors.password = 'Password is required'
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters'
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
      const response = await axios.post('/api/auth/login', formData)
      console.log('Login response:', response.data)
      
      // Store user data
      if (response.data.user) {
        localStorage.setItem('user', JSON.stringify(response.data.user))
      }
      if (response.data.token) {
        localStorage.setItem('token', response.data.token)
      }
      
      // FIX: Use window.location.href (works because test button works)
      console.log('Redirecting to /home...')
      window.location.href = '/home'
      
    } catch (error) {
      console.error('Login error:', error)
      alert('Login failed. Please try again.')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <form className="auth-form" onSubmit={handleSubmit}>
      <h2>Login</h2>
      
      <div className="form-group">
        <label htmlFor="username">Username/Email</label>
        <input
          type="text"
          id="username"
          name="username"
          value={formData.username}
          onChange={handleChange}
          className={errors.username ? 'error' : ''}
          placeholder="Enter your username or email"
        />
        {errors.username && <span className="error-message">{errors.username}</span>}
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
          placeholder="Enter your password"
        />
        {errors.password && <span className="error-message">{errors.password}</span>}
      </div>

      <button type="submit" className="auth-btn" disabled={isLoading}>
        {isLoading ? 'Logging in...' : 'Login'}
      </button>

      <div className="social-login">
        <button type="button" className="social-btn google">Sign in with Google</button>
        <button type="button" className="social-btn github">Sign in with Github</button>
      </div>
    </form>
  )
}

export default LoginForm