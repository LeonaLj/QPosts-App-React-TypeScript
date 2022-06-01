import React, { useState, useEffect } from 'react'
import PostList from './PostList'
import { Post } from '../models/postModel'
import SearchInput from './SearchInput'
import { Greeting } from '../models/greetingModel'

interface Props {
    greeting: Greeting,
}

const Posts: React.FC<Props> = ({ greeting }) => {

    const [posts, setPosts] = useState<Post[]>([])

    const componentName = "Posts"
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts?_limit=30')
            .then(response => response.json())
            .then(data => {
                console.log(data)
                setPosts(data)
            })
        console.log(`${greeting.text} ${componentName}`)
    }, [])


    return (
        <>
            <SearchInput posts={posts} greeting={greeting} />
            {posts && <PostList greeting={greeting} posts={posts} />}
        </>
    )
}

export default Posts