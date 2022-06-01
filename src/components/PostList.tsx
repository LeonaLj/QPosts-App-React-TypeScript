import React, { useEffect } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { Post } from '../models/postModel'
import SinglePost from './SinglePost'
import { Greeting } from '../models/greetingModel'

interface Props {
    greeting: Greeting,
    posts: Post[]
}

const PostList: React.FC<Props> = ({ greeting, posts }) => {

    const componentName = "PostList"
    useEffect(() => {
        console.log(`${greeting.text} ${componentName}`)
    }, [])

    return (
        <Container>
            <Row>
                <Col>
                    {
                        posts.map(post => (
                            <SinglePost key={post.id} post={post} greeting={greeting} />
                        ))
                    }
                </Col>
            </Row>
        </Container>
    )
}

export default PostList