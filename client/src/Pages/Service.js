import React from 'react'
import "./service.css"
import { FaShippingFast } from 'react-icons/fa';
import { BsCurrencyRupee } from 'react-icons/bs';
import {AiFillIdcard } from 'react-icons/ai';
import {BiSolidOffer,BiSupport } from 'react-icons/bi';

const Service = () => {
  return (
    <div className="additional-info">
    <div className="info-item">
      <FaShippingFast color='white' size={25}/>
      <p>Free Shipping</p>
    </div>
    <div className="info-item">
        <BiSolidOffer color='white' size={25}/>
      <p>Daily Surprising Offers</p>
    </div>
    <div className="info-item">
        <BiSupport color='white' size={25}/>
      <p>Support 24*7</p>
    </div>
    <div className="info-item">
        <AiFillIdcard color='white' size={25}/>
      <p>Secure Payment</p>
    </div>
    <div className="info-item">
        <BsCurrencyRupee color='white' size={25}/>
      <p>Affordable Prices</p>
    </div>
  </div>
  )
}

export default Service