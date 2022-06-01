import React, { useEffect } from 'react'
import './PostDetails.css'
import { Container, Row, Col } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import { Post } from '../models/postModel'
import { Greeting } from '../models/greetingModel'
import PostBody from './PostBody'

interface Props {
    greeting: Greeting,
    posts: Post[]
    setPosts: React.Dispatch<React.SetStateAction<Post[]>>
}

const PostDetails: React.FC<Props> = ({ greeting, posts, setPosts }) => {

    const { id } = useParams()

    const componentName = "PostDetails"
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts/' + id)
            .then(response => response.json())
            .then(data => {
                console.log(data)
                setPosts([data])
            })
        console.log(`${greeting.text} ${componentName}`)
    }, [])

    return (
        <Container>
            <Row>
                <Col>
                    {posts.map((post) => (
                        <div key={post.id} className="post-details">
                            <PostBody greeting={greeting} post={post} />
                        </div>
                    ))}
                </Col>
            </Row>
        </Container>
    )
}

export default PostDetails