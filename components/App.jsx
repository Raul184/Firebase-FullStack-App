import React , { useState } from 'react'
import { Router } from '@reach/router'
// Pages
import Posts from './Posts'
import Post from './Post'
import CreatePost from './CreatePost'
import UpdatePost from './UpdatePost'
import SignUp from './SignUp'
//Nav
import Nav from './Nav'
import SignIn from './SignIn'
// backend
import { auth } from '../firebase'


const App = () => {
  // Auth Routing
  const [ user , setUser ] = useState(false)
  auth.onAuthStateChanged( user => {
    if(user){
      console.log('User signed in' , user);
      setUser(user)
    }
    else {
      console.log('User Not Signed In');
    }
  })

  return (
    <>
      <Nav user={user} />
      <Router>
        <SignIn path="/login" default />
        <SignUp path="/signup" />
        <Posts path="/blogs/:uid/posts" user={user} />
        <Post path="/blogs/:uid/post/:id" user={user}/>
        <CreatePost path="/create_post" user={user} />
        <UpdatePost path="/update_post/:id" user={user} />
      </Router>
      
    </>
  )
}

export default App;