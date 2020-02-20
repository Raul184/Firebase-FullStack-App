import React , { useState } from 'react'
// Style comps.
import { PageHeader , Input , Button } from 'antd'
const { TextArea } = Input
// db
import db from '../firebase'


const CreatePost = () => {
  const [ title , setTitle ] = useState('')
  const [ content , setContent ] = useState('')


  const onSubmit = e => {
    e.preventDefault()
    
  }
  return (
    <div className="CreatePost">
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
            placeholder="title"
            onChange={e => { setContent(e.target.value)}}
            value={content} 
          />
        </div>
        <div style={{ margin: '1em' }}>
          <Button 
            type="primary"
            style={{ float: 'right'}}
            onClick={onSubmit}
          >
            Guardar
          </Button>
        </div>
      </div>
    </div>
  )
}


export default CreatePost;