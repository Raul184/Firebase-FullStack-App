import React , { useState } from 'react'
import { Router , Link } from '@reach/router'
//Comps.
import Posts from './Posts'
import Post from './Post'
import CreatePost from './CreatePost'
import { Menu, Icon } from 'antd';



const App = () => {
  const [ current , setCurrent ] = useState('mail')
  const handleClick = e => setCurrent(e.key)
  
  return (
    <>
      <div className="App_nav">
      <Menu mode="horizontal">
        <Menu.Item key="mail">
          <Link to='/create_post'>
            <Icon type="highlight" />
            Create a post
          </Link>
        </Menu.Item>
        <Menu.Item key="app">
          <Link to='/posts'>
            <Icon type="read" />
            See all posts
          </Link>
        </Menu.Item>
      </Menu>
      </div>      
      <Router>
        <Posts path="/posts" default />
        <Post path="/post/:id" />
        <CreatePost path="/create_post" />
      </Router>
      
    </>
  )
}

export default App;