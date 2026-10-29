import React, { useState, useEffect } from 'react'
import ProfilePreview from '../common/ProfilePreview'
import './FriendList.css'

const FriendList = ({ userId }) => {
  const [friends, setFriends] = useState([])

  useEffect(() => {
    const dummyFriends = [
      { id: '2', username: 'space_explorer', displayName: 'Space Explorer', profilePicture: 'https://via.placeholder.com/50' },
      { id: '3', username: 'nebula_hunter', displayName: 'Nebula Hunter', profilePicture: 'https://via.placeholder.com/50' },
      { id: '4', username: 'galaxy_queen', displayName: 'Galaxy Queen', profilePicture: 'https://via.placeholder.com/50' }
    ]
    setFriends(dummyFriends)
  }, [userId])

  return (
    <div className="friend-list">
      <h3>Friends</h3>
      <div className="friend-list-items">
        {friends.map(friend => (
          <ProfilePreview key={friend.id} user={friend} />
        ))}
      </div>
    </div>
  )
}

export default FriendList