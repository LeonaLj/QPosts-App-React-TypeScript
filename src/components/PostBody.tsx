import React, { useState, useEffect } from 'react'
import './PostBody.css'
import { Post } from '../models/postModel'
import { User } from '../models/userModel'
import { Comment } from '../models/commentModel'
import CommentSection from './CommentSection'
import { Greeting } from '../models/greetingModel'

interface Props {
    greeting: Greeting,
    post: Post
}

const PostBody: React.FC<Props> = ({ greeting, post }) => {

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
        <>
            <div className='post-body'>
                <h6>Written by <span>{name}</span></h6>
                <h1>{post.title}</h1>
                <p>{post.body}</p>
            </div>
            <div className='post-body-comments'>
                {
                    comm.map(comment => (
                        <CommentSection
                            key={comment.id}
                            comment={comment}
                            greeting={greeting}
                        />
                    ))
                }
            </div>
        </>
    )
}

export default PostBody