import React, { useState } from 'react'
import Header from '../components/common/Header'
import Feed from '../components/feed/Feed'
import './HomePage.css'

const HomePage = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [refreshFeed, setRefreshFeed] = useState(false)

  const handleSearch = (term) => {
    setSearchTerm(term)
    console.log('Searching for:', term)
  }

  const handlePostCreated = () => {
    setRefreshFeed(prev => !prev)
  }

  return (
    <div className="home-page">
      <Header onSearch={handleSearch} />
      <div className="home-content">
        {/* Welcome Section */}
        <div className="welcome-section">
          <h1>Welcome back!</h1>
          <p>Discover amazing space photos from our community</p>
        </div>

        {/* Pinterest-style Feed */}
        <div className="feed-container">
          <Feed searchTerm={searchTerm} refreshTrigger={refreshFeed} />
        </div>
      </div>
    </div>
  )
}

export default HomePage