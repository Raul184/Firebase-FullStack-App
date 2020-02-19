import React from 'react'
import { PageHeader } from 'antd'
import PostSnippet from './PostSnippet'
import api from '../mock_api.js'
import _ from 'lodash'
import uuid from 'uuid'

const Posts = () => {
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
          // subTitle="This is a subtitle"
        />
      </div>
      <div className="articles">
        {
          _.map(
            api , 
            el => <PostSnippet key={uuid()} id={el.id} {...el} />
          )
        }
      </div>
    </div>
  )
}


export default Posts;