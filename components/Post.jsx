import React , { useState , useEffect } from 'react'
import { PageHeader , Card } from 'antd'
import uuid from 'uuid'
import db from '../firebase'

const Post = ({ id }) => {
  const [ title , setTitle ] = useState('')
  const [ content , setContent ] = useState('')

  useEffect(() => {
    let postRef = db.collection('posts').doc(id)

    postRef.get()
    .then(
      doc => {
        const { title , content }  = doc.data();
        setTitle(title)
        setContent(content)
      }
    )
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