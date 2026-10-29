import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import Header from '../components/common/Header'
import './ProfilePage.css'

const ProfilePage = () => {
  const { userId } = useParams()
  
  // State for edit profile modal
  const [isEditing, setIsEditing] = useState(false)
  const [userData, setUserData] = useState({
    id: userId || '1',
    username: 'astronaut_john',
    displayName: 'John Astronaut',
    bio: 'Exploring the cosmos one photo at a time | Space photographer | ISS enthusiast',
    profilePicture: 'https://i.pravatar.cc/150?img=1',
    followers: 1234,
    following: 567
  })
  
  // State for edit form
  const [editForm, setEditForm] = useState({
    displayName: userData.displayName,
    bio: userData.bio,
    profilePicture: userData.profilePicture
  })

  // User's posts
  const userPosts = [
    {
      id: '1',
      imageUrl: 'https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=300&h=300&fit=crop',
      caption: 'Milky Way from ISS',
      likes: 256,
      comments: 42
    },
    {
      id: '2',
      imageUrl: 'https://images.unsplash.com/photo-1541701494587-cb58502866ab?w=300&h=300&fit=crop',
      caption: 'Saturn rings',
      likes: 189,
      comments: 23
    },
    {
      id: '3',
      imageUrl: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?w=300&h=300&fit=crop',
      caption: 'Orion Nebula',
      likes: 312,
      comments: 56
    },
    {
      id: '4',
      imageUrl: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=300&h=300&fit=crop',
      caption: 'Earth from space',
      likes: 478,
      comments: 89
    },
    {
      id: '5',
      imageUrl: 'https://images.unsplash.com/photo-1516924962500-7b4b2b3a6f7c?w=300&h=300&fit=crop',
      caption: 'Moon surface',
      likes: 234,
      comments: 45
    },
    {
      id: '6',
      imageUrl: 'https://images.unsplash.com/photo-1506703719100-a0f3a48a0b3b?w=300&h=300&fit=crop',
      caption: 'Starry night',
      likes: 567,
      comments: 102
    }
  ]

  // Other profiles to look at (suggested users)
  const suggestedUsers = [
    {
      id: '2',
      username: 'space_explorer',
      displayName: 'Space Explorer',
      profilePicture: 'https://i.pravatar.cc/80?img=2',
      bio: 'Exploring the universe'
    },
    {
      id: '3',
      username: 'nebula_hunter',
      displayName: 'Nebula Hunter',
      profilePicture: 'https://i.pravatar.cc/80?img=3',
      bio: 'Chasing nebulas'
    },
    {
      id: '4',
      username: 'galaxy_queen',
      displayName: 'Galaxy Queen',
      profilePicture: 'https://i.pravatar.cc/80?img=4',
      bio: 'Galaxy photography'
    }
  ]

  // Edit Profile Functions
  const handleEditClick = () => {
    setEditForm({
      displayName: userData.displayName,
      bio: userData.bio,
      profilePicture: userData.profilePicture
    })
    setIsEditing(true)
  }

  const handleEditChange = (e) => {
    const { name, value } = e.target
    setEditForm(prev => ({ ...prev, [name]: value }))
  }

  const handleEditSave = () => {
    if (!editForm.displayName.trim()) {
      alert('Display name is required')
      return
    }
    
    setUserData(prev => ({
      ...prev,
      displayName: editForm.displayName,
      bio: editForm.bio,
      profilePicture: editForm.profilePicture
    }))
    
    setIsEditing(false)
    alert('Profile updated successfully! (Stubbed)')
  }

  const handleEditCancel = () => {
    setIsEditing(false)
  }

  // Create Post Function (stubbed)
  const handleCreatePost = () => {
    alert('Create Post feature coming soon! (Stubbed)')
  }

  return (
    <div className="profile-page">
      <Header />
      
      <div className="profile-content">
        <div className="profile-layout">
          {/* Left Column - User Profile */}
          <div className="profile-main">
            {/* Profile Info */}
            <div className="profile-info-section">
              <div className="profile-header">
                <img 
                  src={userData.profilePicture} 
                  alt={userData.username} 
                  className="profile-avatar-large"
                />
                <div className="profile-name-section">
                  <h1 className="profile-username">{userData.username}</h1>
                  <p className="profile-display-name">{userData.displayName}</p>
                </div>
              </div>

              {/* Followers / Follows */}
              <div className="profile-stats">
                <div className="stat-item">
                  <span className="stat-number">{userData.followers.toLocaleString()}</span>
                  <span className="stat-label">Followers</span>
                </div>
                <div className="stat-divider"></div>
                <div className="stat-item">
                  <span className="stat-number">{userData.following.toLocaleString()}</span>
                  <span className="stat-label">Follows</span>
                </div>
              </div>

              {/* Action Buttons - Side by side */}
              <div className="profile-action-buttons">
                <button 
                  className="edit-profile-btn"
                  onClick={handleEditClick}
                >
                   Edit Profile
                </button>
                <button 
                  className="create-post-btn"
                  onClick={handleCreatePost}
                >
                   New Post
                </button>
              </div>

              {/* Profile general info */}
              <div className="profile-bio-section">
                <h3>Profile general info</h3>
                <p className="profile-bio">{userData.bio}</p>
              </div>

              {/* Posts made by the user */}
              <div className="profile-posts-section">
                <h3>Posts made by the user</h3>
                <div className="profile-posts-grid">
                  {userPosts.map((post) => (
                    <div key={post.id} className="profile-post-card">
                      <img src={post.imageUrl} alt={post.caption} className="profile-post-image" />
                      <div className="profile-post-overlay">
                        <span>❤️ {post.likes}</span>
                        <span>💬 {post.comments}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Other profiles to look at */}
          <div className="profile-sidebar">
            <div className="suggested-users">
              <h3>Other profiles to look at</h3>
              <div className="suggested-users-list">
                {suggestedUsers.map((user) => (
                  <div key={user.id} className="suggested-user-card">
                    <img 
                      src={user.profilePicture} 
                      alt={user.username} 
                      className="suggested-user-avatar"
                    />
                    <div className="suggested-user-info">
                      <span className="suggested-user-username">{user.username}</span>
                      <span className="suggested-user-name">{user.displayName}</span>
                      <span className="suggested-user-bio">{user.bio}</span>
                    </div>
                    <button className="suggested-follow-btn">Follow</button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Edit Profile Modal */}
      {isEditing && (
        <div className="edit-profile-modal">
          <div className="edit-profile-content">
            <div className="edit-profile-header">
              <h3>Edit Profile</h3>
              <button className="close-btn" onClick={handleEditCancel}>✕</button>
            </div>
            <form onSubmit={(e) => { e.preventDefault(); handleEditSave(); }}>
              <div className="form-group">
                <label htmlFor="displayName">Display Name *</label>
                <input
                  type="text"
                  id="displayName"
                  name="displayName"
                  value={editForm.displayName}
                  onChange={handleEditChange}
                  placeholder="Enter display name"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="bio">Bio</label>
                <textarea
                  id="bio"
                  name="bio"
                  value={editForm.bio}
                  onChange={handleEditChange}
                  rows="3"
                  placeholder="Tell us about yourself..."
                />
              </div>
              <div className="form-group">
                <label htmlFor="profilePicture">Profile Picture URL</label>
                <input
                  type="text"
                  id="profilePicture"
                  name="profilePicture"
                  value={editForm.profilePicture}
                  onChange={handleEditChange}
                  placeholder="https://example.com/avatar.jpg"
                />
              </div>
              <div className="edit-profile-actions">
                <button type="button" className="cancel-btn" onClick={handleEditCancel}>Cancel</button>
                <button type="submit" className="save-btn">Save Changes</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}

export default ProfilePage