import React, { useState, useEffect } from 'react'
import './Comments.css'

const Comments = ({ postId }) => {
  const [comments, setComments] = useState([])
  const [newComment, setNewComment] = useState('')

  useEffect(() => {
    // Dummy comments
    const dummyComments = [
      { id: '1', username: 'space_fan', avatar: 'https://i.pravatar.cc/40?img=11', text: 'Amazing photo! ', timestamp: '1 hour ago' },
      { id: '2', username: 'astronomy_lover', avatar: 'https://i.pravatar.cc/40?img=12', text: 'Stunning! The clarity is incredible.', timestamp: '30 minutes ago' },
      { id: '3', username: 'nebula_watcher', avatar: 'https://i.pravatar.cc/40?img=13', text: 'Beautiful composition!', timestamp: '15 minutes ago' }
    ]
    setComments(dummyComments)
  }, [postId])

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!newComment.trim()) return
    const comment = {
      id: Date.now().toString(),
      username: 'you',
      avatar: 'https://i.pravatar.cc/40?img=14',
      text: newComment,
      timestamp: 'Just now'
    }
    setComments(prev => [...prev, comment])
    setNewComment('')
  }

  return (
    <div className="comments-section">
      <h3>Comments</h3>
      <div className="comments-list">
        {comments.map(comment => (
          <div key={comment.id} className="comment-item">
            <img src={comment.avatar} alt={comment.username} className="comment-avatar" />
            <div className="comment-body">
              <div className="comment-header">
                <span className="comment-username">{comment.username}</span>
                <span className="comment-timestamp">{comment.timestamp}</span>
              </div>
              <p className="comment-text">{comment.text}</p>
            </div>
          </div>
        ))}
      </div>
      <form className="comment-form" onSubmit={handleSubmit}>
        <input
          type="text"
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          placeholder="Write a comment..."
          className="comment-input"
        />
        <button type="submit" className="comment-submit-btn">Post</button>
      </form>
    </div>
  )
}

export default Comments