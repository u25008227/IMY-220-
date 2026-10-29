import React, { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import Header from '../components/common/Header'
import Comments from '../components/post/Comments'
import './PostPage.css'

const PostPage = () => {
  const { postId } = useParams()
  const navigate = useNavigate()
  const [isLiked, setIsLiked] = useState(false)
  const [likeCount, setLikeCount] = useState(256)

  const postData = {
    id: postId || '1',
    username: 'astronaut_john',
    userAvatar: 'https://i.pravatar.cc/60?img=1',
    imageUrl: 'https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=600&h=400&fit=crop',
    caption: 'Beautiful view of the Milky Way from the ISS ',
    likes: 256,
    comments: 42,
    timestamp: '2 hours ago',
    location: 'International Space Station',
    camera: 'Nikon D850',
    description: 'Captured during Expedition 68. The Milky Way galaxy as seen from the International Space Station.'
  }

  const handleLike = () => {
    setIsLiked(!isLiked)
    setLikeCount(isLiked ? likeCount - 1 : likeCount + 1)
  }

  const otherPosts = [
    {
      id: '2',
      imageUrl: 'https://images.unsplash.com/photo-1541701494587-cb58502866ab?w=200&h=200&fit=crop',
      username: 'space_explorer',
      caption: "Saturn's rings captured in stunning detail"
    },
    {
      id: '3',
      imageUrl: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?w=200&h=200&fit=crop',
      username: 'nebula_hunter',
      caption: 'The Orion Nebula - 1,344 light years away'
    },
    {
      id: '4',
      imageUrl: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=200&h=200&fit=crop',
      username: 'space_station',
      caption: 'ISS passing over the Pacific Ocean'
    }
  ]

  return (
    <div className="post-page">
      <Header />
      
      <div className="post-content">
        {}

        <div className="post-layout">
          <div className="post-main">
            <div className="post-uploader">
              <img 
                src={postData.userAvatar} 
                alt={postData.username} 
                className="post-uploader-avatar"
              />
              <span className="post-uploader-name">{postData.username}</span>
              <span className="post-uploader-time">{postData.timestamp}</span>
            </div>

            <div className="post-image-container">
              <img 
                src={postData.imageUrl} 
                alt={postData.caption} 
                className="post-image-main"
              />
            </div>

            <div className="post-actions-bar">
              <button 
                className={`post-action-btn ${isLiked ? 'liked' : ''}`} 
                onClick={handleLike}
              >
                {isLiked ? '❤️' : '🤍'} {likeCount}
              </button>
              <button className="post-action-btn">💬 {postData.comments}</button>
              <button className="post-action-btn">🔗 Share</button>
              <button className="post-action-btn"> Save</button>
            </div>

            <div className="post-info">
              <h3>Information about the image</h3>
              <div className="post-info-content">
                <p><strong> Caption:</strong> {postData.caption}</p>
                <p><strong> Location:</strong> {postData.location}</p>
                <p><strong> Camera:</strong> {postData.camera}</p>
                <p><strong> Description:</strong> {postData.description}</p>
              </div>
            </div>

            <div className="post-comments-section">
              <Comments postId={postId} />
            </div>
          </div>

          <div className="post-sidebar">
            <div className="other-posts">
              <h3>Other posts like this one</h3>
              <div className="other-posts-grid">
                {otherPosts.map((post) => (
                  <div 
                    key={post.id} 
                    className="other-post-card"
                    onClick={() => navigate(`/post/${post.id}`)}
                  >
                    <img 
                      src={post.imageUrl} 
                      alt={post.caption} 
                      className="other-post-image"
                    />
                    <div className="other-post-info">
                      <span className="other-post-username">{post.username}</span>
                      <span className="other-post-caption">{post.caption}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PostPage