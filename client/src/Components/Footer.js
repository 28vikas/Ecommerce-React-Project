import React from 'react'
import "./Footer.css"
import { AiFillTwitterCircle,AiFillInstagram,AiFillLinkedin} from 'react-icons/ai';
import {BsFacebook } from 'react-icons/bs';

const Footer = () => {
  return (
    <div className='footer-main'>
        <div className='footer-grid'>
            <div className='footer-item'>
                <h2>Company</h2>
                <p>Our Service</p>
                <p>Privacy Policy</p>
                <p>Affiliate Program</p>
            </div>
            <div className='footer-item'>
                <h2>Get Help</h2>
                <p>FAQ</p>
                <p>Shipping</p>
                <p>Returns</p>
                <p>Order Status</p>
                <p>Payment Options</p>
            </div>
            <div className='footer-item'>
                <h2>Online Shop</h2>
                <p>Watch</p>
                <p>Bag</p>
                <p>Shoes</p> 
                <p>Dress</p> 
            </div>
            <div className='footer-item'>
                <h2>Follow Us</h2>
                <div className='footer-icon'>
                <p><BsFacebook/></p>
                <p><AiFillTwitterCircle/></p>
                <p><AiFillInstagram/></p>
                <p><AiFillLinkedin/></p>
                </div>
              
            </div>

        </div>
        

    </div>
  )
}

export default Footer