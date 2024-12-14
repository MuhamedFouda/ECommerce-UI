import React from 'react'
import "./Footer.scss"
import img from '../../assets/R.png'
import { Facebook, Instagram, MailOutline, Payment, Phone, Pinterest, Room, Twitter } from '@mui/icons-material'
export default function Footer() {
  return (
    <div className='footer'>
      <div className="left">
        <h1>LUMIA.</h1>
        <p>
          There are many varitations of passages of lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomisted words which don't look even slightly believable
        </p>
        <div className='social'>
          <Facebook style={{width:'40px',height:'40px',borderRadius:'50%',color:'white',backgroundColor:"3B5999",marginRight:'20px'}}/>
          <Instagram style={{width:'40px',height:'40px',borderRadius:'50%',color:'white',backgroundColor:"E4405F",marginRight:'20px'}}/>
          <Twitter style={{width:'40px',height:'40px',borderRadius:'50%',color:'white',backgroundColor:"55ACEE",marginRight:'20px'}}/>
          <Pinterest style={{width:'40px',height:'40px',borderRadius:'50%',color:'white',backgroundColor:"E60023",marginRight:'20px'}}/>
        </div>
      </div>
      <div className="middle">
        <h3>Useful Links</h3>
        <ul>
          <li>Home</li>
          <li>Cart</li>
          <li>Man Fashion</li>
          <li>Woman Fashion</li>
          <li>Accessories</li>
          <li>My Account</li>
          <li>Order Tracking</li>
          <li>Wishlist</li>
          <li>Terms</li>
        </ul>
      </div>
      <div className="right">
        <h3>Contact</h3>
        <div className="conactItem">
          <Room/><p>622 Dixie Path , South Tobinchester 98336</p>
        </div>
        <div className="conactItem">
          <Phone/> <p>+1 234 56 78</p>
        </div>
        <div className="conactItem">
          <MailOutline/> <p>contact@lumia.dev</p>
        </div>
        <img src={img}/>
      </div>
    </div>
  )
}
