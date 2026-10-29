import React, { useState, useEffect } from 'react'
import PostPreview from '../common/PostPreview'
import './UserPosts.css'

const UserPosts = ({ userId, refreshTrigger }) => {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    const dummyPosts = [
      {
        id: '1',
        username: 'astronaut_john',
        userAvatar: 'https://via.placeholder.com/30',
        imageUrl: 'https://via.placeholder.com/300x200/1a1a4e/6c63ff?text=My+Photo+1',
        caption: 'My first space photo! ',
        likes: 42,
        comments: 5,
        timestamp: '2 days ago'
      },
      {
        id: '2',
        username: 'astronaut_john',
        userAvatar: 'https://via.placeholder.com/30',
        imageUrl: 'https://via.placeholder.com/300x200/1a1a4e/00d4ff?text=My+Photo+2',
        caption: 'Another amazing shot ',
        likes: 28,
        comments: 3,
        timestamp: '5 days ago'
      }
    ]
    setPosts(dummyPosts)
  }, [userId, refreshTrigger])

  return (
    <div className="user-posts">
      {posts.length > 0 ? (
        posts.map(post => <PostPreview key={post.id} post={post} />)
      ) : (
        <p className="no-posts">No posts yet</p>
      )}
    </div>
  )
}

export default UserPosts