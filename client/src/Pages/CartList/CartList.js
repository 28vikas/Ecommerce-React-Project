
import React, { useEffect, useState } from 'react';
import './CartList.css';
import { NavLink } from 'react-router-dom';

const CartList = ({ cart, updateCart }) => {
  const [CART, setCART] = useState([]);
  const [showPaymentForm, setShowPaymentForm] = useState(false);
  const [paymentSuccess, setPaymentSuccess] = useState(false);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    setCART(cart);
    // Calculate the total price when the cart changes
    const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);
    setTotalPrice(totalPrice);
  }, [cart]);

  const handleDecrement = (cartIndex) => {
    // Decrease the quantity of an item in the cart and update the total price
    const updatedCART = CART.map((item, index) => {
      if (cartIndex === index) {
        if (item.quantity > 1) {
          const updatedItem = { ...item, quantity: item.quantity - 1 };
          setTotalPrice(totalPrice - item.price); // Reduce the price of the item
          return updatedItem;
        } else {
          return null;
        }
      } else {
        return item;
      }
    });

    const newCART = updatedCART.filter((item) => item !== null);
    setCART(newCART);
    updateCart(newCART);
  };

  const handleIncrement = (cartIndex) => {
    // Increase the quantity of an item in the cart and update the total price
    const updatedCART = CART.map((item, index) => {
      if (cartIndex === index) {
        const updatedItem = { ...item, quantity: item.quantity + 1 };
        setTotalPrice(totalPrice + item.price); // Increase the price of the item
        return updatedItem;
      } else {
        return item;
      }
    });

    setCART(updatedCART);
  };

  const handleCheckout = () => {
    setShowPaymentForm(true);
  };

  const handlePaymentSuccess = () => {
    setPaymentSuccess(true);
   
  };


  

  

  return (
    <div className="main-cart">
    {CART.length === 0 ? (
      <div className="cart-empty">
        <p className="cart-empty-para">Your Cart is Empty</p>
        <button className="cart-empty-btn">
          <NavLink to="/products" style={{ textDecoration: 'none', color: 'white' }}>
            Shop Now
          </NavLink>
        </button>
      </div>
    ) : (
      <>
        {CART.map((cartItem, cartIndex) => (
          <div className="cart-item" key={cartIndex}>
            <img src={cartItem.images[0]} alt={cartItem.title} className="cart-image" />
            <div className="cart-details">
              <span className="cart-name">{cartItem.title}</span>
              <div className="cart-quantity">
                <button className="cart-btn" onClick={() => handleDecrement(cartIndex)}>
                  -
                </button>
                <span>{cartItem.quantity}</span>
                <button className="cart-btn" onClick={() => handleIncrement(cartIndex)}>
                  +
                </button>
              </div>
              <span className="cart-price">Price: ₹ {cartItem.price * cartItem.quantity}</span>
            </div>
          </div>
        ))}
        {showPaymentForm ? (
       <div className="payment-form">
       <h2>Payment Information</h2>
       <form>
         <div className="form-group">
           <label htmlFor="cardNumber">Card Number</label>
           <input type="text" id="cardNumber" placeholder="1234 5678 9012 3456" />
         </div>
         <div className="form-group">
           <label htmlFor="cardName">Cardholder Name</label>
           <input type="text" id="cardName" placeholder="John Doe" />
         </div>
         <div className="form-group">
           <label htmlFor="expiryDate">Expiry Date</label>
           <input type="text" id="expiryDate" placeholder="MM/YY" />
         </div>
         <div className="form-group">
           <label htmlFor="cvv">CVV</label>
           <input type="text" id="cvv" placeholder="123" />
         </div>
         <button className="btn btn-primary" onClick={handlePaymentSuccess}>
           Pay Now
         </button>
       </form>
     </div>
        ) : (
          <div>
            <button className="btn btn-primary" onClick={handleCheckout}>
              Checkout
            </button>
            <p className="cart-total-price">Total Price: ₹ {totalPrice}</p>
          </div>
        )}
        {paymentSuccess && (
          <div className="payment-success-message">
            Payment Successful! Thank you for your purchase.
          </div>
        )}
      </>
    )}
  </div>
);
};

export default CartList;

