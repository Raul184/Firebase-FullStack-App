import React from 'react'
import { Card } from 'antd'
import { Link } from '@reach/router'
// DB
import db from '../firebase'

const PostSnippet = ({ id , title , content , user }) => {
  const handleDelete = ( e , id) => {
    e.preventDefault()
    let postRef = db.collection('users').doc(user.uid).collection('posts').doc(id)
    postRef.delete()
  }
  return (
    <div className="PostSnippet">
      <Card
        style={{ marginTop: 16 }}
        type="inner"
        title={title}
        extra={
          <div>
            <Link style={{ marginRight: '15px' }} to={`/post/${id}`}>Read Full Article</Link>
            {
              user && <>
                <Link to={`/update_post/${id}`} style={{ marginRight: '15px' }}>
                  Edit
                </Link>
                <Link to='/#' onClick={ e => handleDelete(e , id)}>Delete</Link>
              </>
            }
          </div>
        }
      >
        {content}
      </Card> 
    </div>  
  )
}


export default PostSnippet;