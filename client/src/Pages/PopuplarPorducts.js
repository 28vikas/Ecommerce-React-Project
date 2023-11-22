import React from "react";
import "./PopularProducts.css";
import { useEffect, useState } from 'react';
import axios from 'axios';




const PopularProducts = ({ addToCart }) => {

  const [product, setProduct] = useState([]);

  useEffect(() => {
    axios.get('https://dummyjson.com/products').then((res) => {
      setProduct(res.data.products);
    });
  }, []);


  return (
    <div className="popular-container">
      <h1>Popular Products</h1>
      <div className="popular-img">

      {product.slice(5, 9).map((item) => (
          <div key={item.id} className="popular-img-content">
            <img src={item.images[0]} alt="" style={{ width: '100%', height: '200px' }}/>
            <p>{item.title}</p>
            <p>Price: {item.price}</p>
            <button onClick={() => addToCart(item)}>Add to cart</button>

          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularProducts;
