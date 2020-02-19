import React from 'react'
import Posts from './Posts'
import Post from './Post'
import { Router } from '@reach/router'


const App = () => {
  return (
    <>
      <Router>
        <Posts default />
        <Post path="/post/:id" />
      </Router>
      
    </>
  )
}

export default App;