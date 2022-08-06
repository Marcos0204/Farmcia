import React, { useState } from 'react'
import { signInWithEmailAndPassword } from "firebase/auth";
import './login.css'

import  { auth } from '../../../firebase'

const Login = () => {

  const [ email, setEmail ] = useState('')
  const [ password, setPassword ] = useState('')

  const halendSubmit = (e) =>{
    e.preventDefault()
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user)
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage)
      });
  }

  return (
    <div className='container-flex'>

      <form className="container" onSubmit={halendSubmit}>
        <input type='text' placeholder='Email' onChange={(e) => setEmail(e.target.value) } />
        <input type='text' placeholder='Contraseña' onChange={(e) => setPassword(e.target.value) }  />
        <input type='submit' className='button' />
      </form>
    </div>
  )
}

export default Login
