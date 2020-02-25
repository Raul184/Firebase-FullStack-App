import React , { useState , useEffect } from 'react'
// Style comps.
import { PageHeader , Input , Button } from 'antd'
const { TextArea } = Input
// db
import db from '../firebase'
// router
import { navigate } from '@reach/router'


const UpdatePost = ({ id , user: { uid } }) => {  
  const [ title , setTitle ] = useState('')
  const [ content , setContent ] = useState('')

  useEffect(() => {
    let postRef = db.collection('users').doc(uid).collection('posts').doc(id)

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

  const onEdit = e => {
    e.preventDefault()
    if(title.length > 0 && content.length > 0){
      // Attach
      const payload = {
        title ,
        content
      }
      // Save
      db.collection('users').doc(uid).collection('posts').doc(id).update(payload)
      .then(
        doc => console.log('Updated')
      )
      // Clean UI
      setTitle('')
      setContent('')
    }
    navigate('/posts')
  }
  return (
    <div className="UpdatePost">
      <div className="header">
        <PageHeader
          style={{
            border: '1px solid rgb(235, 237, 240)',
          }}
          title='Create Post'
        />
      </div>
      <div className="post_inputs" style={{ margin: "1.5em" }}>
        <h2>Post Title</h2>    
        <div style={{ margin: '1em'}}>
          <Input
            placeholder="title"   
            allowClear
            onChange={e => { setTitle(e.target.value)}}
            value={title}
          />
        </div>
        <h2>Post Content</h2>
        <div style={{ margin: '1em'}}>
          <TextArea
            rows={10}
            allowClear  
            placeholder="..."
            onChange={e => { setContent(e.target.value)}}
            value={content} 
          />
        </div>
        <div style={{ margin: '1em' }}>
          <Button 
            type="primary"
            style={{ float: 'right'}}
            onClick={onEdit}
          >
            Editar
          </Button>
          <Button 
            type="primary"
            style={{ float: 'left'}}
            onClick={() => navigate('/posts')}
          >
            Volver
          </Button>
        </div>
      </div>
    </div>
  )
}


export default UpdatePost;