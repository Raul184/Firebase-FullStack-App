import React from 'react'
// Layout
import { Menu, Icon } from 'antd'
import { Link } from '@reach/router'


const Nav = ({user}) => {
  // Log Out users
  const signUserOut = () => {
    auth.signOut().then(
      () => console.log('User out')
    )
    .catch( error => console.log(error.message))
  }

  return (
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
          {
            user && <Link to={`/blogs/${user.uid}/posts`}>
            <Icon type="read" />
            See all posts
          </Link> 
          }
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
  )
}

export default Nav;