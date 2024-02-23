import React from 'react'
// import 

function Login() {
  return (
    <fieldset>
    <div>
      
        <h1> Login from</h1>
        <span>Enter your email address : </span>
        <input  type='text' placeholder='enter your text'/>
        <br/>
        <br/>
        <span>Enter your password : </span>
        <input  type='password' placeholder='enter your password'/>
        <br/> 
        <br/>
        <div className='Shalini'>
           <button className='btn'>Login</button>
        </div>

    </div>
    </fieldset>
  )
}

export default Login
