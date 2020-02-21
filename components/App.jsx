import React , { useState } from 'react'
import { Router , Link } from '@reach/router'
// Pages
import Posts from './Posts'
import Post from './Post'
import CreatePost from './CreatePost'
import UpdatePost from './UpdatePost'
import SignUp from './SignUp'
// Layout
import { Menu, Icon } from 'antd'
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

  const signUserOut = () => {
    auth.signOut().then(
      () => console.log('User out')
    )
    .catch( error => console.log(error.message))
  }
  return (
    <>
      <div className="App_nav">
      <Menu 
        mode="horizontal"
        style={{ marginBottom: '2em'}}
      >
        <Menu.Item key="mail">
          {
            user && <Link to='/create_post'>
              <Icon type="highlight" />
              Create a post
              </Link>
          }
        </Menu.Item>
        <Menu.Item key="app">
          <Link to='/posts'>
            <Icon type="read" />
            See all posts
          </Link>
        </Menu.Item>
        {
          !user ? <Link to='/login' style={{ float: 'right' }}>
            <Icon type="login" />
            Login
          </Link>
          : 
          <p onClick={signUserOut} style={{ margin: '0' , float: 'right' , pointer: 'cursor'}}>
          <Icon type="logout"  style={{ padding: '.5em' }} />
          Sign Out
        </p> 
        }
      </Menu>
      </div>      
      <Router>
        <SignUp path="/signup" default />
        <SignIn path="/login" />
        <Posts path="/posts" user={user}/>
        <Post path="/post/:id" />
        <CreatePost path="/create_post" />
        <UpdatePost path="/update_post/:id" />
      </Router>
      
    </>
  )
}

export default App;