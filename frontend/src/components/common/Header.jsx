import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './Header.css'

const Header = ({ onSearch }) => {
  const navigate = useNavigate()
  const isLoggedIn = true
  const [searchValue, setSearchValue] = useState('')

  const handleLogout = () => {
    navigate('/')
  }

  const handleSearch = (e) => {
    e.preventDefault()
    if (onSearch) {
      onSearch(searchValue)
    }
    // Navigate to home with search term
    navigate('/home')
  }

  return (
    <nav className="header">
      <div className="header-content">
        {/* Logo */}
        <Link to="/home" className="logo">
          <span className="logo-text">Alba Reality.</span>
        </Link>

        {/* Search Bar*/}
        <form className="header-search" onSubmit={handleSearch}>
          <input
            type="text"
            className="header-search-input"
            placeholder="Search for usernames and images..."
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
          />
          <button type="submit" className="header-search-btn"></button>
        </form>

        {/* Navigation Links */}
        <ul className="nav-links">
          <li><Link to="/home">Home</Link></li>
          <li><Link to="/profile/1">Profile</Link></li>
          {isLoggedIn && (
            <li>
              <button className="logout-btn" onClick={handleLogout}>Logout</button>
            </li>
          )}
        </ul>
      </div>
    </nav>
  )
}

export default Header