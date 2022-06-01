import React, { useEffect } from 'react'
import './SearchResult.css'
import { Link } from 'react-router-dom'
import { Post } from '../models/postModel'
import { Greeting } from '../models/greetingModel'

interface Props {
    input: string
    greeting: Greeting,
    posts: Post[]
}

const SearchResults: React.FC<Props> = ({ input, greeting, posts }) => {

    const componentName = "SearchResults"
    useEffect(() => {
        console.log(`${greeting.text} ${componentName}`)
    }, [])

    return (
        <div>
            {posts.filter((post) => {
                if (input === '') {
                    return post;
                } else if (post.title.toLowerCase().includes(input.toLowerCase())) {
                    return post;
                }
            }).map((post) => (
                <div className="found-post" key={post.id}>
                    <Link to={`/posts/${post.id}`} className="post-link">
                        <p>{post.title}</p>
                    </Link>
                </div>
            ))
            }
        </div>
    )
}

export default SearchResults