import React, { useState, useEffect } from 'react'
import './SinglePost.css'
import { Link } from 'react-router-dom'
import { Post } from '../models/postModel'
import { User } from '../models/userModel'
import { Comment } from '../models/commentModel'
import CommentSection from './CommentSection'
import { Greeting } from '../models/greetingModel'

interface Props {
    greeting: Greeting,
    post: Post
}

const SinglePost: React.FC<Props> = ({ greeting, post }) => {

    const [comm, setComm] = useState<Comment[]>([])
    const [user, setUser] = useState<User>()

    const componentName = "SinglePost"
    useEffect(() => {
        console.log(`${greeting.text} ${componentName}`)
    }, [])

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/comments?postId=${post.id}`)
            .then(response => response.json())
            .then(commentdata => {
                console.log(commentdata)
                setComm(commentdata)
            })
    }, [])

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/users?id=${post.userId}`)
            .then(response => response.json())
            .then(userdata => {
                console.log(userdata)
                setUser(userdata[0])
            })
    }, [])

    const name = user === undefined ? "" : user.name

    return (
        <div>
            <div className='post-preview'>
                <Link to={`/posts/${post.id}`} className="post-link">
                    <h3>{post.title}</h3>
                    <p>Written by {name}</p>
                </Link>

                {
                    comm.map(comment => (
                        <CommentSection comment={comment}
                            key={comment.id}
                            greeting={greeting}
                        />
                    ))
                }
            </div>
        </div >
    )
}

export default SinglePost