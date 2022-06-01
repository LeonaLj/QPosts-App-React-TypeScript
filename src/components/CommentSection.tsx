import React, { useEffect } from 'react'
import './CommentSection.css'
import { Comment } from '../models/commentModel'
import { Greeting } from '../models/greetingModel'

interface Props {
  greeting: Greeting,
  comment: Comment
}

const CommentSection: React.FC<Props> = ({ greeting, comment }) => {

  const componentName = "CommentSection"
  useEffect(() => {
    console.log(`${greeting.text} ${componentName}`)
  }, [])

  return (
    <div>

      <div className='comment-list'>
        <p>Comment by <span>{comment.email}</span></p>
        <h6>{comment.name}</h6>
      </div>

    </div>
  )
}

export default CommentSection