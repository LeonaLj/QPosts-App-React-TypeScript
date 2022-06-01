import React, { useEffect, useState } from 'react'
import './SearchInput.css'
import { Container, Row, Col, InputGroup, FormControl } from 'react-bootstrap'
import { Post } from '../models/postModel'
import { Greeting } from '../models/greetingModel'
import SearchResults from './SearchResults'

interface Props {
    greeting: Greeting,
    posts: Post[]
}

const SearchInput: React.FC<Props> = ({ greeting, posts }) => {

    const [input, setInput] = useState<string>("")
    const [focus, setFocus] = useState(false);

    const componentName = "SearchInput"
    useEffect(() => {
        console.log(`${greeting.text} ${componentName}`)
    }, [])

    return (
        <Container>
            <Row className='search-div'>
                <Col sm={12} md={4} className="input-field">
                    <InputGroup size="lg">
                        <FormControl
                            className='input'
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            placeholder='Find post...'
                            onFocus={() => setFocus(true)}
                            type="text"
                        />
                    </InputGroup>
                </Col>

                <Col className='found-post-body' sm={12} md={8}>
                    {focus ?
                        <SearchResults input={input} posts={posts} greeting={greeting} />
                        : null
                    }
                </Col>
            </Row>
        </Container >
    )
}

export default SearchInput