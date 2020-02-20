import React from 'react'
import { Router } from '@reach/router'
//Comps.
import Posts from './Posts'
import Post from './Post'
import CreatePost from './CreatePost'

const App = () => {
  return (
    <>
      <Router>
        <CreatePost default />
        <Posts path="/posts" />
        <Post path="/post/:id" />
      </Router>
      
    </>
  )
}

export default App;