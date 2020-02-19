import React , { useState , useEffect } from 'react'
import { PageHeader , Card } from 'antd'
import uuid from 'uuid'
import api from '../mock_api'


const Post = ({ id }) => {
  const [ data , setData ] = useState({
    title: '' ,
    content: ''
  });
  const { title , content } = data;

  useEffect(() => {
    let post = api[id]
    setData({
      ...data , 
      title: post.title ,
      content: post.content
    })
  }, 
  [])
  return (
    <div className="Post">
      <div className="header">
        <PageHeader
          style={{
            border: '1px solid rgb(235, 237, 240)',
          }}
          title={title}
        />
      </div>
      <div className="post-content">
        <Card style={{ marginTop: '20px' }}>
          {
            content.split('\n').map( el => <p key={uuid()}>{el}</p> )
          }
        </Card>
      </div>
    </div>
  )
}


export default Post