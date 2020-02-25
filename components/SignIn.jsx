import React , { useState } from 'react'
// Style comps.
import { PageHeader , Input , Button } from 'antd'
import { Link } from '@reach/router'
// back
import { auth } from '../firebase'
import { navigate } from '@reach/router'

const SignIn = () => {
  const [ email , setEmail ] = useState('')
  const [ password , setPassword ] = useState('')

  const onLogin = e => {
    e.preventDefault()
    console.log('clicked');
    auth.signInWithEmailAndPassword( email , password )
    .then(
      () => console.log('User signed in')
    )
    .catch(
      error => console.log(error.code , error.message)
    )
    // Clear UI
    setEmail('')
    setPassword('')
    // redirect
    navigate('/blogs/${uid}/posts')
  }
  return (
    <div style={{textAlign: 'center'}}>
      <div>
      <PageHeader
          style={{
            border: '1px solid rgb(235, 237, 240)',
          }}
          title='Sign In'
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
        onClick={onLogin}
      >
        Sign In
      </Button>
      <small style={{ display: 'block' }}>
        <Link to='/signup'>Don't have an account? Sign Up</Link>
      </small>
    </div>
  )
}


export default SignIn;