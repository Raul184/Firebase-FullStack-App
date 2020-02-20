import React from 'react'
import { Card } from 'antd'
import { Link } from '@reach/router'


const PostSnippet = ({ id , title , content }) => {
  return (
    <div className="PostSnippet">
      <Card
        style={{ marginTop: 16 }}
        type="inner"
        title={title}
        extra={
          <div>
            <Link style={{ marginRight: '15px' }} to={`/post/${id}`}>Read Full Article</Link>
            <Link to={`/update_post/${id}`}>Edit</Link>
          </div>
        }
      >
        {content}
      </Card> 
    </div>  
  )
}


export default PostSnippet;