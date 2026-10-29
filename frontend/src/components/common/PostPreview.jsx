import React from 'react'
import { Link } from 'react-router-dom'
import './PostPreview.css'

const PostPreview = ({ post }) => {
  if (!post) return null

  return (
    <article className="post-preview">
      <Link to={`/post/${post.id}`} className="post-link">
        <div className="post-preview-image">
          <img src={post.imageUrl || 'https://via.placeholder.com/600x400'} alt={post.caption || 'Post'} />
        </div>
        <div className="post-preview-content">
          <div className="post-preview-header">
            <img 
              src={post.userAvatar || 'https://via.placeholder.com/40'} 
              alt={post.username} 
              className="post-preview-avatar"
            />
            <div className="post-preview-user-info">
              <span className="post-preview-username">{post.username}</span>
              <span className="post-preview-timestamp">{post.timestamp}</span>
            </div>
          </div>
          <p className="post-preview-caption">{post.caption}</p>
          <div className="post-preview-stats">
            <span>❤️ {post.likes || 0}</span>
            <span>💬 {post.comments || 0}</span>
          </div>
        </div>
      </Link>
    </article>
  )
}

export default PostPreview