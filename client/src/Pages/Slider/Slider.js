import React, { useState, useEffect } from 'react';
import './Slider.css';
import img1 from '../../assests/sliderimg/img1.jpg';
import img2 from '../../assests/sliderimg/img2.jpg';
import img3 from '../../assests/sliderimg/img3.jpg';
import { BsArrowLeftCircleFill } from 'react-icons/bs';
import { BsFillArrowRightCircleFill } from 'react-icons/bs';
import { NavLink } from 'react-router-dom';

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const ImgData = [img1, img2, img3];

  const prevSlide = () => {
    setCurrentSlide((currentSlide === 0) ? 2 : (currentSlide - 1));
  }

  const nextSlide = () => {
    setCurrentSlide((currentSlide === 2) ? 0 : (currentSlide + 1));
  }

  useEffect(() => {
    const slideInterval = setInterval(() => {
      nextSlide();
    }, 3000);

    // Clear the interval when the component unmounts to prevent memory leaks.
    return () => clearInterval(slideInterval);
  }, [currentSlide]);

  return (
    <div className='slider'>
      <div className='slider-container'>
        {ImgData.map((img, index) => (
          <div className='slider-img' style={{ transform: `translateX(-${currentSlide * 100}%)` }} key={index}>
            <img src={img} alt='' style={{opacity:"50%"}}/>
          </div>
        ))}
      </div>
      <div className='slider-icon'>
        <div className='left-icon' onClick={prevSlide}>
          <BsArrowLeftCircleFill size={30} color='white' />
        </div>
        <div className='right-icon' onClick={nextSlide}>
          <BsFillArrowRightCircleFill size={30} color='white' />
        </div>
      </div>
      <div className='slider-text'>
        <p style={{color:"white"}}>Unlock </p>
          <p className='para' style={{color:"white"}}>Your Style</p>
        <p style={{color:"white"}}>we are here with revolution shopping experience</p>
        <p style={{color:"white"}}>Lets pay with digital currency</p>
      <button className='slider-btn'><NavLink  to="/products"
              style={{ textDecoration: "none", color: "white" }}>Shop Now</NavLink></button>
      </div>
    </div>
  );
}

export default Slider;
