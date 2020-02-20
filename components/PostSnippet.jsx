import React from 'react'
import { Card } from 'antd'
import { Link } from '@reach/router'


const PostSnippet = ({ id , title , content }) => {
  console.log(id);
  return (
    <div className="PostSnippet">
      <Card
        style={{ marginTop: 16 }}
        type="inner"
        title={title}
        extra={<Link to={`/post/${id}`}>Read Full Article</Link>}
      >
        {content}
      </Card> 
    </div>  
  )
}


export default PostSnippet;