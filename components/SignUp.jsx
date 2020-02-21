import React , { useState } from 'react'
// Style comps.
import { PageHeader , Input , Button } from 'antd'
import { Link } from '@reach/router'
import { auth } from '../firebase'
// router
import { navigate } from '@reach/router'


const SignUp = () => {
  const [ email , setEmail ] = useState('')
  const [ password , setPassword ] = useState('')

  const onSignUp = e => {
    e.preventDefault()
    console.log('clicked');
    auth.createUserWithEmailAndPassword( email , password )
    .catch(
      error => {
        console.log(error.code , error.message)
        // NOTE: If error ==> Got to Clear Fields too,
      }
    )
    // Clear UI
    setEmail('')
    setPassword('')
    // redirect
    navigate('/posts')
  }
  return (
    <div style={{textAlign: 'center'}}>
      <div>
      <PageHeader
          style={{
            border: '1px solid rgb(235, 237, 240)',
          }}
          title='Sign Up'
      />
      </div>
      <div style={{ width: '40%' , margin: '2em auto' , textAlign: 'left'}}>
        <h2>Email</h2>
        <div>
          <Input 
            placeholder='Email' 
            value={email} 
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <h2>Password</h2>
        <div>
          <Input.Password 
            placeholder='Password' 
            value={password}
            onChange={(e) => setPassword(e.target.value)} 
          />
        </div>
      </div>
      <Button 
        type="primary"
        onClick={onSignUp}
      >
        Sign Up
      </Button>
      <small style={{ display: 'block' }}>
        <Link to='/login'>Already have an account? Sign In</Link>
      </small>
    </div>
  )
}


export default SignUp;