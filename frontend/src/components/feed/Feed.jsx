import React, { useState, useEffect } from 'react'
import PinterestFeed from './PinterestFeed'
import './Feed.css'

const Feed = ({ searchTerm, refreshTrigger }) => {
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const dummyPosts = [
      {
        id: '1',
        username: 'astronaut_john',
        userAvatar: 'https://i.pravatar.cc/40?img=1',
        imageUrl: 'https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=400&h=600&fit=crop',
        caption: 'Beautiful view of the Milky Way from the ISS ',
        likes: 256,
        comments: 42,
        timestamp: '2 hours ago'
      },
      {
        id: '2',
        username: 'space_explorer',
        userAvatar: 'https://i.pravatar.cc/40?img=2',
        imageUrl: 'https://images.unsplash.com/photo-1541701494587-cb58502866ab?w=400&h=300&fit=crop',
        caption: "Saturn's rings are made of ice and rock particles!",
        likes: 189,
        comments: 23,
        timestamp: '4 hours ago'
      },
      {
        id: '3',
        username: 'nebula_hunter',
        userAvatar: 'https://i.pravatar.cc/40?img=3',
        imageUrl: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?w=400&h=500&fit=crop',
        caption: 'The Orion Nebula is 1,344 light years away',
        likes: 312,
        comments: 56,
        timestamp: '6 hours ago'
      },
      {
        id: '4',
        username: 'space_station',
        userAvatar: 'https://i.pravatar.cc/40?img=4',
        imageUrl: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=400&fit=crop',
        caption: 'International Space Station passing by',
        likes: 478,
        comments: 89,
        timestamp: '8 hours ago'
      }
    ]
    
    setPosts(dummyPosts)
    setLoading(false)
  }, [refreshTrigger])

  const filteredPosts = posts.filter(post => {
    if (!searchTerm) return true
    const term = searchTerm.toLowerCase()
    return post.username.toLowerCase().includes(term) ||
           post.caption.toLowerCase().includes(term)
  })

  if (loading) {
    return (
      <div className="feed-loading">
        <p>Loading posts...</p>
      </div>
    )
  }

  return (
    <div className="feed">
      <PinterestFeed posts={filteredPosts} />
    </div>
  )
}

export default Feed