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
    db.collection('posts').get()
    .then( doc => {
      doc.forEach( 
        post => {
          let data = post.data() 
          data.id = post.id
        
          let payload = { ...data }
          setPosts( posts => [ ...posts , payload ])
        }
      )
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
  user: PropTypes.object.isRequired,
}

export default Posts;