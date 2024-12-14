import React from 'react'
import "./Newsletter.scss"
import { Send } from '@mui/icons-material'
export default function Newsletter() {
    return (
        <div className='newstellerContainer'>
            <h1>Newsletter</h1>
            <div className="description">
                Get timely updates from your favorite products
            </div>
            <div className="inputContainer">
                <input placeholder='Your Email' />
                <button>
                    <Send />
                </button>
            </div>


        </div>
    )
}
