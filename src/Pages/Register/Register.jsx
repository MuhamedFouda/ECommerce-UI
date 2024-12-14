import React from 'react'
import './Register.scss'
export default function Register() {
  return (
    <div className='registerContainer'>
        <div className="registerWrapper">
            <h1>CREATE AN ACCOUNT</h1>
            <form>
            <input placeholder="name"/>
                <input placeholder="last name"/>
                <input placeholder="user name"/>
                <input placeholder="email"/>
                <input placeholder="password"/>
                <input placeholder="confirm password"/>
                <span>By creating an account, I consent to the processing of my personal dta in accordance with the <b>PRIVACY POLICY</b></span>
                <button>CREATE</button>
            </form>
        </div>
      
    </div>
  )
}
