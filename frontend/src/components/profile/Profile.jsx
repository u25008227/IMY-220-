import React from 'react'
import './Profile.css'

const Profile = ({ userData, onEdit }) => {
  return (
    <div className="profile-card">
      <div className="profile-cover">
        <img 
          src={userData.profilePicture || 'https://via.placeholder.com/150'} 
          alt={userData.username} 
          className="profile-avatar"
        />
      </div>
      <div className="profile-info">
        <h2 className="profile-display-name">{userData.displayName}</h2>
        <p className="profile-username">@{userData.username}</p>
        <p className="profile-bio">{userData.bio}</p>
        <div className="profile-stats">
          <span><strong>{userData.followers}</strong> Followers</span>
          <span><strong>{userData.following}</strong> Following</span>
        </div>
        <button className="profile-edit-btn" onClick={onEdit}>Edit Profile</button>
      </div>
    </div>
  )
}

export default Profile