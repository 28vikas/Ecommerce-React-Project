import React, { useEffect, useState } from 'react';
import './Home.css';
import Slider from './Slider/Slider';
import PopuplarPorducts from './PopuplarPorducts';
import Service from './Service';


const Home = ({addToCart}) => {
 

  return (
    <div >
      <Slider/>
       <Service/>
      <PopuplarPorducts addToCart={addToCart}/>
    </div>
  );
};

export default Home;
