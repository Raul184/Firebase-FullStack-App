import React , { useEffect , useState } from 'react'
import PropTypes from 'prop-types'
// Style comps.
import { PageHeader } from 'antd'
// Comps.
import PostSnippet from './PostSnippet'
// Data manip.
import _ from 'lodash'
import uuid from 'uuid'
// db
import db from '../firebase'
import Post from './Post'

const Posts = ({ user }) => {
  const [ posts , setPosts ] = useState([])
  useEffect(() => {
    // Get Data
    db.collection('users').doc(user.uid).collection('posts')
    .onSnapshot( async posts => {
        const postData = await posts.docs.map( 
          post => {
            let data = post.data()
            const { id } = post;
            let payload = { id , ...data }
            return payload
          }
        )
        setPosts( postData )
      }
    )
  }, 
  [])
  
  return (
    <div className='Posts' style={{ margin: '1em 1.2em'}}>
      <div className="header" >
        <PageHeader
          style={{
            border: '1px solid rgb(235, 237, 240)',
          }}
          title="Posts"
        />
      </div>
      <div className="articles">
        {
          _.map(
            posts , 
            el => {
              return <PostSnippet 
                key={ uuid()} 
                id={ el.id}
                title={_.capitalize(el.title)}
                content={ el.content} 
                user={user}
              />
            }
          )
        }
      </div>
    </div>
  )
}

Post.propTypes = {
  user: PropTypes.object,
}

export default Posts;