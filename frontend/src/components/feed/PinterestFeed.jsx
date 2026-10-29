import React from 'react'
import Masonry from 'react-masonry-css'
import { Link } from 'react-router-dom'
import './PinterestFeed.css'

const PinterestFeed = ({ posts }) => {
  // Breakpoint columns for responsive design
  const breakpointColumns = {
    default: 4,    // 4 columns on large screens
    1100: 3,       // 3 columns on medium screens
    700: 2,        // 2 columns on tablets
    500: 1         // 1 column on mobile
  }

  if (!posts || posts.length === 0) {
    return (
      <div className="pinterest-empty">
        <p>No posts to display</p>
      </div>
    )
  }

  return (
    <Masonry
      breakpointCols={breakpointColumns}
      className="pinterest-grid"
      columnClassName="pinterest-column"
    >
      {posts.map((post) => (
        <div key={post.id} className="pinterest-card">
          <Link to={`/post/${post.id}`} className="pinterest-link">
            <div className="pinterest-image-wrapper">
              <img 
                src={post.imageUrl} 
                alt={post.caption || 'Post'} 
                loading="lazy"
                className="pinterest-image"
              />
              {/* Optional: Save button like Pinterest */}
              <button className="pinterest-save-btn">Save</button>
            </div>
            <div className="pinterest-content">
              <div className="pinterest-user">
                <img 
                  src={post.userAvatar || 'https://via.placeholder.com/30'} 
                  alt={post.username}
                  className="pinterest-avatar"
                />
                <span className="pinterest-username">{post.username}</span>
              </div>
              <p className="pinterest-caption">{post.caption}</p>
              <div className="pinterest-stats">
                <span>❤️ {post.likes || 0}</span>
                <span>💬 {post.comments || 0}</span>
              </div>
            </div>
          </Link>
        </div>
      ))}
    </Masonry>
  )
}

export default PinterestFeed