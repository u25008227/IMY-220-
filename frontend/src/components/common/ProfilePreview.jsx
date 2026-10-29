import React from 'react'
import { Link } from 'react-router-dom'
import './ProfilePreview.css'

const ProfilePreview = ({ user }) => {
  if (!user) return null

  return (
    <div className="profile-preview">
      <Link to={`/profile/${user.id}`} className="profile-preview-link">
        <img 
          src={user.profilePicture || 'https://via.placeholder.com/50'} 
          alt={user.username} 
          className="profile-preview-avatar"
        />
        <div className="profile-preview-info">
          <span className="profile-preview-username">{user.username}</span>
          <span className="profile-preview-name">{user.displayName || user.username}</span>
        </div>
      </Link>
    </div>
  )
}

export default ProfilePreview