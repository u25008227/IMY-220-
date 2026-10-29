import React from 'react'
import './Post.css'

const Post = ({ postData, onEdit, onDelete }) => {
  return (
    <div className="post-detail">
      <div className="post-header">
        <img 
          src={postData.userAvatar || 'https://via.placeholder.com/40'} 
          alt={postData.username} 
          className="post-avatar"
        />
        <div className="post-user-info">
          <span className="post-username">{postData.username}</span>
          <span className="post-timestamp">{postData.timestamp}</span>
        </div>
        <div className="post-actions">
          <button className="post-action-btn edit" onClick={onEdit}></button>
          <button className="post-action-btn delete" onClick={onDelete}></button>
        </div>
      </div>
      <div className="post-body">
        <p className="post-caption">{postData.caption}</p>
        <div className="post-stats-detail">
          <span> {postData.likes} likes</span>
          <span> {postData.comments} comments</span>
        </div>
      </div>
    </div>
  )
}

export default Post