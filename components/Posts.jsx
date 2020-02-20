import React , { useEffect , useState } from 'react'
// Style comps.
import { PageHeader } from 'antd'
// Comps.
import PostSnippet from './PostSnippet'
// Data manip.
import _ from 'lodash'
import uuid from 'uuid'
// db
import db from '../firebase'

const Posts = () => {
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
  const routes = [
    {
      path: 'index',
      breadcrumbName: 'Daily',
    },
    {
      path: 'first',
      breadcrumbName: 'Weekly',
    },
    {
      path: 'second',
      breadcrumbName: 'Monthly',
    },
  ];

  return (
    <div className='Posts'>
      <div className="header">
        <PageHeader
          style={{
            border: '1px solid rgb(235, 237, 240)',
          }}
          title="Posts"
          breadcrumb={{ routes }}
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
                title={ el.title}
                content={ el.content} 
              />
            }
          )
        }
      </div>
    </div>
  )
}


export default Posts;