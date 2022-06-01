import React, { useState } from 'react';
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import Navigation from './components/Navigation';
import Posts from './components/Posts';
import PostDetails from './components/PostDetails';
import Home from './components/Home';
import { Post } from './models/postModel'
import { Greeting } from './models/greetingModel';


function App() {

  const [posts, setPosts] = useState<Post[]>([])

  const greeting: Greeting = {
    text: "Hello from"
  }

  return (
    <div className="App">
      <BrowserRouter>
        <Navigation greeting={greeting} />
        <Routes>
          <Route path="/" element={<Home greeting={greeting} />} />
          <Route path="/posts" element={<Posts greeting={greeting} />} />
          <Route path="/posts/:id" element={<PostDetails greeting={greeting} posts={posts} setPosts={setPosts} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
