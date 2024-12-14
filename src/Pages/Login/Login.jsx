import React from 'react'
import './Login.scss'
export default function Login() {
  return (
    <div className='loginContainer'>
         <div className="loginWrapper">
            <h1>CREATE AN ACCOUNT</h1>
            <form>
                <input placeholder="user name"/>
                <input placeholder="password"/>
                <button>LOGIN</button>
                <a href='#'>DO NOT YOU REMEMBER THE PASSWORD?</a>
                <a href='#'>CREATE A NEW ACCOUNT</a>
            </form>
        </div>
    </div>
  )
}
